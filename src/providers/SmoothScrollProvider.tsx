"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/utils/videoCache";

/**
 * SmoothScrollProvider
 * Handles native smooth scroll and Service Worker registration for persistent video caching.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return <>{children}</>;
}
