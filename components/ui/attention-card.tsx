"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";

const AttentionCardVariants = cva("relative z-10 rounded-md bg-background", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "bg-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AttentionCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AttentionCardVariants> {
  containerClassName?: string;
}

const AttentionCard = React.forwardRef<HTMLDivElement, AttentionCardProps>(
  ({ children, className, variant, containerClassName, ...props }, ref) => {
    const variants = {
      initial: {
        backgroundPosition: "0 0",
      },
      animate: {
        backgroundPosition: ["0 0", "-200% 0"],
      },
    };

    return (
      <div
        {...props}
        className={cn("group relative p-[4px]", containerClassName)}
        ref={ref}
      >
        <motion.div
          className="absolute inset-0 z-0 inline-flex items-center justify-center text-nowrap rounded-md bg-[linear-gradient(110deg,transparent,45%,#d1d1d1,55%,transparent)] bg-[length:200%_100%] font-medium transition-colors dark:bg-[linear-gradient(110deg,transparent,45%,#1e2631,55%,transparent)]"
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 5,
            repeatDelay: 0,
            ease: "linear",
          }}
          variants={variants}
        />

        <div className={cn(AttentionCardVariants({ variant, className }))}>
          {children}
        </div>
      </div>
    );
  },
);
AttentionCard.displayName = "AttentionCard";

const AttentionCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
AttentionCardHeader.displayName = "CardHeader";

const AttentionCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
AttentionCardTitle.displayName = "CardTitle";

const AttentionCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm", className)} {...props} />
));
AttentionCardDescription.displayName = "CardDescription";

const AttentionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
AttentionCardContent.displayName = "CardContent";

const AttentionCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
AttentionCardFooter.displayName = "CardFooter";

export {
  AttentionCard,
  AttentionCardHeader,
  AttentionCardFooter,
  AttentionCardTitle,
  AttentionCardDescription,
  AttentionCardContent,
};
