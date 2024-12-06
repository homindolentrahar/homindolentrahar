import WorksTab from "@/components/works/WorksTab";
import type { CollectionEntry } from "astro:content";
import { NavArrowRight, Box } from "iconoir-react";
import { cn } from "@/lib/utils";
import React from "react";

const baseUrl = import.meta.env.BASE_URL;

export default function WorksContent({
  works,
  className,
}: {
  works: CollectionEntry<"project">[];
  className?: string;
}) {
  const [fileteredWorks, setFilteredWorks] = React.useState(works);

  function filterWorks(type: string) {
    if (type === "all") {
      return setFilteredWorks(works);
    }

    const filtered = works.filter((work) => work.data.category.slug === type);
    setFilteredWorks(filtered);
  }

  return (
    <div
      className={cn(`flex flex-col items-center gap-8 lg:gap-12`, className)}
    >
      <WorksTab
        onClick={(type) => {
          console.log(type);

          filterWorks(type);
        }}
      />
      {fileteredWorks.length == 0 && (
        <div className="w-full h-full flex-grow lg:w-10/12 flex flex-col justify-center items-center">
          <Box className="size-16 stroke-1 text-gray-500 dark:text-gray-400" />
          <h1 className="mt-4 text-xl font-semibold text-gray-950 dark:text-white">
            No works found
          </h1>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Looks like I have no works under this field yet, feel free to check
            out other works
          </p>
        </div>
      )}
      {fileteredWorks.length != 0 && (
        <div className="w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8">
          {fileteredWorks.map((item) => (
            <div className="flex flex-col p-4 rounded-lg border border-gray-200 dark:border-gray-800">
              <img
                src={item.data.thumbnailUrl}
                alt={item.data.title}
                className="w-full h-72 rounded-lg bg-gray-200"
              />
              <div className="w-full flex flex-row justify-between mt-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.data.category.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.data.stacks.join(" • ")}
                </p>
              </div>
              <h1 className="text-2xl font-bold mt-3 line-clamp-2 overflow-ellipsis text-gray-950 dark:text-white">
                {item.data.title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-3 overflow-ellipsis">
                {item.data.desc}
              </p>
              <a
                href={`${baseUrl}/works/${item.slug}`}
                className="flex flex-row items-center gap-1 w-fit mt-6 text-sm font-semibold text-gray-950 dark:text-white hover:underline hover:underline-offset-2"
              >
                View Projects
                <NavArrowRight className="size-4 stroke-2 text-gray-950 dark:text-white" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
