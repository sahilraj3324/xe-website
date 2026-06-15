import type { Metadata } from "next";
import ContactPage from "@/app/src/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact - XEqualTo",
  description:
    "Book a free discovery call with XEqualTo to discuss your next stage of growth.",
};

export default function Page() {
  return <ContactPage />;
}
