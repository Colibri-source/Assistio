(function () {
  "use strict";

  const BOOKING_URL = "https://calendar.app.google/YdZuLu8dWCTAMgx18";
  const THEME_COLORS = {
    light: "#08162f",
    dark: "#040a15"
  };

  const TRANSLATIONS = {
    ro: {
      brand_tag: "automatizare AI pentru leaduri si programari",
      nav_product: "Produs",
      nav_pricing: "Preturi",
      nav_how: "Cum functioneaza",
      nav_contact: "Contacteaza-ne",
      cta_book_demo: "Programeaza demo",
      cta_how: "Vezi cum functioneaza",
      hero_eyebrow: "Automatizare AI premium pentru echipe orientate spre venit",
      hero_title: "Automatizeaza conversatiile cu clientii si inchide mai multe leaduri",
      hero_lead: "Automatizare AI pentru WhatsApp, Website si Email care raspunde instant, captureaza leaduri si ajuta la mai multe programari.",
      hero_trust_line: "Functioneaza 24/7 - Fara leaduri pierdute",
      trust_1: "Fara obligatii",
      trust_2: "Programarea dureaza 30 de secunde",
      trust_3: "Setup rapid dupa aprobare",
      visual_window: "Flux live de conversatie",
      visual_hint: "Alege un canal ca sa vezi cum se adapteaza fluxul.",
      tab_whatsapp: "WhatsApp",
      tab_website: "Chat website",
      tab_email: "Email",
      tab_instagram: "Instagram",
      proof_eyebrow: "Construit pentru afaceri orientate pe canale",
      proof_copy: "Un singur sistem fiabil pe canalele pe care clientii tai le folosesc deja.",
      proof_facebook: "Facebook",
      pricing_featured_badge: "Recomandat",
      final_eyebrow: "Gata sa iti automatizezi afacerea?",
      final_title: "Gata sa iti automatizezi afacerea?",
      final_copy: "Programeaza demo pentru a vedea cea mai buna configurare Assistio pentru canalele si fluxul tau de leaduri.",
      final_support: "Fara obligatii. Rapid de programat. Usor de inceput.",
      contact_eyebrow: "Contacteaza-ne",
      contact_title: "Ai nevoie de un setup personalizat sau vrei mai intai sa intrebi ceva?",
      contact_lead: "Trimite-ne un mesaj scurt si te ajutam sa alegi canalele, fluxurile si planul potrivit pentru afacerea ta.",
      contact_email_label: "Scrie-ne pe email",
      contact_response_label: "Raspuns tipic",
      contact_response_value: "In 1 zi lucratoare",
      contact_form_title: "Spune-ne despre afacerea ta",
      contact_form_copy: "Spune-ne canalele, obiectivele si problema principala. Iti raspundem cu pasul urmator potrivit.",
      form_name: "Nume",
      form_email: "Email",
      form_company: "Companie",
      form_message: "Mesaj",
      form_name_placeholder: "Numele tau",
      form_email_placeholder: "tu@companie.com",
      form_company_placeholder: "Numele companiei",
      form_message_placeholder: "Spune-ne ce canale folosesti si ce vrei sa automatizezi.",
      form_disclaimer: "Prin trimiterea acestui formular, esti de acord sa folosim datele tale pentru a raspunde solicitarii tale.",
      footer_tag: "Automatizare a conversatiilor cu clientii care aduce mai multe booking-uri.",
      footer_copy: "Programeaza demo pentru a vedea configurarea potrivita pentru afacerea ta.",
      booking_title: "Vezi cea mai buna configurare Assistio pentru afacerea ta.",
      booking_copy: "Fara obligatii. Programarea dureaza 30 de secunde si iti aratam cel mai rapid drum spre lansare dupa aprobare.",
      booking_continue: "Continua catre booking",
      example_incoming: "Lead nou",
      example_capture: "Captat automat",
      example_next: "Urmatorul pas",
      example_auto: "Raspunsuri AI",
      example_qualification: "Calificare lead",
      example_journey: "Flux pregatit pentru booking",
      journey_step_1_title: "1. Lead nou",
      journey_step_2_title: "2. Calificat automat",
      journey_step_3_title: "3. Demo programat"
    },
    ar: {
      brand_tag: "أتمتة بالذكاء الاصطناعي لالتقاط العملاء والحجوزات",
      nav_product: "المنتج",
      nav_pricing: "الاسعار",
      nav_how: "كيف يعمل",
      nav_contact: "تواصل معنا",
      cta_book_demo: "احجز ديمو",
      cta_how: "شاهد كيف يعمل",
      hero_eyebrow: "أتمتة ذكاء اصطناعي مميزة للفرق التي تركز على الايرادات",
      hero_title: "أتمت محادثات عملائك واغلق المزيد من العملاء المحتملين",
      hero_lead: "أتمتة بالذكاء الاصطناعي لواتساب والموقع والبريد الالكتروني ترد فورا وتلتقط العملاء المحتملين وتساعد على زيادة الحجوزات.",
      hero_trust_line: "يعمل 24/7 - بدون عملاء مفقودين",
      trust_1: "بدون التزام",
      trust_2: "الحجز يستغرق 30 ثانية",
      trust_3: "تشغيل سريع بعد الموافقة",
      visual_window: "مسار محادثة مباشر",
      visual_hint: "اختر قناة لترى كيف يتغير المسار.",
      tab_whatsapp: "واتساب",
      tab_website: "محادثة الموقع",
      tab_email: "البريد",
      tab_instagram: "انستغرام",
      proof_eyebrow: "مبني للشركات التي تعتمد على القنوات",
      proof_copy: "نظام موثوق واحد عبر القنوات التي يستخدمها عملاؤك بالفعل.",
      proof_facebook: "فيسبوك",
      pricing_featured_badge: "موصى به",
      final_eyebrow: "هل انت جاهز لاتمتة عملك؟",
      final_title: "هل انت جاهز لاتمتة عملك؟",
      final_copy: "احجز ديمو لترى افضل اعداد Assistio لقنواتك ومسار العملاء لديك.",
      final_support: "بدون التزام. سريع في الحجز. سهل في البدء.",
      contact_eyebrow: "تواصل معنا",
      contact_title: "هل تحتاج اعدادا مخصصا او تريد طرح سؤال اولا؟",
      contact_lead: "ارسل لنا رسالة سريعة وسنساعدك في اختيار القنوات والمسارات والخطة المناسبة لعملك.",
      contact_email_label: "راسلنا",
      contact_response_label: "وقت الرد المعتاد",
      contact_response_value: "خلال يوم عمل واحد",
      contact_form_title: "اخبرنا عن عملك",
      contact_form_copy: "شاركنا القنوات والاهداف والمشكلة الرئيسية وسنرد عليك بالخطوة المناسبة.",
      form_name: "الاسم",
      form_email: "البريد الالكتروني",
      form_company: "الشركة",
      form_message: "الرسالة",
      form_name_placeholder: "اسمك",
      form_email_placeholder: "you@company.com",
      form_company_placeholder: "اسم الشركة",
      form_message_placeholder: "اخبرنا ما هي القنوات التي تستخدمها وما الذي تريد اتمتته.",
      form_disclaimer: "بارسال هذا النموذج فانك توافق على استخدام بياناتك للرد على استفسارك.",
      footer_tag: "أتمتة محادثات العملاء التي تقود الى مزيد من الحجوزات.",
      footer_copy: "احجز ديمو لرؤية الاعداد المناسب لعملك.",
      booking_title: "شاهد افضل اعداد Assistio لعملك.",
      booking_copy: "بدون التزام. الحجز يستغرق 30 ثانية وسنعرض لك اسرع طريق للانطلاق بعد الموافقة.",
      booking_continue: "الانتقال الى الحجز",
      example_incoming: "عميل وارد",
      example_capture: "تم التقاطه تلقائيا",
      example_next: "الخطوة التالية",
      example_auto: "ردود AI",
      example_qualification: "تاهيل العميل",
      example_journey: "مسار جاهز للحجز",
      journey_step_1_title: "1. عميل جديد",
      journey_step_2_title: "2. تم تاهيله تلقائيا",
      journey_step_3_title: "3. تم حجز الديمو"
    }
  };

  const CHANNEL_EXAMPLES = {
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
      bot: "Happy to help. Do you want website chat and WhatsApp connected, and should we route high-intent visitors straight to a demo?",
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

  const doc = document.documentElement;
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

  const defaultCopy = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && !(key in defaultCopy)) {
      defaultCopy[key] = el.textContent.trim();
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && !((key + ":placeholder") in defaultCopy)) {
      defaultCopy[key + ":placeholder"] = el.getAttribute("placeholder") || "";
    }
  });

  let activeTheme = doc.getAttribute("data-theme") || "light";
  let activeLang = ["en", "ro", "ar"].includes(doc.lang) ? doc.lang : "en";
  let activeExample = "whatsapp";
  let lastFocusedElement = null;

  function storeValue(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function syncThemeMeta(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", THEME_COLORS[theme] || THEME_COLORS.light);
    }
  }

  function setTheme(theme) {
    activeTheme = theme === "dark" ? "dark" : "light";
    doc.setAttribute("data-theme", activeTheme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
    }
    syncThemeMeta(activeTheme);
    storeValue("assistio_theme", activeTheme);
  }

  function translate(key) {
    if (activeLang === "en") {
      return defaultCopy[key] || "";
    }
    return (TRANSLATIONS[activeLang] && TRANSLATIONS[activeLang][key]) || defaultCopy[key] || "";
  }

  function translatePlaceholder(key) {
    if (activeLang === "en") {
      return defaultCopy[key + ":placeholder"] || "";
    }
    return (TRANSLATIONS[activeLang] && TRANSLATIONS[activeLang][key]) || defaultCopy[key + ":placeholder"] || "";
  }

  function applyTranslations() {
    doc.lang = activeLang;
    doc.dir = activeLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = key ? translate(key) : "";
      if (value) {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = key ? translatePlaceholder(key) : "";
      if (value) {
        el.setAttribute("placeholder", value);
      }
    });

    document.querySelectorAll("input, textarea").forEach((field) => {
      field.dir = activeLang === "ar" ? "rtl" : "ltr";
    });
  }

  function applyChannelExample(channel) {
    const nextExample = CHANNEL_EXAMPLES[channel] || CHANNEL_EXAMPLES.whatsapp;
    activeExample = CHANNEL_EXAMPLES[channel] ? channel : "whatsapp";

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

  function setLanguage(lang) {
    activeLang = TRANSLATIONS[lang] ? lang : "en";
    applyTranslations();
    applyChannelExample(activeExample);
    langButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === activeLang);
    });
    storeValue("assistio_lang", activeLang);
  }

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
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
    document.body.classList.toggle("nav-open", isOpen);
  }

  function openNav() {
    setNavState(true);
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
    if (document.body.dataset.page !== "home" || !sectionEls.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && visible.target.id) {
          markActiveNav(visible.target.id);
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
    document.body.classList.add("modal-open");
    if (bookingLink) {
      bookingLink.focus();
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
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const isSuccessful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (!isSuccessful) {
          reject(new Error("Copy failed"));
          return;
        }
        resolve();
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  setTheme(activeTheme);
  setHeaderState();
  setupRevealObserver();
  setupSectionObserver();
  setLanguage(activeLang);
  applyChannelExample(activeExample);

  yearEls.forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  if (bookingLink) {
    bookingLink.setAttribute("href", BOOKING_URL);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(activeTheme === "dark" ? "light" : "dark");
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
      setLanguage(button.dataset.lang || "en");
    });
  });

  exampleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      applyChannelExample(tab.dataset.exampleTab || "whatsapp");
    });
  });

  bookingButtons.forEach((button) => {
    button.setAttribute("href", BOOKING_URL);
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
      const defaultLabel = button.dataset.copyDefault || "Copy";
      const successLabel = button.dataset.copySuccess || "Copied";

      if (!value) return;

      try {
        await copyText(value);
        button.textContent = successLabel;
        button.classList.add("is-copied");
      } catch (error) {
        button.textContent = "Try again";
      }

      window.setTimeout(() => {
        button.textContent = defaultLabel;
        button.classList.remove("is-copied");
      }, 1600);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
      if (bookingModal && !bookingModal.hidden) {
        closeBookingModal();
      }
    }
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", () => {
    closeNav();
    setHeaderState();
  });
})();
