import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import Values from "./Values";
import MeetTheTeam from "./MeetTheTeam";
import Testimonial from "@/app/src/components/sections/Testimonial";

// About page. Shared Navbar/Footer come from the root layout.
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Values />
      <MeetTheTeam />
      <Testimonial />
    </>
  );
}
