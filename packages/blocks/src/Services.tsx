import Image from "next/image";

const Images = [
  "/blocks/services/services-1.jpg",
  "/blocks/services/services-2.jpg",
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-4.jpg",
  "/blocks/services/services-5.jpg",
  "/blocks/services/services-6.jpg",
];

export const ServicesGrid = () => (
  <section className="List-stack" style={{ alignItems: "center", gap: "3rem" }}>
    <hgroup className="Content Content--center" style={{ maxWidth: "600px" }}>
      <h2 className="Content-heading2">Services</h2>
      <p className="Content-text">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam .
      </p>
    </hgroup>

    <ul className="Grid" style={{ "--Grid-count": 3 } as never}>
      {[0, 1, 2, 3, 4, 5].map((x) => (
        <li key={x} className="Card">
          <Image
            src={Images[x]}
            alt="services 1"
            className="Card-HeaderImage Card-HeaderImage--fixedHeight"
            width={500}
            height={300}
          />
          <article className="Card-content Content">
            <p className="List Util--gap-2">
              <b className="Badge Badge--outline">development</b>
              <b className="Badge Badge--outline">UI/UX</b>
              <b className="Badge Badge--outline">design</b>
            </p>
            <time className="Content-text">Jan 16, 2025</time>

            <h3 className="Content-heading4">Boost your conversion Rate</h3>
            <p className="Content-text">
              Use these Tailwind CSS blog section examples to promote interesting content from your
              company blog or content universe throughout your website. These examples are designed
              and built by the Tailwind CSS team, and include a variety of different styles and
              layouts.
            </p>

            {/*<div className="List">
            <div className="Avatar">
              <Image
                className="Avatar-image"
                src="/blocks/avatars/avatar-2.jpg"
                alt="Profile Image of Jane Doe"
                width={36}
                height={36}
              />
            </div>
            <div>
              <p>Jane Doe</p>
              <p>Co-Founder / CTO</p>
            </div>
          </div>*/}
            <button className="Button Button--type-muted">Case study</button>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
