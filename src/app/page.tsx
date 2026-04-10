"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Love Consulting Services"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{ variant: "gradient-bars" }}
      title="Solving the 'How' for Small Businesses"
      description="Love Consulting Services provides strategic digital-first solutions to help your business scale, manage, and succeed."
      tag="Expert Business Consultancy"
      buttons={[{ text: "Schedule a Consultation", href: "#contact" }]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-professional-business-consultant-works-1775854071916-b7c1afec.png?_wi=1", imageAlt: "Workspace" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-futuristic-digital-dashboard-data-visu-1775854071835-579ecde0.png?_wi=1", imageAlt: "Dashboard" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-creative-marketing-strategy-session-wh-1775854072422-df01d47d.png?_wi=1", imageAlt: "Strategy" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-professional-digital-marketing-adverti-1775854073260-faefd7c4.png?_wi=1", imageAlt: "Advertising" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/an-abstract-3d-representation-of-digital-1775854071865-a4e94f4c.png", imageAlt: "Connectivity" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-developer-working-on-app-code-high-end-1775854073276-67e16bab.png?_wi=1", imageAlt: "Development" }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Dedicated to Your Growth"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      cardClassName="!bg-white !text-black border-0"
      textBoxDescriptionClassName="!text-black font-medium opacity-100"
      cardDescriptionClassName="!text-black"
      features={[
        { id: "s1", title: "Licensing", author: "Compliance", description: "Navigating regulatory landscapes with ease.", tags: ["Licensing", "Compliance"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-professional-business-consultant-works-1775854071916-b7c1afec.png?_wi=2" },
        { id: "s2", title: "Web & App Development", author: "Tech", description: "Building custom digital experiences that drive value.", tags: ["Web Dev", ""], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-developer-working-on-app-code-high-end-1775854073276-67e16bab.png?_wi=2" },
        { id: "s3", title: "Marketing Strategy", author: "Marketing", description: "Crafting roadmaps that convert audiences to fans.", tags: ["Strategy", "Growth"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-creative-marketing-strategy-session-wh-1775854072422-df01d47d.png?_wi=2" },
        { id: "s4", title: "Advertising", author: "Marketing", description: "Targeted campaigns that maximize your ROI.", tags: ["Ad", "Growth"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-professional-digital-marketing-adverti-1775854073260-faefd7c4.png?_wi=2" },
        { id: "s5", title: "Digital-First Solutions", author: "Tech", description: "Modern infrastructure for a modern business.", tags: ["Digital"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-futuristic-digital-dashboard-data-visu-1775854071835-579ecde0.png?_wi=2" }
      ]}
      title="Our Specialized Solutions"
      description="We bridge the gap between your goals and reality through tailored professional services."
      buttons={[{ text: "Initiate Contact", href: "#contact" }]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Ready to solve the 'how'? Let's work together."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true }
      ]}
      textarea={{ name: "message", placeholder: "Tell us about your project", rows: 4 }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CBGbboIMtOX8RWGiJBVajdKQEp/a-calm-professional-workspace-with-a-cup-1775854072549-40c8cbd2.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            { label: "Licensing", href: "#services" },
            { label: "Web Development", href: "#services" },
            { label: "Marketing", href: "#services" }
          ]
        },
        {
          title: "Company",          items: [
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" }
          ]
        }
      ]}
      bottomLeftText="© 2026 Love Consulting Services."
      bottomRightText="All rights reserved."
      bottomLeftTextClassName="!opacity-100 !text-foreground"
      bottomRightTextClassName="!opacity-100 !text-foreground"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}