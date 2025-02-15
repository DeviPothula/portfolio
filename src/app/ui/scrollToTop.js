"use client";
import React, { useEffect, useState } from "react";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top-btn">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[31px]  md:bottom-[27px] right-5  text-2xl md:text-4xl  text-white  p-2"
        >
          ☝️
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
