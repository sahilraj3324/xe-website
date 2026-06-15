import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

type Variant = "light" | "dark";

export default function Button({
  children,
  href,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  if (variant === "dark") {
    // Primary: teal gradient fill + flush full-height white arrow box.
    return (
      <Link
        href={href}
        className={`group inline-flex items-center overflow-hidden rounded-md border border-[#d6f0ff]/90 bg-gradient-to-b from-[#016494] to-[#005780] text-sm font-medium text-[#eaf8ff] shadow-sm transition-[filter] hover:brightness-110 ${className}`}
      >
        <span className="py-3 pl-5 pr-6">{children}</span>
        <span className="flex w-11 self-stretch items-center justify-center border-l border-[#003150]/20 bg-white text-[#0d3a58]">
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    );
  }

  // Light: white fill, dark text, small bordered arrow box (hero).
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-md bg-white py-2 pl-5 pr-2 text-sm font-medium text-navy-900 shadow-sm transition-colors hover:bg-sky-50 ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded border border-navy-900/20 text-navy-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowIcon className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
