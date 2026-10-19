'use client';

// Client-side Video Cache Manager & Service Worker Registration
const CACHE_NAME = 'portfolio-media-v1';

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('[Cache] Service Worker registered with scope:', reg.scope);
        })
        .catch((err) => {
          console.warn('[Cache] Service Worker registration failed:', err);
        });
    });
  }
}

export async function isVideoCached(url: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) return false;
  try {
    const cache = await caches.open(CACHE_NAME);
    const match = await cache.match(url);
    return !!match;
  } catch {
    return false;
  }
}

export async function prefetchVideo(url: string): Promise<void> {
  if (typeof window === 'undefined' || !('caches' in window)) return;
  try {
    const cache = await caches.open(CACHE_NAME);
    const match = await cache.match(url);
    if (!match) {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
      }
    }
  } catch (err) {
    console.warn('[Cache] Prefetch error for:', url, err);
  }
}
