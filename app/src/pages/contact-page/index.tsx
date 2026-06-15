import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactFAQ from "./ContactFAQ";
import CaseStudiesTestimonial from "@/app/src/pages/case-studies-page/CaseStudiesTestimonial";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
      <CaseStudiesTestimonial />
    </>
  );
}
