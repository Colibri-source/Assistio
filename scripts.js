/* Assistio - stable UI: mobile menu, theme toggle, language toggle */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const STORAGE = {
    theme: 'assistio_theme',
    lang: 'assistio_lang'
  };

  const translations = {
    en: {
      nav_home: 'Home',
      nav_features: 'Features',
      nav_pricing: 'Pricing',
      nav_contact: 'Contact',
      nav_book_demo: 'Book a demo',
      hero_title: 'AI-assisted customer support that ships fast.',
      hero_lead: 'We help small businesses reply faster across web chat, email, and social channels—without overpromising features you won’t get in Month 1.',
      hero_cta_primary: 'Start a trial',
      hero_cta_secondary: 'Book a demo',
      badge_1: 'Fast onboarding',
      badge_2: 'Human handoff',
      badge_3: 'Multi-language',
      section_mvp_title: 'What we deliver in the first 2 months',
      f1_title: 'Website chat',
      f1_desc: 'Chat widget on your site with smart replies and escalation to a human.',
      f2_title: 'Email inbox',
      f2_desc: 'Centralized email handling with response suggestions and tagging.',
      f3_title: 'Facebook & Instagram',
      f3_desc: 'Unified message handling for Meta channels (as available for your account).',
      f4_title: 'Knowledge base',
      f4_desc: 'FAQ/KB entries you control—so the assistant answers consistently.',
      f5_title: 'Reporting basics',
      f5_desc: 'Simple KPIs: volume, response time, resolution, handoff rate.',
      f6_title: 'Multilingual UI',
      f6_desc: 'English / Romanian / Arabic UI toggle for your team and your site.',
      page_features_title: 'Features',
      page_pricing_title: 'Pricing',
      page_contact_title: 'Contact',
      page_terms_title: 'Terms',
      page_privacy_title: 'Privacy Policy',
      pricing_title: 'Simple pricing to get started',
      pricing_lead: 'Transparent plans. Setup fee is currently fixed while we onboard the first clients.',
      plan_basic: 'Starter',
      plan_basic_price: '$150 / month',
      plan_basic_setup: '$150 setup fee',
      plan_basic_line1: 'Web chat + email',
      plan_basic_line2: 'FAQ/KB setup',
      plan_basic_line3: 'Basic reporting',
      plan_pro: 'Growth',
      plan_pro_price: '$250 / month',
      plan_pro_setup: '$150 setup fee',
      plan_pro_line1: 'Web + email + social',
      plan_pro_line2: 'Prioritized support',
      plan_pro_line3: 'Automation add-ons',
      contact_title: 'Contact us',
      contact_lead: 'Tell us about your business and we’ll respond within 24 hours.',
      contact_name: 'Name',
      contact_email: 'Email',
      contact_message: 'Message',
      contact_send: 'Send message',
      contact_or: 'Or email us directly:',
      footer_rights: 'All rights reserved.',
      footer_privacy: 'Privacy',
      footer_terms: 'Terms'
    },
    ro: {
      nav_home: 'Acasă',
      nav_features: 'Funcționalități',
      nav_pricing: 'Prețuri',
      nav_contact: 'Contact',
      nav_book_demo: 'Programează o demo',
      hero_title: 'Suport clienți asistat de AI, livrat rapid.',
      hero_lead: 'Ajutăm afacerile mici să răspundă mai repede pe chat, email și social—fără promisiuni nerealiste în prima lună.',
      hero_cta_primary: 'Începe un trial',
      hero_cta_secondary: 'Programează o demo',
      badge_1: 'Onboarding rapid',
      badge_2: 'Transfer la om',
      badge_3: 'Multilingv',
      section_mvp_title: 'Ce livrăm în primele 2 luni',
      f1_title: 'Chat pe website',
      f1_desc: 'Widget de chat cu răspunsuri inteligente și escaladare la om.',
      f2_title: 'Inbox email',
      f2_desc: 'Gestionare centralizată email cu sugestii și etichete.',
      f3_title: 'Facebook & Instagram',
      f3_desc: 'Mesaje unificate pentru canalele Meta (în funcție de cont).',
      f4_title: 'Bază de cunoștințe',
      f4_desc: 'FAQ/KB controlat de tine pentru răspunsuri consistente.',
      f5_title: 'Rapoarte de bază',
      f5_desc: 'KPI simple: volum, timp răspuns, rezolvare, transfer.',
      f6_title: 'Interfață multilingvă',
      f6_desc: 'English / Română / Arabic pentru echipă și site.',
      page_features_title: 'Funcționalități',
      page_pricing_title: 'Prețuri',
      page_contact_title: 'Contact',
      page_terms_title: 'Termeni',
      page_privacy_title: 'Politica de confidențialitate',
      pricing_title: 'Prețuri simple pentru început',
      pricing_lead: 'Planuri transparente. Taxa de setup este fixă în această perioadă.',
      plan_basic: 'Starter',
      plan_basic_price: '$150 / lună',
      plan_basic_setup: '$150 taxă setup',
      plan_basic_line1: 'Chat web + email',
      plan_basic_line2: 'Setare FAQ/KB',
      plan_basic_line3: 'Rapoarte de bază',
      plan_pro: 'Growth',
      plan_pro_price: '$250 / lună',
      plan_pro_setup: '$150 taxă setup',
      plan_pro_line1: 'Web + email + social',
      plan_pro_line2: 'Suport prioritar',
      plan_pro_line3: 'Add-on automatizări',
      contact_title: 'Contact',
      contact_lead: 'Spune-ne despre afacerea ta și răspundem în 24h.',
      contact_name: 'Nume',
      contact_email: 'Email',
      contact_message: 'Mesaj',
      contact_send: 'Trimite',
      contact_or: 'Sau scrie-ne direct:',
      footer_rights: 'Toate drepturile rezervate.',
      footer_privacy: 'Confidențialitate',
      footer_terms: 'Termeni'
    },
    ar: {
      nav_home: 'الرئيسية',
      nav_features: 'الميزات',
      nav_pricing: 'الأسعار',
      nav_contact: 'تواصل',
      nav_book_demo: 'احجز عرضًا',
      hero_title: 'دعم عملاء بمساعدة الذكاء الاصطناعي — بسرعة.',
      hero_lead: 'نساعد الشركات الصغيرة على الرد بسرعة عبر الدردشة والبريد ووسائل التواصل—بدون وعود مبالغ فيها في الشهر الأول.',
      hero_cta_primary: 'ابدأ التجربة',
      hero_cta_secondary: 'احجز عرضًا',
      badge_1: 'تهيئة سريعة',
      badge_2: 'تحويل لموظف',
      badge_3: 'متعدد اللغات',
      section_mvp_title: 'ما الذي نقدمه في أول شهرين',
      f1_title: 'دردشة الموقع',
      f1_desc: 'ودجت دردشة مع اقتراحات ذكية وتصعيد لموظف.',
      f2_title: 'صندوق البريد',
      f2_desc: 'إدارة البريد مع اقتراحات للرد وتصنيفات.',
      f3_title: 'فيسبوك وإنستغرام',
      f3_desc: 'تجميع رسائل قنوات ميتا حسب توفرها لحسابك.',
      f4_title: 'قاعدة معرفة',
      f4_desc: 'أسئلة وأجوبة تتحكم بها لضمان ردود ثابتة.',
      f5_title: 'تقارير أساسية',
      f5_desc: 'مؤشرات: حجم الرسائل، وقت الرد، الحل، التحويل.',
      f6_title: 'واجهة متعددة اللغات',
      f6_desc: 'English / Romanian / Arabic للفريق والموقع.',
      page_features_title: 'الميزات',
      page_pricing_title: 'الأسعار',
      page_contact_title: 'تواصل',
      page_terms_title: 'الشروط',
      page_privacy_title: 'سياسة الخصوصية',
      pricing_title: 'أسعار بسيطة للبدء',
      pricing_lead: 'خطط واضحة. رسوم الإعداد ثابتة حاليًا.',
      plan_basic: 'Starter',
      plan_basic_price: '$150 / شهريًا',
      plan_basic_setup: '$150 رسوم إعداد',
      plan_basic_line1: 'دردشة + بريد',
      plan_basic_line2: 'إعداد FAQ/KB',
      plan_basic_line3: 'تقارير أساسية',
      plan_pro: 'Growth',
      plan_pro_price: '$250 / شهريًا',
      plan_pro_setup: '$150 رسوم إعداد',
      plan_pro_line1: 'موقع + بريد + تواصل',
      plan_pro_line2: 'دعم أولوية',
      plan_pro_line3: 'إضافات أتمتة',
      contact_title: 'تواصل معنا',
      contact_lead: 'اكتب لنا عن عملك وسنرد خلال 24 ساعة.',
      contact_name: 'الاسم',
      contact_email: 'البريد',
      contact_message: 'الرسالة',
      contact_send: 'إرسال',
      contact_or: 'أو راسلنا مباشرة:',
      footer_rights: 'جميع الحقوق محفوظة.',
      footer_privacy: 'الخصوصية',
      footer_terms: 'الشروط'
    }
  };

  function setTheme(theme){
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE.theme, theme); } catch (_) {}

    const icon = $('[data-theme-toggle] .theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☾' : '☀';
  }

  function initTheme(){
    const saved = (() => {
      try { return localStorage.getItem(STORAGE.theme); } catch (_) { return null; }
    })();

    // Default to dark (matches your brand), but still respects explicit saved preference.
    setTheme(saved === 'light' ? 'light' : 'dark');

    const btn = $('[data-theme-toggle]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function applyLanguage(lang){
    const dict = translations[lang] || translations.en;

    // HTML metadata
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Sync controls
    const select = $('[data-lang-select]');
    if (select) select.value = lang;

    // Text nodes
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) el.textContent = dict[key];
    });

    // Title
    const titleKeyEl = $('[data-i18n-title]');
    if (titleKeyEl){
      const key = titleKeyEl.getAttribute('data-i18n-title');
      if (key && dict[key]) document.title = `${dict[key]} · Assistio`;
    }

    try { localStorage.setItem(STORAGE.lang, lang); } catch (_) {}
  }

  function initLanguage(){
    const saved = (() => {
      try { return localStorage.getItem(STORAGE.lang); } catch (_) { return null; }
    })();
    const initial = saved || 'en';
    applyLanguage(initial);

    const select = $('[data-lang-select]');
    if (!select) return;
    select.addEventListener('change', (e) => {
      applyLanguage(String(e.target.value || 'en'));
    });
  }

  function initMobileNav(){
    const header = $('.site-header');
    const toggle = $('[data-mobile-toggle]');
    const nav = $('[data-nav]');
    if (!header || !toggle || !nav) return;

    const close = () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    const open = () => {
      header.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
    };

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = header.classList.contains('nav-open');
      isOpen ? close() : open();
    });

    // Close on nav link click (mobile UX)
    $$('a', nav).forEach(a => a.addEventListener('click', () => close()));

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!header.classList.contains('nav-open')) return;
      if (!(target instanceof Element)) return;
      if (header.contains(target)) return;
      close();
    });

    // When resizing up, ensure menu resets
    window.addEventListener('resize', () => {
      if (window.innerWidth > 920) close();
    });
  }

  function initYear(){
    const y = new Date().getFullYear();
    $$('[data-year]').forEach(el => el.textContent = String(y));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initMobileNav();
    initYear();
  });
})();
