import type { Metadata } from "next";
import CaseStudiesPage from "@/app/src/pages/case-studies-page";

export const metadata: Metadata = {
  title: "Case Studies - XEqualTo",
  description:
    "Results that speak for themselves: XEqualTo case studies across construction, healthcare, logistics, and distribution.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
