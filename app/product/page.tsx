import type { Metadata } from "next";
import ProductPage from "@/app/src/pages/product-page";

export const metadata: Metadata = {
  title: "Qupər — XEqualTo",
  description:
    "Qupər is a structured XEqualTo engagement that aligns leadership, roles, and accountability around a highly efficient operating model.",
};

export default function Page() {
  return <ProductPage />;
}
