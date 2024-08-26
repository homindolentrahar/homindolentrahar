import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestProjectsHeader() {
  const { scrollPrev, canScrollPrev, scrollNext, canScrollNext } =
    useCarousel();

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start w-full md:gap-8 lg:gap-12 xl:gap-16">
      <div className="flex flex-col items-center md:items-start gap-4  md:w-8/12 xl:w-6/12">
        <h1 className="text-zinc-900 dark:text-white text-[28px] leading-[36px] md:text-4xl md:leading-[44px] lg:text-[40px] lg:leading-[48px] font-bold">
          Latest Projects
        </h1>
        <p className="text-zinc-500 dark:text-zinc-300 text-sm md:text-base text-center md:text-start">
          Here are projects I've worked on during my professional experiences,
          and also some side project for learning purpose{" "}
        </p>
      </div>
      <div className="hidden md:flex flex-row gap-5">
        <Button
          size={"icon"}
          variant={"outline"}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ChevronLeft className="size-5 stroke-zinc-500 dark:stroke-zinc-100" />
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ChevronRight className="size-5 stroke-zinc-500 dark:stroke-zinc-100" />
        </Button>
      </div>
    </div>
  );
}
