"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import TwitterCard from "@/components/ui/TwitterCard";

interface TestimonialsMovingVerticalColProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    profilePhotoURL: string;
    name: string;
    username: string;
    tweet: string;
  }[];
  speed?: "fast" | "normal" | "slow" | "super-slow";
  pauseOnHover?: boolean;
}

const TestimonialsMovingVerticalCol = React.forwardRef<
  HTMLDivElement,
  TestimonialsMovingVerticalColProps
>(
  (
    { items, speed = "normal", pauseOnHover = true, className, ...props },
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

        getSpeed();
        setStart(true);
      }
    }

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else if (speed === "slow") {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        } else if (speed === "super-slow") {
          containerRef.current.style.setProperty(
            "--animation-duration",
            "100s",
          );
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
          "scroller max-full relative z-20 max-h-[650px] overflow-hidden [mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex shrink-0 flex-col flex-nowrap gap-4 py-4",
            start && "animate-scrollY",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, idx) => (
            <TwitterCard
              key={idx}
              profilePhotoURL={item.profilePhotoURL}
              name={item.name}
              tweet={item.tweet}
              link="#"
              username={item.username}
            />
          ))}
        </ul>
      </div>
    );
  },
);

TestimonialsMovingVerticalCol.displayName = "TestimonialsMovingVerticalCol";

export default TestimonialsMovingVerticalCol;
