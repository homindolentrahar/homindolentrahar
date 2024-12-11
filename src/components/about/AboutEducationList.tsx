import { CubeReplaceFace, OpenInWindow } from "iconoir-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { CollectionEntry } from "astro:content";
import moment from "moment";

export default function AboutEducationList({
  data,
}: {
  data: CollectionEntry<"education">[];
}) {
  return (
    <div id="education" className="flex flex-col items-start">
      <div className="flex flex-row items-center gap-3 text-gray-950 dark:text-white">
        <CubeReplaceFace className="size-5" />
        <h1 className="text-xl font-medium">Education</h1>
      </div>
      <Accordion type="single" collapsible className="w-full mt-4 lg:mt-6">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="w-full border-b-[1.5px] border-gray-200 dark:border-gray-800"
          >
            <AccordionTrigger>
              <div className="w-full p-0 flex flex-col items-start">
                <div className="w-full flex flex-row items-center justify-between">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {moment(item.data.startDate).format("MMM yyyy")} -{" "}
                    {item.data.endDate == null
                      ? "Now"
                      : moment(item.data.endDate).format("MMM yyyy")}
                  </p>
                  {item.data.gpa && (
                    <p className="text-gray-950 dark:text-white font-medium text-sm">
                      GPA 3.99
                    </p>
                  )}
                </div>
                <h1 className="text-gray-950 dark:text-white font-semibold text-xl mt-2 text-start">
                  {item.data.title}
                </h1>
                <a
                  href={item.data.instituteUrl}
                  target="_blank"
                  className="flex flex-row items-center gap-2 underline text-lg font-medium text-gray-700 dark:text-gray-300 mt-2"
                >
                  {item.data.institute}
                  <OpenInWindow className="size-4" />
                </a>
                <AccordionContent className="mt-4">
                  <ul className="list-disc list-outside ps-4">
                    {item.data.achievements?.map((item: string) => (
                      <li
                        key={item}
                        className=" text-base font-normal text-gray-950 dark:text-white text-start"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </div>
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
