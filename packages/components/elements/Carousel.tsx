"use client";

import { classList } from "@guvam/components";
import type { FC, ReactElement } from "react";
import { Children, cloneElement, useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: ReactElement<HTMLElement>[];
  count?: number;
  index?: number;
  loop?: boolean;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  type?: "default" | "animated";
  hideSides?: boolean;
  hideNav?: boolean;
  scrollAmount?: number;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  count = 1,
  index = 0,
  loop = false,
  autoScroll = false,
  autoScrollInterval = 4000,
  type = "default",
  hideSides = false,
  hideNav = false,
  scrollAmount = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const maxIndex = children.length - count;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const restartAutoScroll = useCallback(() => {
    if (autoScroll && autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
      }, autoScrollInterval);
    }
  }, [autoScroll, autoScrollInterval, maxIndex]);

  const updateIndex = useCallback(
    (i: number) => {
      if (i < 0) {
        setCurrentIndex(loop ? maxIndex : 0);
      } else if (i > maxIndex) {
        setCurrentIndex(loop ? 0 : maxIndex);
      } else {
        setCurrentIndex(i);
      }

      restartAutoScroll();
    },
    [maxIndex, loop, restartAutoScroll]
  );

  const handleNext = useCallback(() => {
    updateIndex(currentIndex + scrollAmount);
  }, [currentIndex, scrollAmount, updateIndex]);

  const handlePrevious = useCallback(() => {
    updateIndex(currentIndex - scrollAmount);
  }, [currentIndex, scrollAmount, updateIndex]);

  useEffect(() => {
    if (!autoScroll) {
      return;
    }

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, autoScrollInterval);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScroll, autoScrollInterval, maxIndex]);

  return (
    <div
      className={classList({
        Carousel: true,
        "Carousel--type-animated": type === "animated",
      })}
      style={
        {
          "--Carousel-viewCount": count,
          "--Carousel-slideCount": children.length,
          "--Carousel-currentIndex": currentIndex,
          "--Carousel-scrollTime": autoScrollInterval + "ms",
        } as never
      }
    >
      <div className="Carousel-track">
        {Children.map(children, (element, i) =>
          cloneElement(element, {
            className: classList({
              [element.props.className]: true,
              "Carousel-trackItem--active": currentIndex === i,
              "Carousel-trackItem--next": type === "animated" && currentIndex + 1 === i,
              "Carousel-trackItem--previous": type === "animated" && currentIndex - 1 === i,
            }),
          })
        )}
      </div>

      {!hideSides && (
        <>
          <button className="Carousel-button Carousel-button--previous" onClick={handlePrevious}>
            &#10094;
          </button>
          <button className="Carousel-button Carousel-button--next" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}

      {!hideNav && (
        <nav className="Carousel-nav">
          {Array(children.length - count + 1)
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                className={classList({
                  "Carousel-navItem": true,
                  "Carousel-navItem--active": index === currentIndex,
                })}
                onClick={() => updateIndex(index)}
              />
            ))}
        </nav>
      )}
    </div>
  );
};
