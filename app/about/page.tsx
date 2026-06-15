import type { Metadata } from "next";
import AboutPage from "@/app/src/pages/about-page";

export const metadata: Metadata = {
  title: "About — XEqualTo",
  description:
    "A firm built on a single belief: operational clarity is the biggest lever available to a growing company.",
};

export default function Page() {
  return <AboutPage />;
}
