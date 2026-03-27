const PLACEHOLDER_SITE_ORIGIN = "https://onlycampus.example.com";
const CANONICAL_SITE_ORIGIN = "https://onlycampus.solarityai.com";
const SITE_LANGUAGE_STORAGE_KEY = "onlycampus_legal_lang";
const SITE_TRANSLATIONS = {
  tr: {
    seo: {
      title: "OnlyCampus | Kampüs Başarısı için Hepsi Bir Arada Platform",
      description:
        "OnlyCampus, öğrencilerin derslerini, programlarını, etkinliklerini ve destek ihtiyaçlarını tek merkezden yönetmesine yardımcı olur.",
      keywords: "kampüs başarısı, öğrenci platformu, ders planlayıcı, üniversite uygulaması",
      ogTitle: "OnlyCampus | Kampüs Deneyimini Dönüştür",
      ogDescription:
        "Dersleri, planlamayı ve topluluğu daha iyi sonuçlar için bir araya getiren modern platform.",
      twitterTitle: "OnlyCampus | Kampüs Başarısı Artık Daha Kolay",
      twitterDescription: "OnlyCampus ile daha iyi plan yap, daha iyi öğren ve bağlantıda kal."
    },
    brand: {
      logoAlt: "OnlyCampus logosu"
    },
    nav: [
      { label: "Ana Sayfa" },
      { label: "Özellikler" },
      { label: "Önizleme" },
      { label: "Sosyal" },
      { label: "Yorumlar" },
      { label: "Fiyatlandırma" },
      { label: "SSS" },
      { label: "İletişim" },
      { label: "İndir" }
    ],
    hero: {
      kicker: "Kampüs Başarısı için 1 Numaralı Platform",
      headline: "Kampüs Deneyimini Dönüştür",
      subhead:
        "Öğrencilerin derslerini yönetmek, programlarını takip etmek ve kampüs yaşamıyla bağlantıda kalmak için güvendiği platform.",
      media: {
        alt: "OnlyCampus panel önizlemesi"
      },
      mediaCards: [{ label: "Aktif Kullanıcılar" }, { label: "Başarı Oranı" }],
      actions: [{ label: "Başlayın" }, { label: "Demoyu İzle" }],
      badges: [{ alt: "App Store'dan indirin" }, { alt: "Google Play'den indirin" }],
      powerwords: ["Planlama", "Topluluk", "Başarı"]
    },
    features: {
      title: "Kampüste Başarılı Olmak İçin İhtiyacın Olan Her Şey",
      description: "Planlamayı, öğrenmeyi ve öğrenci hayatını kolaylaştıran araçlar.",
      items: [
        {
          title: "Kapsamlı Dersler",
          text: "Öne çıkan dersleri incele, ilerlemeni takip et ve iş yükünü düzenli tut."
        },
        {
          title: "Çalışma Araçları ve Kaynaklar",
          text: "Planlayıcılar, hatırlatıcılar ve seçilmiş çalışma materyalleriyle hazır ol."
        },
        {
          title: "Kampüs Topluluğu",
          text: "Akranlarınla bağlantı kur, etkinlikleri keşfet ve öğrenci gruplarına katıl."
        }
      ]
    },
    stats: {
      title: "Her Yerde Öğrencilerin Güvendiği Platform",
      description: "Kampüs toplulukları genelinde net sonuçlar ve ölçülebilir etki.",
      note: "OnlyCampus ile hedeflerine ulaşan 1.000.000+'dan fazla öğrenciye katıl.",
      items: [
        { label: "Öğrenci başarı oranı" },
        { label: "Kolej ve üniversite" },
        { label: "Aktif kullanıcı" }
      ]
    },
    brandStrip: {
      label: "Önde gelen kampüslerin güvendiği platform"
    },
    appPreview: {
      mainAlt: "OnlyCampus uygulama önizlemesi",
      slides: [{ alt: "Önizleme ekranı 1" }, { alt: "Önizleme ekranı 2" }]
    },
    socialGallery: {
      title: "Kampüs Öne Çıkanları",
      description: "OnlyCampus topluluğundan sosyal platformlarda paylaşılan anlar.",
      items: [{}, { title: "OnlyCampus Kısa Videolar" }]
    },
    testimonials: {
      title: "Gerçek Öğrencilerden Gerçek Sonuçlar",
      description:
        "Öğrenciler, OnlyCampus'un daha düzenli ve kendinden emin kalmalarına nasıl yardımcı olduğunu anlatıyor.",
      featured: {
        text: "OnlyCampus üniversite deneyimimi tamamen değiştirdi. Her hafta odaklı ve düzenli kalmamı sağlıyor.",
        role: "Texas Üniversitesi"
      }
    },
    pricing: {
      title: "Kampüs Hayatına Uyan Planlar",
      description: "Takvimine uyan planı seç ve ihtiyacın olan araçların kilidini aç.",
      popularLabel: "EN POPÜLER",
      plans: [
        {
          name: "Başlangıç",
          features: ["Takvim takibi", "Temel hatırlatıcılar", "Öğrenci desteği"],
          cta: { label: "Başlayın" }
        },
        {
          name: "Standart",
          features: ["Sınırsız planlayıcı", "Öncelikli destek", "Kişiselleştirilmiş içgörüler"],
          cta: { label: "Ücretsiz Denemeyi Başlat" }
        },
        {
          name: "Premium",
          features: ["Gelişmiş analitikler", "Mentorluk görüşmeleri", "Erken erişim"],
          cta: { label: "Satışla Görüş" }
        }
      ]
    },
    faq: {
      title: "Öğrencilerin En Sık Sorduğu Sorular",
      description: "OnlyCampus deneyimi hakkında hızlı yanıtlar.",
      items: [
        {
          question: "OnlyCampus her üniversite için mevcut mu?",
          answer: "Çoğu kampüsü destekliyoruz ve her dönem yeni partnerler ekliyoruz."
        },
        {
          question: "Ders programımı senkronize edebilir miyim?",
          answer: "Evet, programlarını içe aktarabilir ve her şeyi tek yerde tutabilirsin."
        },
        {
          question: "Takım veya kampüs planları sunuyor musunuz?",
          answer: "Bölümler ve öğrenci toplulukları için kampüs çapında planlar sunuyoruz."
        },
        {
          question: "Ücretsiz deneme var mı?",
          answer: "Her plan, platformu keşfedebilmen için ücretsiz deneme içerir."
        },
        {
          question: "Verilerim nasıl korunuyor?",
          answer: "Sektör standardı güvenlik ve gizlilik uygulamalarını takip ediyoruz."
        },
        {
          question: "Yardım için kiminle iletişime geçebilirim?",
          answer: "Destek ekibimize iletişim formu üzerinden 7/24 ulaşabilirsin."
        }
      ]
    },
    contact: {
      title: "OnlyCampus Ekibiyle İletişime Geçin",
      description: "Sorularınız, iş birlikleri veya geri bildirimleriniz mi var? Sizden haber almak isteriz.",
      addressLabel: "Adres",
      emailLabel: "E-posta",
      form: {
        title: "Mesaj Gönder",
        submitLabel: "Mesaj Gönder"
      }
    },
    downloadCta: {
      title: "Hazır mısın?",
      description:
        "Takvimini, kampüs güncellemelerini ve çalışma araçlarını tek yerde toplamak için OnlyCampus'u indir.",
      badges: [{ alt: "App Store'dan indirin" }, { alt: "Google Play'den indirin" }],
      trustItems: [{ label: "App Store" }, { label: "Google Play" }, { label: "İndirme" }]
    },
    footer: {
      description:
        "OnlyCampus, dersleri, planlamayı ve topluluğu tek bir öğrenci odaklı platformda bir araya getirir.",
      socialTitle: "Bizi Takip Edin",
      socialLinks: [
        { label: "OnlyCampus YouTube" },
        { label: "OnlyCampus Instagram" },
        { label: "OnlyCampus TikTok" },
        { label: "OnlyCampus Facebook" }
      ],
      legalTitle: "Yasal",
      legalLinks: [{ label: "Veri Silme" }, { label: "Kullanım Şartları" }, { label: "Çerez Politikası" }],
      emergencyTitle: "Destek",
      emergencyText:
        "Acil durumlarda yerel hizmetlerle iletişime geçin. OnlyCampus bir kriz destek sağlayıcısı değildir.",
      bottomText: "© 2026 OnlyCampus. Tüm hakları saklıdır."
    }
  }
};
const SITE_UI_TRANSLATIONS = {
  en: {
    languageMeta: "English",
    form: {
      nameLabel: "Full Name*",
      namePlaceholder: "Enter your name",
      emailLabel: "Email*",
      emailPlaceholder: "you@example.com",
      messageLabel: "Your Message*",
      messagePlaceholder: "Tell us what you need..."
    },
    modal: {
      title: "Coming Soon!",
      body: "Our app will be available soon on the App Store and Google Play.",
      button: "Got it",
      closeLabel: "Close"
    }
  },
  tr: {
    languageMeta: "Turkish",
    form: {
      nameLabel: "Ad Soyad*",
      namePlaceholder: "Adınızı girin",
      emailLabel: "E-posta*",
      emailPlaceholder: "ornek@eposta.com",
      messageLabel: "Mesajınız*",
      messagePlaceholder: "Nasıl yardımcı olabileceğimizi yazın..."
    },
    modal: {
      title: "Çok Yakında!",
      body: "Uygulamamız yakında App Store ve Google Play'de yayında olacak.",
      button: "Anladım",
      closeLabel: "Kapat"
    }
  }
};

