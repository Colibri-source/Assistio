(function () {
  "use strict";

  const DEFAULT_BOOKING_URL = "https://calendar.app.google/mF4N138gHQZpTKqc6";
  const DEFAULT_LOCALE_PATHS = {
    ro: "./locales/ro.json",
    ar: "./locales/ar.json"
  };
  const THEME_STORAGE_KEY = "assistio_theme_mode";
  const LEGACY_THEME_STORAGE_KEY = "assistio_theme";
  const LANG_STORAGE_KEY = "assistio_lang";
  const THEME_ORDER = ["light", "dark", "system"];
  const THEME_COLORS = {
    light: "#f3f7fc",
    dark: "#040a15"
  };
  const SUPPORT_TEXT = {
    en: {
      copyDefault: "Copy",
      copySuccess: "Copied",
      copyRetry: "Try again",
      themeModes: {
        light: "Light",
        dark: "Dark",
        system: "System"
      },
      supportLauncherTitle: "Support AI",
      supportLauncherLoading: "Opening chat...",
      supportLauncherAria: "Open Assistio support chat"
    },
    ro: {
      copyDefault: "Copiaza",
      copySuccess: "Copiat",
      copyRetry: "Incearca din nou",
      themeModes: {
        light: "Luminos",
        dark: "Intunecat",
        system: "Sistem"
      },
      supportLauncherTitle: "Asistent AI",
      supportLauncherLoading: "Se deschide chatul...",
      supportLauncherAria: "Deschide chatul de suport Assistio"
    },
    ar: {
      copyDefault: "نسخ",
      copySuccess: "تم النسخ",
      copyRetry: "حاول مرة اخرى",
      themeModes: {
        light: "فاتح",
        dark: "داكن",
        system: "النظام"
      },
      supportLauncherTitle: "مساعد AI",
      supportLauncherLoading: "جار فتح المحادثة...",
      supportLauncherAria: "افتح محادثة دعم Assistio"
    }
  };
  const DEFAULT_EXAMPLES = {
    whatsapp: {
      user: "Hi, I need faster replies for WhatsApp and our website so we can stop missing warm leads.",
      bot: "We can handle that. How many people need access, and should we send qualified leads straight to your booking link?",
      capture: "Team size: 4 users",
      next: "Route to booked demo",
      autoTitle: "Respond instantly across your key channels",
      autoCopy: "No manual lag while leads are still ready to act.",
      qualificationTitle: "Collect the details your team actually needs",
      qualificationCopy: "Reduce back-and-forth and keep operators focused on real opportunities.",
      step1: "A warm WhatsApp message arrives and gets answered immediately.",
      step2: "Team size, urgency, and booking intent are captured in real time.",
      step3: "The lead is moved straight to the booking link without delay."
    },
    website: {
      user: "I am on your pricing page and want to know which setup works best for a clinic with two locations.",
      bot: "For a clinic with two locations, Growth is usually the best fit because it gives you multiple channels and lead tracking. Are you mainly looking to automate website chat, WhatsApp, or both?",
      capture: "Page: pricing | two locations",
      next: "Send to consultative demo",
      autoTitle: "Convert website visitors while intent is highest",
      autoCopy: "Answer questions instantly before serious visitors bounce.",
      qualificationTitle: "Capture use case, volume, and handoff rules",
      qualificationCopy: "Keep sales conversations structured before a human needs to jump in.",
      step1: "A website visitor asks a buying question inside chat.",
      step2: "The AI captures team size, locations, and preferred channels.",
      step3: "Qualified visitors are routed to the right demo flow."
    },
    email: {
      user: "We receive too many inbound emails and need a faster way to qualify who is serious.",
      bot: "Understood. We can sort incoming emails by intent and route the serious requests to the best next step. Do you already use a calendar link?",
      capture: "Need: email triage and lead routing",
      next: "Send qualified replies to booking",
      autoTitle: "Triage email without slowing down your team",
      autoCopy: "Identify serious opportunities before your inbox gets crowded.",
      qualificationTitle: "Pull out the details that matter most",
      qualificationCopy: "Reduce manual sorting and route the important conversations faster.",
      step1: "An inbound email is detected and categorized instantly.",
      step2: "Key details are pulled out so your team sees the context fast.",
      step3: "Serious requests are guided toward booking or handoff."
    },
    instagram: {
      user: "People keep DMing us on Instagram asking how to book. We need replies to be faster and more consistent.",
      bot: "We can automate that. Should we qualify inquiries in the DM and then send serious leads to your booking flow?",
      capture: "Channel: Instagram DMs",
      next: "Qualify, then route to booking",
      autoTitle: "Reply fast on social without losing consistency",
      autoCopy: "Keep DMs moving even when your team is offline.",
      qualificationTitle: "Keep context before the handoff happens",
      qualificationCopy: "Collect the basics first so your team only handles the conversations that need them.",
      step1: "An Instagram DM arrives asking about availability.",
      step2: "The AI captures the request and checks booking intent.",
      step3: "Ready leads are pushed to the booking path immediately."
    }
  };

  const config = window.ASSISTIO_SITE_CONFIG || {};
  const BOOKING_URL = config.bookingUrl || DEFAULT_BOOKING_URL;
  const LOCALE_VERSION = config.localeVersion || "2026-04-05";
  const LOCALE_PATHS = Object.assign({}, DEFAULT_LOCALE_PATHS, config.localePaths || {});
  const CHATWOOT_CONFIG = Object.assign(
    {
      enabled: false,
      baseUrl: "",
      websiteToken: "",
      position: "right",
      hideMessageBubble: true
    },
    config.chatwoot || {}
  );

  const doc = document.documentElement;
  const body = document.body;
  const prefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : {
        matches: false
      };

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const navOverlay = document.querySelector("[data-nav-overlay]");
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const navMenuLinks = navMenu ? Array.from(navMenu.querySelectorAll("a")) : [];
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const langButtons = Array.from(document.querySelectorAll(".lang-button[data-lang]"));
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  const sectionEls = Array.from(document.querySelectorAll("[data-section]"));
  const yearEls = Array.from(document.querySelectorAll("[data-year]"));
  const bookingButtons = Array.from(document.querySelectorAll("[data-open-booking]"));
  const bookingModal = document.querySelector("[data-booking-modal]");
  const bookingCloseButtons = Array.from(document.querySelectorAll("[data-close-booking]"));
  const bookingLink = document.querySelector("[data-booking-link]");
  const exampleTabs = Array.from(document.querySelectorAll("[data-example-tab]"));
  const copyButtons = Array.from(document.querySelectorAll("[data-copy-button]"));
  const supportLauncher = document.querySelector("[data-chat-launcher]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const exampleEls = {
    user: document.querySelector("[data-example-user]"),
    bot: document.querySelector("[data-example-bot]"),
    capture: document.querySelector("[data-example-capture]"),
    next: document.querySelector("[data-example-next]"),
    autoTitle: document.querySelector("[data-example-auto-title]"),
    autoCopy: document.querySelector("[data-example-auto-copy]"),
    qualificationTitle: document.querySelector("[data-example-qualification-title]"),
    qualificationCopy: document.querySelector("[data-example-qualification-copy]"),
    step1: document.querySelector("[data-example-step-1]"),
    step2: document.querySelector("[data-example-step-2]"),
    step3: document.querySelector("[data-example-step-3]")
  };

  const defaultMessages = {};
  const defaultPlaceholders = {};
  const localeCache = new Map();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && !(key in defaultMessages)) {
      defaultMessages[key] = el.textContent.trim();
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && !(key in defaultPlaceholders)) {
      defaultPlaceholders[key] = el.getAttribute("placeholder") || "";
    }
  });

  let activeThemeMode = normalizeThemeMode(
    readStored(THEME_STORAGE_KEY) ||
      readStored(LEGACY_THEME_STORAGE_KEY) ||
      doc.getAttribute("data-theme-mode") ||
      "system"
  );
  let activeTheme = resolveTheme(activeThemeMode);
  let activeLang = normalizeLang(readStored(LANG_STORAGE_KEY) || doc.lang || "en");
  let activeLocale = emptyLocale();
  let activeExample = "whatsapp";
  let lastFocusedElement = null;
  let localeRequestId = 0;
  let chatwootLoadPromise = null;
  let chatwootReady = false;
  let pendingChatOpen = false;
  let headerScrollTick = false;
  let resizeTick = false;
  let isHeaderScrolled = null;

  function emptyLocale() {
    return {
      messages: {},
      placeholders: {},
      examples: {}
    };
  }

  function readStored(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storeValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function removeStored(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      return;
    }
  }

  function normalizeThemeMode(value) {
    return THEME_ORDER.includes(value) ? value : "system";
  }

  function normalizeLang(lang) {
    return ["en", "ro", "ar"].includes(lang) ? lang : "en";
  }

  function resolveTheme(mode) {
    return mode === "system" ? (prefersDark.matches ? "dark" : "light") : mode;
  }

  function nextThemeMode(mode) {
    const index = THEME_ORDER.indexOf(mode);
    return THEME_ORDER[(index + 1) % THEME_ORDER.length];
  }

  function currentUiText() {
    return SUPPORT_TEXT[activeLang] || SUPPORT_TEXT.en;
  }

  function syncThemeMeta(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.light);
    }
  }

  function updateThemeToggle() {
    if (!themeToggle) return;

    const labels = currentUiText().themeModes;
    const nextMode = nextThemeMode(activeThemeMode);

    themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
    themeToggle.setAttribute("data-theme-label", labels[activeThemeMode]);
    themeToggle.setAttribute(
      "aria-label",
      "Theme: " + labels[activeThemeMode] + ". Activate to switch to " + labels[nextMode] + "."
    );
    themeToggle.setAttribute("title", "Theme: " + labels[activeThemeMode]);
  }

  function setThemeMode(mode, options) {
    activeThemeMode = normalizeThemeMode(mode);
    activeTheme = resolveTheme(activeThemeMode);

    doc.setAttribute("data-theme-mode", activeThemeMode);
    doc.setAttribute("data-theme", activeTheme);
    doc.style.colorScheme = activeTheme;

    syncThemeMeta(activeTheme);
    updateThemeToggle();

    if (!options || options.persist !== false) {
      storeValue(THEME_STORAGE_KEY, activeThemeMode);
    }

    removeStored(LEGACY_THEME_STORAGE_KEY);

    if (chatwootReady) {
      syncChatwootSettings();
    }
  }

  function localeStorageKey(lang) {
    return "assistio_locale_" + LOCALE_VERSION + "_" + lang;
  }

  function parseCachedLocale(rawValue) {
    if (!rawValue) return null;

    try {
      const parsed = JSON.parse(rawValue);
      if (!parsed || typeof parsed !== "object") {
        return null;
      }

      return parsed;
    } catch (error) {
      return null;
    }
  }

  async function fetchLocale(lang) {
    const response = await fetch(
      (LOCALE_PATHS[lang] || ("./locales/" + lang + ".json")) + "?v=" + encodeURIComponent(LOCALE_VERSION),
      {
        cache: "force-cache",
        credentials: "same-origin"
      }
    );

    if (!response.ok) {
      throw new Error("Unable to load locale: " + lang);
    }

    return response.json();
  }

  async function loadLocale(lang) {
    if (lang === "en") {
      return emptyLocale();
    }

    if (localeCache.has(lang)) {
      return localeCache.get(lang);
    }

    const cachedLocale = parseCachedLocale(readStored(localeStorageKey(lang)));
    if (cachedLocale) {
      localeCache.set(lang, cachedLocale);
      scheduleIdleTask(() => {
        fetchLocale(lang)
          .then((freshLocale) => {
            localeCache.set(lang, freshLocale);
            storeValue(localeStorageKey(lang), JSON.stringify(freshLocale));
          })
          .catch(() => {});
      }, 1200);
      return cachedLocale;
    }

    const locale = await fetchLocale(lang);
    localeCache.set(lang, locale);
    storeValue(localeStorageKey(lang), JSON.stringify(locale));
    return locale;
  }

  function translatedMessage(key) {
    return (activeLocale.messages && activeLocale.messages[key]) || defaultMessages[key] || "";
  }

  function translatedPlaceholder(key) {
    return (activeLocale.placeholders && activeLocale.placeholders[key]) || defaultPlaceholders[key] || "";
  }

  function applyTranslations() {
    doc.lang = activeLang;
    doc.dir = activeLang === "ar" ? "rtl" : "ltr";
    body.setAttribute("data-lang", activeLang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = key ? translatedMessage(key) : "";
      if (value) {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = key ? translatedPlaceholder(key) : "";
      if (value) {
        el.setAttribute("placeholder", value);
      }
    });

    document.querySelectorAll("input, textarea").forEach((field) => {
      field.dir = activeLang === "ar" ? "rtl" : "ltr";
    });
  }

  function activeExampleContent(channel) {
    if (activeLang === "en") {
      return DEFAULT_EXAMPLES[channel] || DEFAULT_EXAMPLES.whatsapp;
    }

    const localeExamples = activeLocale.examples || {};
    return localeExamples[channel] || DEFAULT_EXAMPLES[channel] || DEFAULT_EXAMPLES.whatsapp;
  }

  function applyChannelExample(channel) {
    const nextChannel = DEFAULT_EXAMPLES[channel] ? channel : "whatsapp";
    const nextExample = activeExampleContent(nextChannel);

    activeExample = nextChannel;

    Object.keys(exampleEls).forEach((key) => {
      if (exampleEls[key] && nextExample[key]) {
        exampleEls[key].textContent = nextExample[key];
      }
    });

    exampleTabs.forEach((tab) => {
      const isActive = tab.dataset.exampleTab === activeExample;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
  }

  function updateLangButtons() {
    langButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === activeLang);
    });
  }

  function updateCopyButtons() {
    const uiText = currentUiText();

    copyButtons.forEach((button) => {
      button.dataset.copyDefault = uiText.copyDefault;
      button.dataset.copySuccess = uiText.copySuccess;
      button.dataset.copyRetry = uiText.copyRetry;

      if (!button.classList.contains("is-copied")) {
        button.textContent = uiText.copyDefault;
      }
    });
  }

  function updateSupportLauncher() {
    if (!supportLauncher) return;

    const uiText = currentUiText();
    supportLauncher.setAttribute("aria-label", uiText.supportLauncherAria);

    if (!supportLauncher.classList.contains("is-loading")) {
      supportLauncher.setAttribute("title", uiText.supportLauncherTitle);
    }
  }

  async function setLanguage(lang, options) {
    const requestId = ++localeRequestId;
    let nextLang = normalizeLang(lang);
    let locale = emptyLocale();

    activeLang = nextLang;
    updateLangButtons();
    body.classList.add("is-language-loading");

    if (nextLang !== "en") {
      try {
        locale = await loadLocale(nextLang);
      } catch (error) {
        nextLang = "en";
        locale = emptyLocale();
      }
    }

    if (requestId !== localeRequestId) {
      return;
    }

    activeLang = nextLang;
    activeLocale = locale;

    applyTranslations();
    applyChannelExample(activeExample);
    updateCopyButtons();
    updateThemeToggle();
    updateSupportLauncher();
    syncChatwootSettings();

    body.classList.remove("is-language-loading");

    if (!options || options.persist !== false) {
      storeValue(LANG_STORAGE_KEY, activeLang);
    }
  }

  function setHeaderState() {
    if (!header) return;

    const nextScrolledState = window.scrollY > 8;
    if (isHeaderScrolled !== nextScrolledState) {
      header.classList.toggle("is-scrolled", nextScrolledState);
      isHeaderScrolled = nextScrolledState;
      syncHeaderMetrics();
      return;
    }

    if (!doc.style.getPropertyValue("--nav-top")) {
      syncHeaderMetrics();
    }
  }

  function syncHeaderMetrics() {
    if (!header) return;

    const headerHeight = Math.max(header.offsetHeight || 0, 88);
    doc.style.setProperty("--header-offset", headerHeight + 18 + "px");
    doc.style.setProperty("--nav-top", headerHeight + 12 + "px");
  }

  function scheduleHeaderUpdate() {
    if (headerScrollTick) return;

    headerScrollTick = true;
    window.requestAnimationFrame(() => {
      setHeaderState();
      headerScrollTick = false;
    });
  }

  function scheduleResizeUpdate() {
    if (resizeTick) return;

    resizeTick = true;
    window.requestAnimationFrame(() => {
      closeNav();
      syncHeaderMetrics();
      setHeaderState();
      resizeTick = false;
    });
  }

  function setNavState(isOpen) {
    if (!navMenu || !navToggle) return;

    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (navOverlay) {
      navOverlay.hidden = !isOpen;
    }

    if (header) {
      header.classList.toggle("is-nav-open", isOpen);
    }

    body.classList.toggle("nav-open", isOpen);
    syncHeaderMetrics();
  }

  function closeNav() {
    setNavState(false);
  }

  function toggleNav() {
    if (!navMenu) return;
    setNavState(!navMenu.classList.contains("is-open"));
  }

  function markActiveNav(id) {
    navLinks.forEach((link) => {
      if (link.dataset.navLink === id) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setupRevealObserver() {
    if (!revealEls.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function setupSectionObserver() {
    if (body.dataset.page !== "home" || !sectionEls.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry && visibleEntry.target.id) {
          markActiveNav(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sectionEls.forEach((section) => observer.observe(section));
  }

  function openBookingModal(trigger) {
    if (!bookingModal) return;

    lastFocusedElement = trigger || document.activeElement;
    bookingModal.hidden = false;
    body.classList.add("modal-open");

    if (bookingLink) {
      bookingLink.focus();
    }
  }

  function closeBookingModal() {
    if (!bookingModal) return;

    bookingModal.hidden = true;
    body.classList.remove("modal-open");

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      body.appendChild(textarea);
      textarea.select();

      try {
        const isSuccessful = document.execCommand("copy");
        body.removeChild(textarea);
        if (!isSuccessful) {
          reject(new Error("Copy failed"));
          return;
        }
        resolve();
      } catch (error) {
        body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function isChatwootConfigured() {
    return Boolean(CHATWOOT_CONFIG.enabled && CHATWOOT_CONFIG.baseUrl && CHATWOOT_CONFIG.websiteToken);
  }

  function chatwootBaseUrl() {
    return String(CHATWOOT_CONFIG.baseUrl || "").replace(/\/+$/, "");
  }

  function chatwootLocale() {
    return activeLang;
  }

  function computedChatwootSettings() {
    return {
      hideMessageBubble: CHATWOOT_CONFIG.hideMessageBubble !== false,
      showUnreadMessagesDialog: false,
      position: CHATWOOT_CONFIG.position === "left" ? "left" : "right",
      locale: chatwootLocale(),
      useBrowserLanguage: false,
      type: "standard",
      darkMode: activeTheme === "light" ? "light" : "auto"
    };
  }

  function syncChatwootSettings() {
    window.chatwootSettings = computedChatwootSettings();

    if (!chatwootReady || !window.$chatwoot) {
      return;
    }

    if (typeof window.$chatwoot.setLocale === "function") {
      try {
        window.$chatwoot.setLocale(chatwootLocale());
      } catch (error) {
      }
    }

    if (typeof window.$chatwoot.toggleBubbleVisibility === "function") {
      try {
        window.$chatwoot.toggleBubbleVisibility(CHATWOOT_CONFIG.hideMessageBubble !== false ? "hide" : "show");
      } catch (error) {
      }
    }
  }

  function setSupportLauncherState(state) {
    if (!supportLauncher) return;

    const uiText = currentUiText();

    supportLauncher.classList.toggle("is-loading", state === "loading");
    supportLauncher.classList.toggle("is-open", state === "open");
    supportLauncher.classList.toggle("is-ready", state === "ready");

    if (state === "loading") {
      supportLauncher.setAttribute("aria-busy", "true");
      supportLauncher.setAttribute("title", uiText.supportLauncherLoading);
    } else {
      supportLauncher.removeAttribute("aria-busy");
      supportLauncher.setAttribute("title", uiText.supportLauncherTitle);
    }
  }

  function openFallbackSupport() {
    if (!supportLauncher) return;

    const fallbackTarget = supportLauncher.getAttribute("data-chat-fallback");
    if (!fallbackTarget) return;

    if (fallbackTarget.charAt(0) === "#") {
      const targetEl = document.querySelector(fallbackTarget);
      if (targetEl) {
        closeNav();
        targetEl.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });

        const focusTarget = targetEl.querySelector("input, textarea, a, button");
        if (focusTarget && typeof focusTarget.focus === "function") {
          window.setTimeout(() => focusTarget.focus({ preventScroll: true }), 300);
        }
        return;
      }
    }

    window.location.assign(fallbackTarget);
  }

  function openChatwootWidget() {
    if (!window.$chatwoot || typeof window.$chatwoot.toggle !== "function") {
      return false;
    }

    try {
      window.$chatwoot.toggle("open");
      setSupportLauncherState("open");
      return true;
    } catch (error) {
      return false;
    }
  }

  function loadChatwoot() {
    if (!isChatwootConfigured()) {
      return Promise.reject(new Error("Chatwoot is not configured"));
    }

    if (chatwootLoadPromise) {
      return chatwootLoadPromise;
    }

    syncChatwootSettings();

    chatwootLoadPromise = new Promise((resolve, reject) => {
      const sdkScript = document.createElement("script");
      const readyTimeout = window.setTimeout(() => {
        reject(new Error("Chatwoot timed out"));
      }, 15000);

      const onReady = () => {
        window.clearTimeout(readyTimeout);
        chatwootReady = true;
        setSupportLauncherState("ready");
        syncChatwootSettings();

        if (pendingChatOpen) {
          pendingChatOpen = false;
          openChatwootWidget();
        }

        resolve(window.$chatwoot);
      };

      window.addEventListener("chatwoot:ready", onReady, { once: true });

      sdkScript.src = chatwootBaseUrl() + "/packs/js/sdk.js";
      sdkScript.async = true;
      sdkScript.onload = function () {
        if (window.chatwootSDK && typeof window.chatwootSDK.run === "function") {
          window.chatwootSDK.run({
            websiteToken: CHATWOOT_CONFIG.websiteToken,
            baseUrl: chatwootBaseUrl()
          });
          return;
        }

        window.clearTimeout(readyTimeout);
        reject(new Error("Chatwoot SDK is unavailable"));
      };
      sdkScript.onerror = function () {
        window.clearTimeout(readyTimeout);
        reject(new Error("Unable to load Chatwoot"));
      };

      document.head.appendChild(sdkScript);
    }).catch((error) => {
      chatwootLoadPromise = null;
      chatwootReady = false;
      setSupportLauncherState("ready");
      throw error;
    });

    return chatwootLoadPromise;
  }

  function maybeWarmChatwoot() {
    if (!isChatwootConfigured() || chatwootLoadPromise) return;

    loadChatwoot().catch(() => {});
  }

  function handleSupportLauncherClick() {
    if (!supportLauncher) return;

    if (!isChatwootConfigured()) {
      openFallbackSupport();
      return;
    }

    if (chatwootReady) {
      if (!openChatwootWidget()) {
        openFallbackSupport();
      }
      return;
    }

    pendingChatOpen = true;
    setSupportLauncherState("loading");

    loadChatwoot().catch(() => {
      pendingChatOpen = false;
      openFallbackSupport();
    });
  }

  function scheduleIdleTask(task, timeout) {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(task, {
        timeout: timeout || 1200
      });
      return;
    }

    window.setTimeout(task, timeout || 700);
  }

  function prefetchLocales() {
    ["ro", "ar"].forEach((lang) => {
      if (lang === activeLang) return;
      scheduleIdleTask(() => {
        loadLocale(lang).catch(() => {});
      }, 1000);
    });
  }

  setThemeMode(activeThemeMode, { persist: false });
  setHeaderState();
  syncHeaderMetrics();
  setupRevealObserver();
  setupSectionObserver();
  applyChannelExample(activeExample);
  updateSupportLauncher();

  yearEls.forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  if (bookingLink) {
    bookingLink.setAttribute("href", BOOKING_URL);
  }

  bookingButtons.forEach((button) => {
    button.setAttribute("href", BOOKING_URL);
  });

  setLanguage(activeLang, { persist: false }).finally(() => {
    prefetchLocales();
  });

  updateCopyButtons();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setThemeMode(nextThemeMode(activeThemeMode));
    });
  }

  if (prefersDark && typeof prefersDark.addEventListener === "function") {
    prefersDark.addEventListener("change", () => {
      if (activeThemeMode === "system") {
        setThemeMode("system", { persist: false });
      }
    });
  } else if (prefersDark && typeof prefersDark.addListener === "function") {
    prefersDark.addListener(() => {
      if (activeThemeMode === "system") {
        setThemeMode("system", { persist: false });
      }
    });
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNav);
  }

  navMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 980) {
        closeNav();
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 980) {
        closeNav();
      }
    });
  });

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.lang || "en";
      if (nextLang === activeLang) return;
      setLanguage(nextLang);
    });
  });

  exampleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      applyChannelExample(tab.dataset.exampleTab || "whatsapp");
    });
  });

  bookingButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      closeNav();
      openBookingModal(button);
    });
  });

  bookingCloseButtons.forEach((button) => {
    button.addEventListener("click", closeBookingModal);
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue || "";
      const successLabel = button.dataset.copySuccess || currentUiText().copySuccess;
      const retryLabel = button.dataset.copyRetry || currentUiText().copyRetry;

      if (!value) return;

      try {
        await copyText(value);
        button.textContent = successLabel;
        button.classList.add("is-copied");
      } catch (error) {
        button.textContent = retryLabel;
      }

      window.setTimeout(() => {
        button.textContent = button.dataset.copyDefault || currentUiText().copyDefault;
        button.classList.remove("is-copied");
      }, 1600);
    });
  });

  if (supportLauncher) {
    supportLauncher.hidden = false;
    supportLauncher.addEventListener("click", handleSupportLauncherClick);
    supportLauncher.addEventListener("pointerenter", maybeWarmChatwoot, { once: true });
    supportLauncher.addEventListener("focus", maybeWarmChatwoot, { once: true });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
      if (bookingModal && !bookingModal.hidden) {
        closeBookingModal();
      }
    }
  });

  window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
  window.addEventListener("resize", scheduleResizeUpdate, { passive: true });
})();
