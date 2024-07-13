import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

interface PricingSubscriptionServiceCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tag: string;
  pricingNote: string;
  description: string;
  features: string[];
  price: string;
  ctaText: string;
  popular: boolean;
  ctaOnClick: () => void;
}

const PricingSubscriptionServiceCard = React.forwardRef<
  HTMLDivElement,
  PricingSubscriptionServiceCardProps
>(
  (
    {
      tag,
      pricingNote,
      description,
      features,
      price,
      ctaText,
      popular,
      ctaOnClick,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "relative flex h-full flex-col justify-between rounded-3xl border border-transparent bg-white/60 px-6 py-8 ring-1 ring-gray-900/10 dark:border-white/[0.2] dark:bg-card sm:mx-8 lg:mx-0",
          className,
        )}
      >
        <div className="bg-opacity absolute left-0 top-0 h-[100%] min-w-[100%] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_75%_5%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]"></div>

        <div>
          <h3 className="text-base font-semibold leading-7 text-primary">
            {tag}
          </h3>
          <p className="mt-4 gap-x-2">
            <span className="block h-6 text-sm text-muted-foreground">
              {pricingNote}
            </span>
            <span className="text-4xl font-bold tracking-tight">{price}</span>
          </p>
          <p className="mt-6 h-24 text-sm leading-7 text-muted-foreground md:h-32 xl:h-24">
            {description}
          </p>
          <ul role="list" className="mt-6 space-y-3 text-sm leading-6">
            {features.map((service, index) => {
              return (
                <li className="flex gap-x-3" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                      fill="currentColor"
                      strokeWidth="0"
                    ></path>
                  </svg>
                  {service}
                </li>
              );
            })}
          </ul>
        </div>

        <Button
          className={cn(popular ? "mt-8" : "border text-primary")}
          onClick={ctaOnClick}
          variant={popular ? "default" : "outline"}
        >
          {ctaText || "Choose Plan"}
        </Button>
      </div>
    );
  },
);

PricingSubscriptionServiceCard.displayName = "PricingSubscriptionServiceCard";

export default PricingSubscriptionServiceCard;
