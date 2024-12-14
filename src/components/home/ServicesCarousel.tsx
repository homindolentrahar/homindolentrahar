import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavArrowRight } from "iconoir-react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import type { CollectionEntry } from "astro:content";

export default function ServicesCarousel({
  data,
}: {
  data: CollectionEntry<"service">[];
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      className={cn("w-full lg:w-6/12 flex-grow")}
    >
      <CarouselContent>
        {data.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <div className="flex flex-col items-center lg:items-start rounded-lg border-[1.5px] border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/15 px-8 py-6">
                <h1 className="text-2xl text-gray-950 dark:text-white font-semibold">
                  {item.data.title}
                </h1>
                <p className="font-normal text-gray-500 dark:text-gray-400 text-center lg:text-start mt-1 line-clamp-2 overflow-ellipsis">
                  {item.data.desc}
                </p>
                <div className="flex flex-row items-center w-full gap-2 mt-6">
                  <div className="flex flex-row flex-wrap flex-grow justify-center md:justify-start gap-2">
                    {item.data.stacks.map((stack) => (
                      <span
                        key={stack.slug}
                        className="flex flex-row justify-center items-center text-[12px] font-medium text-center px-4 py-1 border-[1.5px] border-gray-200 dark:border-none dark:border-transparent bg-transparent dark:bg-gray-800 text-gray-950 dark:text-white rounded-full"
                      >
                        {stack.title}
                      </span>
                    ))}
                  </div>

                  <span className="hidden lg:inline-flex p-2 bg-gray-950 hover:bg-gray-950/90 dark:bg-white dark:hover:bg-white/90 rounded-full cursor-pointer transition-colors duration-200">
                    <NavArrowRight className="size-5 stroke-2 dark:text-gray-950 text-white" />
                  </span>
                </div>
                <Button
                  variant="default"
                  className="flex flex-row items-center gap-3 lg:hidden h-11 mt-6 w-full bg-gray-950 hover:bg-gray-950/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-gray-950 rounded-lg transition-colors"
                >
                  View More
                  <NavArrowRight className="size-4 text-white dark:text-gray-950" />
                </Button>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
