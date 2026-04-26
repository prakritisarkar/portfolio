"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-[600px] h-[600px] pointer-events-none z-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      style={{
        background:
          "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
