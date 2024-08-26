import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Project } from "@/data/Project";
import { Link } from "@/navigation";
import Image from "next/image";

export default function LatestProjectsItem({ project }: { project: Project }) {
  return (
    <CarouselItem
      key={project.id}
      className="md:basis-1/2 min-[1440px]:basis-1/3"
    >
      <div className="flex flex-col gap-4">
        <Image
          width={360}
          height={360}
          alt={"Under construction"}
          src={
            "https://static.vecteezy.com/system/resources/thumbnails/001/218/694/small_2x/under-construction-warning-sign.jpg"
          }
          className="w-full h-[360px] rounded-[5px]"
        />
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            href={"/"}
            className="text-sm font-semibold text-teal-500 hover:text-teal-600 dark:text-teal-600 hover:dark:text-teal-500 transition-all"
          >
            {project.categoryId}
          </Link>
          <div className="flex flex-row items-center">
            {project.tags.slice(0, 3).map((tag, index, values) => {
              const isLast = index === values.length - 1;

              return (
                <p className="text-xs text-zinc-400">
                  {tag}
                  <span className={`${isLast && "hidden"}`}>
                    &nbsp; • &nbsp;
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-zinc-950 dark:text-white">
          {project.title}
        </h1>
        <p className="text text-zinc-500 dark:text-zinc-300">{project.desc}</p>
        <Button variant={"link"} className="w-fit p-0 self-end">
          View Work
        </Button>
      </div>
    </CarouselItem>
  );
}
