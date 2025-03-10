"use client";

import type { FC, ReactElement } from "react";
import { cloneElement } from "react";
import { Children } from "react";
import { useCallback, useState } from "react";

import { classList } from "../../../../../guvam.com/packages/guvam.com/lib/utils/ClassList";

interface CarouselProps {
  children: ReactElement<HTMLElement>[];
  count?: number;
  index?: number;
  loop?: boolean;
}

export const Carousel: FC<CarouselProps> = ({ children, count = 1, index = 0, loop = false }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const updateIndex = useCallback(
    (i: number) => {
      let calcIndex = i;
      const maxIndex = children.length - count;

      if (i < 0) {
        calcIndex = loop ? maxIndex : 0;
      } else if (i > maxIndex) {
        calcIndex = loop ? 0 : maxIndex;
      }

      setCurrentIndex(calcIndex);
    },
    [children.length, count, loop]
  );

  return (
    <div
      className="Carousel"
      style={
        {
          "--Carousel-viewCount": count,
          "--Carousel-slideCount": children.length,
          "--Carousel-currentIndex": currentIndex,
        } as never
      }
    >
      <div className="Carousel-track">
        {Children.map(children, (element, i) =>
          cloneElement(element, {
            className: classList({
              [element.props.className]: true,
              "Carousel-trackItem--active": currentIndex === i,
            }),
          })
        )}
      </div>
      <button
        className="Carousel-button Carousel-button--previous"
        onClick={() => updateIndex(currentIndex - 1)}
      >
        &#10094;
      </button>
      <button
        className="Carousel-button Carousel-button--next"
        onClick={() => updateIndex(currentIndex + 1)}
      >
        &#10095;
      </button>
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
    </div>
  );
};
