import { SeeMore } from "@/components/Icons";
import Image from "next/image";
import { MainButton } from "../MainButton";

const techStackIcons = [
  "ic_android.svg",
  "ic_flutter.svg",
  "ic_go.svg",
  "ic_react.svg",
  "ic_next.svg",
  "ic_figma.svg",
];

export default function HomeSectionMain() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center min-h-[720px] flex-grow px-10 gap-8">
        <div className="flex flex-col gap-4 items-center text-center">
          <span className="max-w-fit text-emerald-500 text-sm font-semibold px-4 py-2 bg-emerald-100 dark:bg-emerald-950 border-[1.5px] dark:border-none border-emerald-500  rounded-full">
            Available for Work
          </span>
          <h1 className="w-fit md:w-8/12 text-5xl sm:text-6xl md:text-7xl text-zinc-900 dark:text-white font-bold">
            Hello There, I'm
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-600 dark:to-teal-300 text-transparent bg-clip-text">
              Rahar
            </span>
            diyan Widiatmoko.
          </h1>
        </div>
        <p className="w-fit md:w-6/12 text-[14px] sm:text-[16px] md:text-lg text-center text-zinc-500 dark:text-zinc-400 leading-[24px]">
          Your modest Mobile Developer from Indonesia, specialize in Mobile
          Development, Mobile UI Design, and Web Development.
        </p>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center w-full md:max-w-fit">
          <MainButton
            title="View Works"
            className="w-full md:max-w-fit"
            icon={<SeeMore className="size-5 stroke-[1.5px]" />}
          />
          <MainButton
            title="Get In Touch"
            className="w-full md:max-w-fit bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white hover:drop-shadow-none"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-8 md:gap-12 lg:gap-16 lg:flex-row px-10 lg:px-[100px] xl:px-[200px] py-8 bg-zinc-950 dark:bg-zinc-900">
        <div className="flex flex-col w-full gap-3 text-center lg:text-start">
          <h2 className="text-[20px] md:text-[24px] text-white font-bold">
            Worked on 15+ projects, with over a year experience as Mobile
            Developer.
          </h2>
          <p className="text-sm text-zinc-400">
            Not just Mobile Apps, I also developing Website, API Service, and
            UI/UX Design during my study in University and killing my leisure
            time. Here's a little sneak-peak of what stack I used.
          </p>
        </div>
        <div className="flex flex-row w-full gap-4 lg:gap-6 justify-center lg:justify-end">
          {techStackIcons.map((icon) => (
            <Image
              key={icon}
              src={`/${icon}`}
              alt="Tech stack icon"
              width={48}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
