import { RoleData } from "@/data/home/RoleData";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function RolesCarousel() {
  const roles: RoleData[] = [
    {
      name: "Mobile Developer",
      icon: "🔥",
      color: "text-red-500",
      colorDark: "text-red-600",
    },
    {
      name: "Frontend Developer",
      icon: "💻",
      color: "text-sky-500",
      colorDark: "text-sky-600",
    },
    {
      name: "Backend Developer",
      icon: "💽",
      color: "text-amber-500",
      colorDark: "text-amber-600",
    },
    {
      name: "UI/UX Designer",
      icon: "🎨",
      color: "text-indigo-500",
      colorDark: "text-indigo-600",
    },
  ];

  return (
    <div>
      <div className="hidden lg:flex flex-row gap-12 justify-center">
        {roles.map((role) => (
          <span key={role.name} className={`font-semibold ${role.color}`}>
            {role.icon} {role.name}
          </span>
        ))}
      </div>
      <div className="block lg:hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ]}
        >
          <CarouselContent>
            {roles.map((role) => (
              <CarouselItem
                key={role.name}
                className={`font-semibold ${role.color} text-center`}
              >
                {role.icon} {role.name}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
