import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  id: string;
  link: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  img: string;
  subFeatures: {
    icon: React.ReactNode;
    name: string;
  }[];
}

const FeatureAlternateCard = React.forwardRef<
  HTMLAnchorElement,
  FeatureCardProps
>(
  (
    {
      id,
      link,
      icon,
      img,
      name,
      description,
      subFeatures,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          "grid grid-cols-1 items-center md:grid-cols-2",
          className,
        )}
        href={link}
      >
        <div
          className={cn(
            parseInt(id) % 2 === 0 ? "md:order-2" : "md:order-1",
            "mb-10 md:mb-0",
          )}
        >
          <img
            src={img}
            alt="feature image"
            className="h-full w-full rounded-md object-cover"
          />
        </div>

        <div
          className={cn(
            "order-1 flex flex-col gap-5",
            parseInt(id) % 2 === 0 ? "md:pr-14" : "md:pl-14",
          )}
        >
          <h2 className="text-3xl font-semibold md:text-5xl">{name}</h2>
          <p className="text-muted-foreground md:text-xl">{description}</p>

          {subFeatures.map((sf, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                <div className="rounded-md border bg-primary-foreground p-2">
                  {sf.icon}
                </div>
                <span className="md:text-xl">{sf.name}</span>
              </div>
            );
          })}
        </div>
      </a>
    );
  },
);

FeatureAlternateCard.displayName = "FeatureAlternateCard";

export default FeatureAlternateCard;
