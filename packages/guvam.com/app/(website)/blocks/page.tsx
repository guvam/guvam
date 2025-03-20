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

import { ComponentBlock } from "@/components/ComponentBlock";

export default function Page() {
  return (
    <>
      <div className="Layout-section">
        <div className="Layout-sectionContent">
          <h1>Blocks</h1>

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
        <ComponentBlock id="banner">
          <Banner />
        </ComponentBlock>
        <ComponentBlock id="team-muted">
          <BannerMuted />
        </ComponentBlock>
        <ComponentBlock id="team-gradient">
          <BannerGradient />
        </ComponentBlock>

        <ComponentBlock id="blog">
          <Blog />
        </ComponentBlock>
        <ComponentBlock id="blog-cards">
          <BlogCards />
        </ComponentBlock>

        <ComponentBlock id="carousel-images">
          <CarouselImages />
        </ComponentBlock>

        <ComponentBlock id="contact">
          <Contact />
        </ComponentBlock>
        <ComponentBlock id="contact-location">
          <ContactLocation />
        </ComponentBlock>
        <ComponentBlock id="contact-other">
          <ContactCards />
        </ComponentBlock>
        <ComponentBlock id="contact-split">
          <ContactSplit />
        </ComponentBlock>
        <ComponentBlock id="contact-splitimage">
          <ContactSplitImage />
        </ComponentBlock>

        <ComponentBlock id="questions">
          <Questions />
        </ComponentBlock>
        <ComponentBlock id="questions-open">
          <QuestionsOpen />
        </ComponentBlock>

        <ComponentBlock id="hero-simple">
          <HeroSimple />
        </ComponentBlock>
        <ComponentBlock id="hero-split">
          <HeroSplit />
        </ComponentBlock>
        <ComponentBlock id="hero-split-image">
          <Hero3 />
        </ComponentBlock>

        <ComponentBlock id="partners">
          <PartnersSimple />
        </ComponentBlock>

        <ComponentBlock id="newsletter">
          <Newsletter />
        </ComponentBlock>
        <ComponentBlock id="newsletter-horizontal">
          <NewsletterHorizontal />
        </ComponentBlock>

        <ComponentBlock id="pricing-section">
          <PricingSection />
        </ComponentBlock>
        <ComponentBlock id="pricing-section-bold">
          <PricingSectionBold />
        </ComponentBlock>
        <ComponentBlock id="pricing-addition">
          <PricingAddition />
        </ComponentBlock>
        <ComponentBlock id="pricing-table">
          <PricingTable />
        </ComponentBlock>

        <ComponentBlock id="features-2">
          <FeaturesList />
        </ComponentBlock>

        <ComponentBlock id="team">
          <Team />
        </ComponentBlock>
        <ComponentBlock id="team-small">
          <TeamSmall />
        </ComponentBlock>
        <ComponentBlock id="team-card">
          <TeamCard />
        </ComponentBlock>
      </div>
    </>
  );
}
