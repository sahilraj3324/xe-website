import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";
import Newsletter from "./Newsletter";

// Blog page. Shared Navbar/Footer come from the root layout.
export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </>
  );
}
