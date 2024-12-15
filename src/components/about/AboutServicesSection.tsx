import type { CollectionEntry } from "astro:content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AboutServicesItem from "./AboutServicesItem";

export default function AboutServicesSection({
  data,
}: {
  data: CollectionEntry<"service">[];
}) {
  return (
    <Carousel className="w-full flex flex-col justify-center mt-16 lg:mt-32 min-h-[400px]">
      <CarouselContent className="w-full flex flex-row">
        {data
          .sort((a, b) => a.data.priority - b.data.priority)
          .map((item) => (
            <CarouselItem key={item.id}>
              <AboutServicesItem service={item} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext className="hidden md:inline-flex" />
      <CarouselPrevious className="hidden md:inline-flex" />
    </Carousel>
  );
}