let siteDataSource = null;

document.addEventListener("DOMContentLoaded", () => {
  bindLanguageToggle();
  // Use inlined data (window.__SITE_DATA__) when available to apply DOM updates
  // synchronously before first paint, eliminating CLS caused by async fetch.
  if (window.__SITE_DATA__) {
    siteDataSource = window.__SITE_DATA__;
    applyLocalizedSiteData(true);
    return;
  }
  // Fallback: fetch from disk (e.g. when __SITE_DATA__ is not yet inlined).
  fetch("assets/data/site.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Site data load failed: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      siteDataSource = data || {};
      applyLocalizedSiteData(false);
    })
    .catch((err) => {
      console.error("Site data load failed:", err);
    });
});

// When preloaded=true (data came from window.__SITE_DATA__), static HTML is
// already correctly populated so innerHTML replacements are skipped to avoid
// CLS from DOM changes after incremental renders.
function setList(container, html, preloaded) {
  if (!container) return;
  if (preloaded && container.children.length > 0) return;
  container.innerHTML = html;
}

function normalizeSiteLanguage(lang) {
  return lang === "tr" ? "tr" : "en";
}

function readSiteLanguageFromQuery() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("lang")) return null;
    return normalizeSiteLanguage(params.get("lang"));
  } catch (error) {
    return null;
  }
}

