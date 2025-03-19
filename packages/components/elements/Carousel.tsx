"use client";

import { classList } from "@guvam/components";
import type { FC, JSX, ReactElement, ReactNode } from "react";
import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight, PauseFill, PlayFill } from "react-bootstrap-icons";

import type { ContextType, TagProps } from "./utils/TagCreate";
import { TagCreate } from "./utils/TagCreate";

type CarouselCommandType =
  | "carousel:slidecontainer"
  | "carousel:pause"
  | "carousel:next"
  | "carousel:previous"
  | "carousel:menu";

export const CarouselContext = createContext<ContextType<CarouselCommandType>>({});

export const CarouselIndexStateContext = createContext<{
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}>({
  currentIndex: 0,
  setCurrentIndex: () => null,
});

export const CarouselSlideCountStateContext = createContext<{
  slideCount: number | null;
  setSlideCount: (index: number) => void;
}>({
  slideCount: 0,
  setSlideCount: () => null,
});

export const CarouselAnimateStateContext = createContext<{
  animate: boolean;
  setAnimate: (value: boolean) => void;
}>({
  animate: false,
  setAnimate: () => null,
});

interface CarouselProps {
  children: ReactNode;
  className?: string;
  activeIndex?: number;
  viewCount?: number;
  animate?: boolean;
  loop?: boolean;
  animateTime?: number;
}

const clamp = (number: number, min: number, max: number) => Math.max(min, Math.min(number, max));

export const Carousel: FC<CarouselProps> = ({
  children,
  className = "Carousel",
  viewCount = 1,
  activeIndex = 0,
  loop = false,
  animate: initialAnimate = false,
  animateTime = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex);
  const [slideCount, setSlideCount] = useState<number | null>(null);
  const [animate, setAnimate] = useState<boolean>(initialAnimate);
  const animateRef = useRef<NodeJS.Timeout | null>(null);

  const updateIndex = useCallback(
    (i: number) => {
      if (slideCount) {
        setCurrentIndex(loop ? i : clamp(i, 0, slideCount - 1));
      }
    },
    [loop, slideCount]
  );

  useEffect(() => {
    if (animateRef.current) {
      clearTimeout(animateRef.current);
    }

    if (animate) {
      animateRef.current = setTimeout(() => {
        updateIndex(currentIndex + 1);
      }, animateTime);
    }

    return () => {
      if (animateRef.current) {
        clearTimeout(animateRef.current);
      }
    };
  }, [animate, animateTime, currentIndex, slideCount]);

  const indexContext = useMemo(
    () => ({
      currentIndex,
      setCurrentIndex: updateIndex,
    }),
    [currentIndex, updateIndex]
  );

  const slideContext = useMemo(
    () => ({
      slideCount,
      setSlideCount,
    }),
    [slideCount, setSlideCount]
  );

  const animateContext = useMemo(
    () => ({
      animate,
      setAnimate,
    }),
    [animate]
  );

  return (
    <CarouselIndexStateContext.Provider value={indexContext}>
      <CarouselSlideCountStateContext.Provider value={slideContext}>
        <CarouselAnimateStateContext.Provider value={animateContext}>
          <div
            className={className}
            style={
              {
                "--Carousel-activeIndex": currentIndex,
                "--Carousel-viewCount": viewCount,
                "--Carousel-slideCount": slideCount,
                "--Carousel-scrollTime": `${animateTime}ms`,
              } as never
            }
          >
            {children}
          </div>
        </CarouselAnimateStateContext.Provider>
      </CarouselSlideCountStateContext.Provider>
    </CarouselIndexStateContext.Provider>
  );
};

export const CarouselTag = <T extends keyof JSX.IntrinsicElements>({
  tag,
  command,
  ...props
}: TagProps<T, CarouselCommandType>) => (
  // TODO: FIX typing
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <TagCreate<CarouselCommandType, T>
    context={CarouselContext}
    tag={tag}
    command={command}
    {...props}
  />
);

