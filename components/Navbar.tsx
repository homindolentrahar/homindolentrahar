"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
import { Close, Hamburger, Logo, Moon } from "./Icons";

export default function Navbar() {
  const [isToggleNav, setIsToggleNavbar] = useState(false);

  const navMenus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Leet to Lit 🔥", path: "/leet-to-lit" },
    { name: "Grinding", path: "/grinding" },
  ];

  const toggleNavbar = () => {
    setIsToggleNavbar(!isToggleNav);
  };

  return (
    <nav className="max-w-10xl">
      <div className="absolute md:flex items-center py-0 md:py-4 w-full bg-zinc-50 dark:bg-zinc-900 transition-all duration-200">
        {/* Icon */}
        <div className="px-10 flex justify-between items-center flex-grow md:flex-grow-0 border-b md:border-b-0 border-b-zinc-200 dark:border-b-zinc-800 py-4 md:py-0">
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
            {navMenus.map((item) => (
              <li
                key={item.path}
                className="px-10 py-5 md:py-4 md:px-2 lg:px-4 hover:bg-zinc-100 hover:dark:bg-zinc-800 md:hover:dark:bg-transparent md:hover:bg-transparent cursor-pointer text-zinc-600 dark:text-zinc-300 text-sm font-normal h-full hover:textzinc9 hover:dark:text-zinc-50 hover:font-bold transition-all"
              >
                <Link href={item.path} key={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
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

  // return (
  //   <nav className="w-full flex flex-row justify-between items-center px-0 sm:px-32 md:px-40 lg:px-48 xl:px-[240px] py-8 bg-slate-300 dark:bg-zinc-950">
  //     <Link href="/">
  //       <Image
  //         src="/logo.svg"
  //         alt="website logo"
  //         className="block"
  //         width={32}
  //         height={32}
  //       />
  //     </Link>
  //     <div className="absolute w-full bg-surfaceVariantLow top-12">
  //       <ul className="flex flex-col">
  //         {["Home", "About", "Projects", "🔥 Leet to Lit", "Study Notes"].map(
  //           (item) => (
  //             <li className="p-5">
  //               <Link
  //                 href={"/" + item}
  //                 className="text-outline font-normal h-full hover:text-onSurface hover:font-bold transition-all"
  //                 key={item}
  //               >
  //                 {item}
  //               </Link>
  //             </li>
  //           )
  //         )}
  //       </ul>
  //     </div>
  //     <div className="flex flex-grow justify-end">
  //       <ul className="hidden min-[1275px]:flex flex-row flex-grow">
  //         {["Home", "About", "Projects", "🔥 Leet to Lit", "Study Notes"].map(
  //           (item) => (
  //             <li>
  //               <Link
  //                 href={"/" + item}
  //                 className="text-outline font-normal px-6 py-4 hover:text-onSurface hover:font-bold transition-all"
  //                 key={item}
  //               >
  //                 {item}
  //               </Link>
  //             </li>
  //           )
  //         )}
  //       </ul>
  //       <div className="flex flex-row gap-4">
  //         <div className="hidden md:flex md:gap-4">
  //           <ThemeSwitcher />
  //           <LanguageSelector />
  //           <Image src="/ic_github.svg" alt="github" width={24} height={24} />
  //         </div>
  //         <Image
  //           src="/ic_hamburger.svg"
  //           alt="github"
  //           width={24}
  //           height={24}
  //           className="block min-[1275px]:hidden"
  //         />
  //       </div>
  //     </div>
  //   </nav>
  // );
}
