import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { getCollection, type CollectionEntry } from "astro:content";
import moment from "moment";

const experiences: CollectionEntry<"experience">[] =
  await getCollection("experience");

export default function ExperienceList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {experiences
        .filter(
          (item: CollectionEntry<"experience">) =>
            item.data.type !== "Internship"
        )
        .sort(
          (a, b) =>
            new Date(b.data.startDate).getTime() -
            new Date(a.data.startDate).getTime()
        )
        .map((item: CollectionEntry<"experience">) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="w-full border-b border-gray-200 dark:border-gray-800"
          >
            <AccordionTrigger>
              <div className="w-full flex flex-col lg:flex-row gap-4 items-start">
                <div className="w-full lg:w-4/12 flex flex-row justify-between gap-4">
                  <div className="flex flex-col items-start flex-grow">
                    <h1 className="text-2xl font-bold lg:text-xl lg:font-semibold text-start text-gray-950 dark:text-white line-clamp-2 overflow-ellipsis">
                      {item.data.role}
                    </h1>
                    <a
                      href={item.data.companyUrl}
                      target="_blank"
                      className="lg:hidden text-start text-lg font-medium text-gray-950 dark:text-white underline line-clamp-1 overflow-ellipsis"
                    >
                      {item.data.company}
                    </a>
                    <h2 className="text-base text-start text-gray-500 dark:text-gray-400 mt-2 lg:mt-0 z-10">
                      {item.data.type} • {item.data.workScheme}
                    </h2>
                  </div>
                  <p className="lg:hidden text-sm text-end text-gray-500 dark:text-gray-400 mt-2">
                    {moment(item.data.startDate).format("MMM yyyy")} -{" "}
                    {item.data.endDate == null
                      ? "Now"
                      : moment(item.data.endDate).format("MMM yyyy")}
                  </p>
                </div>
                <div className="w-full flex flex-col items-start justify-between">
                  <div className="hidden lg:flex w-full flex-row justify-between">
                    <div className="flex flex-col items-start">
                      <a
                        href={item.data.companyUrl}
                        target="_blank"
                        className="text-2xl text-start font-bold text-gray-950 dark:text-white z-10 underline"
                      >
                        {item.data.company}
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {item.data.location}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {moment(item.data.startDate).format("MMM yyyy")} -{" "}
                      {item.data.endDate == null
                        ? "Now"
                        : moment(item.data.endDate).format("MMM yyyy")}
                    </p>
                  </div>

                  <AccordionContent className="flex flex-col items-start px-6">
                    <ul className="list-disc list-outside">
                      {item.data.achievements &&
                        item.data.achievements.map(
                          (achievement: string, index: number) => (
                            <li
                              key={index}
                              className="text-base font-normal text-start text-gray-700 dark:text-gray-200 lg:first:mt-4"
                            >
                              {achievement}
                            </li>
                          )
                        )}
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
