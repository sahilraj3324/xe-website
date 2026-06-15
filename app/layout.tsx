import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/src/components/layout/Navbar";
import Footer from "@/app/src/components/layout/Footer";

const gambarino = localFont({
  src: "../public/fonts/Gambarino-Regular.woff2",
  variable: "--font-gambarino",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XEqualTo — Simplify Complexity. Scale Faster.",
  description:
    "XEqualTo partners with businesses to turn raw data into real decisions — data modernization, BI migration, and cloud-native analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gambarino.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sky-100 text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
