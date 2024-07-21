import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  description: string;
  socials: { name: string; link: string; icon: React.ReactNode }[];
  sections: {
    title: string;
    items: {
      name: string;
      link: string;
    }[];
  }[];
  copywrite: string;
}

const FooterMinimal = React.forwardRef<HTMLDivElement, FooterProps>(
  (
    { icon, description, socials, sections, copywrite, className, ...props },
    ref,
  ) => {
    return (
      <footer className="w-full">
        <div
          {...props}
          ref={ref}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-8 py-16 text-center",
            className,
          )}
        >
          {/* Footer Menu */}
          <div className="flex gap-4">
            {sections.map((section, index) => {
              return (
                <Link key={`section_${index}`} href="#">
                  <p className="cursor-pointer font-semibold hover:underline">
                    {section.title}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Socials */}
          <ul className="flex gap-6">
            {socials.map((social, index) => {
              return (
                <li key={index}>
                  <a
                    href={social.link}
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">{social.name}</span>

                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Copywrite */}
          <p className="text-center text-muted-foreground md:text-xl">
            {copywrite}
          </p>
        </div>
      </footer>
    );
  },
);

FooterMinimal.displayName = "FooterMinimal";

export default FooterMinimal;