function readStoredSiteLanguage() {
  try {
    return normalizeSiteLanguage(window.localStorage.getItem(SITE_LANGUAGE_STORAGE_KEY));
  } catch (error) {
    return "en";
  }
}

function getCurrentSiteLanguage() {
  return readSiteLanguageFromQuery() || readStoredSiteLanguage();
}

function persistSiteLanguage(lang) {
  try {
    window.localStorage.setItem(SITE_LANGUAGE_STORAGE_KEY, normalizeSiteLanguage(lang));
  } catch (error) {}
}

function syncSiteLanguageQuery(lang) {
  try {
    const normalized = normalizeSiteLanguage(lang);
    const url = new URL(window.location.href);
    if (normalized === "tr") {
      url.searchParams.set("lang", "tr");
    } else {
      url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  } catch (error) {}
}

function syncLanguageButtons(lang) {
  document.querySelectorAll(".ud-lang-btn").forEach((btn) => {
    const isActive = normalizeSiteLanguage(btn.getAttribute("data-lang")) === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function mergeLocalizedData(base, overlay) {
  if (overlay === undefined) return base;
  if (overlay === null || typeof overlay !== "object") return overlay;

  if (Array.isArray(overlay)) {
    const baseArray = Array.isArray(base) ? base : [];
    const maxLength = Math.max(baseArray.length, overlay.length);
    const merged = [];
    for (let i = 0; i < maxLength; i += 1) {
      if (overlay[i] === undefined) {
        merged.push(baseArray[i]);
        continue;
      }
      merged.push(mergeLocalizedData(baseArray[i], overlay[i]));
    }
    return merged;
  }

  const result = { ...(base && typeof base === "object" ? base : {}) };
  Object.keys(overlay).forEach((key) => {
    result[key] = mergeLocalizedData(result[key], overlay[key]);
  });
  return result;
}

function getLocalizedSiteData(data) {
  const lang = getCurrentSiteLanguage();
  if (lang === "en") return data;
  return mergeLocalizedData(data, SITE_TRANSLATIONS[lang] || {});
}

function applyLocalizedSiteData(preloaded) {
  if (!siteDataSource) {
    applyStaticUiTranslations(getCurrentSiteLanguage());
    return;
  }
  const currentLang = getCurrentSiteLanguage();
  applySiteData(getLocalizedSiteData(siteDataSource), preloaded && currentLang === "en");
  applyStaticUiTranslations(currentLang);
}

function applyStaticUiTranslations(lang) {
  const ui = SITE_UI_TRANSLATIONS[normalizeSiteLanguage(lang)] || SITE_UI_TRANSLATIONS.en;
  if (!ui) return;

  document.documentElement.setAttribute("data-lang", normalizeSiteLanguage(lang));
  document.documentElement.lang = normalizeSiteLanguage(lang);
  syncLanguageButtons(normalizeSiteLanguage(lang));

  setMeta('meta[name="language"]', ui.languageMeta);
  setText('label[for="name"]', ui.form.nameLabel);
  setAttr('input[name="name"]', "placeholder", ui.form.namePlaceholder);
  setText('label[for="email"]', ui.form.emailLabel);
  setAttr('input[name="user_email"]', "placeholder", ui.form.emailPlaceholder);
  setText('label[for="message"]', ui.form.messageLabel);
  setAttr('textarea[name="message"]', "placeholder", ui.form.messagePlaceholder);
  setText("#comingSoonModalLabel", ui.modal.title);
  setText("#comingSoonModal .modal-body p", ui.modal.body);
  setText('#comingSoonModal .modal-footer button[data-bs-dismiss="modal"]', ui.modal.button);
  setAttr("#comingSoonModal .btn-close", "aria-label", ui.modal.closeLabel);
}

function applySiteData(data, preloaded) {
  applySeo(data.seo || {}, data.brand || {});
  applyBrand(data.brand || {});
  applyNav(data.nav || [], preloaded);
  applyHero(data.hero || {}, preloaded);
  applyFeatures(data.features || {}, preloaded);
  applyStats(data.stats || {}, preloaded);
  applyBrandStrip(data.brandStrip || {}, preloaded);
  applyAppPreview(data.appPreview || {}, preloaded);
  applySocialGallery(data.socialGallery || {});
  applyTestimonials(data.testimonials || {});
  applyPricing(data.pricing || {});
  applyFaq(data.faq || {});
  applyContact(data.contact || {});
  applyDownloadCta(data.downloadCta || {});
  applyFooter(data.footer || {});
}

function applySeo(seo, brand) {
  const normalizedSeo = normalizeSeo(seo);

  if (normalizedSeo.title) {
    document.title = normalizedSeo.title;
  }

  setMeta('meta[name="title"]', normalizedSeo.title);
  setMeta('meta[name="description"]', normalizedSeo.description);
  setMeta('meta[name="keywords"]', normalizedSeo.keywords);
  setMeta('meta[name="author"]', normalizedSeo.author || brand.name);
  setMeta('meta[property="og:title"]', normalizedSeo.ogTitle || normalizedSeo.title);
  setMeta('meta[property="og:description"]', normalizedSeo.ogDescription || normalizedSeo.description);
  setMeta('meta[property="og:image"]', normalizedSeo.ogImage);
  setMeta('meta[property="og:url"]', normalizedSeo.ogUrl || normalizedSeo.canonical);
  setMeta('meta[property="twitter:title"]', normalizedSeo.twitterTitle || normalizedSeo.title);
  setMeta(
    'meta[property="twitter:description"]',
    normalizedSeo.twitterDescription || normalizedSeo.description
  );
  setMeta('meta[property="twitter:image"]', normalizedSeo.twitterImage || normalizedSeo.ogImage);
  setMeta('meta[name="theme-color"]', normalizedSeo.themeColor);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && normalizedSeo.canonical) {
    canonical.setAttribute("href", normalizedSeo.canonical);
  }
}

function applyBrand(brand) {
  if (!brand) return;
  const logos = document.querySelectorAll('[data-site="brand-logo"]');
  logos.forEach((logo) => {
    if (brand.logo) {
      setNodeAttr(logo, "src", brand.logo);
    }
    if (brand.logoAlt) {
      setNodeAttr(logo, "alt", brand.logoAlt);
    }
  });
  setText('[data-site="brand-name"]', brand.name);
}

function applyNav(navItems, preloaded) {
  const nav = document.getElementById("nav");
  if (!nav || !Array.isArray(navItems) || navItems.length === 0) return;
  setList(nav, navItems
    .map((item) => {
      const label = item.label || "";
      const href = item.href || "#";
      return `<li class="nav-item"><a class="ud-menu-scroll" href="${href}">${label}</a></li>`;
    })
    .join(""), preloaded);
  bindNavHandlers();
}

function applyHero(hero, preloaded) {
  setText('[data-site="hero-kicker"]', hero.kicker);
  setText('[data-site="hero-title"]', hero.headline);
  setText('[data-site="hero-desc"]', hero.subhead);

  const actionsContainer = document.querySelector(
    '[data-site-list="hero-actions"]'
  );
  if (actionsContainer) {
    const actions = Array.isArray(hero.actions) ? hero.actions : [];
    const badges = Array.isArray(hero.badges) ? hero.badges : [];
    const list = actions.length > 0 ? actions : badges;

    setList(actionsContainer, list
      .map((action) => {
        if (action.type === "badge") {
          return renderBadgeAction(action);
        }
        if (action.image) {
          return renderBadgeAction({
            image: action.image,
            alt: action.alt || action.label,
            href: action.href,
          });
        }
        return renderTextAction(action);
      })
      .join(""), preloaded);
  }

  const powerwords = document.querySelector(
    '[data-site-list="hero-powerwords"]'
  );
  if (powerwords && Array.isArray(hero.powerwords)) {
    setList(powerwords, hero.powerwords
      .map((word, index) => {
        const item = `<span class="pw-item pw-${index + 1}">${word}</span>`;
        const separator =
          index < hero.powerwords.length - 1
            ? '<span class="pw-separator">•</span>'
            : "";
        return `${item}${separator}`;
      })
      .join(""), preloaded);
  }

  const heroMedia = document.querySelector('[data-site="hero-media-image"]');
  if (heroMedia && hero.media) {
    if (hero.media.image) {
      setNodeAttr(heroMedia, "src", hero.media.image);
    }
    if (hero.media.alt) {
      setNodeAttr(heroMedia, "alt", hero.media.alt);
    }
  }

  const mediaCards = document.querySelector(
    '[data-site-list="hero-media-cards"]'
  );
  if (mediaCards && Array.isArray(hero.mediaCards)) {
    setList(mediaCards, hero.mediaCards
      .map(
        (card) => `
        <div class="ud-hero-card">
          <span class="ud-hero-card-label">${card.label || ""}</span>
          <strong class="ud-hero-card-value">${card.value || ""}</strong>
        </div>
      `
      )
      .join(""), preloaded);
  }
}

function renderTextAction(action) {
  const label = action.label || "Learn More";
  const href = action.href || "#";
  const className = action.className || "ud-main-btn ud-white-btn";
  const target = action.target ? ` target="${action.target}"` : "";
  const rel = action.rel ? ` rel="${action.rel}"` : "";
  return `<li><a href="${href}" class="${className}"${target}${rel}>${label}</a></li>`;
}

function renderBadgeAction(action) {
  const href = action.href || "#";
  const alt = action.alt || "Download";
  const image = action.image || "";
  const target = action.target ? ` target="${action.target}"` : "";
  const rel = action.rel ? ` rel="${action.rel}"` : "";
  return `<li><a href="${href}" class="store-badge"${target}${rel}><img src="${image}" alt="${alt}" width="120" height="40" loading="lazy" /></a></li>`;
}

function bindNavHandlers() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  document.querySelectorAll(".ud-menu-scroll").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      }
    });
  });
}

