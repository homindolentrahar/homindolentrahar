import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavArrowRight } from "iconoir-react";
import type { HTMLAttributes, SVGProps } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function ServicesCarousel(
  props: HTMLAttributes<HTMLDivElement>
) {
  const services: Array<{
    title: string;
    desc: string;
    stacks: string[];
  }> = [
    {
      title: "Mobile Development",
      desc: "Lorem ipsum dolor sit amet klsdafhoi sdafhj saleio shfosa wohfnew aoklsjdfhnsdo wfeohew asklfd wofeh asdhfoih wohwef",
      stacks: ["Flutter", "Android", "Jetpack Compose"],
    },
    {
      title: "Front-End Development",
      desc: "Lorem ipsum dolor sit amet klsdafhoi sdafhj saleio shfosa wohfnew aoklsjdfhnsdo wfeohew asklfd wofeh asdhfoih wohwef",
      stacks: ["TypeScript", "Astro", "NextJS"],
    },
    {
      title: "Back-End Development",
      desc: "Lorem ipsum dolor sit amet klsdafhoi sdafhj saleio shfosa wohfnew aoklsjdfhnsdo wfeohew asklfd wofeh asdhfoih wohwef",
      stacks: ["Go", "REST API", "PostgreSQL", "Docker"],
    },
    {
      title: "Mobile UI/UX Design",
      desc: "Lorem ipsum dolor sit amet klsdafhoi sdafhj saleio shfosa wohfnew aoklsjdfhnsdo wfeohew asklfd wofeh asdhfoih wohwef",
      stacks: ["UI/UX Design", "Design System", "Design Thinking"],
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      className={cn("w-full lg:w-6/12 flex-grow", props.className)}
    >
      <CarouselContent>
        {services.map((item) => {
          return (
            <CarouselItem key={item.title}>
              <div className="flex flex-col items-center lg:items-start rounded-lg bg-gray-950 dark:bg-white px-8 py-6">
                <h1 className="text-2xl text-white dark:text-gray-950 font-semibold">
                  {item.title}
                </h1>
                <p className="text-gray-400 dark:text-gray-600 text-center lg:text-start mt-1 line-clamp-2 overflow-ellipsis">
                  {item.desc}
                </p>
                <div className="flex flex-row items-center w-full gap-2 mt-6">
                  <div className="flex flex-row flex-wrap flex-grow justify-center md:justify-start gap-2">
                    {item.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="flex flex-row justify-center items-center text-sm text-center font-medium px-4 py-[6px] border-[1.5px] dark:border-none border-gray-600 dark:border-transparent bg-gray-950 dark:bg-gray-100 text-white dark:text-gray-950 rounded-full"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <span className="hidden lg:inline-flex p-2 bg-white hover:bg-white/85 dark:bg-gray-950 hover:dark:bg-gray-950/85 rounded-full cursor-pointer transition-colors duration-200">
                    <NavArrowRight className="size-5 stroke-2 text-gray-950 dark:text-white" />
                  </span>
                </div>
                <Button
                  variant="default"
                  className="flex flex-row items-center gap-3 lg:hidden h-11 mt-6 w-full bg-white hover:bg-white/90 dark:bg-gray-950 dark:hover:bg-gray-950/85 text-gray-950 dark:text-white rounded-lg transition-colors duration-200"
                >
                  View More
                  <NavArrowRight className="size-4 text-gray-950 dark:text-white" />
                </Button>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
