import type { Metadata } from "next";
import BlogPage from "@/app/src/pages/blog-page";

export const metadata: Metadata = {
  title: "Blog — XEqualTo",
  description: "Ideas and insights from the field on operations, strategy, and growth.",
};

export default function Page() {
  return <BlogPage />;
}
