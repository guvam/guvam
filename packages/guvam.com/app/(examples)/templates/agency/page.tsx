import { ContactLocation } from "@guvam/blocks/src/Contact";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import { Tabs, TabsContent, TabsWrapper } from "@guvam/components";
import {
  Carousel,
  CarouselAnimateToggleButton,
  CarouselSlideContainer,
  CarouseMenu,
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
  "/blocks/services/services-3.jpg",
  "/blocks/services/services-5.jpg",
];

const ImageAlt = [
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
                <h2 className="Title">The complete community platform</h2>
                <p className="Title-description">
                  Build a home for your community, events and courses - all under your own brand.
                </p>
                <form className="Custom-inputForm">
                  <input className="Custom-input" placeholder="Enter your Email Address"></input>
                  <button className="Button Custom-inputButton">Get Started</button>
                </form>
              </hgroup>
              <ul className="List List--row List--evenly">
                <li>
                  <h2>Start</h2>
                  <p>Start building a community as you grow your audience.</p>
                </li>
                <li>
                  <h2 className="">Engage</h2>
                  <p>
                    Build a home for your community with memberships, discussions, events and
                    courses.
                  </p>
                </li>
                <li>
                  <h2>Monatize</h2>
                  <p>
                    Use our best-in-class payments stack to turn your community into a meaningful
                    business
                  </p>
                </li>
                <li>
                  <h2>Scale</h2>
                  <p>Scale your business to the next level with automations, AI and branded apps</p>
                </li>
              </ul>
              <div className="Carousel-containerCustom">
                <Carousel viewCount={1} className="Carousel" loop>
                  <CarouselSlideContainer clip={true}>
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
                  </CarouselSlideContainer>
                  <CarouselAnimateToggleButton />
                  <CarouseMenu classname="Carousel-menuCustom" />
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
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <div className="List-stack">
            <div className="Content Util--center">
              <h1>
                Create a thriving community <mark>you can be proud of</mark>
              </h1>
              <TabsWrapper className="List-stack">
                <Tabs className="Tabs-list">
                  <button className="Button Button--type-text">Start</button>
                  <button className="Button Button--type-text">Engage</button>
                  <button className="Button Button--type-text">Monetize</button>
                  <button className="Button Button--type-text">Scale</button>
                </Tabs>

                <TabsContent>
                  <div className="Components-container">
                    <section>
                      <div className="GridTwo">
                        <hgroup className="Hgroup-custom">
                          <h3>Your community, courses, and content – all in one place.</h3>
                          <p>
                            Gone are the days of needing to make a whole bunch of different tools
                            work together. With Circle, you can combine the exciting, interactive
                            nature of a community with your content — all in one seamless
                            experience.
                          </p>
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
                        <hgroup className="Hgroup-custom">
                          <h3>
                            Courses, live streams, group chats, events, rich profile, and more.
                          </h3>
                          <p>
                            Your members are the star of the show — they just need the tools to
                            connect with each other and shine. You want an active, buzzing
                            community. And so do your members. With Circle you get powerful
                            engagement features so that you can empower your members to build that
                            vision with you.
                          </p>
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
                        <hgroup className="Hgroup-custom">
                          <h3>
                            Whether you’re offering a course, a membership, one-time access to
                            content, or monthly recurring subscriptions — Circle has you covered.
                          </h3>
                          <p>
                            Many of the top creators and brands run their entire business on Circle.
                            You can easily start accepting payments in minutes. Whether you’re
                            offering a membership, one-time access to content, providing free trials
                            or monthly recurring subscriptions — Circle has you covered.
                          </p>
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
                  <div className="Components-container">
                    <section>
                      <div className="GridTwo">
                        <hgroup className="Hgroup-custom">
                          <h3>Manage and scale your community operations</h3>
                          <p>
                            Get back the precious time you currently spend on repetitive, manual
                            tasks so that you can focus on more meaningful work. Circle comes with
                            powerful workflows, integrations, and AI-powered content and analytics
                            tools to help you create an extraordinary member experience.
                          </p>
                        </hgroup>
                        <Image
                          className="Features-fadingImage"
                          src="/blocks/services/services-6.jpg"
                          alt="Placeholder"
                          width={1465}
                          height={902}
                        />
                      </div>
                    </section>
                  </div>
                </TabsContent>
              </TabsWrapper>
            </div>
          </div>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <section className="List-stack">
            <hgroup className="Content Util--center">
              <h1>Thousands of communities & use-cases just like yours</h1>
            </hgroup>
            <ul className="Grid Grid--column-3">
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-1.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-2.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-3.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-4.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-5.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
              <li className="Content-teamCustom">
                <img className="Util-image Team-Avatar" src="/blocks/avatars/avatar-6.jpg" />
                <p className="Team-userName">
                  <b>Name Surname</b>
                </p>
                <div className="Team-hoverContent">
                  <p className="Team-userName">
                    <b>Name Surname</b>
                  </p>
                  <p>
                    Thousands of communities & use-cases just like yours, Thousands of communities &
                    use-cases just like yours, Thousands of communities & use-cases just like yours
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <div className="List-stack">
            <hgroup className="Content Util--center">
              <h2 className="Title">All the features you need to get started in minutes</h2>
              <p className="Title-description">
                You have a vision for your community experience. Circle provides you with the
                building blocks to bring your vision to life — fast and without the headaches.
              </p>
            </hgroup>
            <ul className="List List--evenly">
              <div className="">
                <h2>Start</h2>
                <ul>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Organized discussions</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Rich posts</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Content co-pilot</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Immersive courses</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Private spaces</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Automatic video transcripts</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Member directory</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Customized branding</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Engage</h2>
                <ul>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Group chat rooms</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Private messaging</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Event spaces</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Live streams</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Weekly digests</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Automated check-ins</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Gamified rewards</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Bulk DMs</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Monetize</h2>
                <ul>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Paid memberships</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>One-time payments</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Recurring subscriptions</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Gate access</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Free trials and upsells</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Payment installments</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Coupons and discounts</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Subscription renewal reminders</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h2>Scale</h2>
                <ul>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Thousands of integrations</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Automated workflows</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Custom profile fields</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>AI activity scores</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Bulk actions</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Single sign-on</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Roles & permissions</p>
                  </li>
                  <li className="List">
                    <CheckCircleFill className="Checkbox-SVG" />
                    <p>Auto-remove churned members</p>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Hero">
          <h1>Easy integrations with your existing tools</h1>
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
                  <details className="Collapse" name="faq-columns2" key={item.id} open={i === 0}>
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
              <h2 className="Title">Built for community-powered courses</h2>
              <p className="Title-description">
                Goodbye one-dimensional lectures, hello immersive experiences. Bring your course to
                life with:
              </p>
              <ul className="List List--evenly">
                <div className="">
                  <ul>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Cohort-based groups</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Drip lessons</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Exclusive masterclasses</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>1:1 connections and DMs</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Automated check-ins and rewards</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Weekly office hours</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Personalized and group coaching</p>
                    </li>
                    <li className="List">
                      <CheckCircleFill className="Checkbox-SVG" />
                      <p>Live Q&As</p>
                    </li>
                  </ul>
                </div>
              </ul>
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
        <div className="Hero">
          <h1>Organized, easy to navigate — and fun for your members</h1>
          <div className="GridTwo">
            <Image
              className="Util-imageCover Util-imageCover--large"
              src="/blocks/services/services-5.jpg"
              alt="Placeholder"
              width={1465}
              height={902}
            />
            <section className="List-stack" style={{ gap: "2rem" }}>
              <div className="List List--between">
                <div className="Title-info">Frequently asked questions</div>
                <a href="" className="Button Button--type-text">
                  View all
                </a>
              </div>

              <article className="Collapse-container">
                {content.map((item, i) => (
                  <details className="Collapse" name="faq-columns1" key={item.id} open={i === 0}>
                    <summary className="Collapse-action">{item.question}</summary>
                    <div className="Collapse-contentBlock Content">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </article>
            </section>
          </div>
        </div>
      </section>
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
                    src={ImageAlt[x]}
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
              <p className="Title-description">
                In the last edition we launched Circle, a next-generation online discussion forum.
                It has had a profound impact on the community-building aspect of the course. It is
                far more modern, user-friendly, interactive, and muti-faceted than any other
                platform out there, and we are making it the home of our student community.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <Carousel viewCount={3} className="Carousel" animate loop animateTime={2000}>
            <CarouselSlideContainer clip={false}>
              {IMAGES.map((img, i) => (
                <li className="Carousel-slideItem" key={i}>
                  <div className="Card Carousel-exampleCard">
                    <Image src={img} alt="" width={875} height={500} className="Util-image" />
                    <h3 className="Card-header">Heading 1</h3>
                    <p className="Card-content">
                      Here is the Content Here is the Content Here is the Content Here is the
                      Content Here is the Content Here is the Content Here is the ContentHere is the
                      Content Here is the Content Here is the ContentHere is the Content Here is the
                      Content Here is the ContentHere is the Content Here is the Content Here is the
                      Content
                    </p>
                  </div>
                </li>
              ))}
            </CarouselSlideContainer>
          </Carousel>
        </div>
      </section>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <ContactLocation />
        </div>
      </section>
    </>
  );
}
