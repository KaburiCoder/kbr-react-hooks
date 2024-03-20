"use client";
import { useEffect } from "react";

export default function useMobileVh() {
  useEffect(() => {
    function setScreenHeight() {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setScreenHeight();

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);
}
