// data/projects.ts
export type ProjectLink = {
  label: "GitHub" | "Live" | "Demo" | "Write-up";
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;

  // card copy
  description: string;

  // detail page overview
  overview: string;

  // for sorting (newest first)
  meta: {
    date: string; // YYYY-MM-DD
    role?: string;
    team?: "Solo" | "Team";
    context?: string; // optional
  };

  // quick chips
  tech: string[];

  // sidebar stack lists
  stack: {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    tooling?: string[];
  };

  // bullets
  highlights: string[];

  // structure
  caseStudy: {
    problem: string;
    goals: string[];
    approach: string[];
    architecture: string[];
    security: string[];
    challenges: string[];
    results: string[];
    nextSteps: string[];
  };

  // Github and Live links
  links: ProjectLink[];
};

const allProjects: Project[] = [
  {
    slug: "mybookbag",
    title: "myBookBag",
    tagline: "Goodreads-style platform with secure user reviews and collections.",
    description:
      "Full-stack book discovery and personal library app with authentication, reviews/ratings, collections, and a security-hardening track.",
    overview:
      "myBookBag is a Goodreads-style platform where users can search books, save them to personal collections, and write reviews/ratings that persist. A dedicated security-hardening branch strengthens authentication and protects sensitive data and review integrity.",
    meta: {
      date: "2025-04-06",
      role: "Full-stack Developer",
      team: "Solo",
      context: "Secure Software Development",
    },
    tech: ["Node.js", "Express", "MongoDB", "Google Books API", "Security"],
    stack: {
      frontend: ["Web UI (project UI layer)", "Responsive layouts"],
      backend: ["Node.js", "Express", "REST APIs", "Auth flows"],
      data: ["MongoDB", "Collections for users/reviews/collections"],
      tooling: ["Git/GitHub", "Secrets via env vars"],
    },
    highlights: [
      "Google Books API integration for search + book detail views",
      "User auth + persistent reviews, ratings, and personal collections",
      "Security hardening: bcrypt hashing, encryption, JWT signing, integrity checks",
    ],
    caseStudy: {
      problem:
        "Readers need a simple way to track books and personal notes/reviews without losing data, while keeping accounts and user content protected.",
      goals: [
        "Fast search + detail experience",
        "Persistent reviews/ratings and collections",
        "Security-first handling of credentials and sensitive fields",
        "Maintainable backend and data model",
      ],
      approach: [
        "Defined core entities (users, saved books, reviews) and built consistent CRUD flows",
        "Integrated external API safely with defensive handling of missing fields",
        "Implemented a security-hardening branch focused on credential protection and integrity",
      ],
      architecture: [
        "Express API for auth + review/collection operations",
        "MongoDB persistence with clear entity separation",
        "Client UI consuming API endpoints",
      ],
      security: [
        "bcrypt password hashing",
        "crypto-js encryption for sensitive data (where applicable)",
        "JWT with HMAC signing",
        "Review integrity via HMAC signatures",
        "Environment variable hygiene (no secrets committed)",
      ],
      challenges: [
        "Keeping UX simple while supporting multiple flows (search, reviews, collections)",
        "Ensuring security improvements don’t break existing app behavior",
      ],
      results: [
        "End-to-end flow: search → view → save → review → revisit collection",
        "Security hardening path that improves credential handling and data integrity",
      ],
      nextSteps: [
        "Add rate limiting and abuse prevention",
        "Expand validation and error messaging for edge cases",
        "Add better sorting/filtering for collections and reviews",
      ],
    },
    links: [
      { label: "GitHub", href: "https://github.com/SummerTale/myBookBag" },
    ],
  },

  {
    slug: "react-weather-insights",
    title: "Weather Insights (React Group App)",
    tagline: "Saved locations + AI-based suggestions on top of forecasts.",
    description:
      "React weather app integrating OpenWeatherMap with saved locations and AI-style suggestions to turn forecasts into actions.",
    overview:
      "A group React weather project that pairs OpenWeatherMap data with saved locations and suggestion logic (what to wear/plan/avoid) to make forecasts more useful.",
    meta: {
      date: "2025-04-08",
      role: "Developer",
      team: "Team",
      context: "Group project",
    },
    tech: ["React", "TypeScript", "OpenWeatherMap API", "UX"],
    stack: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Saved locations UI"],
      backend: ["(Optional) API proxy/route handler if used"],
      data: ["OpenWeatherMap APIs"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Saved locations flow for quick switching",
      "Suggestion layer to translate forecast signals into guidance",
      "Mobile-first UI with clear loading/empty/error states",
    ],
    caseStudy: {
      problem:
        "Users don’t just want weather numbers — they want quick guidance on what the forecast means for their day.",
      goals: [
        "Fast mobile UX",
        "Saved locations",
        "Actionable suggestions based on conditions",
      ],
      approach: [
        "Mapped forecast signals (temp/rain/wind) to a small set of suggestions",
        "Built predictable UI states and reusable components",
      ],
      architecture: [
        "Client UI with forecast fetch + state management",
        "Saved locations stored locally or in app state (as implemented)",
      ],
      security: [
        "API keys handled safely (avoid exposing secrets; use env + proxy if needed)",
      ],
      challenges: ["Balancing suggestion usefulness without overcomplicating logic"],
      results: ["Forecast + suggestions delivered in a clean mobile-friendly UI"],
      nextSteps: ["Add personalization and accessibility improvements"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "time-weather-boston",
    title: "Time & Weather (Boston)",
    tagline: "Constraint-driven TypeScript app with fixed location and no search.",
    description:
      "TypeScript weather app using OpenWeather APIs with a fixed Boston location (no city search), focused UI and styling constraints.",
    overview:
      "A constraints-driven weather app built in TypeScript with a fixed Boston location. The design intentionally removes city search to simplify UX and emphasize clean presentation.",
    meta: {
      date: "2024-11-05",
      role: "Developer",
      team: "Solo",
    },
    tech: ["TypeScript", "OpenWeather API", "Mobile UI"],
    stack: {
      frontend: ["TypeScript", "Responsive UI", "Focused UX constraints"],
      data: ["OpenWeather APIs"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Fixed Boston location (no search) to keep UX minimal",
      "Clean, readable weather/time display and settings styling",
      "Mobile-first layout",
    ],
    caseStudy: {
      problem: "Weather apps can get cluttered; constraints can produce a cleaner UX.",
      goals: ["Simple interface", "Reliable data display", "Mobile-first design"],
      approach: [
        "Hard-coded lat/long for Boston",
        "Focused UI with clear typographic hierarchy",
      ],
      architecture: ["Client-side fetch + UI render"],
      security: ["API key handling (env/proxy if used)"],
      challenges: ["Keeping the UI polished within strict design rules"],
      results: ["A clean time + weather view with minimal interactions"],
      nextSteps: ["Add accessibility and offline-friendly caching"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "url-shortener",
    title: "URL Shortener",
    tagline: "Next.js App Router short links with unique aliases and redirects.",
    description:
      "Database-backed alias dictionary with uniqueness enforcement, input validation, and dynamic redirects via App Router.",
    overview:
      "A URL shortener built with Next.js App Router and MongoDB. The system enforces alias uniqueness and uses a dynamic route to look up the alias and redirect safely.",
    meta: {
      date: "2025-04-17",
      role: "Full-stack Developer",
      team: "Solo",
      context: "CS391 mini project",
    },
    tech: ["Next.js", "TypeScript", "MongoDB", "Validation"],
    stack: {
      frontend: ["Next.js (App Router)", "TypeScript", "UI forms"],
      backend: ["Route handlers / server functions", "Redirect routing"],
      data: ["MongoDB alias dictionary"],
      tooling: ["Env vars", "Git/GitHub"],
    },
    highlights: [
      "Alias uniqueness enforcement to prevent collisions",
      "Secure environment variable usage for DB connection",
      "Dynamic redirects via /app/[alias]/page.tsx pattern",
    ],
    caseStudy: {
      problem:
        "Short-link systems fail when aliases collide or inputs are invalid, leading to broken redirects and messy data.",
      goals: [
        "Guaranteed alias uniqueness",
        "Validation for URLs and aliases",
        "Predictable redirect behavior",
      ],
      approach: [
        "Designed alias model first (uniqueness checks + normalization)",
        "Separated create vs redirect flows for clarity",
      ],
      architecture: [
        "Next.js App Router pages + dynamic redirect route",
        "MongoDB lookup by alias → server-side redirect",
      ],
      security: [
        "Input validation and normalization",
        "No secrets in repo; env vars for configuration",
      ],
      challenges: ["Edge cases around normalization and routing behavior"],
      results: ["Stable alias creation and reliable redirect behavior"],
      nextSteps: ["Add rate limiting, analytics, and expiration support"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/mp-5" }],
  },

  {
    slug: "security-ghostwriter",
    title: "GhostWriter",
    tagline: "Security research & red team tool using encrypted video capture.",
    description:
      "Hardware–software senior design project: camera device captures keystroke video, encrypts/transmits it, and analysis software infers keys as a side-channel test.",
    overview:
      "GhostWriter was a senior design hardware–software project built to support red team security testing. A camera-based device captures video, encrypts it, transmits it to a controlled analysis environment, and the software pipeline reconstructs keystrokes from visual input as a side-channel demonstration.",
    meta: {
      date: "2023-05-01",
      role: "Developer (Senior Design)",
      team: "Team",
      context: "Senior Design (Wichita State University)",
    },
    tech: ["Security", "Encryption", "Hardware/Software", "Video pipeline"],
    stack: {
      frontend: ["Red team analysis UI/tooling (as implemented)"],
      backend: ["Encrypted transfer pipeline", "Analysis software pipeline"],
      data: ["Encrypted video streams"],
      tooling: ["Team-based engineering", "Testing & iteration"],
    },
    highlights: [
      "Camera-based capture + encrypted video transmission",
      "Red team analysis pipeline for keystroke inference from video",
      "Demonstrates physical/visual side-channel risk in real environments",
    ],
    caseStudy: {
      problem:
        "Security testing can overlook physical and operational side-channels such as shoulder-surfing and visual keystroke inference.",
      goals: [
        "Demonstrate feasibility of visual side-channel key inference",
        "Transmit sensitive capture securely in a controlled red-team context",
        "Build a repeatable pipeline for testing scenarios",
      ],
      approach: [
        "Capture video signal via a camera-based device",
        "Encrypt footage before transmission",
        "Process video in a dedicated analysis workflow to infer keystrokes",
      ],
      architecture: [
        "Capture device → encryption → secure transfer → analysis software",
        "Controlled usage scoped to red team testing",
      ],
      security: [
        "Encrypted transport of sensitive footage",
        "Controlled deployment context (authorized red team use)",
        "Threat modeling around misuse and handling",
      ],
      challenges: [
        "Video clarity and angles vs inference accuracy",
        "Secure transmission without disrupting usability",
      ],
      results: [
        "End-to-end proof-of-concept pipeline demonstrated",
        "Clear security takeaway: physical environments can leak input information",
      ],
      nextSteps: [
        "Harden operational controls and audit trails",
        "Improve robustness across lighting/angle variations",
        "Document safe-use guidelines for authorized testing",
      ],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "movie-series-review-app",
    title: "Movie & Series Review Application",
    tagline: "User-owned reviews + collections with TMDB integration.",
    description:
      "Media review platform using TMDB for metadata while keeping reviews user-written, plus search across homepage and collections.",
    overview:
      "A movie/series review app that integrates TMDB for titles and details but intentionally keeps reviews fully user-authored. Includes personal collections and search across key views.",
    meta: {
      date: "2024-10-27",
      role: "Full-stack Developer",
      team: "Solo",
    },
    tech: ["Node.js", "MongoDB", "TMDB API", "Search"],
    stack: {
      frontend: ["Web UI for discovery + collections"],
      backend: ["Node.js/Express API", "Auth + review endpoints"],
      data: ["MongoDB for users/reviews/collections"],
      tooling: ["Git/GitHub", "Env vars for API key"],
    },
    highlights: [
      "TMDB integration for media metadata",
      "User-owned review and rating system (no scraped reviews)",
      "Search on homepage and within user collections",
    ],
    caseStudy: {
      problem:
        "Many review apps rely on imported content; users want a personal space for their own opinions and collection tracking.",
      goals: [
        "Use TMDB for metadata only",
        "Store original user reviews and collections persistently",
        "Provide fast search across lists",
      ],
      approach: [
        "Built clear separation between external metadata and user-generated content",
        "Implemented collection + review flows with predictable CRUD patterns",
      ],
      architecture: [
        "API layer for auth, collections, and reviews",
        "TMDB as metadata source; MongoDB as system of record for user content",
      ],
      security: [
        "Input validation and safe rendering for user-generated reviews",
        "API key stored in env vars (not committed)",
      ],
      challenges: ["Avoiding duplication while maintaining a clean UX"],
      results: ["Users can discover titles, collect them, and write fully owned reviews"],
      nextSteps: ["Add advanced filtering/sorting and better profile views"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/myMovieList" }],
  },

  {
    slug: "ticketmeister",
    title: "TicketMeister",
    tagline: "Mobile-first ticket platform with i18n and cart flow.",
    description:
      "Cheaper ticket-selling concept with internationalized UI (EN/FR/IT/ES), venue listings, and cart purchase flow.",
    overview:
      "A mobile-first ticket platform concept supporting multiple languages and a commerce-like cart flow. The project emphasizes responsive images, venue detail pages, and consistent internationalization.",
    meta: {
      date: "2024-09-30",
      role: "Developer",
      team: "Solo",
    },
    tech: ["Node.js/PHP", "i18n", "Mobile-first", "Cart"],
    stack: {
      frontend: ["Mobile-first responsive UI", "Internationalization (EN/FR/IT/ES)"],
      backend: ["Node.js or PHP (as implemented)"],
      data: ["Venues from JSON or database"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Internationalized experience across 4 languages",
      "Venue listing + detail pages with responsive media",
      "Cart workflow for ticket purchase flow",
    ],
    caseStudy: {
      problem:
        "Ticketing flows can be expensive and clunky; a mobile-first approach with i18n improves reach and usability.",
      goals: ["Mobile-first UX", "Multi-language UI", "Clear cart flow"],
      approach: [
        "Structured venues with consistent content fields",
        "Designed cart as a simple, predictable stateful flow",
      ],
      architecture: ["Content-driven venue pages + cart state management"],
      security: ["Basic safe handling of user inputs; secure env use if backend used"],
      challenges: ["Keeping UI consistent across languages and layouts"],
      results: ["A cohesive i18n ticket browsing + cart experience"],
      nextSteps: ["Add payment integration and order confirmation emails"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "weight-health-tracker",
    title: "Weight Loss & Health Tracking App",
    tagline: "Mobile-first dashboards with logs for meals, water, weight, exercise.",
    description:
      "Health tracking app with dashboard, charts, and structured logs (weight, water, meals, exercise) built for mobile usability.",
    overview:
      "A mobile-first tracking application with a dashboard view and structured logging across multiple categories. Designed to support persistence via a database and RESTful API.",
    meta: {
      date: "2024-11-03",
      role: "Developer",
      team: "Solo",
    },
    tech: ["Node.js/PHP", "REST API", "Database", "Charts"],
    stack: {
      frontend: ["Mobile-first UI", "Dashboard + charts"],
      backend: ["Node.js or PHP REST API"],
      data: ["Database persistence for logs"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Dashboard-first UX with date navigation",
      "Structured logs across multiple categories",
      "Designed for persistence + reporting",
    ],
    caseStudy: {
      problem: "Tracking health data needs structured logging and quick feedback via summaries.",
      goals: ["Easy logging", "Clear summaries", "Mobile usability"],
      approach: [
        "Separated logs by category for clean entry and summaries",
        "Designed data model with reporting in mind",
      ],
      architecture: ["REST API + DB + dashboard UI"],
      security: ["Basic validation for numeric/enum inputs"],
      challenges: ["Maintaining a consistent mobile UI across many log types"],
      results: ["A cohesive tracking experience built around daily visibility"],
      nextSteps: ["Add export, improved charts, and user accounts"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "wedding-planner-mobile",
    title: "Wedding Planner Mobile Web App",
    tagline: "Guest list, cost estimates, budgets, and Mapbox-enhanced planning.",
    description:
      "Mobile-tested wedding planner with guest list/cost estimation, menu options, budget slider, venue details, and Mapbox integration.",
    overview:
      "A mobile-first wedding planning app focused on practical planning: guest counts and costs, menu options, budget controls, and venue management with optional Mapbox mapping.",
    meta: {
      date: "2024-09-24",
      role: "Developer",
      team: "Solo",
    },
    tech: ["Mobile Web", "Mapbox", "Cost Modeling", "Forms"],
    stack: {
      frontend: ["Mobile-first UI", "Form-heavy flows", "Mapbox integration"],
      backend: ["(Optional) backend for persistence if implemented"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Guest list with cost estimates per guest",
      "Budget slider + menu options with cost estimation",
      "Venue management with optional Mapbox support",
    ],
    caseStudy: {
      problem: "Wedding planning requires lots of structured info and cost tracking in a mobile-friendly way.",
      goals: ["Fast data entry", "Clear cost estimation", "Mobile-first UX"],
      approach: ["Modeled guests/menus/budget as separate editable modules"],
      architecture: ["Mobile UI with modular planning sections"],
      security: ["Safe handling of user-entered form data"],
      challenges: ["Maintaining clarity across many editable sections"],
      results: ["Planning workflow that stays usable on a phone"],
      nextSteps: ["Add persistence and exportable planning summaries"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "patient-intake",
    title: "Patient Intake Mobile Web App",
    tagline: "Multi-step intake workflow with uploads and appointment scheduling.",
    description:
      "Node.js + MongoDB intake system with personal info, health questions, insurance, card upload, scheduling, and ToS consent.",
    overview:
      "A multi-step patient intake application designed around real clinic workflows. Includes structured forms, file upload for insurance cards, appointment scheduling UI, and terms acceptance.",
    meta: {
      date: "2024-10-11",
      role: "Developer",
      team: "Solo",
    },
    tech: ["Node.js", "MongoDB", "Multi-step UX", "Uploads"],
    stack: {
      frontend: ["Mobile-first multi-step UI", "Form validation"],
      backend: ["Node.js", "REST endpoints"],
      data: ["MongoDB persistence"],
      tooling: ["Git/GitHub"],
    },
    highlights: [
      "Multi-step guided workflow (info → questions → insurance → upload → schedule → consent)",
      "Database-backed persistence for intake details",
      "Designed to meet pixel-matching UI requirements",
    ],
    caseStudy: {
      problem:
        "Patient intake is error-prone and time-consuming; guided steps reduce mistakes and improve completion.",
      goals: ["Clear multi-step flow", "Validations", "Safe file upload handling"],
      approach: ["Designed steps as a pipeline with required fields and validations"],
      architecture: ["Node API + MongoDB + step-based UI"],
      security: ["Validation and safe handling of uploads (size/type checks as implemented)"],
      challenges: ["Maintaining consistent UI while enforcing strict requirements"],
      results: ["A complete intake workflow with persistence and scheduling UX"],
      nextSteps: ["Add better access control and audit logging"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "yoga-instructor-onboarding",
    title: "Yoga Instructor Registration Platform",
    tagline: "Validation-heavy multi-step onboarding with Stripe payments.",
    description:
      "Multi-step instructor onboarding with program selection, date validations, certification upload, and Stripe payment integration.",
    overview:
      "A registration platform focused on guided onboarding. Includes required fields, strong date validations, required certification upload, and Stripe payments (with optional PayPal).",
    meta: {
      date: "2024-10-12",
      role: "Developer",
      team: "Solo",
    },
    tech: ["JavaScript", "Validation", "Uploads", "Stripe"],
    stack: {
      frontend: ["Multi-step UI", "Client-side validations"],
      backend: ["(As implemented) upload + payment endpoints"],
      tooling: ["Stripe integration", "Git/GitHub"],
    },
    highlights: [
      "Program selection flow with structured content",
      "Strict date validations (no past dates, start < end)",
      "Certification upload + Stripe payment integration",
    ],
    caseStudy: {
      problem: "Onboarding flows fail when validation is weak or steps aren’t guided clearly.",
      goals: ["Strong validations", "Required uploads", "Smooth payment UX"],
      approach: ["Built step-by-step UI with required field enforcement"],
      architecture: ["Multi-step UI + upload/payment integration points"],
      security: ["Validation of uploaded files and sensitive inputs (as implemented)"],
      challenges: ["Balancing strict validation with a smooth UX"],
      results: ["A structured onboarding flow designed for completion"],
      nextSteps: ["Add server-side validation mirroring client rules"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "stock-trade-simulator",
    title: "Stock Trade Simulator",
    tagline: "Buy/sell simulation with portfolio tracking and mock data.",
    description:
      "Stock trading simulator with mock data, buy/sell UI, and portfolio tracking using local/session storage patterns.",
    overview:
      "A simulated trading app focused on UI flows and portfolio state. Uses mock market data and stores portfolio state locally (or via sessions), with room to extend toward secure auth.",
    meta: {
      date: "2024-09-30",
      role: "Developer",
      team: "Solo",
    },
    tech: ["JavaScript/Node", "State", "Mock Data", "Portfolio"],
    stack: {
      frontend: ["Buy/sell UI", "Portfolio view"],
      backend: ["(Optional) API layer if implemented"],
      tooling: ["LocalStorage/Session patterns", "Git/GitHub"],
    },
    highlights: [
      "Portfolio tracking UX with buy/sell actions",
      "Mock data for deterministic simulation",
      "Clear separation of market view vs holdings view",
    ],
    caseStudy: {
      problem: "Simulated systems are great for practicing state, UI flows, and constraints without real financial risk.",
      goals: ["Stable UI flows", "Clear state management", "Extensible architecture"],
      approach: ["Built separate views for trading vs portfolio tracking"],
      architecture: ["Client state + optional backend endpoints"],
      security: ["Planned JWT security extension"],
      challenges: ["Avoiding state bugs across multiple buy/sell operations"],
      results: ["A working simulation loop from trade → holdings update"],
      nextSteps: ["Add auth + server persistence", "Add transaction history"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/" }],
  },

  {
    slug: "agile-certification-website",
    title: "Agile Certification Website",
    tagline: "Scrum-based team project with sprints, stories, and delivery cadence.",
    description:
      "Agile team project delivering a certification site with Scrum practices: backlogs, sprints, retros, and clear acceptance criteria.",
    overview:
      "A team project built using Scrum practices from planning to delivery. Emphasized user stories, acceptance criteria, sprint focus, and feedback loops to ship consistent increments.",
    meta: {
      date: "2024-??-??",
      role: "Team member",
      team: "Team",
      context: "CS634 Agile Software Development",
    },
    tech: ["Agile", "Scrum", "React (if used)", "Team delivery"],
    stack: {
      frontend: ["Certification website UI (as implemented)"],
      tooling: ["Scrum ceremonies", "Backlogs", "User stories", "Git/GitHub"],
    },
    highlights: [
      "Sprint planning and delivery with defined acceptance criteria",
      "Backlog grooming and retrospectives to improve iteration quality",
      "Learned to reduce scope drift and sharpen requirements early",
    ],
    caseStudy: {
      problem: "Teams fail when requirements are fuzzy and scope drifts mid-sprint.",
      goals: ["Clear user stories", "Sprint focus", "Incremental delivery"],
      approach: ["Used Scrum ceremonies and feedback loops to keep delivery steady"],
      architecture: ["Web UI + team workflow (process architecture)"],
      security: ["(N/A) — focus was delivery process and product iteration"],
      challenges: ["Aligning on requirements and reducing last-minute churn"],
      results: ["Consistent sprint output and clearer requirement discipline"],
      nextSteps: ["Add more automation (CI checks) and stronger definition of done"],
    },
    links: [{ label: "GitHub", href: "https://github.com/SummerTale/cert-website" },
    { label: "Live", href: "https://cert-website.vercel.app" }]
  },
];

export const projects: Project[] = [...allProjects].sort(
  (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
);

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
