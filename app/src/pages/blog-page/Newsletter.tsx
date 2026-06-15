"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/app/src/components/ui/Container";
import Eyebrow from "@/app/src/components/ui/Eyebrow";
import { blog } from "@/app/src/lib/content";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-sky-200 py-20 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow tone="dark">{blog.newsletter.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
              {blog.newsletter.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="md:pt-2">
            <label
              htmlFor="newsletter-email"
              className="text-xs font-medium uppercase tracking-wide text-slate"
            >
              Email
            </label>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 flex overflow-hidden rounded-md border border-ink/20 bg-white"
            >
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-slate/60"
              />
              <button
                type="submit"
                className="shrink-0 bg-navy-900 px-6 text-sm font-medium text-white transition-colors hover:bg-navy-800"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate">
              By submitting the form, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-ink">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
