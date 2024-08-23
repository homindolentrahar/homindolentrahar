import { ReachContactData } from "@/data/home/ReachContactData";
import {
  ArrowUpRight,
  Dribbble,
  Github,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function ReachContact() {
  const contactIconClass = "stroke-[1.5px] stroke-zinc-950 dark:stroke-white";
  const contacts: ReachContactData[] = [
    {
      name: "@homindolentrahar",
      icon: <Github className={contactIconClass} />,
      url: "https://www.github.com/homindolentrahar",
    },
    {
      name: "@homindolentrahar",
      icon: <Dribbble className={contactIconClass} />,
      url: "https://dribbble.com/homindolentrahar",
    },
    {
      name: "@homindolentrhar",
      icon: <Twitter className={contactIconClass} />,
      url: "https://x.com/homindolentrhar",
    },
    {
      name: "@homindolentrahar",
      icon: <Instagram className={contactIconClass} />,
      url: "https://www.instagram.com/homindolentrahar/",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full ">
      {contacts.map((data) => (
        <ReachContactItem key={data.name} data={data} />
      ))}
    </div>
  );
}

function ReachContactItem({ data }: { data: ReachContactData }) {
  return (
    <Link
      href={data.url}
      target="_blank"
      className="flex flex-row justify-between items-center px-6 md:px-4 py-4 rounded-full border-[1.5px] border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
    >
      <span className="flex flex-row gap-4 items-center">
        {data.icon}
        <p className="block md:hidden text-sm font-normal text-zinc-950 dark:text-white">
          {data.name}
        </p>
      </span>
      <ArrowUpRight className="block md:hidden stroke-1 stroke-zinc-400 dark:stroke-zinc-500 size-5" />
    </Link>
  );
}
