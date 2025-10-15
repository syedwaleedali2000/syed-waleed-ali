"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursor || !cursorInner) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: "power2.out" });
      gsap.to(cursorInner, { scale: 0.6, duration: 0.3, ease: "power2.out" });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(cursorInner, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverEls = document.querySelectorAll("a, button, .hoverable");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed top-0 left-0 w-4 h-4 border-2 bg-[#ffffff42] border-[#ffffff42] rounded-full pointer-events-none z-50 transform transition-transform"
      />
      <div
        ref={cursorInnerRef}
        className="hidden lg:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 transform"
      />
    </>
  );
}
