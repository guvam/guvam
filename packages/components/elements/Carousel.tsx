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
  type?: "default" | "animated" | "gallery";
  hideSides?: boolean;
  hideNav?: boolean;
  scrollAmount?: number;
  scrollTime?: number;
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
  scrollTime = 600,
}) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [items, setItems] = useState(children);
  const maxIndex = children.length - count;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to track when items leave the viewport
  useEffect(() => {
    if (type !== "gallery" || !trackRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            const itemIndex = Array.from(trackRef.current!.children).indexOf(item);

            if (entry.boundingClientRect.left < 0) {
              // Item left the left side of the viewport, move it to the end
              setItems((prev) => {
                const newItems = [...prev];
                const [removed] = newItems.splice(itemIndex, 1);
                newItems.push(removed);
                return newItems;
              });
            } else if (entry.boundingClientRect.right > window.innerWidth) {
              // Item left the right side of the viewport, move it to the beginning
              setItems((prev) => {
                const newItems = [...prev];
                const [removed] = newItems.splice(itemIndex, 1);
                newItems.unshift(removed);
                return newItems;
              });
            }
          }
        });
      },
      {
        root: trackRef.current,
        threshold: 0.1,
      }
    );

    // Observe all items in the track
    Array.from(trackRef.current.children).forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [type, items]);

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
    <div className="Carousel-galleryWrapper">
      <div
        className={classList({
          Carousel: type === "default",
          "Carousel--type-animated": type === "animated",
          "Carousel--type-gallery": type === "gallery",
        })}
        style={
          {
            "--Carousel-viewCount": count,
            "--Carousel-slideCount": children.length,
            "--Carousel-currentIndex": currentIndex,
            "--Carousel-scrollTime": autoScrollInterval + "ms",
            "--Carousel-scrollDuration": scrollTime + "ms",
          } as never
        }
      >
        <div className="Carousel-track" ref={trackRef}>
          {Children.map(items, (element, i) =>
            cloneElement(element, {
              className: classList({
                [element.props.className]: true,
                "Carousel-trackItem--active": currentIndex === i,
                "Carousel-trackItem--next":
                  (type === "animated" || type === "gallery") && currentIndex + 1 === i,
                "Carousel-trackItem--previous":
                  (type === "animated" || type === "gallery") && currentIndex - 1 === i,
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
    </div>
  );
};
