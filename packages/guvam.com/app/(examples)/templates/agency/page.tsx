"use client";

import { ContactLocation } from "@guvam/blocks/src/Contact";
import HookLogo from "@guvam/blocks/src/logos/hook.svg";
import PublicisLogo from "@guvam/blocks/src/logos/publicis.svg";
import PulseLogo from "@guvam/blocks/src/logos/pulse.svg";
import SwayLogo from "@guvam/blocks/src/logos/sway.svg";
import ZealLogo from "@guvam/blocks/src/logos/zeal.svg";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import { Tabs, TabsContent, TabsWrapper } from "@guvam/components";
import {
  Carousel,
  CarouselAnimateToggleButton,
  CarouselSlideContainer,
  CarouseMenu,
} from "@guvam/components/elements/Carousel";
import Image from "next/image";
import { useState } from "react";
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
    images: "/blocks/services/services-1.jpg",
    question: "Interested in Hunting Demons?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ah",
    images: "/blocks/services/services-2.jpg",
    question: "What's the best thing about Switzerland?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "ch",
    images: "/blocks/services/services-3.jpg",
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
  {
    id: "dh",
    images: "/blocks/services/services-4.jpg",
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor          incididunt dolore. Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit  quis. Duis tempor incididunt dolore.",
  },
];

