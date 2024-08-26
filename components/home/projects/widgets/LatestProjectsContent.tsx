import { CarouselContent } from "@/components/ui/carousel";
import { Project } from "@/data/Project";
import LatestProjectsItem from "./LatestProjectsItem";

export default function LatestProjectsContent({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <CarouselContent className="md:gap-4">
      {projects.map((project) => (
        <LatestProjectsItem key={project.id} project={project} />
      ))}
    </CarouselContent>
  );
}
