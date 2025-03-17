import {
  CarouseButtonNext,
  CarouseButtonPrevious,
  Carousel,
  CarouselAnimateToggleButton,
  CarouseMenu,
  CarouseSlideContainer,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import type { FC } from "react";

const IMAGES = [
  "/blocks/services/services-1.jpg",
  "/blocks/services/services-2.jpg",
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-4.jpg",
  "/blocks/services/services-5.jpg",
  "/blocks/services/services-6.jpg",
];

export const CarouselImages: FC = () => {
  /*
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const { currentIndex } = useContext(CarouselIndexStateContext);
*/

  return (
    <div className="List-stack">
      <div className="Carousel-containerFade">
        <Carousel viewCount={1} className="Carousel Carousel--type-gallery" loop>
          <CarouseSlideContainer>
            {IMAGES.map((img, i) => (
              <li className="Carousel-slideItem Carousel-slideGalleryItem" key={i}>
                <Image src={img} alt="" width={875} height={500} className="Carousel-slideImage" />
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
                <Image src={img} alt="" width={875} height={500} className="Content-image" />
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
            <li className="Carousel-slideItem Carousel-slideGalleryItem" key={i}>
              <Image src={img} alt="" width={875} height={500} className="Carousel-slideImage" />
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
                <Image src={img} alt="" width={875} height={500} className="Content-image" />
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

      {/* <div className="Carousel-example">
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
      </div>*/}
    </div>
  );
};