export default function Page() {
  const [openId, setOpenId] = useState(content[0].id);
  const [openId2, setOpenId2] = useState(content[0].id);

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
              <ul className="List List--evenly">
                <li className="List-item">
                  <h2>Start</h2>
                  <p>Start building a community as you grow your audience.</p>
                </li>
                <li className="List-item">
                  <h2 className="">Engage</h2>
                  <p>
                    Build a home for your community with memberships, discussions, events and
                    courses.
                  </p>
                </li>
                <li className="List-item">
                  <h2>Monatize</h2>
                  <p>
                    Use our best-in-class payments stack to turn your community into a meaningful
                    business
                  </p>
                </li>
                <li className="List-item">
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
                  <CarouseMenu classname="Carousel-menuCustom" />
                </Carousel>
              </div>
            </section>
            <section>
              <div className="Carousel-wrapperCustom">
                <Carousel viewCount={5} className="Carousel" animate loop animateTime={1500}>
                  <CarouselSlideContainer className="Carousel-slideContent--linear" clip={true}>
                    <div className="Carousel-slideItem">
                      <li className="Partners">
                        <HookLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <PublicisLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <PulseLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <SwayLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <ZealLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <HookLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <PublicisLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <PulseLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <SwayLogo />
                      </li>
                    </div>
                    <div className="Carousel-slideItem Slide-custom">
                      <li className="Partners">
                        <ZealLogo />
                      </li>
                    </div>
                  </CarouselSlideContainer>
                </Carousel>
              </div>
            </section>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <div className="List-stack">
            <div className="Content Util--center">
              <h2 className="Title">
                Create a thriving community <mark>you can be proud of</mark>
              </h2>
              <TabsWrapper className="List-stack">
                <Tabs className="Tabs-list">
                  <button className="Button Button--type-text">Start</button>
                  <button className="Button Button--type-text">Engage</button>
                  <button className="Button Button--type-text">Monetize</button>
                  <button className="Button Button--type-text">Scale</button>
                </Tabs>

                <TabsContent>
                  <div className="Components-container">
                    <section className="Layout-section">
                      <div className="GridTwo">
                        <hgroup className="Hgroup-custom Content-variant">
                          <h3>Your community, courses, and content – all in one place.</h3>
                          <p className="Tabs-content-p">
                            Gone are the days of needing to make a whole bunch of different tools
                            work together. With Circle, you can combine the exciting, interactive
                            nature of a community with your content — all in one seamless
                            experience.
                          </p>
                        </hgroup>
                        <Image
                          className="Util-imageCover Util-imageCover--medium"
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
                        <hgroup className="Hgroup-custom Content-variant">
                          <h3>
                            Courses, live streams, group chats, events, rich profile, and more.
                          </h3>
                          <p className="Tabs-content-p">
                            Your members are the star of the show — they just need the tools to
                            connect with each other and shine. You want an active, buzzing
                            community. And so do your members. With Circle you get powerful
                            engagement features so that you can empower your members to build that
                            vision with you.
                          </p>
                        </hgroup>
                        <Image
                          className="Util-imageCover Util-imageCover--medium"
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
                        <hgroup className="Hgroup-custom Content-variant">
                          <h3>
                            Whether you’re offering a course, a membership, one-time access to
                            content, or monthly recurring subscriptions — Circle has you covered.
                          </h3>
                          <p className="Tabs-content-p">
                            Many of the top creators and brands run their entire business on Circle.
                            You can easily start accepting payments in minutes. Whether you’re
                            offering a membership, one-time access to content, providing free trials
                            or monthly recurring subscriptions — Circle has you covered.
                          </p>
                        </hgroup>
                        <Image
                          className="Util-imageCover Util-imageCover--medium"
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
                        <hgroup className="Hgroup-custom Content-variant">
                          <h3>Manage and scale your community operations</h3>
                          <p className="Tabs-content-p">
                            Get back the precious time you currently spend on repetitive, manual
                            tasks so that you can focus on more meaningful work. Circle comes with
                            powerful workflows, integrations, and AI-powered content and analytics
                            tools to help you create an extraordinary member experience.
                          </p>
                        </hgroup>
                        <Image
                          className="Util-imageCover Util-imageCover--medium"
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
              <h2 className="Title">Thousands of communities & use-cases just like yours</h2>
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
        <div className="Layout-sectionContent">
          <p className="Title-info">Scale</p>
          <h2 className="Title Align-start">Easy integrations with your existing tools</h2>
          <div className="GridTwo">
            <section className="List-stack" style={{ gap: "2rem" }}>
              <article className="Collapse-container">
                {content.map((item, i) => (
                  <details
                    className="Collapse"
                    name="faq-columns2"
                    key={item.id}
                    open={i === 0}
                    onClick={() => setOpenId2(item.id)}
                  >
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
              src={content.find((item) => item.id === openId2)?.images ?? ""}
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
        <div className="Layout-sectionContent">
          <div className="Title-area">
            <p className="Title-info">Scale</p>
            <h2 className="Title Align-start">
              Organized, easy to navigate — and fun for your members
            </h2>
          </div>
          <div className="GridTwo">
            <Image
              className="Util-imageCover Util-imageCover--large"
              src={content.find((item) => item.id === openId)?.images ?? ""}
              alt="Placeholder"
              width={1465}
              height={902}
            />
            <section className="List-stack" style={{ gap: "2rem" }}>
              <article className="Collapse-container">
                {content.map((item, i) => (
                  <details
                    className="Collapse"
                    name="faq-columns1"
                    key={item.id}
                    open={i === 0}
                    onClick={() => setOpenId(item.id)}
                  >
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
      <div className="Layout-sectionFull Layout-sectionFull--filled">
        <section className="Layout-section">
          <div className="Layout-sectionContent">
            <section className="List-stack">
              <hgroup className="Hgroup-custom">
                <h2 className="Title Align-start">Gather with your people</h2>
                <p className="Title-description">
                  Easily create immersive live video experiences right inside of your Circle
                  community. Whether it’s a 5-person group coaching call, a 50-person online class,
                  or a 500-person broadcast with live Q&A — we’ve got you covered.
                </p>
                <Image
                  className="Util-image"
                  src="/blocks/products/product-screenshot.jpg"
                  alt="Placeholder"
                  width={1920}
                  height={1080}
                />
              </hgroup>
            </section>
          </div>
        </section>
      </div>
      <section className="Layout-section">
        <div className="Layout-sectionContent">
          <section>
            <div className="GridTwo">
              <Image
                className="Util-image"
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
        <Carousel viewCount={3} className="Carousel" animate loop animateTime={2000}>
          <CarouselSlideContainer clip={true}>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-1.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 1</h3>
                <p className="Card-content">
                  Our members are so impressed. It’s intuitive. It’s clean. It’s distraction free.
                  I’m so glad we made this decision
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-2.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 2</h3>
                <p className="Card-content">
                  Circle embodies what many other platforms miss - community! I have been blown away
                  by the generosity of my fellow course creators who have shared their setups and
                  tips, and I instantly felt like I was a part of the group. That, and the fact that
                  we have such great access to the support team makes Circle hands down the best
                  community platform on the market.
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-3.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 3</h3>
                <p className="Card-content">
                  We’ve gotten invaluable and truly life-changing input from the community.
                  Especially as a community builder myself, I’m so grateful for the phenomenal
                  community Circle has put together to support us and make our user experience an
                  extraordinary one!
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-4.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 4</h3>
                <p className="Card-content">
                  Circle came at an absolutely crucial time for the Makerpad community and has been
                  essential in allowing us to grow. The team are so responsive and the way they
                  build is so intuitive that the platform gets better for every week.
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-5.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 5</h3>
                <p className="Card-content">
                  I considered using something else but Circle was the winner imo. It’s the perfect
                  balance of functionality, design & price. Plus the founders are super helpful &
                  responsive.
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-6.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 6</h3>
                <p className="Card-content">
                  The key here is that Circle brings a technical way to centralize and service a
                  community. It's offering growth by way of shrinking! A consolidation of tech &
                  location in exchange for the potential of better connection and servability.
                </p>
              </div>
            </li>
            <li className="Carousel-slideItem">
              <div className="Card Carousel-exampleCard">
                <Image
                  src="/blocks/services/services-4.jpg"
                  alt=""
                  width={875}
                  height={500}
                  className="Util-image"
                />
                <h3 className="Card-header">Heading 7</h3>
                <p className="Card-content">
                  For Circle in particular, there are a lot of things I love, but here are the
                  things that sealed the deal for me when I was comparing community platforms (and I
                  compared a lot): Clean design and flexible structure. Circle was one of the
                  platforms I felt best enabled the structure I was going for. I personally think
                  the folks building Circle are thinking about community in a more holistic way than
                  some of the other tools on the market - they're thinking beyond a 'forum.'
                </p>
              </div>
            </li>
          </CarouselSlideContainer>
        </Carousel>
      </section>
    </>
  );
}
