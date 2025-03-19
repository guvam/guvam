import Image from "next/image";
import { ArrowRight } from "react-bootstrap-icons";

export const HeroSimple = () => (
  <section className="Hero Gap2x">
    <hgroup className="Content">
      <h1 className="Title">
        Create Things to <span className="Content--highlight">Make</span> your things cooler
      </h1>
      <p className="Title-description">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam .
      </p>
    </hgroup>
    <div className="List">
      <button className="Button">Get Started</button>
      <button className="Button Button--type-text">
        Learn More <ArrowRight />
      </button>
    </div>
  </section>
);

export const HeroSplit = () => (
  <section className="Hero">
    <div className="Grid" style={{ "--Grid-count": 3 } as never}>
      <hgroup className="Content List-stack Grid--span-2">
        <div>
          <h1 className="Badge Badge--outline">Create</h1>
        </div>
        <h1 className="Title">Increase Your Customers Loyalty and Satisfaction</h1>
        <p className="Title-description">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="List">
          <button className="Button">Get Started</button>
          <button className="Button Button--type-text">
            Learn More <ArrowRight />
          </button>
        </div>
      </hgroup>

      <Image
        className="Hero-image"
        src="/blocks/products/product-screenshot.jpg"
        alt="Placeholder"
        width={1465}
        height={902}
      />
    </div>
  </section>
);

export const Hero3 = () => (
  <section className="Hero">
    <div className="GridTwo">
      <hgroup className="Content">
        <h1 className="Title">Create Things to Make your Things even Cooler</h1>
        <p className="Title-description">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="List">
          <button className="Button">Get Started</button>
          <button className="Button Button--type-text">
            Learn More <ArrowRight />
          </button>
        </div>
      </hgroup>
      <Image
        className="Features-fadingImage"
        src="/blocks/products/product-screenshot.jpg"
        alt="Placeholder"
        width={1465}
        height={902}
      />
    </div>
  </section>
);
