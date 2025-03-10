import "./components/Carousel.css";

import Image from "next/image";
import type { FC } from "react";

import { Carousel } from "./components/Carousel";

export const CarouselImages: FC = () => (
  <Carousel count={3}>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_2.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_6.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_4.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_5.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_6.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_4.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_2.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_6.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_4.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_5.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_6.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
    <div className="Carousel-trackItem">
      <Image
        src="/blocks/carousel/carousel_4.jpg"
        alt=""
        width={736}
        height={414}
        className="Carousel-trackImage"
      />
    </div>
  </Carousel>
);
