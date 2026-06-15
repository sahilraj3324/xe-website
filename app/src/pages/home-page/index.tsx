import Hero from "./Hero";
import Stats from "./Stats";
import WhyXequalto from "./WhyXequalto";
import Services from "./Services";

// Home page composition. Shared Navbar/Footer come from the root layout.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyXequalto />
      <Services />
    </>
  );
}
