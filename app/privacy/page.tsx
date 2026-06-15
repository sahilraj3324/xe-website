import type { Metadata } from "next";
import PrivacyPage from "@/app/src/pages/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy — XEqualTo",
  description: "How XEqualTo collects, uses, and protects your information.",
};

export default function Page() {
  return <PrivacyPage />;
}
