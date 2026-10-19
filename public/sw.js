// Service Worker for Video and Asset Caching
// Handles Cache Storage + Range Requests (HTTP 206) for smooth seeking and replay
const CACHE_NAME = 'portfolio-media-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Intercept video and thumbnail requests
  if (url.pathname.startsWith('/videos/') || url.pathname.startsWith('/thumbnails/')) {
    event.respondWith(handleMediaFetch(event.request));
  }
});

async function handleMediaFetch(request) {
  const cache = await caches.open(CACHE_NAME);
  const rangeHeader = request.headers.get('range');

  // Strip range from cache key lookup
  const cleanUrl = request.url;
  const cachedResponse = await cache.match(cleanUrl);

  if (cachedResponse) {
    if (!rangeHeader) {
      return cachedResponse;
    }
    return createPartialResponse(cachedResponse, rangeHeader);
  }

  // Not in cache, fetch from network
  try {
    // Fetch full resource for caching
    const networkResponse = await fetch(request);

    // If it's a 200 OK response, clone to cache
    if (networkResponse.status === 200) {
      cache.put(cleanUrl, networkResponse.clone());
    }

    return networkResponse;
  } catch (err) {
    // If offline and not in cache, bubble up error
    return new Response('Network error or media unavailable', { status: 504 });
  }
}

async function createPartialResponse(response, rangeHeader) {
  const buffer = await response.arrayBuffer();
  const total = buffer.byteLength;

  // Parse Range header (e.g., "bytes=0-1000" or "bytes=500-")
  const matches = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
  if (!matches) {
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'video/mp4',
        'Content-Length': total.toString(),
        'Accept-Ranges': 'bytes',
      },
    });
  }

  const start = parseInt(matches[1], 10);
  const end = matches[2] ? parseInt(matches[2], 10) : total - 1;

  if (start >= total || end >= total || start > end) {
    return new Response(null, {
      status: 416,
      headers: {
        'Content-Range': `bytes */${total}`,
      },
    });
  }

  const sliced = buffer.slice(start, end + 1);

  return new Response(sliced, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': sliced.byteLength.toString(),
      'Content-Type': response.headers.get('Content-Type') || 'video/mp4',
      'X-Served-By': 'ServiceWorker-Cache',
    },
  });
}
