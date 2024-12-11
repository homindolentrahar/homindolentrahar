import { SelectFace3d } from "iconoir-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { CollectionEntry } from "astro:content";
import { Button } from "@/components/ui/button";
import moment from "moment";

export default function AboutEducationList({
  data,
}: {
  data: CollectionEntry<"course">[];
}) {
  return (
    <div id="education" className="flex flex-col items-start">
      <div className="flex flex-row items-center gap-3 text-gray-950 dark:text-white">
        <SelectFace3d className="size-5" />
        <h1 className="text-xl font-medium">Course</h1>
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
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {moment(item.data.startDate).format("MMM yyyy")} -{" "}
                  {item.data.endDate == null
                    ? "Now"
                    : moment(item.data.endDate).format("MMM yyyy")}
                </p>

                <h1 className="text-gray-950 dark:text-white font-semibold text-xl mt-2">
                  {item.data.title}
                </h1>
                <a
                  href={item.data.providerUrl}
                  target="_blank"
                  className="underline text-lg text-gray-700 dark:text-gray-300 mt-1"
                >
                  {item.data.provider}
                </a>
                <AccordionContent className="mt-4">
                  <ul className="list-disc list-outside ps-4">
                    {item.data.learnPoints?.map((item: string) => (
                      <li
                        key={item}
                        className="text-gray-950 font-normal text-base dark:text-white text-start"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
                {item.data.certificateUrl && (
                  <Button variant="outline" className="mt-4" asChild>
                    <a href={item.data.certificateUrl} target="_blank">
                      View Certificate
                    </a>
                  </Button>
                )}
              </div>
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