export const CarouselAnimateToggleButton: FC = () => {
  const { animate, setAnimate } = useContext(CarouselAnimateStateContext);

  return (
    <button
      className="Carousel-button Carousel-button--animate"
      onClick={() => setAnimate(!animate)}
    >
      {animate ? <PauseFill /> : <PlayFill />}
    </button>
  );
};

interface CarouseButtonProps {
  slideAmount?: number;
}

export const CarouseButtonPrevious: FC<CarouseButtonProps> = ({ slideAmount = 1 }) => {
  const { currentIndex, setCurrentIndex } = useContext(CarouselIndexStateContext);

  return (
    <CarouselTag
      tag="button"
      command="carousel:previous"
      className="Carousel-button Carousel-button--previous"
      onClick={() => setCurrentIndex(currentIndex - slideAmount)}
    >
      <ChevronLeft />
    </CarouselTag>
  );
};

export const CarouseButtonNext: FC<CarouseButtonProps> = ({ slideAmount = 1 }) => {
  const { currentIndex, setCurrentIndex } = useContext(CarouselIndexStateContext);

  return (
    <CarouselTag
      tag="button"
      command="carousel:next"
      className="Carousel-button Carousel-button--next"
      onClick={() => setCurrentIndex(currentIndex + slideAmount)}
    >
      <ChevronRight />
    </CarouselTag>
  );
};

export const CarouseMenu: FC = () => {
  const { currentIndex, setCurrentIndex } = useContext(CarouselIndexStateContext);
  const { slideCount } = useContext(CarouselSlideCountStateContext);

  const activeIndex = slideCount ? currentIndex % slideCount : 0;

  return (
    <CarouselTag tag="menu" command="carousel:menu" className="Carousel-menu">
      {[...Array(slideCount)].map((_, i) => (
        <li key={i}>
          <button
            className={classList({
              "Carousel-menuItem": true,
              "Carousel-menuItem--active": i === activeIndex,
            })}
            onClick={() => setCurrentIndex(i)}
          />
        </li>
      ))}
    </CarouselTag>
  );
};

export const CarouseSlideContainer: FC<{ children: ReactElement<HTMLElement>[] }> = ({
  children,
}) => {
  const { setSlideCount } = useContext(CarouselSlideCountStateContext);
  const { currentIndex } = useContext(CarouselIndexStateContext);
  const [activeIndex, setActiveIndex] = useState<number>(currentIndex);
  const [stopIndex, setStopIndex] = useState<number | null>(null);

  useEffect(() => {
    setSlideCount(children.length);
  }, []);

  useEffect(() => {
    const count = children.length;
    const directionRight =
      currentIndex > activeIndex || (currentIndex === 0 && activeIndex === count - 1);

    if (directionRight) {
      const move = Math.floor(count / 2);
      const stop = (count + currentIndex - 1 - move) % count;
      setStopIndex(stop);
    } else {
      const move = Math.ceil(count / 2);
      const stop = (count + currentIndex + move) % count;
      setStopIndex(stop);
    }

    setActiveIndex(currentIndex);
  }, [currentIndex]);

  return (
    <CarouselTag tag="ul" command="carousel:slidecontainer" className="Carousel-slideContainer">
      {Children.map(children, (element, i) =>
        cloneElement(element, {
          className: classList({
            [element.props.className]: true,
            "Carousel-slideItem--previous":
              (children.length + activeIndex - 1) % children.length === i,
            "Carousel-slideItem--active": (children.length + activeIndex) % children.length === i,
            "Carousel-slideItem--next": (children.length + activeIndex + 1) % children.length === i,
            "Carousel-slideItem--stop": stopIndex === i,
          }),
          style: {
            "--Carousel-slideItemIndex": i,
          } as never,
        })
      )}
    </CarouselTag>
  );
};
