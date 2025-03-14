"use client";

import type { ReactNode } from "react";
import React, { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
}

const CarouselAlt: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;

  // Handle next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  // Handle previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const getItemPosition = (index: number) => {
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;
    return (relativeIndex - 1) * 50;
  };

  return (
    <div className="Carousel">
      <div className="Carousel-galleryWrapper">
        <div className="Carousel-track CarouselAlt-track">
          {" "}
          {children.map((child, index) => {
            const position = getItemPosition(index);
            const isVisible = position >= 0 && position <= 100;

            return (
              <div
                key={index}
                className={`Carousel-trackItem ${isVisible ? "Carousel-trackItem--active" : ""}`}
                style={{
                  transform: `translateX(${position}%)`,
                  opacity: isVisible ? 1 : 0,
                  transition: `transform var(--Carousel-scrollDuration), opacity var(--Carousel-scrollDuration)`,
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      <button className="Carousel-button Carousel-button--previous" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="Carousel-button Carousel-button--next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default CarouselAlt;
