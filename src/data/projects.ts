// data/projects.ts

export type ProjectLink = {
  label: "GitHub" | "Live" | "Demo" | "Write-up";
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;

  // Short card description (1–2 sentences)
  description: string;

  // Longer overview used on detail page
  overview: string;

  featured: boolean;

  stack: {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    tooling?: string[];
  };

  // quick badges shown on cards (keep tight)
  tech: string[];

  // 3–5 bullets; recruiter-friendly and specific
  highlights: string[];

  // Case-study sections
  caseStudy: {
    problem: string;
    goals: string[];
    approach: string[];
    architecture: string[]; // keep simple + readable
    security: string[];
    challenges: string[];
    results: string[];
    nextSteps: string[];
  };

  links: ProjectLink[];

  // Optional extras for later
  meta?: {
    year?: string;
    role?: string;
    team?: "Solo" | "Team";
  };
};

export const projects: Project[] = [
  {
    slug: "mybookbag",
    title: "myBookBag",
    tagline: "A Goodreads-style app with user-owned reviews & collections.",
    description:
      "Search books via Google Books, save favorites, and manage personal reviews with a clean UI and security-minded patterns.",
    overview:
      "myBookBag is a book discovery + personal library app built to feel simple for users while staying solid underneath. It supports searching and viewing book details via a public API, saving items into a personal collection, and writing reviews that persist in a database.",
    featured: true,
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Google Books API"],
    stack: {
      frontend: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "REST APIs", "Auth patterns (JWT/session-based)"],
      data: ["MongoDB", "Data modeling for reviews/collections"],
      tooling: ["Git/GitHub", "Environment variable hygiene"],
    },
    highlights: [
      "Integrated Google Books search + detail views with a clean, mobile-friendly UI",
      "Built persistent user reviews and a personal collection workflow",
      "Designed inputs and data flows with practical security and maintainability in mind",
    ],
    caseStudy: {
      problem:
        "Readers often want a lightweight way to track books and reviews without a cluttered experience or losing their personal notes across sessions.",
      goals: [
        "Fast search + detail experience for books",
        "Personal collection + reviews that persist",
        "Clear, consistent UI patterns across the app",
        "Security-aware handling of user inputs and sensitive configuration",
      ],
      approach: [
        "Defined a small, reusable UI system (cards, tags, buttons) to keep UX consistent",
        "Modeled core entities (users, saved books, reviews) to support clean CRUD flows",
        "Implemented data validation and defensive handling of external API responses",
      ],
      architecture: [
        "Next.js App Router for page routing and server/client boundaries",
        "API layer for operations like save/review (server-side handlers or Node/Express endpoints depending on implementation)",
        "MongoDB collections for user data and review persistence",
      ],
      security: [
        "Validated/normalized inputs before storing user-generated content",
        "Kept secrets out of the repo and used environment variables",
        "Avoided trusting external API payloads; handled nulls/missing fields safely",
      ],
      challenges: [
        "Keeping a complex feature set (search, details, reviews, collections) feeling simple",
        "Ensuring review persistence and retrieval stays consistent as the schema evolves",
      ],
      results: [
        "End-to-end flow: search → details → save → review → view collection",
        "A clean base for adding more features (sorting, filters, user profile, etc.)",
      ],
      nextSteps: [
        "Add stronger password policies and rate limiting",
        "Add sorting/filtering in collections and review pages",
        "Improve accessibility and add better empty/loading states",
      ],
    },
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
    ],
    meta: { year: "2025", role: "Full-stack Developer", team: "Solo" },
  },

  {
    slug: "url-shortener",
    title: "URL Shortener",
    tagline: "Custom aliases, uniqueness checks, and clean redirects.",
    description:
      "A short-link service with validation, duplicate prevention, and secure environment variable usage.",
    overview:
      "A practical URL shortener that prioritizes correctness and safety: inputs are validated, aliases must be unique, and redirects behave predictably. Built with Next.js App Router patterns and a database-backed alias dictionary.",
    featured: true,
    tech: ["Next.js", "TypeScript", "MongoDB", "Validation"],
    stack: {
      frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
      backend: ["Route handlers / server actions (as used)", "Redirect logic"],
      data: ["MongoDB (alias dictionary)"],
      tooling: ["Git/GitHub", "Env vars", "Testing via local/dev flows"],
    },
    highlights: [
      "Prevented duplicate aliases with database checks and predictable error handling",
      "Validated and normalized URLs to reduce bad data and edge-case redirects",
      "Implemented clean redirect routing using App Router conventions",
    ],
    caseStudy: {
      problem:
        "Most simple URL shorteners break down when inputs are messy: duplicates, invalid URLs, and inconsistent redirect behavior.",
      goals: [
        "Ensure alias uniqueness and predictable outcomes",
        "Validate URLs and reject unsafe/invalid input",
        "Keep the UX fast and minimal (mobile-friendly)",
      ],
      approach: [
        "Designed the alias model first (unique index/check + normalization)",
        "Implemented input validation and user-friendly errors",
        "Separated create vs redirect flows for clarity and maintainability",
      ],
      architecture: [
        "Next.js App Router: create page + redirect route (dynamic segment)",
        "Database lookup by alias and server-side redirect",
      ],
      security: [
        "Validated URLs (scheme/format) to reduce injection and bad redirects",
        "Used environment variables for connection strings/keys (never hardcoded)",
        "Defensive handling of unknown aliases (no leaking internals)",
      ],
      challenges: [
        "Edge cases around URL normalization and alias collisions",
        "Keeping redirect logic reliable across client/server boundaries",
      ],
      results: [
        "Stable alias creation with uniqueness constraints",
        "Fast redirects via database lookup + server-side redirect",
      ],
      nextSteps: [
        "Add analytics (click counts) with privacy-friendly aggregation",
        "Add rate limiting and abuse prevention",
        "Add custom expiration rules per alias",
      ],
    },
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live", href: "#" },
    ],
    meta: { year: "2025", role: "Full-stack Developer", team: "Solo" },
  },

  {
    slug: "expense-tracker",
    title: "Personal Expense Tracker",
    tagline: "A practical tracker built around real workflows.",
    description:
      "CRUD expense tracking with reporting-friendly data structure and clear UI flows.",
    overview:
      "A personal expense tracker focused on clarity: add expenses quickly, categorize consistently, and view summaries that actually help you understand spending. Built with straightforward architecture and clean, maintainable patterns.",
    featured: true,
    tech: ["Node.js", "Express", "MongoDB", "CRUD", "Reporting"],
    stack: {
      frontend: ["(If applicable) HTML/CSS/JS or React UI", "Tailwind (if used)"],
      backend: ["Node.js", "Express", "REST APIs"],
      data: ["MongoDB (expenses, categories)"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Designed simple CRUD flows that map to real expense tracking behavior",
      "Structured data to support summaries and reporting views",
      "Focused on readability and maintainability over complexity",
    ],
    caseStudy: {
      problem:
        "Expense tracking apps often feel heavy. Users need a quick way to log spending and see meaningful summaries without friction.",
      goals: [
        "Fast logging flow with minimal steps",
        "Categories and structure that support reporting",
        "A clean UI that works well on mobile",
      ],
      approach: [
        "Modeled expenses + categories to keep reporting easy",
        "Built consistent endpoints and UI patterns for CRUD actions",
        "Kept the product scope tight to maximize polish and reliability",
      ],
      architecture: [
        "Express REST API for expenses and categories",
        "MongoDB for persistence",
        "Simple presentation layer (server-rendered or client-rendered UI)",
      ],
      security: [
        "Input validation for numeric fields and categories",
        "Basic safe defaults (no trusting client-side values blindly)",
      ],
      challenges: [
        "Designing summaries that are useful without overcomplicating the data model",
      ],
      results: [
        "Clean expense entry and a stable base for reports",
        "A maintainable codebase that can grow into budgeting features",
      ],
      nextSteps: [
        "Add charts and monthly comparisons",
        "Add export (CSV) and import",
        "Add authentication for multi-user support (optional)",
      ],
    },
    links: [{ label: "GitHub", href: "#" }],
    meta: { year: "2024", role: "Developer", team: "Solo" },
  },

  // ---- Optional (not featured) — keep these for the Projects page grid ----

  {
    slug: "weather-ai-suggestions",
    title: "Weather App + AI Suggestions",
    tagline: "Weather forecasts with helpful, human advice.",
    description:
      "A React weather app that pairs forecast data with context-aware suggestions (what to wear, plan, or avoid).",
    overview:
      "A weather app built to go beyond numbers — it turns forecast data into suggestions users can act on. This project highlights API integration, UI states, and practical reasoning for recommendations.",
    featured: false,
    tech: ["React", "OpenWeather", "TypeScript", "UX"],
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["(Optional) API proxy/route handlers"],
      data: ["OpenWeather APIs"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Integrated weather API data with clean loading/empty/error states",
      "Added suggestion logic to turn forecasts into actionable guidance",
      "Mobile-first UI layout and component structure",
    ],
    caseStudy: {
      problem:
        "Forecasts are useful, but users want quick guidance on what the weather means for their day.",
      goals: [
        "Simple UI that loads fast on mobile",
        "Actionable suggestions based on temperature, rain, wind, etc.",
      ],
      approach: [
        "Mapped forecast signals into a small set of advice rules",
        "Built clear UI states and consistent component patterns",
      ],
      architecture: [
        "Client-side app with API calls (or server proxy if needed)",
        "Reusable components for forecast cards and advice panels",
      ],
      security: [
        "Kept API keys in environment variables (if used server-side)",
        "Avoided exposing secrets in client builds when possible",
      ],
      challenges: ["Balancing advice usefulness without overcomplicating logic"],
      results: ["Weather data + clear suggestions in a mobile-friendly UI"],
      nextSteps: ["Add saved locations and personalization", "Add accessibility improvements"],
    },
    links: [{ label: "GitHub", href: "#" }],
    meta: { year: "2025", role: "Frontend Developer", team: "Team" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