function applyFeatures(features, preloaded) {
  setText('[data-site="features-title"]', features.title);
  setText('[data-site="features-desc"]', features.description);

  const container = document.querySelector('[data-site-list="features"]');
  const items = Array.isArray(features.items) ? features.items : [];
  if (!container || items.length === 0) return;
  setList(container, items
    .map((feature) => {
      return `
        <div class="col-xl-4 col-lg-4 col-sm-6">
          <div class="ud-single-feature">
            <div class="ud-feature-icon">
              <i class="${feature.icon || "lni lni-star"}"></i>
            </div>
            <div class="ud-feature-content">
              <h3 class="ud-feature-title">${feature.title || ""}</h3>
              <p class="ud-feature-desc">${feature.text || ""}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join(""), preloaded);
}

function applyStats(stats, preloaded) {
  setText('[data-site="stats-title"]', stats.title);
  setText('[data-site="stats-desc"]', stats.description);
  setText('[data-site="stats-note"]', stats.note);
  const container = document.querySelector('[data-site-list="stats"]');
  if (!container || !Array.isArray(stats.items) || stats.items.length === 0) {
    return;
  }
  setList(container, stats.items
    .map((item) => {
      return `
        <div class="col-lg-4 col-md-6 col-sm-10">
          <div class="ud-stat-card">
            <div class="ud-stat-value">${item.value || ""}</div>
            <div class="ud-stat-label">${item.label || ""}</div>
          </div>
        </div>
      `;
    })
    .join(""), preloaded);
}

function applyBrandStrip(brandStrip, preloaded) {
  setText('[data-site="brand-strip-label"]', brandStrip.label);
  const container = document.querySelector('[data-site-list="brand-logos"]');
  if (!container || !Array.isArray(brandStrip.logos)) return;
  setList(container, brandStrip.logos
    .map(
      (logo) => {
        const w = logo.width ? ` width="${logo.width}"` : '';
        const h = logo.height ? ` height="${logo.height}"` : '';
        return `<img src="${logo.src || ""}" alt="${logo.alt || "Brand"}" loading="lazy"${w}${h} />`;
      }
    )
    .join(""), preloaded);
}

function applyAppPreview(appPreview, preloaded) {
  const preview = document.querySelector('[data-site="app-preview-image"]');
  if (preview) {
    if (appPreview.mainImage) preview.setAttribute("src", appPreview.mainImage);
    if (appPreview.mainAlt) preview.setAttribute("alt", appPreview.mainAlt);
  }

  const slideContainer = document.querySelector(
    '[data-site-list="app-preview-slides"]'
  );
  if (
    slideContainer &&
    Array.isArray(appPreview.slides) &&
    appPreview.slides.length > 0
  ) {
    setList(slideContainer, appPreview.slides
      .map(
        (slide) => `
        <div class="swiper-slide">
          <img loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" data-src="${slide.src || ""}" alt="${
          slide.alt || "Preview"
        }" class="popup-img" width="1036" height="2016" decoding="async" />
        </div>
      `
      )
      .join(""), preloaded);
  }
}

function applySocialGallery(gallery) {
  setText('[data-site="social-gallery-title"]', gallery.title);
  setText('[data-site="social-gallery-desc"]', gallery.description);
  const container = document.querySelector(
    '[data-site-list="social-gallery-items"]'
  );
  if (!container || !Array.isArray(gallery.items)) return;
  if (container.children.length > 0) return;

  container.innerHTML = gallery.items
    .map((item) => {
      if (item.type === "instagram") {
        return `
          <div class="social-item">
            <blockquote
              class="instagram-media"
              data-instgrm-permalink="${item.permalink || ""}"
              data-instgrm-version="14"
            ></blockquote>
          </div>
        `;
      }
      if (item.type === "youtube") {
        const videoId = item.videoId || "";
        const title = item.title || "YouTube video";
        return `
          <div class="social-item yt-facade" data-video-id="${videoId}" data-title="${title}">
            <img src="assets/images/hero/sohbetTerapiScreens-400w.webp" alt="${title}" loading="lazy" width="480" height="270" />
            <button class="yt-play-btn" aria-label="Play ${title}">&#9654;</button>
          </div>
        `;
      }
      if (item.type === "tiktok") {
        return `
          <div class="social-item">
            <blockquote
              class="tiktok-embed"
              cite="${item.cite || ""}"
              data-video-id="${item.videoId || ""}"
            >
              <section></section>
            </blockquote>
          </div>
        `;
      }
      if (item.type === "facebook") {
        return `
          <div class="social-item">
            <div class="fb-post" data-href="${item.href || ""}" data-width="${
          item.width || 350
        }"></div>
          </div>
        `;
      }
      if (item.html) {
        return `<div class="social-item">${item.html}</div>`;
      }
      return "";
    })
    .join("");
}

function applyTestimonials(testimonials) {
  setText('[data-site="testimonials-title"]', testimonials.title);
  setText('[data-site="testimonials-desc"]', testimonials.description);

  const featured = testimonials.featured || {};
  setText('[data-site="testimonial-highlight-text"]', featured.text);
  setText('[data-site="testimonial-highlight-name"]', featured.name);
  setText('[data-site="testimonial-highlight-role"]', featured.role);
}

function applyPricing(pricing) {
  setText('[data-site="pricing-title"]', pricing.title);
  setText('[data-site="pricing-desc"]', pricing.description);
  const container = document.querySelector('[data-site-list="pricing-plans"]');
  if (!container || !Array.isArray(pricing.plans)) return;
  const popularLabel = pricing.popularLabel || "POPULAR";

  container.innerHTML = pricing.plans
    .map((plan, index) => {
      const isPopular = Boolean(plan.popular);
      const tag = isPopular
        ? `<span class="ud-popular-tag">${popularLabel}</span>`
        : "";
      const buttonClass = isPopular ? "ud-main-btn ud-white-btn" : "ud-main-btn ud-border-btn";
      const features = Array.isArray(plan.features)
        ? plan.features.map((item) => `<li>${item}</li>`).join("")
        : "";
      const cta = plan.cta || {};

      return `
        <div class="col-lg-4 col-md-6 col-sm-10">
          <div class="ud-single-pricing ${isPopular ? "active" : ""}">
            ${tag}
            <div class="ud-pricing-header">
              <h3>${plan.name || ""}</h3>
              <h4>${plan.price || ""}</h4>
            </div>
            <div class="ud-pricing-body">
              <ul>${features}</ul>
            </div>
            <div class="ud-pricing-footer">
              <a href="${cta.href || "#"}" class="${buttonClass}">
                ${cta.label || "Get Started"}
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function applyFaq(faq) {
  setText('[data-site="faq-title"]', faq.title);
  setText('[data-site="faq-desc"]', faq.description);

  const leftCol = document.querySelector('[data-site="faq-col-left"]');
  const rightCol = document.querySelector('[data-site="faq-col-right"]');
  if (
    !leftCol ||
    !rightCol ||
    !Array.isArray(faq.items) ||
    faq.items.length === 0
  ) {
    return;
  }

  const midpoint = Math.ceil(faq.items.length / 2);
  const leftItems = faq.items.slice(0, midpoint);
  const rightItems = faq.items.slice(midpoint);

  leftCol.innerHTML = leftItems.map((item, index) => renderFaqItem(item, index)).join("");
  rightCol.innerHTML = rightItems
    .map((item, index) => renderFaqItem(item, index + midpoint))
    .join("");
}

function renderFaqItem(item, index) {
  const collapseId = `collapse-${index + 1}`;
  return `
    <div class="ud-single-faq">
      <div class="accordion">
        <button
          class="ud-faq-btn collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#${collapseId}"
        >
          <span class="icon flex-shrink-0">
            <i class="lni lni-chevron-down"></i>
          </span>
          <span>${item.question || ""}</span>
        </button>
        <div id="${collapseId}" class="accordion-collapse collapse">
          <div class="ud-faq-body">
            ${item.answer || ""}
          </div>
        </div>
      </div>
    </div>
  `;
}

function applyContact(contact) {
  const normalizedForm = normalizeContactForm(contact.form || {});

  setText('[data-site="contact-title"]', contact.title);
  setText('[data-site="contact-desc"]', contact.description);
  setText('[data-site="contact-address-label"]', contact.addressLabel);
  setText('[data-site="contact-address"]', contact.address);
  setText('[data-site="contact-email-label"]', contact.emailLabel);

  const emailsContainer = document.querySelector('[data-site="contact-emails"]');
  if (emailsContainer && Array.isArray(contact.emails)) {
    emailsContainer.innerHTML = contact.emails
      .map((email) => `<p>${email}</p>`)
      .join("");
  }

  setText('[data-site="contact-form-title"]', normalizedForm.title);
  setText('[data-site="contact-submit-label"]', normalizedForm.submitLabel);

  const form = document.querySelector('[data-site="contact-form"]');
  if (form && normalizedForm.action) {
    form.setAttribute("action", normalizedForm.action);
  }
  setAttr('[data-site="contact-form-next"]', "value", normalizedForm.next);
  setAttr('[data-site="contact-form-error"]', "value", normalizedForm.error);
  setAttr('[data-site="contact-form-subject"]', "value", normalizedForm.subject);
}

function normalizeSeo(seo) {
  if (!seo || typeof seo !== "object") return {};

  return {
    ...seo,
    canonical: normalizeSiteUrl(seo.canonical),
    ogUrl: normalizeSiteUrl(seo.ogUrl),
    ogImage: normalizeSiteUrl(seo.ogImage),
    twitterImage: normalizeSiteUrl(seo.twitterImage)
  };
}

function normalizeContactForm(form) {
  if (!form || typeof form !== "object") return {};

  return {
    ...form,
    title: form.title || "Send a Message",
    submitLabel: form.submitLabel || "Send Message",
    next: normalizeFormRedirect(form.next, "/form-pages/thanks.html"),
    error: normalizeFormRedirect(form.error, "/form-pages/error.html")
  };
}

function normalizeFormRedirect(url, fallbackPath) {
  const normalizedUrl = normalizeSiteUrl(url);
  if (!normalizedUrl) return normalizedUrl;
  if (
    normalizedUrl === `${CANONICAL_SITE_ORIGIN}/thanks.html` ||
    normalizedUrl === `${CANONICAL_SITE_ORIGIN}/error.html`
  ) {
    return `${CANONICAL_SITE_ORIGIN}${fallbackPath}`;
  }
  return normalizedUrl;
}

function normalizeSiteUrl(url) {
  if (typeof url !== "string" || url.length === 0) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url.replace(PLACEHOLDER_SITE_ORIGIN, CANONICAL_SITE_ORIGIN);
  }
  if (url.startsWith("/")) {
    return `${CANONICAL_SITE_ORIGIN}${url}`;
  }
  if (url.startsWith("assets/")) {
    return `${CANONICAL_SITE_ORIGIN}/${url}`;
  }
  return url;
}

function applyDownloadCta(downloadCta) {
  setText('[data-site="download-title"]', downloadCta.title);
  setText('[data-site="download-desc"]', downloadCta.description);
  const container = document.querySelector('[data-site-list="download-badges"]');
  if (!container || !Array.isArray(downloadCta.badges)) return;
  container.innerHTML = downloadCta.badges
    .map(
      (badge) =>
        `<a href="${badge.href || "#"}" class="store-badge"><img src="${
          badge.image || ""
        }" alt="${badge.alt || "Download"}" width="140" height="46" loading="lazy" /></a>`
    )
    .join("");

  const trust = document.querySelector('[data-site-list="download-trust"]');
  if (trust && Array.isArray(downloadCta.trustItems)) {
    trust.innerHTML = downloadCta.trustItems
      .map(
        (item) => `
        <div class="ud-download-trust-item">
          <span class="ud-download-trust-value">${item.value || ""}</span>
          <span class="ud-download-trust-label">${item.label || ""}</span>
        </div>
      `
      )
      .join("");
  }
}

function bindLanguageToggle() {
  const buttons = document.querySelectorAll(".ud-lang-btn");
  if (!buttons.length) return;
  syncLanguageButtons(getCurrentSiteLanguage());

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = normalizeSiteLanguage(btn.getAttribute("data-lang"));
      persistSiteLanguage(lang);
      syncSiteLanguageQuery(lang);
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.lang = lang;
      syncLanguageButtons(lang);
      applyLocalizedSiteData(false);
    });
  });
}

