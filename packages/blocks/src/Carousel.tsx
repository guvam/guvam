import { Carousel } from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";

export const CarouselImages: FC = () => (
  <div className="List-stack">
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
    <Carousel count={1} type="animated" autoScroll autoScrollInterval={4000}>
      <div className="Carousel-trackItem">
        <Image
          src="/blocks/carousel/carousel_2.jpg"
          alt=""
          width={736}
          height={414}
          className="Carousel-trackImage"
        />
        <div className="Carousel-content">
          <h1 className="Content-heading1">Welcome to Our Website</h1>
          <p className="Content-titleDescription">Discover amazing features and services.</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <Image
          src="/blocks/carousel/carousel_6.jpg"
          alt=""
          width={736}
          height={414}
          className="Carousel-trackImage"
        />
        <div className="Carousel-content">
          <h1 className="Content-heading1">This is Fantastic</h1>
          <p className="Content-titleDescription">Discover amazing features and services.</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <Image
          src="/blocks/carousel/carousel_4.jpg"
          alt=""
          width={736}
          height={414}
          className="Carousel-trackImage"
        />
        <div className="Carousel-content">
          <h1 className="Content-heading1">And Smooth as can be</h1>
          <p className="Content-titleDescription">Discover amazing features and services.</p>
        </div>
      </div>
    </Carousel>
  </div>
);
