"use client";

import { useEffect } from "react";

const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("opacity-100", "translate-y-0");
            target.classList.remove("opacity-0", "translate-y-20");
          } else {
            target.classList.remove("opacity-100", "translate-y-0");
            target.classList.add("opacity-0", "translate-y-20");
          }
        });
      },
      { threshold: 0 },
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll(
        ".intersection-fade-in:not([data-observed])",
      );
      elements.forEach((element) => {
        element.setAttribute("data-observed", "true");
        observer.observe(element);
      });
    };

    // Initial observation
    observeNewElements();

    // Watch for DOM changes efficiently
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldObserve = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          shouldObserve = true;
        }
      });

      if (shouldObserve) {
        // Small delay to ensure DOM is settled
        setTimeout(observeNewElements, 50);
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

const RootAnimation = ({ children }) => {
  useIntersectionObserver();
  return <div>{children}</div>;
};

export default RootAnimation;
