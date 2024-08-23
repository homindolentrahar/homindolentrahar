import HomeSectionExcellence from "@/components/home/section/HomeSectionExcellence";
import HomeSectionMain from "@/components/home/section/HomeSectionMain";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeSectionMain />
      <HomeSectionExcellence />
    </main>
  );
}
