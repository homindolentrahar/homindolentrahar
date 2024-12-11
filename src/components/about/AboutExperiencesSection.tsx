import { cn } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import moment from "moment";

export default function AboutExperiencesSection({
  data,
}: {
  data: CollectionEntry<"experience">[];
}) {
  const [selectedExp, setSelectedExp] = useState<CollectionEntry<"experience">>(
    data[0]
  );

  return (
    <div className="w-full flex flex-col mt-16 lg:mt-32">
      <h1 className="text-2xl lg:text-3xl font-semibold text-gray-950 dark:text-white">
        Experiences
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-4 lg:mt-8">
          <ScrollArea className="flex flex-col max-h-64 lg:max-h-96 gap-4 pr-4">
            {data
              .sort(
                (a, b) =>
                  new Date(b.data.startDate).getTime() -
                  new Date(a.data.startDate).getTime()
              )
              .map((item) => {
                const isSelected = item.slug === selectedExp?.slug;

                return (
                  <div
                    onClick={() => {
                      setSelectedExp(item);
                    }}
                    className={cn(
                      isSelected
                        ? "border-gray-950 dark:border-white"
                        : "border-gray-200 dark:border-gray-800",
                      "flex flex-row p-4 rounded-md hover:bg-gray-50 hover:dark:bg-gray-900/50 border-2  cursor-pointer transition-all mb-4 last:mb-0"
                    )}
                  >
                    <div className="flex flex-col">
                      <h1 className="text-lg font-semibold text-gray-950 dark:text-white">
                        {item.data.role}
                      </h1>
                      <div className="flex flex-row items-center gap-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                          {item.data.company}
                        </p>
                        <i className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                          •
                        </i>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                          {item.data.location}
                        </p>
                      </div>
                      <div className="flex flex-row flex-wrap gap-2 mt-4">
                        {[item.data.type, item.data.workScheme].map((item) => (
                          <div className="text-sm font-medium px-3 py-1 rounded-md bg-gray-200/75 dark:bg-gray-800">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </ScrollArea>
          {selectedExp && (
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center gap-3">
                <span className="rounded-md size-10 bg-gray-200 dark:bg-gray-800" />
                <div className="flex flex-col items-start">
                  <h1 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {selectedExp?.data.role}
                  </h1>
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      {selectedExp?.data.company}
                    </p>
                    <i className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      •
                    </i>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
                      {selectedExp?.data.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-1 ms-auto self-start font-normal text-sm text-gray-500 dark:text-gray-400">
                  <p>{moment(selectedExp.data.startDate).format("MMM yyyy")}</p>
                  <p>-</p>
                  <p>
                    {selectedExp.data.endDate != undefined
                      ? moment(selectedExp.data.endDate).format("MMM yyyy")
                      : "Now"}
                  </p>
                </div>
              </div>
              <ul className="flex flex-col list-disc list-outside p-4 gap-1">
                {selectedExp.data.achievements &&
                  selectedExp.data.achievements.map(
                    (achievement: string, index: number) => (
                      <li
                        key={index}
                        className="text-base font-normal text-start text-gray-700 dark:text-gray-200"
                      >
                        {achievement}
                      </li>
                    )
                  )}
              </ul>
            </div>
          )}
        </div>
      </h1>
    </div>
  );
}
