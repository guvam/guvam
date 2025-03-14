import "@guvam/blocks/src/index.css";

import { Banner, BannerGradient, BannerMuted } from "@guvam/blocks/src/Banner";
import { Blog, BlogCards } from "@guvam/blocks/src/Blog";
import { CarouselImages } from "@guvam/blocks/src/Carousel";
import {
  Contact,
  ContactCards,
  ContactLocation,
  ContactSplit,
  ContactSplitImage,
} from "@guvam/blocks/src/Contact";
import { FeaturesList } from "@guvam/blocks/src/Features";
import { Hero3, HeroSimple, HeroSplit } from "@guvam/blocks/src/Hero";
import { Newsletter, NewsletterHorizontal } from "@guvam/blocks/src/Newsletter";
import { PartnersSimple } from "@guvam/blocks/src/Partners";
import {
  PricingAddition,
  PricingSection,
  PricingSectionBold,
  PricingTable,
} from "@guvam/blocks/src/Pricing";
import { Questions, QuestionsOpen } from "@guvam/blocks/src/Questions";
import { Team, TeamCard, TeamSmall } from "@guvam/blocks/src/Team";

import { BlockExample } from "./BlockExample";

export default function Page() {
  return (
    <>
      <div className="Layout-section">
        <div className="Layout-sectionContent">
          <h1 className="Content-heading1">Blocks</h1>

          <div className="Grid">
            <a className="Button Button--type-text" href="#banner">
              Banner
            </a>
            <a className="Button Button--type-text" href="#blog">
              Blog
            </a>
            <a className="Button Button--type-text" href="#carousel-images">
              Carousel
            </a>
            <a className="Button Button--type-text" href="#contact">
              Contact
            </a>
            <a className="Button Button--type-text" href="#questions">
              Questions
            </a>
            <a className="Button Button--type-text" href="#hero-simple">
              Hero
            </a>
            <a className="Button Button--type-text" href="#partners">
              Partners
            </a>
            <a className="Button Button--type-text" href="#newsletter">
              Newsletter
            </a>
            <a className="Button Button--type-text" href="#pricing-section">
              Pricing
            </a>
            <a className="Button Button--type-text" href="#features">
              Features
            </a>
            <a className="Button Button--type-text" href="#team">
              Team
            </a>
          </div>
        </div>
      </div>

      <div className="Layout-section">
        <BlockExample id="banner">
          <Banner />
        </BlockExample>
        <BlockExample id="team-muted">
          <BannerMuted />
        </BlockExample>
        <BlockExample id="team-gradient">
          <BannerGradient />
        </BlockExample>

        <BlockExample id="blog">
          <Blog />
        </BlockExample>
        <BlockExample id="blog-cards">
          <BlogCards />
        </BlockExample>

        <BlockExample id="carousel-images">
          <CarouselImages />
        </BlockExample>

        <BlockExample id="contact">
          <Contact />
        </BlockExample>
        <BlockExample id="contact-location">
          <ContactLocation />
        </BlockExample>
        <BlockExample id="contact-other">
          <ContactCards />
        </BlockExample>
        <BlockExample id="contact-split">
          <ContactSplit />
        </BlockExample>
        <BlockExample id="contact-splitimage">
          <ContactSplitImage />
        </BlockExample>

        <BlockExample id="questions">
          <Questions />
        </BlockExample>
        <BlockExample id="questions-open">
          <QuestionsOpen />
        </BlockExample>

        <BlockExample id="hero-simple">
          <HeroSimple />
        </BlockExample>
        <BlockExample id="hero-split">
          <HeroSplit />
        </BlockExample>
        <BlockExample id="hero-split-image">
          <Hero3 />
        </BlockExample>

        <BlockExample id="partners">
          <PartnersSimple />
        </BlockExample>

        <BlockExample id="newsletter">
          <Newsletter />
        </BlockExample>
        <BlockExample id="newsletter-horizontal">
          <NewsletterHorizontal />
        </BlockExample>

        <BlockExample id="pricing-section">
          <PricingSection />
        </BlockExample>
        <BlockExample id="pricing-section-bold">
          <PricingSectionBold />
        </BlockExample>
        <BlockExample id="pricing-addition">
          <PricingAddition />
        </BlockExample>
        <BlockExample id="pricing-table">
          <PricingTable />
        </BlockExample>

        <BlockExample id="features-2">
          <FeaturesList />
        </BlockExample>

        <BlockExample id="team">
          <Team />
        </BlockExample>
        <BlockExample id="team-small">
          <TeamSmall />
        </BlockExample>
        <BlockExample id="team-card">
          <TeamCard />
        </BlockExample>
      </div>
    </>
  );
}
