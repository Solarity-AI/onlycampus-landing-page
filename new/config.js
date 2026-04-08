/**
 * OnlyCampus — Product configuration
 */

const PRODUCT_CONFIG = {

  name: "OnlyCampus",
  tagline: "Transform Your Campus Experience",
  description: "OnlyCampus brings courses, planning, and community into one student-first platform.",
  url: "https://onlycampus.solarityai.com/",
  year: "2026",
  copyrightName: "OnlyCampus",

  theme: {
    accentColor: "#3b82f6",        // Primary — Blue
    lightBlue: "#60a5fa",          // Lighter blue
    themeColor: "#3b82f6",
    bgColor: "#f8fafc",
    textColor: "#0f172a",
    textMuted: "#475569",
    secondary: "#1e3a5f",
    ctaBg: "#dbeafe",
  },

  logoSvg: `<img src="assets/images/logo/CompanyLogo-160w.webp" alt="OnlyCampus" class="nav-logo-img">`,

  meta: {
    title: "OnlyCampus | All-in-One Campus Success Platform",
    description: "OnlyCampus helps students stay organized, connected, and on track with a single hub for courses, schedules, events, and support.",
    keywords: "campus success, student platform, course planner, university app, student organizer, college app",
    ogImage: "https://onlycampus.solarityai.com/assets/screenshots/onlycampus-hero.png",
  },

  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "footer-pages/contact.html" },
  ],
  navCta: {
    loginLabel: "Log In",
    loginHref: "#",
    primaryLabel: "Get Started",
    primaryHref: "#pricing",
  },

  // Single language — disable toggle
  langSwitch: null,

  hero: {
    badge: "The #1 Platform for College Success",
    title: "Transform Your Campus Experience",
    subtitle: "The platform students rely on to manage courses, stay on schedule, and connect with campus life in one place.",
    ctaPrimary: { label: "Get Started", href: "#pricing", icon: "arrow-up-right" },
    ctaSecondary: { label: "Watch Demo", href: "#tools" },
    phoneImage: "assets/screenshots/onlycampus-screen1.png",
    phoneImageAlt: "OnlyCampus app interface",
    cardLeft: {
      title: "Active Students",
      description: "Trusted by campuses and students across the country.",
      stat: "10M+",
      statLabel: "Users",
      avatars: [
        "https://i.pravatar.cc/60?img=32",
        "https://i.pravatar.cc/60?img=47",
        "https://i.pravatar.cc/60?img=12",
        "https://i.pravatar.cc/60?img=25",
      ],
    },
    cardRight: {
      title: "A game changer for my semester",
      quote: "OnlyCampus completely transformed my college experience. It keeps me on track and focused every week.",
      author: "Sarah M.",
    },
  },

  brands: {
    label: "Trusted by students at 5,000+ colleges and universities",
    count: 5,
  },

  numbers: {
    badge: "Proven Results",
    title: "Trusted by Students Everywhere",
    subtitle: "Clear outcomes and measurable impact across campus communities.",
    stats: [
      { value: "98%", label: "Student success rate" },
      { value: "5,000+", label: "Colleges & universities" },
      { value: "10M+", label: "Active users" },
    ],
    image: "assets/screenshots/onlycampus-hero-800w.webp",
    imageAlt: "OnlyCampus dashboard preview",
    imageCaption: "",
  },

  benefits: {
    badge: "Features",
    title: "Everything You Need to Thrive on Campus",
    items: [
      {
        icon: "management",
        title: "Comprehensive Courses",
        description: "Browse top classes, track progress, and keep your workload organized in one clean dashboard.",
      },
      {
        icon: "insights",
        title: "Study Tools & Resources",
        description: "Stay prepared with planners, reminders, and curated study materials tailored to your schedule.",
      },
      {
        icon: "security",
        title: "Campus Community",
        description: "Connect with peers, discover events, and join student groups that match your interests.",
      },
    ],
  },

  tools: {
    badge: "How It Works",
    title: "Everything Campus Life Needs, In One App",
    phoneImage: "assets/screenshots/onlycampus-screen2.png",
    phoneImageAlt: "OnlyCampus features",
    left: [
      { title: "Smart Schedules", description: "Import your course schedule and get reminders before every class." },
      { title: "Study Planner", description: "Break assignments into steps and stay ahead of deadlines." },
      { title: "Campus Events", description: "Discover what's happening on campus and never miss out." },
    ],
    right: [
      { title: "Student Groups", description: "Join communities around clubs, majors, and shared interests." },
      { title: "Progress Insights", description: "Track your academic progress and spot what needs attention." },
      { title: "Anywhere Access", description: "Use OnlyCampus on mobile or web — your data stays in sync." },
    ],
  },

  pricing: {
    badge: "Pricing",
    title: "Plans That Fit Your Campus Life",
    plans: [
      {
        name: "Starter",
        description: "For students exploring the platform.",
        priceMonthly: "$9",
        priceYearly: "$7",
        cta: { label: "Get Started", href: "footer-pages/contact.html", style: "outline" },
        features: [
          "Schedule tracking",
          "Basic reminders",
          "Student support",
          "Mobile & web access",
        ],
      },
      {
        name: "Standard",
        description: "For students who want the full experience.",
        priceMonthly: "$19",
        priceYearly: "$14",
        featured: true,
        cta: { label: "Start Free Trial", href: "footer-pages/contact.html", style: "primary" },
        features: [
          "Unlimited planners",
          "Priority support",
          "Personalized insights",
          "Campus event feed",
        ],
      },
      {
        name: "Premium",
        description: "For students who want it all.",
        priceMonthly: "$29",
        priceYearly: "$22",
        cta: { label: "Talk to Sales", href: "footer-pages/contact.html", style: "outline" },
        features: [
          "Advanced analytics",
          "Mentor sessions",
          "Early access to new features",
          "1-on-1 onboarding",
        ],
      },
    ],
  },

  testimonials: {
    badge: "Testimonials",
    title: "Real Results from Real Students",
    items: [
      {
        quote: "OnlyCampus completely transformed my college experience. It keeps me on track and focused every week.",
        name: "Sarah M.",
        role: "University of Texas",
        avatarColor: "#3b82f6",
      },
      {
        quote: "I used to juggle three different apps for my schedule. Now everything lives in one place and I finally have time to breathe.",
        name: "Marcus L.",
        role: "Arizona State University",
        avatarColor: "#60a5fa",
      },
      {
        quote: "The study planner caught a deadline I would have completely missed. Worth it for that alone.",
        name: "Priya K.",
        role: "UCLA",
        avatarColor: "#f59e0b",
      },
      {
        quote: "Joining campus groups through OnlyCampus is how I found my friends in freshman year. Genuinely life-changing.",
        name: "Jordan T.",
        role: "Ohio State University",
        avatarColor: "#8b5cf6",
      },
      {
        quote: "Clean, fast, and actually designed for students. Every feature feels like someone thought about how I study.",
        name: "Emily R.",
        role: "NYU",
        avatarColor: "#ef4444",
      },
    ],
  },

  cta: {
    title: "Ready to transform your campus experience?",
    subtitle: "Download OnlyCampus to keep your schedule, campus updates, and study tools in one place.",
    buttonLabel: "Get Started — Free Trial",
    buttonHref: "#pricing",
    image: "assets/screenshots/onlycampus-hero.png",
    imageAlt: "OnlyCampus illustration",
    imageCaption: "",
  },

  footer: {
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "footer-pages/faq.html" },
          { label: "Contact", href: "footer-pages/contact.html" },
        ],
      },
      {
        title: "Follow OnlyCampus",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/@onlycampus" },
          { label: "Instagram", href: "https://www.instagram.com/onlycampus" },
          { label: "TikTok", href: "https://www.tiktok.com/@onlycampus" },
          { label: "Facebook", href: "https://www.facebook.com/onlycampus" },
        ],
      },
      {
        title: "Support",
        links: [],
      },
    ],
    appStore: {
      show: true,
      googlePlayHref: "#",
      appStoreHref: "#",
    },
    legal: [
      { label: "Privacy Policy", href: "footer-pages/privacy-policy.html" },
      { label: "Terms of Service", href: "footer-pages/terms.html" },
      { label: "Cookies Policy", href: "footer-pages/cookies.html" },
      { label: "Data Deletion", href: "footer-pages/data-deletion.html" },
    ],
    supportText: "Need help? Reach us at ata.turhan@solarityai.com or through the contact page.",
  },

  analyticsId: "",
};
