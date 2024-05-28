"use client";

import React, { useEffect } from "react";

let scheduledAnimationFrame = false;
const onScroll = () => {
  const aboutEl = document.getElementById("about");
  const footerShadow = document.getElementById("footer-shadow");
  const aboutElOpacity = Math.max(
    (window.innerHeight - 2.2 * window.scrollY) / window.innerHeight,
    0.2
  );
  if (aboutEl) {
    aboutEl.style.opacity = `${aboutElOpacity}`;
  }
  if (footerShadow) {
    footerShadow.style.opacity = `${1 - aboutElOpacity}`;
  }
  scheduledAnimationFrame = false;
};

const animateRows = () => {
  const animatedRowsFound = Array.from(
    document.querySelectorAll("[data-animated-row]")
  );
  animatedRowsFound.forEach((el, index) => {
    const accelerationFactor =
      (animatedRowsFound.length - index * 0.5) / animatedRowsFound.length;
    const animationDelay = 300 * (index + 1) * accelerationFactor;
    (el as HTMLSpanElement).style.animationDelay = `${animationDelay}ms`;
  });
};

export function Scripts() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scheduledAnimationFrame) {
        return;
      }

      scheduledAnimationFrame = true;
      requestAnimationFrame(onScroll);
    });
  }, []);

  useEffect(() => {
    animateRows();
  }, []);

  return <React.Fragment />;
}
