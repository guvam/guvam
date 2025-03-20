import { ContactSplit } from "@guvam/blocks/src/Contact";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import { PricingTable } from "@guvam/blocks/src/Pricing";
import { Tabs, TabsContent, TabsWrapper } from "@guvam/components";
import {
  CarouseButtonNext,
  CarouseButtonPrevious,
  Carousel,
  CarouselAnimateToggleButton,
  CarouseMenu,
  CarouseSlideContainer,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircleFill } from "react-bootstrap-icons";

const IMAGES = [
  "/blocks/services/services-1.jpg",
  "/blocks/services/services-2.jpg",
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-4.jpg",
  "/blocks/services/services-5.jpg",
  "/blocks/services/services-6.jpg",
];

const avatars = [
  "/blocks/avatars/avatar-1.jpg",
  "/blocks/avatars/avatar-2.jpg",
  "/blocks/avatars/avatar-3.jpg",
  "/blocks/avatars/avatar-4.jpg",
  "/blocks/avatars/avatar-5.jpg",
  "/blocks/avatars/avatar-6.jpg",
  "/blocks/avatars/avatar-7.jpg",
  "/blocks/avatars/avatar-8.jpg",
];

const content = [
  {
    id: "bh",
    question: "Interested in Hunting Demons?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ah",
    question: "What's the best thing about Switzerland?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ch",
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "dh",
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
];

export default function Page() {
  return (
    <>
      <div className="Layout-sectionFull Layout-sectionHalf--filled">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <section className="Hero Gap2x">
              <hgroup className="Content Util--center">
                <h2 className="Title">
                  Create Things to <mark>Make your things cooler</mark>
                </h2>
                <p className="Title-description">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam .
                </p>
                <div className="List List--centered">
                  <button className="Button">Get Started</button>
                  <button className="Button Button--type-text">
                    Learn More <ArrowRight />
                  </button>
                </div>
              </hgroup>
              <div className="Carousel-containerFade">
                <Carousel viewCount={1} className="Carousel Carousel--type-clip" animate loop>
                  <CarouseSlideContainer>
                    {IMAGES.map((img, i) => (
                      <li className="Carousel-slideItem" key={i}>
                        <Image
                          src={img}
                          alt=""
                          width={875}
                          height={500}
                          className="Util-imageCover"
                        />
                      </li>
                    ))}
                  </CarouseSlideContainer>
                  <CarouselAnimateToggleButton />
                  <CarouseMenu />
                </Carousel>
              </div>
            </section>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <PartnersSimple />
        </div>
      </section>
      <div className="Layout-sectionFull Layout-sectionFull--filled">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <div className="List-stack">
              <hgroup className="Content Util--center">
                <h2 className="Title">
                  Create Things to <mark>Make your things cooler</mark>
                </h2>
                <TabsWrapper className="List-stack">
                  <Tabs className="List List--centered">
                    <button className="Button Button--type-text">Monitor your Progress</button>
                    <button className="Button Button--type-text">Work Efficiently</button>
                    <button className="Button Button--type-text">Have A Wide Selection</button>
                  </Tabs>

                  <TabsContent>
                    <div className="Components-container">
                      <section>
                        <div className="GridTwo">
                          <hgroup className="Content">
                            <h3 className="Title">Monitor your Progress</h3>
                            <p className="Title-description">
                              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                              cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
                            src="/blocks/services/services-1.jpg"
                            alt="Placeholder"
                            width={1465}
                            height={902}
                          />
                        </div>
                      </section>
                    </div>
                    <div className="Components-container">
                      <section>
                        <div className="GridTwo">
                          <hgroup className="Content">
                            <h3 className="Title">Work Efficiently With Our Help</h3>
                            <p className="Title-description">
                              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                              cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
                            src="/blocks/services/services-3.jpg"
                            alt="Placeholder"
                            width={1465}
                            height={902}
                          />
                        </div>
                      </section>
                    </div>
                    <div className="Components-container">
                      <section>
                        <div className="GridTwo">
                          <hgroup className="Content">
                            <h3 className="Title">Have A Wide Selection of Options</h3>
                            <p className="Title-description">
                              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                              cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
                            src="/blocks/services/services-4.jpg"
                            alt="Placeholder"
                            width={1465}
                            height={902}
                          />
                        </div>
                      </section>
                    </div>
                  </TabsContent>
                </TabsWrapper>
              </hgroup>
            </div>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <section className="List-stack">
            <hgroup className="Content Util--center">
              <h1>The Team</h1>
              <p>Lorem Ipsum is simply dummy text</p>
            </hgroup>
            <ul className="Grid Grid--column-4">
              {avatars.map((img, i) => (
                <li key={i} className="Content">
                  <img className="Util-image Team-Avatar" src={img} />
                  <p>
                    <b>Name Surname</b>
                  </p>
                  <p>Occupation</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Hero">
          <div className="GridTwo">
            <section className="List-stack" style={{ gap: "2rem" }}>
              <div className="List List--between">
                <div className="Title-info">Frequently asked questions</div>
                <a href="" className="Button Button--type-text">
                  View all
                </a>
              </div>

              <article className="Collapse-container">
                {content.map((item, i) => (
                  <details className="Collapse" name="faq-columns" key={item.id} open={i === 0}>
                    <summary className="Collapse-action">{item.question}</summary>
                    <div className="Collapse-contentBlock Content">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </article>
            </section>
            <Image
              className="Util-imageCover Util-imageCover--large"
              src="/blocks/products/product-screenshot.jpg"
              alt="Placeholder"
              width={1465}
              height={902}
            />
          </div>
        </div>
      </section>
      <div className="Layout-sectionFull Layout-sectionHalf--filled">
        <section className="Layout-section">
          <div className="Hero">
            <hgroup className="Content Util--center">
              <h2 className="Title">Welcome To The Agency</h2>
              <p className="Title-description">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam .
              </p>
            </hgroup>
            <Image
              src="/blocks/products/product-screenshot.jpg"
              alt=""
              width={875}
              height={500}
              className="Hero-image"
            />
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <section className="List-stack" style={{ alignItems: "center", gap: "3rem" }}>
            <hgroup className="Content Util--center" style={{ maxWidth: "600px" }}>
              <h2>Services</h2>
              <p>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam .
              </p>
            </hgroup>

            <ul className="Grid" style={{ "--Grid-count": 3 } as never}>
              {[0, 1, 2, 3, 4, 5].map((x) => (
                <li key={x} className="Card">
                  <Image
                    src={IMAGES[x]}
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
                    <time>Jan 16, 2025</time>

                    <h4>Boost your conversion Rate</h4>
                    <p>
                      Use these Tailwind CSS blog section examples to promote interesting content
                      from your company blog or content universe throughout your website. These
                      examples are designed and built by the Tailwind CSS team, and include a
                      variety of different styles and layouts.
                    </p>
                    <button className="Button Button--type-muted">Case study</button>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <div className="List-stack">
            <hgroup className="Content Util--center">
              <h2>Services</h2>
              <p>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam .
              </p>
            </hgroup>
            <ul className="List List--evenly">
              <div className="">
                <h2>Exuberant</h2>
                <ul className="List-stack">
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Organizing</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Supporting</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Developing</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Monitoring</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Scaling</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Marketing</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Exuberant</h2>
                <ul className="List-stack">
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Organizing</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Supporting</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Developing</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Monitoring</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Scaling</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Marketing</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Exuberant</h2>
                <ul className="List-stack">
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Organizing</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Supporting</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Developing</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Monitoring</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Scaling</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Marketing</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Exuberant</h2>
                <ul className="List-stack">
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Organizing</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Supporting</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Developing</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Monitoring</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Scaling</p>
                  </li>{" "}
                  <li className="List">
                    <CheckCircleFill />
                    <p className="Title-description">Marketing</p>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <section>
            <div className="GridTwo">
              <Image
                className="Features-fadingImage"
                src="/blocks/products/product-screenshot.jpg"
                alt="Placeholder"
                width={1465}
                height={902}
              />
              <hgroup className="Content">
                <h2 className="Title">Create Things to Make your Things even Cooler</h2>
                <p className="Title-description">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat.
                </p>
                <div className="List">
                  <button className="Button Button--type-text">
                    <ArrowLeft /> Learn More
                  </button>
                  <button className="Button">Get Started</button>
                </div>
              </hgroup>
            </div>
          </section>
        </div>
      </section>
      <div className="Layout-sectionFull Layout-sectionFull--filled">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <div className="Content Util--center">
              <h1>⧲⧲</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <Carousel viewCount={2} className="Carousel" animate loop>
            <CarouseSlideContainer>
              {IMAGES.map((img, i) => (
                <li className="Carousel-slideItem" key={i}>
                  <div className="Card Carousel-exampleCard">
                    <Image src={img} alt="" width={875} height={500} className="Util-image" />
                    <h3 className="Card-header">Heading 1</h3>
                    <p className="Card-content">Here is the Content</p>
                  </div>
                </li>
              ))}
            </CarouseSlideContainer>
            <CarouseMenu />
          </Carousel>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <ContactSplit />
        </div>
      </section>
    </>
  );
}
