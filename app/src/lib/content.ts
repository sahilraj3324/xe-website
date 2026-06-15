// Central content source for the site. Keep all copy, links, and lists here so
// components stay presentational and content is editable in one place.

export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type Stat = {
  value: string;
  caption: string;
};

export type Service = {
  title: string;
  description: string;
  imageAlt: string;
};

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "How we help", href: "/how-we-help", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "50+", caption: "Data Projects Delivered" },
  { value: "40%", caption: "Average Cloud Cost Reduction" },
  { value: "100%", caption: "Cloud-Native Solutions" },
];

export const services: Service[] = [
  {
    title: "Data Modernization",
    description:
      "Move from legacy data infrastructure to a modern, scalable stack. We assess your current systems and migrate you to cloud-native platforms that are faster, cheaper, and built to grow with you.",
    imageAlt: "Team collaborating on data modernization",
  },
  {
    title: "BI Migration",
    description:
      "Seamlessly migrate your business intelligence tools without disrupting daily operations. We move your dashboards, reports, and data models to modern BI platforms — with zero data loss and minimal downtime.",
    imageAlt: "Analyst working on a laptop during BI migration",
  },
  {
    title: "Cloud-Native Analytics",
    description:
      "Build analytics pipelines that are elastic, real-time, and cost-efficient from day one. We architect and deploy end-to-end cloud data solutions on AWS, GCP, or Azure — so your team always has the right insight at the right time.",
    imageAlt: "Team reviewing cloud-native analytics together",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Data Modernization", href: "/services/data-modernization" },
      { label: "BI Migration", href: "/services/bi-migration" },
      { label: "Cloud-Native Analytics", href: "/services/cloud-native-analytics" },
      { label: "Optimization", href: "/services/optimization" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Product", href: "/product" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter (X)", href: "https://x.com" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We'd been struggling with the same operational bottlenecks for years before XEqualTo. They helped us identify key problems in our operations. By the end of the 90 days, we had a playbook our entire leadership team could work from. It's the clearest our business has ever felt.",
    name: "James Whitfield",
    title: "CEO, Hartwell Distribution",
  },
  {
    quote:
      "XEqualTo migrated our entire analytics stack to the cloud without a single day of downtime. Reports that used to take hours now run in seconds, and our cloud bill actually went down.",
    name: "Priya Nair",
    title: "VP Data, Northwind Retail",
  },
  {
    quote:
      "What stood out was how quickly they understood our business. Within weeks we had dashboards the whole leadership team relies on every morning.",
    name: "Marcus Lindqvist",
    title: "COO, Vantage Logistics",
  },
  {
    quote:
      "I was skeptical that 90 days was enough time to make a real difference. I was wrong. XEqualTo came in, understood our business faster than I expected and delivered recommendations we could actually implement. Twelve months later, we're still running on what they built.",
    name: "Marcus Ellery",
    title: "Founder, Crestline Services",
  },
  {
    quote:
      "The Growth Playbook isn't something that sits in a drawer. We reference it in every quarterly planning session and it's reshaped how we think about hiring, process and accountability in our organization. XEqualTo didn't just consult, they transformed how our company operates.",
    name: "Sarah Okafor",
    title: "COO, Vantage Group",
  },
];

export const privacy = {
  title: "Privacy policy",
  updated: "Last updated April 2026.",
};

export type Value = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
};

export const about = {
  eyebrow: "About XEqualTo",
  title: ["A firm built on a", "single belief"],
  intro:
    "Operational clarity is the single biggest lever available to a growing company. Everything we do is built around that idea.",
  story: {
    eyebrow: "Our Story",
    title: ["Founded in 2022", "Focused from day one."],
    body: [
      "XEqualTo was started by a small group of operators who had spent years inside mid-market companies watching the same problems repeat themselves. Growth would accelerate, systems would buckle and leadership would spend more time managing chaos than building the business.",
      "We founded XEqualTo to fix that. Not with generic advice or lengthy reports that sit unread, but with embedded work — showing up, understanding the business and building something that lasts. Since 2022 we've completed engagements across manufacturing, distribution, construction, logistics and professional services. Every one of them has ended with a Growth Playbook the client still references.",
    ],
    cta: "View services",
  },
  valuesTitle: ["Operational values that", "drive us everyday"],
  teamTitle: "Meet the team",
};

export const values: Value[] = [
  {
    title: "Embedded",
    description:
      "We don't consult from a distance. We show up, learn the business and work alongside you to build the solutions.",
  },
  {
    title: "Honest",
    description:
      "We tell clients what their business needs to hear. Direct feedback is the foundation of every engagement.",
  },
  {
    title: "Depth",
    description:
      "We work with a small number of clients at a time. That focus is how we do our best work and deliver results that hold.",
  },
  {
    title: "Longevity",
    description:
      "Every system and process we design is built to outlast our involvement. We measure success by what works.",
  },
];

export const team: TeamMember[] = [
  { name: "Thomas Aldridge", role: "Managing Partner" },
  { name: "Rebecca Nair", role: "Senior Consultant" },
  { name: "Danielle Reyes", role: "Senior Consultant" },
  { name: "Claire Sutton", role: "Operations Analyst" },
  { name: "Laura Tran", role: "Client Success Lead" },
  { name: "Owen Blackwell", role: "Engagement Manager" },
];

export type BlogPost = {
  category: string;
  date: string;
  title: string;
};

export const blogCategories = ["All posts", "Operations", "Strategy", "Growth"];

export const blogPosts: BlogPost[] = [
  {
    category: "Strategy",
    date: "April 21, 2026",
    title: "The case for slowing down before your next growth push",
  },
  {
    category: "Growth",
    date: "April 21, 2026",
    title: "When to hire and when to fix the process first",
  },
  {
    category: "Strategy",
    date: "April 21, 2026",
    title: "The difference between a strategy and a plan that actually gets executed",
  },
  {
    category: "Operations",
    date: "April 21, 2026",
    title: "How to run an operations audit without disrupting your team",
  },
  {
    category: "Growth",
    date: "April 21, 2026",
    title: "What mid-market companies get wrong about scaling",
  },
  {
    category: "Operations",
    date: "April 21, 2026",
    title: "Why most process documentation fails before anyone reads it",
  },
];

export const blog = {
  eyebrow: "Blog",
  title: ["Ideas and insights", "from the field"],
  newsletter: {
    eyebrow: "Newsletter",
    title: ["Operational insights", "straight to your inbox"],
  },
};

export const site = {
  name: "XEqualTo",
  year: 2026,
  hero: {
    eyebrow: "Powered by AI",
    title: ["Simplify Complexity.", "Scale Faster."],
    body: "XEqualTo partners with businesses to turn raw data into real decisions — from analytics and strategy to building custom data products that cut costs, eliminate inefficiencies, and scale with your growth.",
    cta: "Book a discovery call",
  },
  stats: {
    title: ["Data that drives", "real results"],
  },
  why: {
    eyebrow: "Why XEqualTo",
    title: "Bad data is costing your business more than you think",
    body: "Most businesses sit on a goldmine of data but lack the infrastructure to use it. Siloed systems, slow pipelines, and outdated BI tools mean decisions get made on gut feel instead of intelligence. XEqualTo modernises your data stack, migrates your analytics, and builds cloud-native solutions that turn complexity into competitive advantage.",
    cta: "Explore services",
  },
  services: {
    title: ["Our services, built for", "the data era"],
  },
  finalCta: {
    title: ["Ready to build", "something that scales?"],
    body: "Book a discovery call and find out if XEqualTo is the right fit for your business.",
    cta: "Book a discovery call",
  },
};
