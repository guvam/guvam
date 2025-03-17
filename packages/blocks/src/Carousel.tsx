"use client";

import {
  CarouseButtonNext,
  CarouseButtonPrevious,
  Carousel,
  CarouselAnimateToggleButton,
  CarouselIndexStateContext,
  CarouseMenu,
  CarouseSlideContainer,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";
import { useContext } from "react";
import { useState } from "react";

const IMAGES = [
  "/blocks/carousel/carousel_1.jpg",
  "/blocks/carousel/carousel_2.jpg",
  "/blocks/carousel/carousel_3.jpg",
  "/blocks/carousel/carousel_4.jpg",
  "/blocks/carousel/carousel_5.jpg",
  "/blocks/carousel/carousel_6.jpg",
  "/blocks/carousel/carousel_4.jpg",
];

export const CarouselImages: FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { currentIndex } = useContext(CarouselIndexStateContext);

  return (
    <div className="List-stack">
      <div className="Carousel-containerFade">
        <Carousel viewCount={1} className="Carousel Carousel--type-gallery">
          <CarouseSlideContainer>
            {IMAGES.map((img, i) => (
              <li className="Carousel-slideItem Carousel-slideGalleryItem" key={i}>
                <Image src={img} alt="" width={736} height={414} className="Carousel-slideImage" />
              </li>
            ))}
          </CarouseSlideContainer>
          <CarouseButtonNext />
          <CarouseButtonPrevious />
          <CarouselAnimateToggleButton />
          <CarouseMenu />
        </Carousel>
      </div>

      <Carousel viewCount={2} className="Carousel Carousel--type-clip" animate loop>
        <CarouseSlideContainer>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <div className="Card Carousel-exampleCard">
                <Image src={img} alt="" width={736} height={414} className="Content-image" />
                <h3 className="Card-header">Heading 1</h3>
                <p className="Card-content">Here is the Content</p>
              </div>
            </li>
          ))}
        </CarouseSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>

      <Carousel viewCount={1} animate className="Carousel">
        <CarouseSlideContainer>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <Image src={img} alt="" width={736} height={414} className="Carousel-slideImage" />
              <div className="Carousel-content">
                <h2 className="Content-heading1">Welcome to Our Website</h2>
                <p className="Content-titleDescription">Discover amazing features and services.</p>
              </div>
            </li>
          ))}
        </CarouseSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>

      <Carousel className="Carousel Carousel--type-clip" loop>
        <CarouseSlideContainer>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <div className="Card" key={i}>
                <Image src={img} alt="" width={736} height={414} className="Content-image" />
                <h2 className="Card-header">{`Heading (${i + 1} / ${IMAGES.length})`}</h2>
                <p className="Card-content">Here is the Content</p>
              </div>
            </li>
          ))}
        </CarouseSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>

      <div className="Carousel-example">
        <div className="Carousel-exampleContent">
          <div className="Carousel-exampleImage">
            {selectedImageIndex !== null ? (
              <Image
                src={IMAGES[selectedImageIndex]}
                alt=""
                width={736}
                height={414}
                className="Carousel-slideImage"
              />
            ) : (
              <Image
                src={IMAGES[currentIndex]}
                alt=""
                width={736}
                height={414}
                className="Carousel-slideImage"
              />
            )}
          </div>
        </div>
        <div className="Carousel-exampleContainer">
          <Carousel viewCount={3} className="Carousel Carousel--type-clip">
            <CarouseSlideContainer>
              {IMAGES.map((img, i) => (
                <li
                  className="Carousel-slideItem"
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  onMouseOver={() => setSelectedImageIndex(i)}
                >
                  <Image
                    src={img}
                    alt=""
                    width={736}
                    height={414}
                    className="Carousel-slideImage"
                  />
                </li>
              ))}
            </CarouseSlideContainer>
            <CarouseButtonNext />
            <CarouseButtonPrevious />
          </Carousel>
        </div>
      </div>
      <Carousel viewCount={2} className="Carousel Carousel--type-clip" loop>
        <CarouseSlideContainer>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header"></h3>
              <p className="Unique-contact">Number: 123 456 789</p>
              <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Unique-button">Check out The List</button>
                <button className="Unique-button">Learn More</button>
              </div>
            </div>
            <div>
              <Image width={1} height={1} alt="abba" src="" />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header"></h3>
              <p className="Unique-contact">Number: 123 456 789</p>
              <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Unique-button">Check out The List</button>
                <button className="Unique-button">Learn More</button>
              </div>
            </div>
            <div>
              <Image width={1} height={1} alt="abba" src="" />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header"></h3>
              <p className="Unique-contact">Number: 123 456 789</p>
              <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Unique-button">Check out The List</button>
                <button className="Unique-button">Learn More</button>
              </div>
            </div>
            <div>
              <Image width={1} height={1} alt="abba" src="" />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header"></h3>
              <p className="Unique-contact">Number: 123 456 789</p>
              <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Unique-button">Check out The List</button>
                <button className="Unique-button">Learn More</button>
              </div>
            </div>
            <div>
              <Image width={1} height={1} alt="abba" src="" />
            </div>
          </div>
        </CarouseSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu className="List-stack" />
      </Carousel>
    </div>
  );
};
