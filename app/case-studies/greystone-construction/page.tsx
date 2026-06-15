import type { Metadata } from "next";
import CaseStudyPage from "@/app/src/pages/case-study-page";

export const metadata: Metadata = {
  title:
    "Eliminating project overruns for a mid-size construction firm - XEqualTo",
  description:
    "How XEqualTo helped Greystone Construction reduce project overruns, shorten delivery times, and clarify ownership.",
};

export default function Page() {
  return <CaseStudyPage />;
}
