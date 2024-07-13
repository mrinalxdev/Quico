"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
import { AttentionCard } from "@/components/ui/attention-card";

interface CallToActionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  ctaText: string;
  ctaOnClick: () => void;
}

const CallToActionAttention = React.forwardRef<
  HTMLDivElement,
  CallToActionProps
>(
  (
    { title, description, features, ctaText, ctaOnClick, className, ...props },
    ref,
  ) => {
    return (
      <AttentionCard
        {...props}
        ref={ref}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-7 rounded-md py-14 text-center",
          className,
        )}
        containerClassName="w-full"
      >
        <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">{title}</h2>
        <p className="max-w-xl md:text-xl">{description}</p>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          {features.map((feature, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div className="rounded-md bg-primary/10 p-2">{feature.icon}</div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={() => {
            ctaOnClick();
          }}
          size="lg"
        >
          {ctaText}
        </Button>
      </AttentionCard>
    );
  },
);

CallToActionAttention.displayName = "CallToActionAttention";

export default CallToActionAttention;
