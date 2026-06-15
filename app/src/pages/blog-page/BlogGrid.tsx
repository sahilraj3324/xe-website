"use client";

import { useState } from "react";
import Container from "@/app/src/components/ui/Container";
import ImagePlaceholder from "@/app/src/components/ui/ImagePlaceholder";
import { blogCategories, blogPosts } from "@/app/src/lib/content";

export default function BlogGrid() {
  const [active, setActive] = useState("All posts");

  const posts =
    active === "All posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === active);

  return (
    <section className="bg-sky-100 pb-24">
      <Container>
        {/* Filter tabs */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-ink/15 bg-white/40 p-1">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                  active === category
                    ? "bg-navy-900 text-white"
                    : "text-slate hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Post grid */}
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <ImagePlaceholder
                label={post.category}
                className="aspect-[16/10] w-full"
              />
              <div className="mt-4 flex items-center gap-4 text-[11px] uppercase tracking-wide text-slate">
                <span>{post.category}</span>
                <span className="text-slate/70">{post.date}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
