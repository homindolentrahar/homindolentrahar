import type { CollectionEntry } from "astro:content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTitle,
} from "../ui/timeline";
import { Image } from "astro:assets";

export default function AboutServicesSection({
  data,
}: {
  data: CollectionEntry<"service">[];
}) {
  return (
    <Carousel className="w-full flex flex-col justify-center mt-16 lg:mt-32 min-h-[400px]">
      <CarouselContent className="w-full flex flex-row">
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-950 dark:text-white">
                {item.data.title}
              </h1>
              <p className="font-normal text-gray-500 dark:text-gray-400 mt-2 text-center">
                {item.data.desc}
              </p>
              <div className="w-full flex flex-row flex-wrap justify-center items-stretch gap-x-6 gap-y-4 mt-8">
                {item.data.stacks.map((stack) => (
                  <div className="flex flex-col items-center gap-4 w-32 p-4 rounded-md border border-gray-200 dark:border-gray-800">
                    <img
                      src={`/homindolentrahar/${stack.icon}`}
                      alt={stack.title}
                      className="size-10"
                    />
                    <p className="text-gray-950 dark:text-white text-sm text-center">
                      {stack.title}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-col items-center mt-12 md:mt-24">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-950 dark:text-white">
                  Work Process
                </h2>
              </div>
              <div className="flex flex-col items-center mt-12 md:mt-24">
                <Timeline orientation="horizontal">
                  {item.data.workingProcess?.map((item) => (
                    <TimelineItem>
                      <TimelineHeader>
                        <TimelineIcon>
                          <span className="text-center text-sm">
                            {item.icon}
                          </span>
                        </TimelineIcon>
                        <TimelineTitle>{item.title}</TimelineTitle>
                      </TimelineHeader>
                      <TimelineDescription>
                        <p>{item.desc}</p>
                      </TimelineDescription>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden md:inline-flex" />
      <CarouselPrevious className="hidden md:inline-flex" />
    </Carousel>
  );
}
