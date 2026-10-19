"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionLayer() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    // Section headings subtle entrance
    const headings = document.querySelectorAll("section h2, footer h2");
    headings.forEach((h) => {
      gsap.from(h, {
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: h,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Cards subtle entrance on scroll without pre-hiding content
    const cardGroups = [
      "#about .editorial-card",
      "#projects .editorial-card",
      "#ai-workflow .editorial-card",
    ];

    cardGroups.forEach((selector) => {
      const cards = document.querySelectorAll(selector);
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 16,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
