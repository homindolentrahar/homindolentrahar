import { cn } from "@/lib/utils";
import React from "react";

type WorksTabData = {
  title: string;
  slug: string;
};

const data: WorksTabData[] = [
  { title: "All", slug: "all" },
  { title: "Mobile", slug: "mobile" },
  { title: "Front-End", slug: "front-end" },
  { title: "Back-End", slug: "back-end" },
  { title: "UIX Design", slug: "ui-ux" },
];

export default function WorksTab({
  onClick,
}: {
  onClick: (slug: string) => void;
}) {
  const [activeTab, setActiveTab] = React.useState("all");

  return (
    <div className="flex flex-row gap-2 rounded-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-4/12 ">
      {data.map((item) => (
        <span
          key={item.slug}
          onClick={() => {
            setActiveTab(item.slug);
            onClick(item.slug);
          }}
          className={cn(
            "w-full p-2 rounded-lg text-sm text-center self-center cursor-pointer text-gray-500 dark:text-gray-400 transition-all duration-200",
            activeTab === item.slug &&
              "bg-gray-950 dark:bg-white text-white dark:text-gray-950 font-medium"
          )}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}
