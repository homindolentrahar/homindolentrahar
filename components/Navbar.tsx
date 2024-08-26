"use client";

import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { Close, Hamburger, Logo } from "./Icons";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { usePathname } from "../navigation";

export default function Navbar() {
  const t = useTranslations("navigation");
  const [isToggleNav, setIsToggleNavbar] = useState(false);
  const activePathName = usePathname();

  const navMenus = [
    { name: t("menu.home"), path: "/" },
    { name: t("menu.about"), path: "/about" },
    { name: t("menu.projects"), path: "/projects" },
    { name: t("menu.leetToLit"), path: "/leet-to-lit" },
    { name: t("menu.grinding"), path: "/grinding" },
  ];

  const toggleNavbar = () => {
    setIsToggleNavbar(!isToggleNav);
  };

  return (
    <nav className="max-w-10xl">
      <div className="fixed top-0 z-10 md:flex items-center py-0 md:py-4 w-full bg-white dark:bg-zinc-950 border-b border-b-zinc-200 dark:border-b-zinc-800 drop-shadow-md md:drop-shadow-none transition-all duration-200">
        {/* Icon */}
        <div
          className={`px-10 flex justify-between items-center flex-grow md:flex-grow-0 ${
            isToggleNav ? "border-b" : "border-b-0"
          } md:border-b-0 border-b-zinc-200 dark:border-b-zinc-800 py-4 md:py-0`}
        >
          <Link href="/">
            <Logo
              width={40}
              height={48}
              className="stroke-zinc-900 dark:stroke-zinc-50"
            />
          </Link>
          {/* Hamburger */}
          {isToggleNav ? (
            <Close
              className="stroke-zinc-500 size-6 cursor-pointer block md:hidden"
              onClick={toggleNavbar}
            />
          ) : (
            <Hamburger
              className="stroke-zinc-500 size-6 cursor-pointer block md:hidden"
              onClick={toggleNavbar}
            />
          )}
        </div>

        <div
          className={`${
            isToggleNav ? "flex" : "hidden"
          } md:flex flex-col md:flex-row flex-grow`}
        >
          {/* Menu */}
          <ul className="flex flex-col md:flex-row md:gap-2 lg:gap-4 flex-grow justify-center">
            {navMenus.map((item) => {
              const isActive = item.path === activePathName;

              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className={`px-10 py-5 md:py-4 md:px-2 lg:px-4 hover:bg-zinc-100 hover:dark:bg-zinc-800 md:hover:dark:bg-transparent md:hover:bg-transparent cursor-pointer text-sm ${
                    isActive
                      ? "font-bold text-zinc-900 dark:text-white"
                      : "font-normal text-zinc-600 dark:text-zinc-300"
                  } h-full hover:text-zinc-900 hover:dark:text-white hover:font-bold transition-all`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </ul>

          {/* Right */}
          <div className="flex justify-between items-center md:gap-4 py-4 md:py-0 px-10">
            <ThemeSwitcher />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
