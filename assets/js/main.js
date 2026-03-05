(function () {
  "use strict";

  var SWIPER_CSS_URL =
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
  var SWIPER_JS_URL =
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  var swiperAssetPromise = null;

  function loadSwiperAssets() {
    if (swiperAssetPromise) {
      return swiperAssetPromise;
    }

    swiperAssetPromise = new Promise(function (resolve, reject) {
      var pending = 0;
      var failed = false;

      function done() {
        pending -= 1;
        if (pending <= 0 && !failed) {
          resolve();
        }
      }

      function fail() {
        failed = true;
        reject(new Error("Swiper assets failed to load."));
      }

      var hasSwiperCss = document.querySelector('link[data-swiper-css="1"]');
      if (!hasSwiperCss) {
        pending += 1;
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = SWIPER_CSS_URL;
        css.setAttribute("data-swiper-css", "1");
        css.onload = done;
        css.onerror = fail;
        document.head.appendChild(css);
      }

      if (!window.Swiper) {
        pending += 1;
        var script = document.createElement("script");
        script.src = SWIPER_JS_URL;
        script.defer = true;
        script.onload = done;
        script.onerror = fail;
        document.head.appendChild(script);
      }

      if (pending === 0) {
        resolve();
      }
    });

    return swiperAssetPromise;
  }

  // Keep scroll position across refresh/navigation on this page.
  var scrollKey = "ud_page_scroll_" + (window.location.pathname || "index");
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function saveScroll() {
    try {
      sessionStorage.setItem(scrollKey, String(window.scrollY || 0));
    } catch (e) {}
  }

  function restoreScroll() {
    try {
      var saved = sessionStorage.getItem(scrollKey);
      if (saved !== null) {
        var y = parseInt(saved, 10);
        if (!isNaN(y) && y >= 0) {
          window.scrollTo(0, y);
          return y;
        }
      }
    } catch (e) {}
    return null;
  }

  function runRestoreUntilStable() {
    var targetY = restoreScroll();
    if (targetY === null) return;
    var attempts = 0;
    var maxAttempts = 40;
    var interval = setInterval(function () {
      if (window.scrollY !== targetY) {
        window.scrollTo(0, targetY);
      }
      attempts += 1;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 50);
  }

  window.addEventListener("beforeunload", saveScroll);
  window.addEventListener("pagehide", saveScroll);
  (function () {
    var scrollSaveTimer;
    window.addEventListener(
      "scroll",
      function () {
        clearTimeout(scrollSaveTimer);
        scrollSaveTimer = setTimeout(saveScroll, 150);
      },
      { passive: true }
    );
  })();

  window.addEventListener("load", function () {
    restoreScroll();
    requestAnimationFrame(function () {
      requestAnimationFrame(restoreScroll);
    });
    setTimeout(runRestoreUntilStable, 0);
    setTimeout(restoreScroll, 300);
    setTimeout(restoreScroll, 600);
    setTimeout(restoreScroll, 1000);
  });
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) restoreScroll();
  });

  var udHeader = document.querySelector(".ud-header");
  var backToTop = document.querySelector(".back-to-top");
  (function setupScrollStateObservers() {
    if (!udHeader && !backToTop) return;

    var sentinel = document.getElementById("scroll-state-sentinel");
    if (!sentinel) {
      sentinel = document.createElement("div");
      sentinel.id = "scroll-state-sentinel";
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.style.position = "absolute";
      sentinel.style.top = "0";
      sentinel.style.left = "0";
      sentinel.style.width = "1px";
      sentinel.style.height = "1px";
      sentinel.style.pointerEvents = "none";
      document.body.insertBefore(sentinel, document.body.firstChild);
    }

    if ("IntersectionObserver" in window) {
      if (udHeader) {
        var stickyObserver = new IntersectionObserver(
          function (entries) {
            var entry = entries[0];
            udHeader.classList.toggle("sticky", !entry.isIntersecting);
          },
          { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
        );
        stickyObserver.observe(sentinel);
      }

      if (backToTop) {
        var backToTopObserver = new IntersectionObserver(
          function (entries) {
            var entry = entries[0];
            backToTop.style.display = entry.isIntersecting ? "none" : "flex";
          },
          { rootMargin: "-50px 0px 0px 0px", threshold: 0 }
        );
        backToTopObserver.observe(sentinel);
      }
      return;
    }

    // Fallback for very old browsers without IntersectionObserver support.
    function fallbackUpdate() {
      var scrollPos = window.scrollY || 0;
      if (udHeader) udHeader.classList.toggle("sticky", scrollPos > 0);
      if (backToTop) backToTop.style.display = scrollPos > 50 ? "flex" : "none";
    }
    window.addEventListener("scroll", fallbackUpdate, { passive: true });
    fallbackUpdate();
  })();

  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarToggler && navbarCollapse) {
    document.querySelectorAll(".ud-menu-scroll").forEach(function (link) {
      link.addEventListener("click", function () {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      });
    });
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  }

  var submenuButtons = document.querySelectorAll(".nav-item-has-children");
  submenuButtons.forEach(function (item) {
    var anchor = item.querySelector("a");
    var submenu = item.querySelector(".ud-submenu");
    if (!anchor || !submenu) return;
    anchor.addEventListener("click", function () {
      submenu.classList.toggle("show");
    });
  });

  function easeInOutQuad(t, b, c, d) {
    var x = t / (d / 2);
    if (x < 1) return (c / 2) * x * x + b;
    x -= 1;
    return (-c / 2) * (x * (x - 2) - 1) + b;
  }

  function scrollToTop(duration) {
    var start = window.scrollY || 0;
    var change = -start;
    var startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var next = easeInOutQuad(elapsed, start, change, duration);
      window.scrollTo(0, next);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, 0);
      }
    }

    requestAnimationFrame(animate);
  }

  if (backToTop) {
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToTop(500);
    });
  }

  var testimonialsBootstrapped = false;
  async function loadTestimonials() {
    if (testimonialsBootstrapped) return;
    testimonialsBootstrapped = true;

    try {
      await loadSwiperAssets();

      var res = await fetch("assets/data/testimonials.json");
      if (!res.ok) {
        throw new Error("Testimonials fetch failed: " + res.status);
      }
      var all = await res.json();
      var selected = all.sort(function () {
        return 0.5 - Math.random();
      }).slice(0, 10);

      var wrapper = document.querySelector("#testimonials .swiper-wrapper");
      if (!wrapper) return;
      wrapper.innerHTML = "";

      selected.forEach(function (item) {
        var slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML =
          '<div class="ud-single-testimonial">' +
          '<div class="ud-testimonial-ratings">' +
          '<i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i>' +
          '<i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i>' +
          '<i class="lni lni-star-filled"></i></div>' +
          '<div class="ud-testimonial-content"><p>\u201c' +
          item.text +
          "\u201d</p></div>" +
          '<div class="ud-testimonial-info">' +
          '<div class="ud-testimonial-image">' +
          '<img src="' +
          item.image +
          '" alt="' +
          item.name +
          '" loading="lazy" width="60" height="60" />' +
          "</div>" +
          '<div class="ud-testimonial-meta"><h3>' +
          item.name +
          "</h3><p>" +
          item.role +
          "</p></div></div></div>";
        wrapper.appendChild(slide);
      });

      new Swiper(".ud-testimonials-swiper", {
        loop: true,
        loopedSlides: 11,
        speed: 4000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: false,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        },
        pagination: false,
        navigation: false,
      });
    } catch (err) {
      console.error("Testimonials failed to load:", err);
    }
  }

  var testimonialsSection = document.getElementById("testimonials");
  if (testimonialsSection) {
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              loadTestimonials();
              observer.disconnect();
            }
          });
        },
        { rootMargin: "250px" }
      );
      observer.observe(testimonialsSection);
    } else {
      loadTestimonials();
    }
  }

  var popupSwiper = null;
  function hydratePopupImages(root) {
    if (!root) return;
    root.querySelectorAll("img.popup-img[data-src]").forEach(function (img) {
      var src = img.getAttribute("data-src");
      if (!src) return;
      if (img.getAttribute("src") !== src) {
        img.setAttribute("src", src);
      }
      img.removeAttribute("data-src");
    });
  }

  function syncFaqButtons(root) {
    root.querySelectorAll(".ud-faq-btn[data-bs-target]").forEach(function (btn) {
      var targetSelector = btn.getAttribute("data-bs-target");
      if (!targetSelector) return;
      var panel = document.querySelector(targetSelector);
      if (!panel) return;
      var isOpen = panel.classList.contains("show");
      btn.classList.toggle("collapsed", !isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  function bindFaqToggle() {
    if (document.documentElement.hasAttribute("data-faq-toggle-bound")) return;
    document.documentElement.setAttribute("data-faq-toggle-bound", "1");

    document.addEventListener("click", function (event) {
      var btn = event.target.closest(".ud-faq-btn[data-bs-target]");
      if (!btn) return;

      var targetSelector = btn.getAttribute("data-bs-target");
      if (!targetSelector) return;

      var panel = document.querySelector(targetSelector);
      if (!panel) return;

      event.preventDefault();
      var willOpen = !panel.classList.contains("show");
      panel.classList.toggle("show", willOpen);
      btn.classList.toggle("collapsed", !willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var trigger = document.getElementById("preview-trigger");
    var popup = document.getElementById("screen-popup");
    var closeBtn = document.getElementById("close-popup");
    bindFaqToggle();
    syncFaqButtons(document);

    if (trigger && popup && closeBtn) {
      trigger.addEventListener("click", function () {
        hydratePopupImages(popup);
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";

        if (!popupSwiper) {
          loadSwiperAssets()
            .then(function () {
              if (popupSwiper) return;
              popupSwiper = new Swiper(".popup-swiper", {
                loop: true,
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 0,
                speed: 400,
                watchSlidesProgress: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
            })
            .catch(function (err) {
              console.error("Popup Swiper failed to load:", err);
            });
        }
      });

      closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
      });

      popup.addEventListener("click", function (event) {
        if (event.target === popup) {
          popup.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });
    }

    var video = document.getElementById("promoVideo");
    if (video) {
      if ("IntersectionObserver" in window) {
        var videoObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              video.load();
              videoObserver.disconnect();
            }
          });
        });
        videoObserver.observe(video);
      } else {
        video.load();
      }
    }
  });

  window.addEventListener("load", function () {
    function fixTikTokScroll() {
      var tiktokFrame = document.querySelector(".tiktok-embed iframe");
      if (tiktokFrame) {
        tiktokFrame.setAttribute("scrolling", "no");
        tiktokFrame.style.overflow = "hidden";
        tiktokFrame.style.height = "100%";
        tiktokFrame.style.maxHeight = "100%";
        tiktokFrame.style.border = "none";
      }
    }

    setTimeout(fixTikTokScroll, 1200);
    setTimeout(fixTikTokScroll, 2500);
    setTimeout(fixTikTokScroll, 4000);

    if (window.instgrm && window.instgrm.Embeds) {
      setTimeout(function () {
        window.instgrm.Embeds.process();
      }, 1000);
    }
  });
})();
