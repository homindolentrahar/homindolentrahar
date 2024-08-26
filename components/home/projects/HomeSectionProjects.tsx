"use client";

import { Carousel } from "@/components/ui/carousel";
import { Project } from "@/data/Project";
import LatestProjectsHeader from "./widgets/LatestProjectsHeader";
import LatestProjectsContent from "./widgets/LatestProjectsContent";

export default function HomeSectionProjects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Portevent",
      categoryId: "web-development",
      desc: "A platform to create and manage events, built with Next.js and Tailwind CSS",
      imgUrl: "",
      slug: "portevent",
      tags: ["PHP", "Code Igneter 3", "CSS", "HTML"],
    },
    {
      id: "2",
      title: "Portevent",
      categoryId: "web-development",
      desc: "A platform to create and manage events, built with Next.js and Tailwind CSS",
      imgUrl: "",
      slug: "portevent",
      tags: ["PHP", "Code Igneter 3", "CSS", "HTML"],
    },
    {
      id: "3",
      title: "Portevent",
      categoryId: "web-development",
      desc: "A platform to create and manage events, built with Next.js and Tailwind CSS",
      imgUrl: "",
      slug: "portevent",
      tags: ["PHP", "Code Igneter 3", "CSS", "HTML"],
    },
    {
      id: "4",
      title: "Portevent",
      categoryId: "web-development",
      desc: "A platform to create and manage events, built with Next.js and Tailwind CSS",
      imgUrl: "",
      slug: "portevent",
      tags: ["PHP", "Code Igneter 3", "CSS", "HTML"],
    },
    {
      id: "5",
      title: "Portevent",
      categoryId: "web-development",
      desc: "A platform to create and manage events, built with Next.js and Tailwind CSS",
      imgUrl: "",
      slug: "portevent",
      tags: ["PHP", "Code Igneter 3", "CSS", "HTML"],
    },
  ];

  return (
    <Carousel className="flex flex-col gap-16 px-10 lg:px-[100px] xl:px-[200px] py-10 md:py-16 lg:py-24 w-full">
      <LatestProjectsHeader />
      <LatestProjectsContent projects={projects} />
    </Carousel>
  );
}
