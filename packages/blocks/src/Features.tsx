import Image from "next/image";
import { Linkedin } from "react-bootstrap-icons";

export const Features = () => (
  <section>
    <hgroup className="Content Content--center">
      <a className="Content-titleInfo">Deploy faster</a>
      <h1 className="Content-heading1">A better workflow</h1>
      <p className="Content-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
        suscipit eaque, iste dolor cupiditate blanditiis ratione.
      </p>
    </hgroup>
    <ul>
      {[1, 2, 3].map((x) => (
        <li key={x}>
          <Linkedin />
          <b className="Content--bold">Functionalities of Linkedin.</b>
          <p className="Content-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </li>
      ))}
    </ul>
    <Image
      className="Features-fadingImage"
      src="/blocks/products/product-dark.png"
      alt="Placeholder"
      width={1465}
      height={902}
    />
  </section>
);

export const Features2 = () => (
  <section>
    <hgroup className="Content Content--center">
      <p className="Content-titleInfo">Deploy faster</p>
      <h2 className="Content-heading1">Everything you need to deploy your app</h2>
      <p className="Content-text">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
        elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </hgroup>
    <ul className="Grid">
      {[1, 2, 3, 4].map((x) => (
        <li key={x}>
          <Linkedin />
          <b className="Content--bold">Functionalities of Linkedin.</b>
          <p className="Content-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export const Features3 = () => (
  <section>
    <hgroup className="Content Content--center">
      <a className="Content-titleInfo">Deploy faster</a>
      <h1 className="Content-heading1">Everything you need to deploy your app</h1>
      <p className="Content-text">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a
        elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </hgroup>
    <Image
      className="Features-fadingImage"
      src="/blocks/products/product-dark.png"
      alt="Placeholder"
      width={1465}
      height={902}
    />
    <ul className="Grid">
      {[1, 2, 3, 4, 5, 6].map((x) => (
        <li key={x}>
          <Linkedin />
          <b className="Content--bold">Functionalities of Linkedin.</b>
          <p className="Content-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </li>
      ))}
    </ul>
  </section>
);

export const Features4 = () => (
  <section>
    <hgroup className="Content Content--center">
      <h1 className="Content-heading1">Everything you need to deploy your app</h1>
    </hgroup>
    <Image
      className="Features-fadingImage"
      src="/blocks/products/product-dark.png"
      alt="Placeholder"
      width={1465}
      height={902}
    />
  </section>
);
