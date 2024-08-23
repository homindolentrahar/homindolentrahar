import { ExcellenceData } from "@/data/home/ExcellenceData";
import { SquareDashedBottomCode, Waypoints, Zap } from "lucide-react";

export function ExcellenceGrid() {
  const excellentIconClass =
    "stroke-[1.5px] stroke-white group-hover:animate-bounce duration-100";
  const datas: ExcellenceData[] = [
    {
      name: "Attention-to-Detail",
      desc: "Less likely will miss the detail you defined before, I followed guideline and specification carefully to ensure everything is in place",
      icon: <SquareDashedBottomCode className={excellentIconClass} />,
    },
    {
      name: "Fast Learner",
      desc: "Able to complete onboarding process quickly, and adapt to existing codebase in project within only a week to match your team's pace",
      icon: <Zap className={excellentIconClass} />,
    },
    {
      name: "Remote Battle-tested",
      desc: "Experienced working in both WFH and Hybrid scheme for over a year, flexible hour and online communication is not a new thing",
      icon: <Waypoints className={excellentIconClass} />,
    },
  ];

  return (
    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 w-10/12 md:w-6/12 lg:w-fit gap-12 lg:gap-18 xl:gap-24">
      {datas.map((data) => (
        <div key={data.name} className="flex flex-col items-center gap-4 group">
          <div className="p-6 bg-zinc-950 dark:bg-zinc-800 rounded-full w-fit">
            {data.icon}
          </div>
          <h1 className="text-xl text-zinc-950 dark:text-white font-bold">
            {data.name}
          </h1>
          <p className="text-sm text-center text-zinc-500 dark:text-zinc-300">
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
