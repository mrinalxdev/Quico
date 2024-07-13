"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAnimate, useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeText: string;
  problemTitle: string;
  solutionTitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HeroAttention = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      badgeText,
      problemTitle,
      solutionTitle,
      description,
      ctaText,
      ctaLink,
      className,
      ...props
    },
    ref
  ) => {
    const [scope, animate] = useAnimate();
    const problemHeadingRef = React.useRef<HTMLHeadingElement>(null);
    const solutionHeadingRef = React.useRef<HTMLHeadingElement>(null);
    const problemIconRef = React.useRef<SVGSVGElement>(null);
    const solutionIconRef = React.useRef<SVGSVGElement>(null);
    const isInView = useInView(scope);

    useEffect(() => {
      if (
        isInView &&
        problemHeadingRef.current &&
        solutionHeadingRef.current &&
        problemIconRef.current &&
        solutionIconRef.current
      ) {
        animate([
          [
            solutionHeadingRef.current,
            {
              opacity: 1,
              x: 200,
            },
            {
              duration: 0.3,
              delay: 2.2,
            },
          ],
          [
            problemHeadingRef.current,
            {
              opacity: 0,
              x: 200,
            },
            {
              duration: 0.3,
              delay: 2,
              at: "<",
            },
          ],
          [
            solutionIconRef.current,
            {
              opacity: 1,
              x: 220,
            },
            {
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
            },
          ],
        ]);

        animate([
          [
            problemIconRef.current,
            {
              opacity: 0,
              x: 200,
              rotate: 360,
            },
            {
              duration: 0.3,
              delay: 2.5,
            },
          ],
        ]);
      }
    }, [isInView]);

    return (
      <>
        <div
          {...props}
          ref={ref}
          className={cn(
            "flex min-h-[80vh] min-w-full flex-col items-center justify-center",
            className
          )}
        >
          <div
            className="flex flex-col items-center justify-center gap-5 text-center"
            ref={scope}
          >
            <div className="flex justify-center rounded-full border bg-background px-5 py-2 text-muted-foreground">
              <p>{badgeText}</p>
            </div>

            <div className="flex h-32 justify-center">
              <h1
                ref={problemHeadingRef}
                style={{
                  lineHeight: "7.3rem",
                }}
                className="absolute whitespace-pre text-3xl font-semibold md:text-4xl lg:text-[5rem]"
              >
                {problemTitle}
              </h1>

              <h1
                ref={solutionHeadingRef}
                style={{
                  lineHeight: "7.3rem",
                  position: "relative",
                  right: "200px",
                }}
                className="whitespace-pre text-3xl font-semibold opacity-0 md:text-4xl lg:text-8xl"
              >
                {solutionTitle}
              </h1>
            </div>

      

            <p className="max-w-xl text-lg">{description}</p>

            <Link href={ctaLink}>
              <Button className="rounded-full" size="xlg">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
);

HeroAttention.displayName = "HeroAttention";

export default HeroAttention;
