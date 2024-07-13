"use client";

import HeroAttention from "@/components/ui/HeroAttention";
import CompanyCloudMoving from "@/components/ui/CompanyCloudMoving";
import { logos } from "@/lib/friday-ui-fake-data";
import { Section } from "@/components/ui/section";
import FeaturesAlternate from "@/components/ui/FeaturesAlternate";
import { features } from "@/lib/friday-ui-fake-data";
import TestimonialsMovingVertical from "@/components/ui/TestimonialsMovingVertical";
import CallToActionAttention from "@/components/ui/CallToActionAttention";
import { Check } from "lucide-react";
import { Clock } from "lucide-react";
import { Folder } from "lucide-react";
import PricingSubscriptionService from "@/components/ui/PricingSubscriptionService";
import { subscriptionServicePlans } from "@/lib/friday-ui-fake-data";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/lib/friday-ui-fake-data";
import FooterSimple from "@/components/ui/FooterSimple";
import { footerSocials } from "@/lib/friday-ui-fake-data";
import { footerSections } from "@/lib/friday-ui-fake-data";

function Page() {
  return (
    <>
      <HeroAttention
        badgeText="Headstart for your next big project"
        problemTitle={"Writing a project from scratch ??"}
        solutionTitle={"Use Quicko and move 100x"}
        description={`Quicko helps developers to build and ship there big projects by preventing to write code from ground up.`}
        ctaText="Get Started"
        ctaLink="/"
      />
      <Section variant="fullwidth">
        <CompanyCloudMoving
          logos={logos}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </Section>
      <Section>
        <FeaturesAlternate
          title="Features"
          description={`Explore our cutting-edge features designed to enhance \nyour business performance and drive growth.`}
          features={features.slice(0, 3)}
        />
      </Section>
      <Section>
        <TestimonialsMovingVertical />
      </Section>
      <Section>
        <CallToActionAttention
          title={"Ready to launch your product?"}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nNullam eget felis ac nunc scelerisque.`}
          ctaText="Try for free"
          ctaOnClick={() => {}}
          features={[
            {
              icon: <Check size={24} />,
              text: "14-day free trial",
            },
            {
              icon: <Clock size={24} />,
              text: "99.99% uptime guarantee",
            },
            {
              icon: <Folder size={24} />,
              text: "Unlimited users and projects",
            },
          ]}
        />
      </Section>
      <Section>
        <PricingSubscriptionService
          title={`Need custom components or websites?\nWe've got you covered`}
          description={`From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.`}
          plans={subscriptionServicePlans}
        />
      </Section>
      <Section>
        <FAQ
          title="FAQs"
          description={`Start with our free plan and switch to premium as you grow. \n Best value for individuals and small businesses.`}
          faqs={faqs}
        />
      </Section>
      <Section>
        <FooterSimple
          logo="Quicko"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias."
          socials={footerSocials}
          sections={footerSections}
          copywrite="&copy; 2024. Quicko. All rights reserved."
        />
      </Section>
    </>
  );
}

export default Page;
