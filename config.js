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
    ogImage: "https://onlycampus.solarityai.com/assets/screenshots/onlycampus-hero.webp",
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

  langSwitch: {
    default: "en",
    storageKey: "onlycampus_lang",
    options: [
      { code: "en", flag: "\u{1F1FA}\u{1F1F8}" },
      { code: "tr", flag: "\u{1F1F9}\u{1F1F7}" },
    ],
  },

  hero: {
    badge: "The #1 Platform for College Success",
    title: "Transform Your Campus Experience",
    subtitle: "The platform students rely on to manage courses, stay on schedule, and connect with campus life in one place.",
    ctaPrimary: { label: "Download the App", href: "#pricing", icon: "arrow-up-right" },
    ctaSecondary: { label: "Explore Features", href: "#features" },
    phoneImage: "assets/screenshots/onlycampus-hero-phone.webp",
    phoneImageAlt: "OnlyCampus mobile app sign in screen",
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

  numbers: {
    badge: "Proven Results",
    title: "Trusted by Students Everywhere",
    subtitle: "Real ratings and measurable impact across 5,000+ campuses.",
    stats: [
      { value: "★ 4.9", label: "App Store rating" },
      { value: "★ 4.8", label: "Google Play rating" },
      { value: "98%", label: "Student success rate" },
      { value: "10M+", label: "Active students" },
    ],
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
    phoneImage: "assets/screenshots/onlycampus-tools-phone.webp",
    phoneImageAlt: "OnlyCampus mobile app profile view",
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
        name: "Free",
        description: "Start using OnlyCampus at no cost.",
        priceMonthly: "₺0",
        priceYearly: "₺0",
        cta: { label: "Download the App", href: "#", style: "outline" },
        features: [
          "Schedule tracking",
          "Basic reminders",
          "Campus event feed",
          "Mobile & web access",
        ],
      },
      {
        name: "Premium",
        description: "Unlock everything OnlyCampus has to offer.",
        priceMonthly: "₺49,99",
        priceYearly: "₺41,67",
        featured: true,
        cta: { label: "Get Premium", href: "#", style: "primary" },
        features: [
          "Everything in Free",
          "Unlimited planners & reminders",
          "Personalized insights",
          "Priority student support",
          "Early access to new features",
          "Billed ₺499,99 annually on yearly plan",
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
  },

  footer: {
    columns: [
      {
        title: "Follow OnlyCampus",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/@onlycampus", icon: "youtube" },
          { label: "Instagram", href: "https://www.instagram.com/only_campus_app_tr", icon: "instagram" },
          { label: "TikTok", href: "https://www.tiktok.com/@onlycampus", icon: "tiktok" },
          { label: "Facebook", href: "https://www.facebook.com/onlycampus", icon: "facebook" },
        ],
      },
      {
        title: "Support",
        links: [],
      },
    ],
    appStore: {
      show: false,
      googlePlayHref: "#",
      appStoreHref: "#",
    },
    legal: [
      { label: "FAQ", href: "footer-pages/faq.html" },
      { label: "Contact", href: "footer-pages/contact.html" },
      { label: "Privacy Policy", href: "footer-pages/privacy-policy.html" },
      { label: "Terms of Service", href: "footer-pages/terms.html" },
      { label: "Cookies Policy", href: "footer-pages/cookies.html" },
      { label: "Data Deletion", href: "footer-pages/data-deletion.html" },
    ],
    supportText: "Need help? Reach us at ata.turhan@solarityai.com or through the contact page.",
  },

  analyticsId: "",

  // ── TURKISH TRANSLATIONS ───────────────────────
  translations: {
    tr: {
      meta: {
        title: "OnlyCampus | Kampüs Başarısı İçin Tek Platform",
        description: "OnlyCampus; dersler, program, etkinlikler ve destek için tek bir hub sunarak öğrencilerin düzenli, bağlı ve yolunda kalmasına yardımcı olur.",
      },
      navLinks: [
        { label: "Özellikler", href: "#features" },
        { label: "Fiyatlandırma", href: "#pricing" },
        { label: "Yorumlar", href: "#testimonials" },
        { label: "İletişim", href: "footer-pages/contact.html" },
      ],
      hero: {
        badge: "Türkiye'nin Üniversite Sosyal Platformu",
        title: "Kampüs Deneyimini Dönüştür",
        subtitle: "Öğrencilerin derslerini yönetmek, programlarını takip etmek ve kampüs hayatına bağlanmak için tek bir yerde güvendiği platform.",
        ctaPrimary: { label: "Uygulamayı İndir", href: "#pricing", icon: "arrow-up-right" },
        ctaSecondary: { label: "Özellikleri Keşfet", href: "#features" },
        cardLeft: {
          title: "Aktif Öğrenciler",
          description: "Ülke çapında kampüsler ve öğrenciler tarafından güveniliyor.",
          stat: "10M+",
          statLabel: "Kullanıcı",
        },
        cardRight: {
          title: "Dönemim için tam bir değişim",
          quote: "OnlyCampus, üniversite deneyimimi tamamen dönüştürdü. Her hafta beni yolunda ve odaklı tutuyor.",
          author: "Sarah M.",
        },
      },
      numbers: {
        badge: "Kanıtlanmış Sonuçlar",
        title: "Her Yerde Öğrenciler Tarafından Güveniliyor",
        subtitle: "5.000'den fazla kampüsteki gerçek puanlar ve ölçülebilir etki.",
        stats: [
          { value: "★ 4.9", label: "App Store puanı" },
          { value: "★ 4.8", label: "Google Play puanı" },
          { value: "98%", label: "Öğrenci başarı oranı" },
          { value: "10M+", label: "Aktif öğrenci" },
        ],
      },
      benefits: {
        badge: "Özellikler",
        title: "Kampüste Başarılı Olmak İçin İhtiyacın Olan Her Şey",
        items: [
          {
            title: "Kapsamlı Dersler",
            description: "En iyi dersleri keşfet, ilerlemeni takip et ve iş yükünü tek bir temiz panelde düzenli tut.",
          },
          {
            title: "Çalışma Araçları ve Kaynakları",
            description: "Programına özel planlayıcılar, hatırlatıcılar ve seçkin çalışma materyalleriyle her zaman hazır ol.",
          },
          {
            title: "Kampüs Topluluğu",
            description: "Arkadaşlarınla bağlantı kur, etkinlikleri keşfet ve ilgi alanlarına uygun öğrenci gruplarına katıl.",
          },
        ],
      },
      tools: {
        badge: "Nasıl Çalışır",
        title: "Kampüs Hayatının İhtiyacı Olan Her Şey Tek Uygulamada",
        left: [
          { title: "Akıllı Programlar", description: "Ders programını içe aktar ve her dersten önce hatırlatma al." },
          { title: "Çalışma Planlayıcı", description: "Ödevlerini adımlara böl ve son teslim tarihlerinin önünde ol." },
          { title: "Kampüs Etkinlikleri", description: "Kampüste neler olduğunu keşfet ve hiçbirini kaçırma." },
        ],
        right: [
          { title: "Öğrenci Grupları", description: "Kulüpler, bölümler ve ortak ilgi alanları etrafında topluluklara katıl." },
          { title: "İlerleme Analizleri", description: "Akademik ilerlemeni takip et ve dikkat edilmesi gerekenleri fark et." },
          { title: "Her Yerden Erişim", description: "OnlyCampus'u mobil veya webden kullan — verilerin senkronize kalır." },
        ],
      },
      pricing: {
        badge: "Fiyatlandırma",
        title: "Kampüs Hayatına Uygun Planlar",
        toggleMonthly: "Aylık",
        toggleYearly: "Yıllık",
        plans: [
          {
            name: "Ücretsiz",
            description: "OnlyCampus'u hiçbir ücret ödemeden kullanmaya başla.",
            priceMonthly: "₺0",
            priceYearly: "₺0",
            cta: { label: "Uygulamayı İndir", href: "#" },
            features: [
              "Program takibi",
              "Temel hatırlatıcılar",
              "Kampüs etkinlik akışı",
              "Mobil & web erişim",
            ],
          },
          {
            name: "Premium",
            description: "OnlyCampus'un sunduğu her şeyin kilidini aç.",
            priceMonthly: "₺49,99",
            priceYearly: "₺41,67",
            cta: { label: "Premium'a Geç", href: "#" },
            features: [
              "Ücretsiz pakettekilerin tümü",
              "Sınırsız planlayıcı ve hatırlatıcı",
              "Kişiselleştirilmiş öneriler",
              "Öncelikli öğrenci desteği",
              "Yeni özelliklere erken erişim",
              "Yıllık planda yıllık ₺499,99 olarak faturalandırılır",
            ],
          },
        ],
      },
      testimonials: {
        badge: "Yorumlar",
        title: "Gerçek Öğrencilerden Gerçek Sonuçlar",
        items: [
          {
            quote: "OnlyCampus, üniversite deneyimimi tamamen dönüştürdü. Her hafta beni yolunda ve odaklı tutuyor.",
            name: "Sarah M.",
            role: "Texas Üniversitesi",
          },
          {
            quote: "Eskiden programım için üç farklı uygulama kullanıyordum. Şimdi her şey tek bir yerde ve sonunda nefes alabiliyorum.",
            name: "Marcus L.",
            role: "Arizona State Üniversitesi",
          },
          {
            quote: "Çalışma planlayıcı, tamamen kaçıracağım bir son teslim tarihini yakaladı. Sırf bunun için bile değer.",
            name: "Priya K.",
            role: "UCLA",
          },
          {
            quote: "Kampüs gruplarına OnlyCampus üzerinden katılarak birinci sınıfta arkadaşlarımı buldum. Gerçekten hayat değiştiren bir şey.",
            name: "Jordan T.",
            role: "Ohio State Üniversitesi",
          },
          {
            quote: "Temiz, hızlı ve gerçekten öğrenciler için tasarlanmış. Her özellik, nasıl çalıştığımı düşünmüş gibi hissettiriyor.",
            name: "Emily R.",
            role: "NYU",
          },
        ],
      },
      cta: {
        title: "Kampüs deneyimini dönüştürmeye hazır mısın?",
        subtitle: "Programını, kampüs güncellemelerini ve çalışma araçlarını tek bir yerde tutmak için OnlyCampus'u indir.",
        buttonLabel: "Hemen Başla — Ücretsiz Dene",
      },
      footer: {
        columns: [
          {
            title: "OnlyCampus'u Takip Et",
            links: [
              { label: "YouTube", href: "https://www.youtube.com/@onlycampus", icon: "youtube" },
              { label: "Instagram", href: "https://www.instagram.com/only_campus_app_tr", icon: "instagram" },
              { label: "TikTok", href: "https://www.tiktok.com/@onlycampus", icon: "tiktok" },
              { label: "Facebook", href: "https://www.facebook.com/onlycampus", icon: "facebook" },
            ],
          },
          {
            title: "Destek",
            links: [],
          },
        ],
        appStore: {
          title: "Uygulamayı İndir",
        },
        legal: [
          { label: "SSS", href: "footer-pages/faq.html" },
          { label: "İletişim", href: "footer-pages/contact.html" },
          { label: "Gizlilik Politikası", href: "footer-pages/privacy-policy.html" },
          { label: "Kullanım Şartları", href: "footer-pages/terms.html" },
          { label: "Çerez Politikası", href: "footer-pages/cookies.html" },
          { label: "Veri Silme", href: "footer-pages/data-deletion.html" },
        ],
        supportText: "Yardıma mı ihtiyacın var? ata.turhan@solarityai.com adresinden veya iletişim sayfasından bize ulaş.",
      },
    },
  },
};
