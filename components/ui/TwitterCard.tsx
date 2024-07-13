import { cn } from "@/lib/utils";
import React from "react";

interface TwitterCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  profilePhotoURL: string;
  name: string;
  username: string;
  tweet: string;
}

const TwitterCard = React.forwardRef<HTMLAnchorElement, TwitterCardProps>(
  (
    { link, profilePhotoURL, name, username, tweet, className, ...props },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          "block rounded-xl border border-[rgba(255,255,255,0.10)] bg-gray-100 p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] dark:bg-[rgba(13,13,13,0.70)]",
          className,
        )}
        href={link}
      >
        <div className="flex justify-between">
          <div className="mb-6 flex gap-3">
            <img
              src={profilePhotoURL}
              className="h-12 w-12 rounded-full"
              alt="profile photo"
              aria-hidden="true"
            />

            <div>
              <p className="text-md font-semibold">{name}</p>
              <p className="text-md text-muted-foreground">{username}</p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 1668.56 1221.19"
            viewBox="0 0 1668.56 1221.19"
            className="text-primary-500 mt-[2px] h-6 w-6 fill-current"
          >
            <path
              d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
              transform="translate(52.39 -25.059)"
            ></path>
          </svg>
        </div>

        <p>{tweet}</p>
      </a>
    );
  },
);

TwitterCard.displayName = "TwitterCard";

export default TwitterCard;
