"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CaretDown, Check, Language } from "./Icons";
import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "@/navigation";

const languages = [
  { name: "English", code: "en" },
  { name: "Bahasa Indonesia", code: "id" },
  { name: "Deutsch", code: "de" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathName = usePathname();
  const savedLocale = useLocale();
  const [lang, setLang] = useState(savedLocale);

  const onLanguageChange = (lang: string) => {
    setLang(lang);
    startTransition(() => {
      router.replace(`/${lang}/${pathName}`);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <Language className="size-5 stroke-zinc-900 dark:stroke-zinc-100" />
          <span
            className={`hidden max-md:flex min-[1440px]:flex items-center gap-2`}
          >
            <span className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
              {languages.find((item) => item.code === lang)?.name}
            </span>
            <CaretDown className="size-4 stroke-zinc-500 dark:stroke-zinc-100" />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((item) => {
          const isActive = item.code === lang;

          return (
            <DropdownMenuItem
              key={item.code}
              className={`cursor-pointer flex justify-between items-center ${
                isActive ? "font-semibold" : "font-normal"
              }`}
              onClick={() => {
                onLanguageChange(item.code);
              }}
              disabled={isPending}
            >
              {item.name}
              {isActive && (
                <Check className="size-4 stroke-zinc-950 dark:stroke-zinc-50" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
