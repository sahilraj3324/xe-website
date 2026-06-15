"use client";

import { useState } from "react";
import Container from "@/app/src/components/ui/Container";
import { testimonials } from "@/app/src/lib/content";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const item = testimonials[index];

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  const navBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:bg-ink/5";

  return (
    <section className="bg-sky-200 py-24">
      <Container className="relative">
        {/* Arrows */}
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className={`absolute left-0 top-1/2 hidden -translate-y-1/2 md:flex ${navBtn}`}
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className={`absolute right-0 top-1/2 hidden -translate-y-1/2 md:flex ${navBtn}`}
        >
          <Arrow dir="right" />
        </button>

        {/* Quote */}
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl leading-snug text-ink md:text-3xl md:leading-snug">
            “{item.quote}”
          </p>

          <footer className="mt-10 flex items-center justify-center gap-3">
            <span
              aria-hidden
              className="h-11 w-11 shrink-0 rounded-md bg-gradient-to-br from-navy-700 to-navy-950"
            />
            <span className="text-left">
              <span className="block text-sm font-medium text-ink">
                {item.name}
              </span>
              <span className="block text-xs uppercase tracking-wide text-slate">
                {item.title}
              </span>
            </span>
          </footer>
        </blockquote>

        {/* Mobile arrows */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className={navBtn}
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className={navBtn}
          >
            <Arrow dir="right" />
          </button>
        </div>
      </Container>
    </section>
  );
}
