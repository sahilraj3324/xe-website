import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";
import Testimonial from "@/app/src/components/sections/Testimonial";

// Privacy page. Shared Navbar/Footer come from the root layout.
export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <Testimonial />
    </>
  );
}
