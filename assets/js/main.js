/* ===================================
   OnlyCampus - Landing Page
   Main JavaScript
   =================================== */

(function () {
  'use strict';

  // Language Management
  let currentLanguage = localStorage.getItem('onlycampus-lang') || document.documentElement.lang || 'en';

  function setLanguage(lang) {
    const hasLanguage = typeof translations !== 'undefined' && translations[lang];
    currentLanguage = hasLanguage ? lang : 'en';
    localStorage.setItem('onlycampus-lang', currentLanguage);
    document.documentElement.lang = currentLanguage;
    translatePage();
    updateLanguageSwitcher();
  }

  function translatePage() {
    if (typeof translations === 'undefined') {
      console.error('Translations not loaded');
      return;
    }

    const t = translations[currentLanguage] || translations.en;
    if (!t) {
      return;
    }

    // Helper function to get nested translation
    function getTranslation(path) {
      return path.split('.').reduce((obj, key) => obj && obj[key], t);
    }

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const translation = getTranslation(key);
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (!el.value || el.value === el.getAttribute('placeholder')) {
            el.placeholder = translation;
          }
        } else if (el.tagName === 'LABEL') {
          // For labels, preserve the required asterisk if it exists
          const required = el.querySelector('.required');
          if (required) {
            el.innerHTML = translation + ' ' + required.outerHTML;
          } else {
            el.textContent = translation;
          }
        } else {
          el.textContent = translation;
        }
      }
    });

    // Translate elements with data-i18n-html (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const translation = getTranslation(key);
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // Translate title and meta tags
    if (t.meta) {
      document.title = t.meta.title || document.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && t.meta.description) {
        metaDescription.setAttribute('content', t.meta.description);
      }
    }
  }


  function initLanguageSwitcher() {
    const switcher = document.getElementById('languageSwitcher');
    if (!switcher) {
      return;
    }

    switcher.addEventListener('click', function () {
      toggleLanguage();
    });
  }

  function updateLanguageSwitcher() {
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
      // Show flag and language code for the language that will be switched TO
      const nextLang = currentLanguage === 'tr' ? 'en' : 'tr';
      const flag = nextLang === 'tr' ? '🇹🇷' : '🇺🇸';
      const langCode = nextLang === 'tr' ? 'TR' : 'EN';
      switcher.textContent = `${flag} ${langCode}`;
      switcher.setAttribute('data-lang', currentLanguage);
      switcher.setAttribute('title', currentLanguage === 'tr' ? 'İngilizce\'ye Geç' : 'Switch to Turkish');
    }
  }

  function toggleLanguage() {
    const newLang = currentLanguage === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLanguageSwitcher();
      setLanguage(currentLanguage);
    });
  } else {
    initLanguageSwitcher();
    setLanguage(currentLanguage);
  }

  const header = document.querySelector('.ud-header');

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.ud-menu-scroll');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          const navbarToggler = document.querySelector('.navbar-toggler');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            if (navbarToggler) {
              navbarToggler.classList.remove('active');
            }
            document.body.style.overflow = '';
          }
        }
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (mobileMenuToggle && navbarCollapse) {
    mobileMenuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = navbarCollapse.classList.contains('show');

      if (isOpen) {
        mobileMenuToggle.classList.remove('active');
        navbarCollapse.classList.remove('show');
        document.body.style.overflow = '';
      } else {
        mobileMenuToggle.classList.add('active');
        navbarCollapse.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = navbarCollapse.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setTimeout(function () {
          mobileMenuToggle.classList.remove('active');
          navbarCollapse.classList.remove('show');
          document.body.style.overflow = '';
        }, 100);
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          mobileMenuToggle.classList.remove('active');
          navbarCollapse.classList.remove('show');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');

  function setActiveNavLink() {
    const scrollY = window.pageYOffset;
    const headerHeight = header ? header.offsetHeight : 0;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  function updateScrollState() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (header) {
      if (currentScroll > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }

    if (backToTop) {
      backToTop.style.display = currentScroll > 300 ? 'flex' : 'none';
    }

    setActiveNavLink();
  }

  let isScrollTicking = false;
  function onScroll() {
    if (isScrollTicking) {
      return;
    }

    isScrollTicking = true;
    window.requestAnimationFrame(function () {
      updateScrollState();
      isScrollTicking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateScrollState();

  // Form Submission Handler
  const contactForm = document.querySelector('.ud-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  // Add animation on scroll for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.ud-feature-card, .ud-single-info, .ud-download-btn');
  animateElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Prevent default behavior for empty hash links
  document.querySelectorAll('a[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

})();
