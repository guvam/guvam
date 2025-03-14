import CarouselAlt from "@guvam/components/dist/CarouselAlt";
import { Carousel } from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";

export const CarouselImages: FC = () => (
  <div className="List-stack">
    <Carousel count={1}>
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
    <Carousel hideNav count={3} scrollAmount={3}>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_1.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_2.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_3.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_4.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_5.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-exampleContainer">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_6.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
    </Carousel>
    <Carousel hideSides count={1} type="animated" autoScroll autoScrollInterval={4000}>
      <div className="Carousel-trackItem">
        <Image
          src="/blocks/carousel/carousel_3.jpg"
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
    <Carousel type="gallery" hideNav={true} loop={false}>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_1.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_2.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_3.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_4.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_5.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_6.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_3.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
    </Carousel>
    <CarouselAlt>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_1.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_2.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_3.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_4.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
      <div className="Carousel-trackItem">
        <div className="Card">
          <Image
            src="/blocks/carousel/carousel_5.jpg"
            alt=""
            width={736}
            height={414}
            className="Content-image"
          />
          <h3 className="Card-header">Heading 1</h3>
          <p className="Card-content">Here is the Content</p>
        </div>
      </div>
    </CarouselAlt>
  </div>
);
