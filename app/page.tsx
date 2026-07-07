import { HeroSlider } from "@/components/sections/HeroSlider";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { Stats } from "@/components/sections/Stats";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesPreview />
      <WhyChoose />
      <SolutionsPreview />
      <IndustriesPreview />
      <ProcessPreview />
      <Stats />
      <FinalCTA />
    </>
  );
}
