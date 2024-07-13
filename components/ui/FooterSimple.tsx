import { cn } from "@/lib/utils";
import React from "react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
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

const FooterSimple = React.forwardRef<HTMLDivElement, FooterProps>(
  (
    { logo, description, socials, sections, copywrite, className, ...props },
    ref,
  ) => {
    return (
      <footer>
        <div
          {...props}
          ref={ref}
          className={cn("space-y-8 py-16 md:text-xl lg:space-y-16", className)}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-3xl font-bold">{logo}</div>

              <p className="mt-4">{description}</p>

              <ul className="mt-8 flex gap-6">
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
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {sections.map((section, index) => {
                return (
                  <div key={`section_${index}`}>
                    <p className="font-semibold">{section.title}</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      {section.items.map((item, index) => {
                        return (
                          <li key={`item_${index}`}>
                            <a
                              href={item.link}
                              className="transition hover:opacity-75"
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-muted-foreground md:text-xl">{copywrite}</p>
        </div>
      </footer>
    );
  },
);

FooterSimple.displayName = "FooterSimple";

export default FooterSimple;
