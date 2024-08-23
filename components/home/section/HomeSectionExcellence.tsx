"use client";

import { Download } from "../../Icons";
import { Button } from "../../ui/button";
import RolesCarousel from "../RolesCarousel";
import { ExcellenceGrid } from "../ExcellenceGrid";
import ReachContact from "../ReachContact";

export default function HomeSectionExcellence() {
  return (
    <div className="flex flex-col items-center gap-28 px-10 lg:px-[100px] xl:px-[200px] py-10 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center gap-16 lg:gap-20">
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          <RolesCarousel />
          <h1 className="w-fit xl:w-10/12 text-zinc-950 dark:text-white text-[28px] leading-[36px] md:text-4xl md:leading-[44px] lg:text-[40px] lg:leading-[48px] font-bold text-center">
            Detail-oriented developer with a passion for building beautiful and
            robust products.
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-center w-full">
          <Button className="flex flex-row gap-2 items-center">
            Download Resume
            <Download className="size-5 stroke-2 stroke-white" />
          </Button>
          <p className="text-sm text-zinc-800 dark:text-zinc-300">
            Reach me at
          </p>
          <ReachContact />
        </div>
      </div>
      <ExcellenceGrid />
    </div>
  );
}
