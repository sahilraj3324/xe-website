import type { Metadata } from "next";
import HomePage from "@/app/src/pages/home-page";

export const metadata: Metadata = {
  title: "XEqualTo — Simplify Complexity. Scale Faster.",
  description:
    "XEqualTo partners with businesses to turn raw data into real decisions — data modernization, BI migration, and cloud-native analytics.",
};

export default function Home() {
  return <HomePage />;
}