function applyFooter(footer) {
  setText('[data-site="footer-desc"]', footer.description);
  setText('[data-site="footer-quick-title"]', footer.quickTitle);
  setText('[data-site="footer-social-title"]', footer.socialTitle);
  setText('[data-site="footer-legal-title"]', footer.legalTitle);
  setText('[data-site="footer-emergency-title"]', footer.emergencyTitle);
  setHtml('[data-site="footer-emergency-text"]', footer.emergencyText);
  setText('[data-site="footer-bottom-text"]', footer.bottomText);

  const quickLinks = document.querySelector(
    '[data-site-list="footer-quick-links"]'
  );
  if (quickLinks && Array.isArray(footer.quickLinks)) {
    quickLinks.innerHTML = footer.quickLinks
      .map((link) => `<li><a href="${link.href || "#"}">${link.label || ""}</a></li>`)
      .join("");
  }

  const socialLinks = document.querySelector(
    '[data-site-list="footer-social-links"]'
  );
  if (socialLinks && Array.isArray(footer.socialLinks)) {
    socialLinks.innerHTML = footer.socialLinks
      .map(
        (link) => `
        <li>
          <a href="${link.href || "#"}" target="_blank" rel="noopener" aria-label="${resolveSocialLabel(
            link
          )}">
            <i class="${link.icon || "lni lni-link"}" aria-hidden="true"></i>
          </a>
        </li>
      `
      )
      .join("");
  }

  const legalLinks = document.querySelector(
    '[data-site-list="footer-legal-links"]'
  );
  if (legalLinks && Array.isArray(footer.legalLinks)) {
    legalLinks.innerHTML = footer.legalLinks
      .map((link) => `<li><a href="${link.href || "#"}">${link.label || ""}</a></li>`)
      .join("");
  }
}

