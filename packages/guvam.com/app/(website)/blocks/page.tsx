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
import { Features, Features2, Features3, Features4 } from "@guvam/blocks/src/Features";
import { Hero3, HeroSimple, HeroSplit } from "@guvam/blocks/src/Hero";
import { LogoCloud, LogoCloud2, LogoCloud3 } from "@guvam/blocks/src/LogoCloud";
import { Newsletter, NewsletterHorizontal } from "@guvam/blocks/src/Newsletter";
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

      <BlockExample id="logos">
        <LogoCloud />
      </BlockExample>
      <BlockExample id="logos-2">
        <LogoCloud2 />
      </BlockExample>
      <BlockExample id="logos-3">
        <LogoCloud3 />
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

      <BlockExample id="features">
        <Features />
      </BlockExample>
      <BlockExample id="features-2">
        <Features2 />
      </BlockExample>
      <BlockExample id="features-3">
        <Features3 />
      </BlockExample>
      <BlockExample id="features-4">
        <Features4 />
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
  );
}
