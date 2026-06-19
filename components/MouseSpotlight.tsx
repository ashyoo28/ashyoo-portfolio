"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    // 초기 위치: 화면 중앙, translate 기준점 중심으로 맞춤
    gsap.set(spot, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(spot, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.0,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 size-[190px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255,220,180,0.75) 0%, rgba(255,190,130,0.45) 40%, transparent 70%)",
        mixBlendMode: "screen",
        zIndex: 10,
      }}
    />
  );
}
