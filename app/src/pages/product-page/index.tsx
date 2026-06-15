import HeroIntro from "./HeroIntro";
import StatementSection from "./StatementSection";
import FeatureGrid from "./FeatureGrid";
import ProcessSection from "./ProcessSection";
import LeadershipSection from "./LeadershipSection";
import IndustriesSection from "./IndustriesSection";
import FAQSection from "./FAQSection";
import Testimonial from "@/app/src/components/sections/Testimonial";

export default function ProductPage() {
  return (
    <>
      <HeroIntro />
      <StatementSection />
      <FeatureGrid />
      <ProcessSection />
      <LeadershipSection />
      <IndustriesSection />
      <FAQSection />
      <Testimonial />
    </>
  );
}
