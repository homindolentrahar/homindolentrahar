import type { CollectionEntry } from "astro:content";
import { Button } from "../ui/button";
const baseUrl = import.meta.env.BASE_URL;

export default function AboutServicesItem({
  service,
}: {
  service: CollectionEntry<"service">;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-950 dark:text-white">
        {service.data.title}
      </h1>
      <p className="font-normal text-gray-500 dark:text-gray-400 mt-2 text-center">
        {service.data.desc}
      </p>
      <div className="w-full flex flex-row flex-wrap justify-center items-stretch gap-x-6 gap-y-4 mt-8">
        {service.data.stacks.map((stack) => (
          <div className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800">
            <img
              src={`/homindolentrahar/${stack.icon}`}
              alt={stack.title}
              className="size-6"
            />
            <p className="text-gray-950 dark:text-white text-sm text-center">
              {stack.title}
            </p>
          </div>
        ))}
      </div>
      <Button
        asChild
        className="mt-8 lg:mt-16 w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
      >
        <a href={`${baseUrl}/works?type=${service.data.categorySlug}`}>
          View Works
        </a>
      </Button>
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
  );
}
