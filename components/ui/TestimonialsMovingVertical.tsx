"use client";

import { tweets } from "@/lib/friday-ui-fake-data";
import { cn } from "@/lib/utils";
import React from "react";
import TestimonialsMovingVerticalCol from "@/components/ui/TestimonialsMovingVerticalCol";

interface TestimonialsMovingVerticalProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const TestimonialsMovingVertical = React.forwardRef<
  HTMLDivElement,
  TestimonialsMovingVerticalProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn("grid grid-cols-1 gap-5 md:grid-cols-3", className)}
    >
      <TestimonialsMovingVerticalCol
        items={tweets}
        speed="normal"
        pauseOnHover={true}
        className="w-full"
      />
      <TestimonialsMovingVerticalCol
        items={tweets.slice(3, 10)}
        speed="normal"
        pauseOnHover={true}
        className="hidden w-full md:block"
      />
      <TestimonialsMovingVerticalCol
        items={tweets.slice(2, 10)}
        pauseOnHover={true}
        speed="normal"
        className="hidden w-full md:block"
      />
    </div>
  );
});

TestimonialsMovingVertical.displayName = "TestimonialsMovingVertical";

export default TestimonialsMovingVertical;
