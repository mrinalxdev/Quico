"use client";

import HeroSimple from "@/components/ui/HeroSimple";
import CompanyCloudMoving from "@/components/ui/CompanyCloudMoving";
import { logos } from "@/lib/friday-ui-fake-data";
import { Section } from "@/components/ui/section";
import FeaturesAlternate from "@/components/ui/FeaturesAlternate";
import { features } from "@/lib/friday-ui-fake-data";
import CallToActionAttention from "@/components/ui/CallToActionAttention";
import { Check } from "lucide-react";
import { Clock } from "lucide-react";
import { Folder } from "lucide-react";
import TestimonialsMovingVertical from "@/components/ui/TestimonialsMovingVertical";
import FAQ from "@/components/ui/FAQ";
import { faqs } from "@/lib/friday-ui-fake-data";
import FooterMinimal from "@/components/ui/FooterMinimal";
import { footerSections } from "@/lib/friday-ui-fake-data";
import { footerSocials } from "@/lib/friday-ui-fake-data";
import Announcement from "@/components/ui/announcement";

function Page() {
  return (
    <>
    <Announcement />
      <HeroSimple
        badgeText="Used by 1000+ developers"
        title="Friday UI"
        description={`Friday UI is a component library built for fast web development \n library built for fast web development`}
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
          features={features.slice(0, 1)}
        />
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
        <TestimonialsMovingVertical />
      </Section>
      <Section>
        <FAQ
          title="FAQs"
          description={`Start with our free plan and switch to premium as you grow. \n Best value for individuals and small businesses.`}
          faqs={faqs}
        />
      </Section>
      <Section>
        <FooterMinimal
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.7 96.37">
              <path d="M48.82,17.19h-30.6v13.76h28.16v13.91h-28.16v31.34H0V3.28h48.82v13.91Z" />
              <path d="M94.21,37.41h-1.42c-.65-.23-1.6-.4-2.84-.51-1.24-.11-2.61-.17-4.11-.17-1.8,0-3.68.26-5.66.78-1.98.52-3.89,1.14-5.75,1.86v36.82h-17.14V21.2h17.14v7.88c.78-.72,1.87-1.62,3.26-2.72,1.39-1.09,2.65-1.97,3.79-2.62,1.24-.75,2.68-1.4,4.33-1.93,1.65-.54,3.21-.81,4.68-.81.55,0,1.18.02,1.86.05.69.03,1.31.08,1.86.15v16.21Z" />
              <path d="M118.4,13.37h-18.12V0h18.12v13.37ZM117.91,76.19h-17.14V21.2h17.14v54.99Z" />
              <path d="M181.03,76.19h-17.14v-5.73c-1.11.91-2.38,1.89-3.8,2.94-1.42,1.04-2.67,1.83-3.75,2.35-1.37.65-2.73,1.14-4.06,1.47-1.34.33-2.94.49-4.8.49-6.27,0-11.23-2.6-14.89-7.79-3.66-5.19-5.48-12.13-5.48-20.81,0-4.8.62-8.96,1.86-12.49,1.24-3.53,2.95-6.59,5.14-9.21,1.99-2.38,4.41-4.27,7.25-5.66,2.84-1.39,5.84-2.08,9.01-2.08,2.87,0,5.23.3,7.08.91,1.84.6,3.99,1.54,6.44,2.82V0h17.14v76.19ZM163.89,61.01v-26.98c-.85-.42-1.96-.77-3.33-1.05-1.37-.28-2.55-.42-3.53-.42-4.11,0-7.21,1.44-9.28,4.31-2.07,2.87-3.11,6.89-3.11,12.05,0,5.42.82,9.34,2.47,11.75,1.65,2.42,4.32,3.62,8.01,3.62,1.5,0,3.02-.29,4.55-.88,1.53-.59,2.94-1.39,4.21-2.4Z" />
              <path d="M224.46,70.37c-1.17.98-2.23,1.86-3.16,2.64-.93.78-2.18,1.57-3.75,2.35-1.54.75-3.03,1.32-4.48,1.71-1.45.39-3.49.59-6.1.59-4.86,0-8.9-1.63-12.12-4.9-3.22-3.26-4.82-7.38-4.82-12.34,0-4.08.82-7.38,2.45-9.89,1.63-2.51,3.98-4.5,7.05-5.97,3.1-1.5,6.81-2.55,11.12-3.13s8.94-1.04,13.91-1.37v-.29c0-3.04-1.12-5.13-3.35-6.29-2.24-1.16-5.59-1.74-10.06-1.74-2.02,0-4.39.37-7.1,1.1-2.71.73-5.35,1.67-7.93,2.82h-1.47v-13.27c1.7-.49,4.44-1.07,8.23-1.74,3.79-.67,7.61-1,11.46-1,9.47,0,16.36,1.58,20.69,4.73,4.33,3.15,6.49,7.96,6.49,14.42v37.41h-17.04v-5.83ZM224.46,61.85v-11.46c-2.91.29-5.26.55-7.05.76-1.8.21-3.56.63-5.29,1.25-1.5.52-2.67,1.31-3.5,2.38-.83,1.06-1.25,2.47-1.25,4.24,0,2.58.69,4.35,2.08,5.31,1.39.96,3.43,1.44,6.14,1.44,1.5,0,3.04-.34,4.6-1.03,1.57-.69,2.99-1.65,4.26-2.89Z" />
              <path d="M305.5,21.2l-27.76,75.16h-18.41l8.32-21.5-20.17-53.67h18.02l11.56,34.47,10.82-34.47h17.63Z" />
              <path d="M371.76,77.71c-9.79,0-17.33-2.37-22.6-7.1-5.27-4.73-7.91-11.65-7.91-20.76V3.28h18.31v45.49c0,5.06.96,8.83,2.86,11.31,1.91,2.48,5.02,3.72,9.33,3.72s7.3-1.19,9.28-3.57c1.97-2.38,2.96-6.2,2.96-11.46V3.28h18.31v46.52c0,8.98-2.57,15.87-7.71,20.69-5.14,4.82-12.76,7.22-22.84,7.22Z" />
              <path d="M452.7,76.19h-39.27v-12.73h10.48V16.01h-10.48V3.28h39.27v12.73h-10.48v47.45h10.48v12.73Z" />
            </svg>
          }
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias."
          socials={footerSocials}
          sections={footerSections}
          copywrite="&copy; 2024.  Quicko. All rights reserved."
        />
      </Section>
    </>
  );
}

export default Page;
