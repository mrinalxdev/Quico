"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSimple = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    { badgeText, title, description, ctaText, ctaLink, className, ...props },
    ref
  ) => {
    return (
      <section className=" mt-[6rem]">
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance">
              Kickstart your development projects with,
              <span className="text-gray-600">ease</span>
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500 text-balance">
              Control and added security. With decentralization, users have more
              control over their data and transactions, and the platform is less
              susceptible to malicious attacks.
            </p>
            <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                Get Started
              </button>
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Secondary action"
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSimple.displayName = "HeroSimple";

export default HeroSimple;
