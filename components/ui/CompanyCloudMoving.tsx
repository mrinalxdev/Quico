"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CompanyCloudMovingProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: {
    name: string;
    url: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}

const CompanyCloudMoving = React.forwardRef<
  HTMLDivElement,
  CompanyCloudMovingProps
>(
  (
    {
      logos,
      direction = "left",
      speed = "normal",
      pauseOnHover = true,
      className,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
      addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards",
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse",
          );
        }
      }
    };
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };

    return (
      <div
        {...props}
        ref={containerRef}
        className={cn(
          "scroller max-full relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {logos.map((item, idx) => (
            <li
              className="relative w-[6rem] flex-shrink-0 rounded-2xl"
              key={idx}
            >
              <Image
                src={item.url}
                alt={item.name}
                width={100}
                height={100}
                className="max-w-[6rem] px-3 brightness-0 invert-0 dark:invert"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

CompanyCloudMoving.displayName = "CompanyCloudMoving";

export default CompanyCloudMoving;
