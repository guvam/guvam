import Image from "next/image";
import type { FC } from "react";

const Images = [
  "/blocks/services/services-1.jpg",
  "/blocks/services/services-2.jpg",
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-4.jpg",
  "/blocks/services/services-5.jpg",
  "/blocks/services/services-6.jpg",
];

export const Portfolio: FC = () => (
  <section className="List-stack Util--gap-5" style={{ alignItems: "center" }}>
    <hgroup className="Content Util--center" style={{ maxWidth: "600px" }}>
      <h2>Featured works</h2>
      <p>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam .
      </p>
    </hgroup>

    <ul className="List-stack  Util--gap-4">
      {[0, 1, 2, 3, 4, 5].map((x) => (
        <li key={x} className="Grid" style={{ "--Grid-count": 3 } as never}>
          <Image
            src={Images[x]}
            alt="services 1"
            className="Card-HeaderImage "
            width={500}
            height={300}
          />
          <article className="Grid--span-2 Card-content Content">
            <time>Jan 16, 2025</time>

            <h4>Boost your conversion Rate</h4>
            <p>
              Use these Tailwind CSS blog section examples to promote interesting content from your
              company blog or content universe throughout your website. These examples are designed
              and built by the Tailwind CSS team, and include a variety of different styles and
              layouts.
            </p>

            <button className="Button Button--type-muted">Case study</button>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
