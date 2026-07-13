(function () {
  function setActiveNav() {
    let current = window.location.pathname.replace(/\/$/, "") || "/";
    if (current === "/index.html") current = "/";
    document.querySelectorAll(".nav-links a[data-route]").forEach((link) => {
      const route = link.getAttribute("data-route");
      if (route === current || (route !== "/" && current.startsWith(route))) {
        link.classList.add("active");
      }
    });
  }

  function setupMobileMenu() {
    const toggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!toggle || !navLinks) return;

    function closeMenu() {
      navLinks.classList.remove("active");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("mobile-menu-open");
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "site-navigation");
    if (!navLinks.id) navLinks.id = "site-navigation";

    toggle.addEventListener("click", () => {
      const willOpen = !navLinks.classList.contains("active");
      navLinks.classList.toggle("active", willOpen);
      toggle.classList.toggle("active", willOpen);
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
      document.body.classList.toggle("mobile-menu-open", willOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  function setupDropdowns() {
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    if (!dropdowns.length) return;

    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".nav-dropdown-toggle");
      if (!button) return;

      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-haspopup", "true");

      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = dropdown.classList.contains("open");
        dropdowns.forEach((item) => {
          item.classList.remove("open");
          const toggle = item.querySelector(".nav-dropdown-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          dropdown.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", () => {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const toggle = dropdown.querySelector(".nav-dropdown-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
          const toggle = dropdown.querySelector(".nav-dropdown-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  function setupSkipLink() {
    if (document.querySelector(".skip-link")) return;
    const target = document.querySelector("main") || document.querySelector("h1") || document.body;
    if (!target.id) target.id = "main-content";

    const skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = `#${target.id}`;
    skip.textContent = "Skip to content";
    document.body.insertBefore(skip, document.body.firstChild);
  }

  function setupReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target) => observer.observe(target));
  }

  function setupCounters() {
    const counters = document.querySelectorAll(".counter[data-target]");
    if (!counters.length || !("IntersectionObserver" in window)) return;

    function animateCounter(el) {
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = "true";
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function setupGoogleFormLinks() {
    if (!window.FLUXERA_CONFIG || !window.FLUXERA_CONFIG.googleFormUrl) return;
    document.querySelectorAll("[data-google-form]").forEach((link) => {
      link.setAttribute("href", window.FLUXERA_CONFIG.googleFormUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupSkipLink();
    setActiveNav();
    setupMobileMenu();
    setupDropdowns();
    setupReveal();
    setupCounters();
    setupGoogleFormLinks();
    setupSmoothAnchors();
  });
})();
