import { cn } from "@/lib/utils";
import React from "react";
import FeatureAlternateCard from "@/components/ui/FeatureAlternateCard";

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  features: {
    id: string;
    icon: React.ReactNode;
    name: string;
    description: string;
    link: string;
    img: string;
    subFeatures: {
      icon: React.ReactNode;
      name: string;
    }[];
  }[];
}

const FeaturesAlternate = React.forwardRef<HTMLDivElement, FeaturesProps>(
  ({ title, description, features, className, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn("min-w-full", className)}>
        <div className="grid w-full grid-cols-1 gap-16 md:gap-32">
          {features.map((feature, index) => {
            return (
              <FeatureAlternateCard
                key={index}
                icon={feature.icon}
                name={feature.name}
                description={feature.description}
                link={feature.link}
                id={feature.id}
                subFeatures={feature.subFeatures}
                img={feature.img}
              />
            );
          })}
        </div>
      </div>
    );
  },
);

FeaturesAlternate.displayName = "FeaturesAlternate";

export default FeaturesAlternate;
