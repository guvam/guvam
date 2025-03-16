import {
  CarouseButtonNext,
  CarouseButtonPrevious,
  Carousel,
  CarouseMenu,
  CarouseTrack,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";

const IMAGES = [
  "/blocks/carousel/carousel_1.jpg",
  "/blocks/carousel/carousel_2.jpg",
  "/blocks/carousel/carousel_3.jpg",
  "/blocks/carousel/carousel_4.jpg",
  "/blocks/carousel/carousel_5.jpg",
  "/blocks/carousel/carousel_6.jpg",
  "/blocks/carousel/carousel_4.jpg",
];

export const CarouselImages: FC = () => (
  <div className="List-stack">
    <div className="Carousel-containerFade">
      <Carousel viewCount={1} className="Carousel" loop>
        <CarouseTrack>
          {IMAGES.map((img, i) => (
            <li className="Carousel-slideItem" key={i}>
              <Image src={img} alt="" width={736} height={414} className="Carousel-slideImage" />
            </li>
          ))}
        </CarouseTrack>
        <CarouseButtonNext />
        <CarouseButtonPrevious />
        <CarouseMenu />
      </Carousel>
    </div>

    {/*<Carousel viewCount={4} className="Carousel--type-animated" animate>
      <CarouseTrack>
        {IMAGES.map((img, i) => (
          <li className="Carousel-slideItem" key={i}>
            <div className="Card">
              <Image src={img} alt="" width={736} height={414} className="Content-image" />
              <h3 className="Card-header">Heading 1</h3>
              <p className="Card-content">Here is the Content</p>
            </div>
          </li>
        ))}
      </CarouseTrack>
      <CarouseButtonNext />
      <CarouseButtonPrevious />
      <CarouseMenu />
    </Carousel>

    <Carousel viewCount={1} animate className="Carousel--type-animated">
      <CarouseTrack>
        {IMAGES.map((img, i) => (
          <li className="Carousel-slideItem" key={i}>
            <Image src={img} alt="" width={736} height={414} className="Carousel-slideImage" />
            <div className="Carousel-content">
              <h2 className="Content-heading1">Welcome to Our Website</h2>
              <p className="Content-titleDescription">Discover amazing features and services.</p>
            </div>
          </li>
        ))}
      </CarouseTrack>
      <CarouseButtonNext />
      <CarouseButtonPrevious />
      <CarouseMenu />
    </Carousel>

    <Carousel className="Carousel--type-gallery">
      <CarouseTrack>
        {IMAGES.map((img, i) => (
          <li className="Carousel-slideItem" key={i}>
            <div className="Card" key={i}>
              <Image src={img} alt="" width={736} height={414} className="Content-image" />
              <h2 className="Card-header">{`Heading (${i + 1} / ${IMAGES.length})`}</h2>
              <p className="Card-content">Here is the Content</p>
            </div>
          </li>
        ))}
      </CarouseTrack>
      <CarouseButtonNext />
      <CarouseButtonPrevious />
      <CarouseMenu />
    </Carousel>*/}
  </div>
);
