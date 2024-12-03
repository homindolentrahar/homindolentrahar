import { getCollection, type CollectionEntry } from "astro:content";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { NavArrowRight } from "iconoir-react";
import { Button } from "../ui/button";

const baseUrl = import.meta.env.BASE_URL;
const projects: CollectionEntry<"project">[] = await getCollection("project");

export default function LatestProjectsCarousel() {
  return (
    <div
      id="latest-projects"
      className="flex flex-col items-start gap-8 md:gap-12 w-full lg:w-10/12 h-fit px-8 py-16 lg:py-12"
    >
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-950 dark:text-white">
          Latest Projects
        </h1>
        <Button
          asChild
          variant="outline"
          className="px-4 py-2 h-fit text-sm text-gray-950 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <a href={`${baseUrl}/works`}>More Projects</a>
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {projects.map((item) => (
            <CarouselItem
              key={item.data.title}
              className="w-full md:basis-1/2 xl:basis-1/3 flex flex-col"
            >
              <img
                src={item.data.thumbnailUrl}
                alt={item.data.title}
                className="w-full h-80 rounded-lg bg-gray-200"
              />
              <div className="w-full flex flex-row justify-between mt-4">
                <p className="text-sm font-medium">
                  {item.data.category.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.data.stacks.join(" • ")}
                </p>
              </div>
              <h1 className="text-2xl font-bold mt-4 line-clamp-2 overflow-ellipsis text-gray-950 dark:text-white">
                {item.data.title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-3 overflow-ellipsis">
                {item.data.desc}
              </p>
              <a
                href="/"
                className="flex flex-row items-center gap-2 w-fit mt-6 font-bold text-gray-950 dark:text-white hover:underline hover:underline-offset-2"
              >
                View Projects
                <NavArrowRight className="size-4" />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
