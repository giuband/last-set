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
  const animateList = (list: Element[]) => {
    list.forEach((el, index) => {
      const accelerationFactor = (list.length - index * 0.5) / list.length;
      const animationDelay = 300 * (index + 1) * accelerationFactor;
      (el as HTMLSpanElement).style.animationDelay = `${animationDelay}ms`;
    });
  };
  const animatedRowsFound = Array.from(
    document.querySelectorAll("[data-animated-row]")
  );
  const animatedRowsSmallFound = Array.from(
    document.querySelectorAll("[data-animated-row-sm]")
  );
  animateList(animatedRowsFound);
  animateList(animatedRowsSmallFound);
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