function resolveSocialLabel(link) {
  const explicit = typeof link.label === "string" ? link.label.trim() : "";
  if (explicit) return explicit;

  const href = (link.href || "").toLowerCase();
  if (href.includes("youtube")) return "OnlyCampus YouTube";
  if (href.includes("instagram")) return "OnlyCampus Instagram";
  if (href.includes("tiktok")) return "OnlyCampus TikTok";
  if (href.includes("facebook")) return "OnlyCampus Facebook";
  return "OnlyCampus social profile";
}

function setText(selector, value) {
  if (value === undefined || value === null) return;
  const el = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (el) {
    const next = String(value);
    const current = el.textContent || "";
    if (normalizeText(current) === normalizeText(next)) return;
    el.textContent = next;
  }
}

function setHtml(selector, value) {
  if (!value) return;
  const el = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (el) {
    el.innerHTML = value;
  }
}

function setAttr(selector, attr, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) {
    setNodeAttr(el, attr, value);
  }
}

function setMeta(selector, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) {
    if (el.getAttribute("content") === value) return;
    el.setAttribute("content", value);
  }
}

function setNodeAttr(el, attr, value) {
  if (!el || value === undefined || value === null) return;
  const next = String(value);
  if (el.getAttribute(attr) === next) return;
  el.setAttribute(attr, next);
}

function normalizeText(text) {
  return String(text).replace(/\s+/g, " ").trim();
}
