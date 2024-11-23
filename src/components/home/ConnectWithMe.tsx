import { Linkedin, X, Github, Instagram } from "iconoir-react";
import React, { type SVGProps } from "react";

const items: Array<{
  icon: React.FC<SVGProps<SVGSVGElement>>;
  url: string;
}> = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rahardiyan-eko-widiatmoko/",
  },
  {
    icon: Github,
    url: "https://www.github.com/homindolentrahar/",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/homindolentrahar/",
  },
  {
    icon: X,
    url: "https://x.com/homindolentrhar/",
  },
];

export default function ConnectWithMe() {
  return (
    <div className="absolute  flex flex-row items-center gap-4 md:gap-6 bottom-20 md:bottom-12">
      {items.map((item, index) => {
        const ConnectIcon = item.icon;

        return (
          <a
            href={item.url}
            target="_blank"
            aria-label={item.url}
            key={index}
            className="group p-5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            <ConnectIcon className="group-hover:-translate-y-4 transition-all duration-250 ease-in-out" />
          </a>
        );
      })}
    </div>
  );
}
