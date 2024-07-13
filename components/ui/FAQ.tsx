"use client";

import {
  MaterialAccordion,
  MaterialAccordionContent,
  MaterialAccordionItem,
  MaterialAccordionTrigger,
} from "@/components/ui/material-accordion";
import { cn } from "@/lib/utils";
import React from "react";

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const FAQ = React.forwardRef<HTMLDivElement, FAQProps>(
  ({ className, title, description, faqs, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "flex min-w-full flex-col items-center justify-center gap-4 text-center",
          className,
        )}
      >
        <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
        <p className="max-w-xl text-muted-foreground md:text-xl">
          {description}
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-4 text-start md:text-xl">
          {faqs.map((faq, index) => (
            <MaterialAccordion
              type="single"
              collapsible
              className="w-full"
              key={index}
            >
              <MaterialAccordionItem value={`item-${index}`}>
                <MaterialAccordionTrigger>
                  {faq.question}
                </MaterialAccordionTrigger>
                <MaterialAccordionContent>
                  {faq.answer}
                </MaterialAccordionContent>
              </MaterialAccordionItem>
            </MaterialAccordion>
          ))}
        </div>
      </div>
    );
  },
);

FAQ.displayName = "FAQ";

export default FAQ;
