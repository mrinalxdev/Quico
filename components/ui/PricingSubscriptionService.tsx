"use client";

import { cn } from "@/lib/utils";
import React from "react";
import PricingSubscriptionServiceCard from "@/components/ui/PricingSubscriptionServiceCard";

interface PricingSubscriptionServiceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  plans: {
    tag: string;
    pricingNote: string;
    description: string;
    features: string[];
    price: string;
    ctaText: string;
    popular: boolean;
    ctaOnClick: () => void;
  }[];
}

const PricingSubscriptionService = React.forwardRef<
  HTMLDivElement,
  PricingSubscriptionServiceProps
>(({ className, title, description, plans, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "flex min-w-full flex-col items-center justify-center gap-6 text-center md:p-10",
        className,
      )}
    >
      <h2 className="text-lg font-extrabold md:text-5xl md:leading-[3.5rem]">
        {title}
      </h2>
      <p className="mb-5 max-w-xl text-muted-foreground md:text-xl">
        {description}
      </p>

      <div className="grid grid-cols-1 gap-3 text-start md:grid-cols-3">
        {plans.map((plan, index) => {
          return (
            <PricingSubscriptionServiceCard
              key={index}
              tag={plan.tag}
              pricingNote={plan.pricingNote}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              ctaText={plan.ctaText}
              popular={plan.popular}
              ctaOnClick={plan.ctaOnClick}
            />
          );
        })}
      </div>
    </div>
  );
});

PricingSubscriptionService.displayName = "PricingSubscriptionService";

export default PricingSubscriptionService;
