"use client";

import "./Carousel.css";

import {
  CarouseButtonNext,
  CarouseButtonPrevious,
  Carousel,
  CarouselAnimateToggleButton,
  CarouselIndexStateContext,
  CarouselSlideContainer,
  CarouseMenu,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";
import { useContext, useState } from "react";

const IMAGES = [
  "/blocks/services/services-1.jpg",
  "/blocks/services/services-2.jpg",
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-4.jpg",
  "/blocks/services/services-5.jpg",
  "/blocks/services/services-6.jpg",
];

export const CarouselImages: FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { currentIndex } = useContext(CarouselIndexStateContext);

  return (
    <div className="List-stack">
      <div className="Carousel-containerFade">
        <Carousel viewCount={1} className="Carousel Carousel--type-gallery" loop>
          <CarouselSlideContainer clip={false}>
            {IMAGES.map((img, i) => (
              <li className="Carousel-slideItem Carousel-slideGalleryItem" key={i}>
                <Image src={img} alt="" width={875} height={500} className="Carousel-slideImage" />
              </li>
            ))}
          </CarouselSlideContainer>
          <CarouseButtonNext />
          <CarouseButtonPrevious />
          <CarouselAnimateToggleButton />
          <CarouseMenu />
        </Carousel>
      </div>

      <Carousel viewCount={2} className="Carousel" animate loop>
        <CarouselSlideContainer>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <div className="Card Carousel-exampleCard">
                <Image src={img} alt="" width={875} height={500} className="Content-image" />
                <h3 className="Card-header">Heading 1</h3>
                <p className="Card-content">Here is the Content</p>
              </div>
            </li>
          ))}
        </CarouselSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>

    <Carousel viewCount={1} animate className="Carousel">
        <CarouselSlideContainer clip={false}>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem Carousel-slideGalleryItem" key={i}>
              <Image src={img} alt="" width={875} height={500} className="Carousel-slideImage" />
              <div className="Carousel-content">
                <h2 className="Content-heading1">Welcome to Our Website</h2>
                <p className="Content-titleDescription">Discover amazing features and services.</p>
              </div>
            </li>
          ))}
        </CarouselSlideContainer>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>

      <Carousel className="Carousel Carousel--type-clip" loop>
        <CarouselSlideContainer>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <div className="Card" key={i}>
                <Image src={img} alt="" width={875} height={500} className="Content-image" />
                <h2 className="Card-header">{`Heading (${i + 1} / ${IMAGES.length})`}</h2>
                <p className="Card-content">Here is the Content</p>
              </div>
            </li>
          ))}
        </CarouselSlideContainer>
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
            <CarouselSlideContainer>
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
            </CarouselSlideContainer>
            <CarouseButtonNext />
            <CarouseButtonPrevious />
          </Carousel>
        </div>
      </div>

      <Carousel viewCount={1} className="Carousel Carousel--type-clip">
        <CarouselSlideContainer className="Carousel-slideContent--fade">
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header">The Most Unique Designs</h3>
              <div>
                <p className="Unique-contact">Number: 123 456 789</p>
                <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              </div>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Button Button--type-muted">Check out The List</button>
                <button className="Button">Learn More</button>
              </div>
            </div>
            <div>
              <Image
                src="/blocks/services/services-1.jpg"
                alt=""
                width={875}
                height={500}
                className="Carousel-slideImage"
              />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header">Explore Your Full Creative Potential</h3>
              <div>
                <p className="Unique-contact">Number: 123 456 789</p>
                <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              </div>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Button Button--type-muted">Check out The List</button>
                <button className="Button">Learn More</button>
              </div>
            </div>
            <div>
              <Image
                src="/blocks/services/services-2.jpg"
                alt=""
                width={875}
                height={500}
                className="Carousel-slideImage"
              />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header"> Stand Out In The Internet</h3>
              <div>
                <p className="Unique-contact">Number: 123 456 789</p>
                <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              </div>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Button Button--type-muted">Check out The List</button>
                <button className="Button">Learn More</button>
              </div>
            </div>
            <div>
              <Image
                src="/blocks/services/services-3.jpg"
                alt=""
                width={875}
                height={500}
                className="Carousel-slideImage"
              />
            </div>
          </div>
          <div className="Unique-display">
            <div className="Unique-content">
              <h3 className="Unique-header">Customize To Your Hearts Desire</h3>
              <div>
                <p className="Unique-contact">Number: 123 456 789</p>
                <p className="Unique-contact">Email: Jane.Doe@gmail.com</p>
              </div>
              <p className="Unique-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="List">
                <button className="Button Button--type-muted">Check out The List</button>
                <button className="Button">Learn More</button>
              </div>
            </div>
            <div className="Unique-image">
              <Image
                src="/blocks/services/services-4.jpg"
                alt=""
                width={875}
                height={500}
                className="Carousel-slideImage"
              />
            </div>
          </div>
        </CarouselSlideContainer>
        <CarouseButtonNext className="Carousel-button Carousel-centeredbtn--next" />
        <CarouseButtonPrevious className="Carousel-button Carousel-centeredbtn--previous" />
        <CarouseMenu classname="Carousel-menu--vertical" />
      </Carousel>
    </div>
  );
};
