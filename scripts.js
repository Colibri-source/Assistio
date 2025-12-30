(function () {
  "use strict";

  const BOOKING_URL = "https://calendar.app.google/YdZuLu8dWCTAMgx18";
  const I18N = {
  "en": {
    "brand_tag": "Multi-channel chat & intake",
    "nav_home": "Home",
    "nav_features": "Features",
    "nav_how": "How it works",
    "nav_pricing": "Pricing",
    "nav_faq": "FAQ",
    "nav_contact": "Contact",
    "nav_privacy": "Privacy",
    "nav_terms": "Terms",
    "cta_book": "Book a call",
    "cta_contact": "Contact us",
    "pill": "Reliable-first • Customized to your business • Clear scope",
    "h1": "We build and customize your chat system across Website, WhatsApp, Instagram, Facebook, and Email.",
    "lead": "A dependable inbound workflow: branded chat, smart routing, consistent replies, appointment booking, and a clean handoff to your team when a human should take over.",
    "kpi1_dt": "Channels",
    "kpi1_dd": "Website Chat, WhatsApp Business, Instagram + Facebook DMs & comments, Email",
    "kpi2_dt": "Booking",
    "kpi2_dd": "Appointment booking workflows (lead → scheduled)",
    "kpi3_dt": "Operations",
    "kpi3_dd": "Stable, clear, and easy to run",
    "panel_title": "What you get",
    "panel_li1": "<strong>Website chat widget</strong> with branded messaging",
    "panel_li2": "<strong>Instagram & Facebook</strong> DMs + comment intake (via Meta)",
    "panel_li3": "<strong>WhatsApp Business</strong> and <strong>Email</strong> intake",
    "panel_li4": "<strong>Routing rules</strong> to the right person or team",
    "panel_li5": "<strong>Reply templates</strong> for fast, consistent responses",
    "panel_li6": "<strong>Appointment booking</strong> workflows where relevant",
    "panel_li7": "<strong>Typical setup:</strong> 24–48 hours after access + info",
    "features_h2": "Features",
    "features_p": "Built for real operations: clarity, speed, ownership, reliability, and booking.",
    "feat1_h3": "Channel coverage",
    "feat1_p": "Capture customer messages where they already are.",
    "feat1_li1": "Website chat widget",
    "feat1_li2": "Instagram & Facebook DMs + comment intake (via Meta)",
    "feat1_li3": "WhatsApp Business + Email",
    "feat2_h3": "Routing & ownership",
    "feat2_p": "Every message goes to the right person, fast.",
    "feat2_li1": "Routing by topic, urgency, language, or business hours",
    "feat2_li2": "Clear owner per category (sales/support/etc.)",
    "feat2_li3": "Human handoff when automation shouldn’t respond",
    "feat3_h3": "Consistency & templates",
    "feat3_p": "Fast, consistent responses in your brand tone.",
    "feat3_li1": "Acknowledgements + FAQ templates",
    "feat3_li2": "Qualification questions to reduce back-and-forth",
    "feat3_li3": "Brand voice customization",
    "feat4_h3": "Reliability foundation",
    "feat4_p": "A setup your team can run without headaches.",
    "feat4_li1": "Operational logging for troubleshooting",
    "feat4_li2": "Retries where appropriate",
    "feat4_li3": "Simple failure alerts",
    "book_h3": "Appointment booking",
    "book_p": "Collect the right details, confirm intent, and route to a booking link or your team—without breaking your flow.",
    "how_h2": "How it works",
    "how_p": "You share requirements. We customize. You go live with a workflow your team can run.",
    "step1_h3": "Send your requirements",
    "step1_p": "Business info, FAQs, brand tone, business hours, routing owners, and channel access.",
    "step2_h3": "We customize your flows",
    "step2_p": "We build scripts, qualification, templates, booking flows, and routing rules around your process.",
    "step3_h3": "Connect channels + install",
    "step3_p": "We connect your chosen channels, install the website widget, and test end-to-end.",
    "step4_h3": "Go-live + refine",
    "step4_p": "We launch and refine based on real conversations. Typical initial setup is 24–48 hours once access is ready.",
    "pricing_h2": "Pricing",
    "pricing_p": "One simple package: monthly subscription with a one-time setup fee.",
    "plan_h3": "Assistio Pack",
    "plan_sub": "Monthly subscription",
    "plan_note": "After the call, we send a Stripe payment link for the setup fee.",
    "plan_li1": "Channel setup + access verification",
    "plan_li2": "Routing rules + ownership mapping",
    "plan_li3": "Templates + brand tone customization",
    "plan_li4": "Appointment booking workflows",
    "plan_li5": "Reliability basics (logging + simple alerts)",
    "price_setup_small": "+ $500 USD one-time setup",
    "faq_h2": "FAQ",
    "faq_p": "Quick answers to common questions.",
    "faq_q1": "Which channels do you support?",
    "faq_a1": "Website Chat, Instagram & Facebook DMs + comment intake (via Meta), WhatsApp Business, and Email.",
    "faq_q2": "How long does setup take?",
    "faq_a2": "Typical initial setup is 24–48 hours after we receive your information and the required access.",
    "faq_q3": "Do you support appointment booking?",
    "faq_a3": "Yes. We can collect details and route to your booking link or hand off to your team to confirm.",
    "faq_q4": "Can you match our brand tone and questions?",
    "faq_a4": "Yes. We customize scripts, questions, and templates to your business and preferred tone.",
    "faq_q5": "How does routing work?",
    "faq_a5": "We route by category, urgency, language, and business hours, and assign an owner per category.",
    "faq_q6": "How do payments work?",
    "faq_a6": "We confirm requirements on the call, then send a Stripe payment link for the setup fee. Subscription starts after go-live unless agreed otherwise.",
    "faq_q7": "What do you need from us to start?",
    "faq_a7": "Website embed access, channel admin access (Meta/WhatsApp/email), routing owners, and your FAQ/brand tone details.",
    "faq_q8": "Do you provide ongoing changes?",
    "faq_a8": "Yes—subscription includes reasonable refinements to templates and routing after go-live.",
    "contact_h2": "Contact",
    "contact_p": "Email us, or book a call. We’ll reply with next steps.",
    "contact_direct": "Direct email",
    "primary_contact": "Primary contact",
    "secondary_contact": "Secondary contact",
    "copy": "Copy",
    "draft": "Create email draft",
    "draft_hint": "Opens a pre-filled draft so you can send it from your inbox.",
    "include_h4": "What to include",
    "include_li1": "Your business and services",
    "include_li2": "Channels you want to connect",
    "include_li3": "Routing owners (sales/support/etc.)",
    "include_li4": "Appointment booking details (if needed)",
    "send_msg": "Send a message",
    "f_name": "Name",
    "f_email": "Email",
    "f_company": "Company (optional)",
    "f_message": "Message",
    "f_placeholder": "Tell us your business, channels, routing owners, and whether you need appointment booking.",
    "f_submit": "Send message",
    "f_disclaimer": "By sending a message, you agree that we can reply to your email and use your details only to respond.",
    "footer_tag": "Premium, reliable chat + intake automation.",
    "footer_social": "Social",
    "footer_support": "Support",
    "back_top": "Back to top",
    "lang_label": "Language",
    "privacy_title": "Privacy Policy",
    "terms_title": "Terms of Service",
    "effective": "Effective date: December 25, 2025",
    "privacy_html": "<div class=\"legal-toc\">\n  <p><strong>Summary:</strong> We collect only what we need to deliver Assistio services (setup, support, and billing). We do not sell personal data.</p>\n</div>\n\n<h2>1. Who we are</h2>\n<p><strong>Assistio</strong> (“we”, “us”, “our”) provides multi‑channel chat & intake automation services and related onboarding/support.</p>\n\n<h2>2. Scope</h2>\n<p>This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, book a call, or purchase our services.</p>\n\n<h2>3. Information we collect</h2>\n<ul>\n  <li><strong>Contact information:</strong> name, email, company, and message content when you contact us.</li>\n  <li><strong>Booking information:</strong> details you submit when scheduling via our booking provider (Google Calendar/Google Scheduling).</li>\n  <li><strong>Billing information:</strong> payment status and transaction metadata when you pay via our payment provider (e.g., Stripe). We do not store full card details on our servers.</li>\n  <li><strong>Service setup data:</strong> configuration details you provide for your channels (e.g., routing categories, owners, business hours, FAQs, brand tone, embed settings).</li>\n  <li><strong>Technical data:</strong> basic device and browser information, and limited log data used for reliability and security (where applicable).</li>\n</ul>\n\n<h2>4. How we use information</h2>\n<ul>\n  <li>To respond to inquiries and provide onboarding.</li>\n  <li>To set up, operate, and support your Assistio configuration (routing, templates, booking workflows, alerts).</li>\n  <li>To process payments, send invoices/receipts, and maintain accounting records.</li>\n  <li>To prevent abuse, improve reliability, and secure our systems.</li>\n</ul>\n\n<h2>5. Legal bases (EEA/UK where applicable)</h2>\n<ul>\n  <li><strong>Contract:</strong> to deliver services you request.</li>\n  <li><strong>Legitimate interests:</strong> to operate, secure, and improve our services.</li>\n  <li><strong>Consent:</strong> where required for specific communications or cookies.</li>\n  <li><strong>Legal obligation:</strong> for tax/accounting requirements.</li>\n</ul>\n\n<h2>6. Sharing and disclosures</h2>\n<p>We share information only as necessary (booking, payments, infrastructure). <strong>We do not sell personal data.</strong></p>\n\n<h2>7. International transfers</h2>\n<p>Some vendors may process data outside your country. Where applicable, we rely on appropriate safeguards.</p>\n\n<h2>8. Data retention</h2>\n<ul>\n  <li><strong>Inquiries:</strong> up to 24 months (unless deletion is requested where permitted).</li>\n  <li><strong>Billing records:</strong> retained as required by law.</li>\n  <li><strong>Service configuration:</strong> retained during subscription and a limited period after termination.</li>\n</ul>\n\n<h2>9. Security</h2>\n<p>We use reasonable administrative and technical measures (access controls, secured vendors). No method is 100% secure.</p>\n\n<h2>10. Your rights</h2>\n<p>Depending on your location, you may have rights to access, correct, delete, restrict, object, and data portability. Contact us via the website emails.</p>\n\n<h2>11. Cookies</h2>\n<p>We use minimal functionality. If we introduce analytics or marketing cookies later, we will update this policy and request consent where required.</p>\n\n<h2>12. Changes & contact</h2>\n<p>We may update this policy. For privacy requests, contact us via the emails listed on the website.</p>",
    "terms_html": "<div class=\"legal-toc\">\n  <p><strong>Summary:</strong> We provide a paid service to set up and maintain your multi‑channel chat & intake workflows. You keep ownership of your content. Use the service lawfully and keep your channel access secure.</p>\n</div>\n\n<h2>1. Agreement</h2>\n<p>These Terms govern your use of Assistio’s website and services (“Services”). By using the Services, you agree to these Terms.</p>\n\n<h2>2. Services</h2>\n<p>We provide multi‑channel setup and support (Website, WhatsApp Business, Instagram/Facebook via Meta, Email as applicable), including routing, templates, qualification questions, booking workflows, and reliability basics.</p>\n\n<h2>3. Setup timeline</h2>\n<p>Typical initial setup is <strong>24–48 hours</strong> after we receive required information and access. Timelines may vary based on approvals and complexity.</p>\n\n<h2>4. Client responsibilities</h2>\n<ul>\n  <li>Provide accurate information and approvals on time.</li>\n  <li>Maintain required channel access and protect credentials.</li>\n  <li>Comply with applicable law and third‑party policies (Meta/WhatsApp/email).</li>\n  <li>Ensure you have rights to the content you provide.</li>\n</ul>\n\n<h2>5. Fees and payment</h2>\n<p>Monthly subscription and a one‑time setup fee are billed as shown on the website (setup typically via payment link after the call). Non‑payment may result in suspension.</p>\n\n<h2>6. Renewals and cancellation</h2>\n<p>Subscriptions renew monthly unless canceled. Cancel by contacting us; service continues until the end of the paid period unless otherwise agreed.</p>\n\n<h2>7. Acceptable use</h2>\n<p>No spam, deception, unlawful processing of personal data, IP infringement, or attempts to compromise systems.</p>\n\n<h2>8. Third‑party services</h2>\n<p>Integrations may rely on third‑party platforms. Your use is governed by their terms. We are not responsible for third‑party outages or policy decisions.</p>\n\n<h2>9. IP and confidentiality</h2>\n<p>You keep ownership of your content; we keep ownership of our templates/site/code. Both parties keep non‑public information confidential.</p>\n\n<h2>10. Disclaimers, liability, indemnity</h2>\n<p>Services are provided “as‑is” and “as‑available”. To the maximum extent permitted, we exclude indirect damages. Total liability is limited to amounts paid in the prior three (3) months. You agree to indemnify us for claims arising from your content or unlawful use.</p>\n\n<h2>11. Changes & contact</h2>\n<p>We may update these Terms. Questions can be sent to the emails listed on the website.</p>",
    "nav_handle": "Menu",
    "lang_fab_label": "Language",
    "cta_pricing": "View pricing"
  },
  "ro": {
    "brand_tag": "Chat și intake multi‑canal",
    "nav_home": "Acasă",
    "nav_features": "Funcții",
    "nav_how": "Cum funcționează",
    "nav_pricing": "Prețuri",
    "nav_faq": "Întrebări",
    "nav_contact": "Contact",
    "nav_privacy": "Confidențialitate",
    "nav_terms": "Termeni",
    "cta_book": "Programează un apel",
    "cta_contact": "Contactează‑ne",
    "pill": "Fiabilitate pe primul loc • Personalizat • Nume clar",
    "h1": "Construim și personalizăm sistemul tău de chat pe Website, WhatsApp, Instagram, Facebook și Email.",
    "lead": "Un flux de intake fiabil: chat branduit, rutare inteligentă, răspunsuri consecvente, programări și handoff către echipa ta când e nevoie de om.",
    "kpi1_dt": "Canale",
    "kpi1_dd": "Chat Website, WhatsApp Business, Instagram + Facebook DM & comentarii, Email",
    "kpi2_dt": "Programări",
    "kpi2_dd": "Fluxuri de appointment booking (lead → programare)",
    "kpi3_dt": "Operațiuni",
    "kpi3_dd": "Stabil, clar și ușor de rulat",
    "panel_title": "Ce primești",
    "panel_li1": "<strong>Widget chat pe website</strong> cu mesaje branduite",
    "panel_li2": "<strong>Instagram & Facebook</strong> DM + preluare comentarii (prin Meta)",
    "panel_li3": "<strong>WhatsApp Business</strong> și <strong>Email</strong>",
    "panel_li4": "<strong>Reguli de rutare</strong> către persoana/echipa potrivită",
    "panel_li5": "<strong>Șabloane de răspuns</strong> rapide și consecvente",
    "panel_li6": "<strong>Fluxuri de programări</strong> unde se aplică",
    "panel_li7": "<strong>Setup tipic:</strong> 24–48 ore după acces + info",
    "features_h2": "Funcții",
    "features_p": "Pentru operațiuni reale: claritate, viteză, ownership, fiabilitate și programări.",
    "feat1_h3": "Acoperire canale",
    "feat1_p": "Preiei mesajele clienților acolo unde sunt deja.",
    "feat1_li1": "Widget chat pe website",
    "feat1_li2": "Instagram & Facebook DM + comentarii (prin Meta)",
    "feat1_li3": "WhatsApp Business + Email",
    "feat2_h3": "Rutare & ownership",
    "feat2_p": "Fiecare mesaj ajunge rapid la persoana potrivită.",
    "feat2_li1": "Rutare după subiect, urgență, limbă sau program",
    "feat2_li2": "Owner clar pe categorie (vânzări/suport/etc.)",
    "feat2_li3": "Handoff către om când automatizarea nu trebuie să răspundă",
    "feat3_h3": "Consistență & șabloane",
    "feat3_p": "Răspunsuri rapide și consecvente, în vocea brandului.",
    "feat3_li1": "Confirmări + șabloane FAQ",
    "feat3_li2": "Întrebări de calificare ca să reduci ping‑pong‑ul",
    "feat3_li3": "Ton și mesaje personalizate",
    "feat4_h3": "Bază de fiabilitate",
    "feat4_p": "O configurație pe care echipa o poate rula fără bătăi de cap.",
    "feat4_li1": "Loguri operaționale pentru troubleshooting",
    "feat4_li2": "Reîncercări unde e potrivit",
    "feat4_li3": "Alerte simple la erori",
    "book_h3": "Programări",
    "book_p": "Colectăm detaliile potrivite, confirmăm intenția și rutăm către linkul de programare sau către echipa ta.",
    "how_h2": "Cum funcționează",
    "how_p": "Ne trimiți cerințele. Noi personalizăm. Intri live cu un flux pe care echipa îl poate rula.",
    "step1_h3": "Trimiți cerințele",
    "step1_p": "Info business, FAQ, voce brand, program, owners, acces pe canale.",
    "step2_h3": "Personalizăm fluxurile",
    "step2_p": "Construim scripturi, calificare, șabloane, programări și reguli de rutare.",
    "step3_h3": "Conectăm canalele + instalăm",
    "step3_p": "Conectăm canalele, instalăm widgetul și testăm end‑to‑end.",
    "step4_h3": "Go‑live + iterăm",
    "step4_p": "Lansăm și rafinăm pe baza conversațiilor. Setup tipic: 24–48 ore după acces.",
    "pricing_h2": "Prețuri",
    "pricing_p": "Un singur pachet: abonament lunar + setup o singură dată.",
    "plan_h3": "Assistio Pack",
    "plan_sub": "Abonament lunar",
    "plan_note": "După apel, trimitem un link Stripe pentru plata setup‑ului.",
    "plan_li1": "Setare canale + verificare acces",
    "plan_li2": "Rutare + ownership mapping",
    "plan_li3": "Șabloane + personalizare ton",
    "plan_li4": "Fluxuri de programări",
    "plan_li5": "Fiabilitate (loguri + alerte simple)",
    "price_setup_small": "+ 500 USD setup (o singură dată)",
    "faq_h2": "Întrebări frecvente",
    "faq_p": "Răspunsuri rapide la întrebări comune.",
    "faq_q1": "Ce canale suportați?",
    "faq_a1": "Chat Website, Instagram & Facebook DM + comentarii (prin Meta), WhatsApp Business și Email.",
    "faq_q2": "Cât durează setup‑ul?",
    "faq_a2": "Setup‑ul inițial este, de regulă, 24–48 ore după ce primim informațiile și accesul necesar.",
    "faq_q3": "Suportați programări?",
    "faq_a3": "Da. Colectăm detalii și rutăm către linkul tău de programare sau către echipă.",
    "faq_q4": "Puteți păstra tonul brandului nostru?",
    "faq_a4": "Da. Personalizăm scripturi, întrebări și șabloane în funcție de afacerea ta.",
    "faq_q5": "Cum funcționează rutarea?",
    "faq_a5": "Rutăm după categorie, urgență, limbă și program, cu owner pe categorie.",
    "faq_q6": "Cum funcționează plățile?",
    "faq_a6": "Confirmăm cerințele în apel, apoi trimitem link Stripe pentru setup. Abonamentul începe după go‑live (dacă nu se agrea altfel).",
    "faq_q7": "De ce aveți nevoie ca să începem?",
    "faq_a7": "Acces embed website, acces admin pe canale (Meta/WhatsApp/email), owners și detalii FAQ/ton.",
    "faq_q8": "Faceți modificări după go‑live?",
    "faq_a8": "Da—abonamentul include rafinări rezonabile pentru șabloane și rutare.",
    "contact_h2": "Contact",
    "contact_p": "Scrie‑ne pe email sau programează un apel. Răspundem cu pașii următori.",
    "contact_direct": "Email direct",
    "primary_contact": "Contact principal",
    "secondary_contact": "Contact secundar",
    "copy": "Copiază",
    "draft": "Creează draft email",
    "draft_hint": "Deschide o ciornă precompletată în clientul tău de email.",
    "include_h4": "Ce să incluzi",
    "include_li1": "Business și servicii",
    "include_li2": "Canalele dorite",
    "include_li3": "Owners (vânzări/suport/etc.)",
    "include_li4": "Detalii programări (dacă e cazul)",
    "send_msg": "Trimite un mesaj",
    "f_name": "Nume",
    "f_email": "Email",
    "f_company": "Companie (opțional)",
    "f_message": "Mesaj",
    "f_placeholder": "Spune‑ne business‑ul, canalele, owners și dacă ai nevoie de programări.",
    "f_submit": "Trimite mesaj",
    "f_disclaimer": "Prin trimitere, ești de acord să îți răspundem și să folosim datele doar pentru a răspunde.",
    "footer_tag": "Automatizare chat + intake, premium și fiabilă.",
    "footer_social": "Social",
    "footer_support": "Suport",
    "back_top": "Sus",
    "lang_label": "Limbă",
    "privacy_title": "Politica de confidențialitate",
    "terms_title": "Termeni și condiții",
    "effective": "Data intrării în vigoare: December 25, 2025",
    "privacy_html": "<div class=\"legal-toc\">\n  <p><strong>Rezumat:</strong> Colectăm doar informațiile necesare pentru a livra serviciile Assistio (setup, suport, facturare). Nu vindem date personale.</p>\n</div>\n\n<h2>1. Domeniu</h2>\n<p>Această Politică descrie colectarea/folosirea datelor când vizitezi site‑ul, ne contactezi, programezi un apel sau achiziționezi servicii.</p>\n\n<h2>2. Ce colectăm</h2>\n<ul>\n  <li>Date de contact (nume, email, companie, mesaj).</li>\n  <li>Date de programare (prin Google).</li>\n  <li>Date de plată (status + metadate prin procesator, ex. Stripe; nu stocăm date complete de card).</li>\n  <li>Date de configurare (categorii, owners, program, FAQ, ton, embed etc.).</li>\n  <li>Date tehnice minime pentru securitate/fiabilitate.</li>\n</ul>\n\n<h2>3. Cum folosim</h2>\n<p>Onboarding, configurare și suport, facturare, securitate și îmbunătățire fiabilitate.</p>\n\n<h2>4. Partajare</h2>\n<p>Doar când e necesar (booking, plăți, infrastructură, obligații legale). <strong>Nu vindem date personale.</strong></p>\n\n<h2>5. Păstrare & securitate</h2>\n<p>Păstrăm datele cât este necesar pentru servicii și conform legii (facturare). Folosim măsuri rezonabile de securitate.</p>\n\n<h2>6. Drepturi</h2>\n<p>Poți solicita acces/rectificare/ștergere/opoziție (unde se aplică). Contactează‑ne la emailurile din site.</p>",
    "terms_html": "<div class=\"legal-toc\">\n  <p><strong>Rezumat:</strong> Serviciu plătit pentru configurare/mentenanță chat & intake multi‑canal. Tu îți păstrezi conținutul; folosești serviciul legal și menții accesul la canale în siguranță.</p>\n</div>\n\n<h2>1. Servicii</h2>\n<p>Configurare și suport (Website, WhatsApp Business, Instagram/Facebook prin Meta, Email după caz): rutare, șabloane, întrebări, programări, fiabilitate de bază.</p>\n\n<h2>2. Durată setup</h2>\n<p>De regulă <strong>24–48 ore</strong> după primirea informațiilor și accesului necesar.</p>\n\n<h2>3. Taxe</h2>\n<p>Abonament lunar + taxă unică de setup (de obicei prin link de plată după apel). Neplata poate duce la suspendare.</p>\n\n<h2>4. Utilizare acceptabilă</h2>\n<p>Fără spam/înșelăciune/încălcări legale sau încercări de compromitere.</p>\n\n<h2>5. Terți</h2>\n<p>Depindem de platforme terțe; acestea au proprii termeni. Nu răspundem pentru întreruperile lor.</p>\n\n<h2>6. Răspundere</h2>\n<p>Serviciile sunt “ca atare”. Limităm răspunderea la sumele plătite în ultimele 3 luni (în limita legii).</p>",
    "nav_handle": "Meniu",
    "lang_fab_label": "Limbă",
    "cta_pricing": "Vezi prețurile"
  },
  "ar": {
    "brand_tag": "دردشة واستقبال طلبات متعدد القنوات",
    "nav_home": "الرئيسية",
    "nav_features": "المزايا",
    "nav_how": "كيف يعمل",
    "nav_pricing": "الأسعار",
    "nav_faq": "الأسئلة",
    "nav_contact": "تواصل",
    "nav_privacy": "الخصوصية",
    "nav_terms": "الشروط",
    "cta_book": "احجز مكالمة",
    "cta_contact": "تواصل معنا",
    "pill": "الأولوية للموثوقية • مُخصص • نطاق واضح",
    "h1": "نقوم ببناء وتخصيص نظام الدردشة لديك عبر الموقع وواتساب وإنستغرام وفيسبوك والبريد الإلكتروني.",
    "lead": "تدفق استقبال موثوق: دردشة بهوية علامتك، توجيه ذكي، ردود متسقة، حجز مواعيد، وتسليم واضح لفريقك عندما يلزم تدخل بشري.",
    "kpi1_dt": "القنوات",
    "kpi1_dd": "دردشة الموقع، واتساب للأعمال، إنستغرام وفيسبوك (رسائل وتعليقات)، البريد الإلكتروني",
    "kpi2_dt": "حجز المواعيد",
    "kpi2_dd": "تدفقات حجز مواعيد (Lead → موعد)",
    "kpi3_dt": "التشغيل",
    "kpi3_dd": "ثابت وواضح وسهل التشغيل",
    "panel_title": "ماذا ستحصل عليه",
    "panel_li1": "<strong>ودجت دردشة للموقع</strong> برسائل بهوية علامتك",
    "panel_li2": "<strong>إنستغرام وفيسبوك</strong> رسائل + استقبال التعليقات (عبر Meta)",
    "panel_li3": "<strong>واتساب للأعمال</strong> و<strong>البريد الإلكتروني</strong>",
    "panel_li4": "<strong>قواعد توجيه</strong> للشخص/الفريق المناسب",
    "panel_li5": "<strong>قوالب رد</strong> سريعة ومتسقة",
    "panel_li6": "<strong>تدفقات حجز المواعيد</strong> عند الحاجة",
    "panel_li7": "<strong>مدة الإعداد:</strong> 24–48 ساعة بعد الوصول + المعلومات",
    "features_h2": "المزايا",
    "features_p": "للعمليات الواقعية: وضوح، سرعة، مسؤولية، موثوقية، وحجز مواعيد.",
    "feat1_h3": "تغطية القنوات",
    "feat1_p": "استقبل رسائل العملاء حيث يتواجدون بالفعل.",
    "feat1_li1": "ودجت دردشة للموقع",
    "feat1_li2": "إنستغرام وفيسبوك (رسائل + تعليقات) عبر Meta",
    "feat1_li3": "واتساب للأعمال + البريد الإلكتروني",
    "feat2_h3": "التوجيه والمسؤولية",
    "feat2_p": "كل رسالة تصل بسرعة للشخص المناسب.",
    "feat2_li1": "توجيه حسب الموضوع أو الأولوية أو اللغة أو ساعات العمل",
    "feat2_li2": "مسؤول واضح لكل فئة (مبيعات/دعم/إلخ)",
    "feat2_li3": "تسليم لبشري عندما لا ينبغي للآلية الرد",
    "feat3_h3": "الاتساق والقوالب",
    "feat3_p": "ردود سريعة ومتسقة بصوت علامتك.",
    "feat3_li1": "رسائل تأكيد + قوالب FAQ",
    "feat3_li2": "أسئلة تأهيل لتقليل الأخذ والرد",
    "feat3_li3": "تخصيص النبرة والرسائل",
    "feat4_h3": "أساس الموثوقية",
    "feat4_p": "إعداد يمكن لفريقك تشغيله بدون صداع.",
    "feat4_li1": "سجلات تشغيلية للتشخيص",
    "feat4_li2": "إعادة المحاولة عند الحاجة",
    "feat4_li3": "تنبيهات بسيطة عند الفشل",
    "book_h3": "حجز المواعيد",
    "book_p": "نجمع التفاصيل المناسبة، نؤكد النية، ثم نوجه إلى رابط الحجز أو نسلم لفريقك.",
    "how_h2": "كيف يعمل",
    "how_p": "أرسل متطلباتك. نحن نخصص. تنطلق بإجراءات يمكن لفريقك تشغيلها.",
    "step1_h3": "أرسل متطلباتك",
    "step1_p": "معلومات العمل، FAQ، نبرة العلامة، ساعات العمل، المسؤولين، ووصول القنوات.",
    "step2_h3": "نخصص التدفقات",
    "step2_p": "نبني النصوص، التأهيل، القوالب، حجز المواعيد، وقواعد التوجيه حسب سير عملك.",
    "step3_h3": "نربط القنوات ونثبت",
    "step3_p": "نربط القنوات المختارة، نثبت الودجت، ونختبر من البداية للنهاية.",
    "step4_h3": "إطلاق وتحسين",
    "step4_p": "نطلق ونحسن بناءً على المحادثات. الإعداد الأولي عادةً 24–48 ساعة بعد جاهزية الوصول.",
    "pricing_h2": "الأسعار",
    "pricing_p": "باقة واحدة: اشتراك شهري مع رسوم إعداد مرة واحدة.",
    "plan_h3": "Assistio Pack",
    "plan_sub": "اشتراك شهري",
    "plan_note": "بعد المكالمة نرسل رابط Stripe لدفع رسوم الإعداد.",
    "plan_li1": "إعداد القنوات والتحقق من الوصول",
    "plan_li2": "قواعد التوجيه وتحديد المسؤولين",
    "plan_li3": "قوالب + تخصيص نبرة العلامة",
    "plan_li4": "تدفقات حجز المواعيد",
    "plan_li5": "أساس موثوقية (سجلات + تنبيهات بسيطة)",
    "price_setup_small": "+ 500 USD رسوم إعداد (مرة واحدة)",
    "faq_h2": "الأسئلة الشائعة",
    "faq_p": "إجابات سريعة للأسئلة المتكررة.",
    "faq_q1": "ما القنوات التي تدعمونها؟",
    "faq_a1": "دردشة الموقع، إنستغرام وفيسبوك (رسائل وتعليقات عبر Meta)، واتساب للأعمال، والبريد الإلكتروني.",
    "faq_q2": "كم يستغرق الإعداد؟",
    "faq_a2": "الإعداد الأولي عادةً 24–48 ساعة بعد استلام المعلومات والوصول المطلوب.",
    "faq_q3": "هل تدعمون حجز المواعيد؟",
    "faq_a3": "نعم. نجمع التفاصيل ونوجه إلى رابط الحجز أو نسلم لفريقك للتأكيد.",
    "faq_q4": "هل يمكنكم مطابقة نبرة علامتنا؟",
    "faq_a4": "نعم. نخصص النصوص والأسئلة والقوالب حسب عملك ونبرة علامتك.",
    "faq_q5": "كيف يعمل التوجيه؟",
    "faq_a5": "نوجه حسب الفئة والأولوية واللغة وساعات العمل، مع مسؤول لكل فئة.",
    "faq_q6": "كيف تتم المدفوعات؟",
    "faq_a6": "نؤكد المتطلبات في المكالمة ثم نرسل رابط Stripe لرسوم الإعداد. يبدأ الاشتراك بعد الإطلاق عادةً.",
    "faq_q7": "ماذا تحتاجون منا للبدء؟",
    "faq_a7": "وصول embed للموقع، وصول إداري للقنوات (Meta/واتساب/البريد)، المسؤولين، وتفاصيل FAQ/النبرة.",
    "faq_q8": "هل تقدمون تحسينات بعد الإطلاق؟",
    "faq_a8": "نعم—الاشتراك يشمل تحسينات معقولة للقوالب والتوجيه بعد الإطلاق.",
    "contact_h2": "تواصل",
    "contact_p": "راسلنا عبر البريد أو احجز مكالمة. سنرد بخطوات البداية.",
    "contact_direct": "البريد المباشر",
    "primary_contact": "جهة الاتصال الأساسية",
    "secondary_contact": "جهة الاتصال الثانوية",
    "copy": "نسخ",
    "draft": "إنشاء مسودة بريد",
    "draft_hint": "يفتح مسودة جاهزة في بريدك لإرسالها.",
    "include_h4": "ماذا تذكر في الرسالة",
    "include_li1": "عملك وخدماتك",
    "include_li2": "القنوات المطلوبة",
    "include_li3": "المسؤولون (مبيعات/دعم/إلخ)",
    "include_li4": "تفاصيل حجز المواعيد (إن لزم)",
    "send_msg": "أرسل رسالة",
    "f_name": "الاسم",
    "f_email": "البريد الإلكتروني",
    "f_company": "الشركة (اختياري)",
    "f_message": "الرسالة",
    "f_placeholder": "اكتب عملك والقنوات والمسؤولين وهل تحتاج حجز مواعيد.",
    "f_submit": "إرسال الرسالة",
    "f_disclaimer": "بالإرسال، توافق على أن نرد على بريدك ونستخدم بياناتك فقط للرد.",
    "footer_tag": "أتمتة دردشة واستقبال طلبات موثوقة وبمستوى ممتاز.",
    "footer_social": "الحسابات",
    "footer_support": "الدعم",
    "back_top": "للأعلى",
    "lang_label": "اللغة",
    "privacy_title": "سياسة الخصوصية",
    "terms_title": "شروط الخدمة",
    "effective": "تاريخ السريان: December 25, 2025",
    "privacy_html": "<div class=\"legal-toc\">\n  <p><strong>ملخص:</strong> نجمع فقط ما نحتاجه لتقديم خدمات Assistio (الإعداد، الدعم، والفوترة). لا نقوم ببيع البيانات الشخصية.</p>\n</div>\n\n<h2>1. النطاق</h2>\n<p>توضح هذه السياسة جمع/استخدام البيانات عند زيارة الموقع أو التواصل أو حجز مكالمة أو شراء الخدمات.</p>\n\n<h2>2. ما الذي نجمعه</h2>\n<ul>\n  <li>بيانات التواصل (الاسم، البريد، الشركة، الرسالة).</li>\n  <li>بيانات الحجز (عبر Google).</li>\n  <li>بيانات الدفع (حالة الدفع وبيانات المعاملة عبر مزود الدفع مثل Stripe؛ لا نخزن بيانات البطاقة كاملة).</li>\n  <li>بيانات الإعداد (التصنيفات، المسؤولون، ساعات العمل، FAQ، نبرة العلامة، إعدادات الودجت).</li>\n  <li>بيانات تقنية حدّية للأمان والموثوقية.</li>\n</ul>\n\n<h2>3. الاستخدام</h2>\n<p>للإعداد والتشغيل والدعم والفوترة وتحسين الأمان والموثوقية.</p>\n\n<h2>4. المشاركة</h2>\n<p>فقط عند الحاجة (الحجز، الدفع، البنية التحتية، الالتزامات القانونية). <strong>لا نبيع البيانات الشخصية.</strong></p>\n\n<h2>5. الاحتفاظ والأمان</h2>\n<p>نحتفظ بالبيانات بالقدر اللازم لتقديم الخدمة ووفق المتطلبات القانونية. نستخدم إجراءات أمان معقولة.</p>\n\n<h2>6. حقوقك</h2>\n<p>يمكنك طلب الوصول/التصحيح/الحذف (حسب القانون). تواصل معنا عبر البريد الموجود في الموقع.</p>",
    "terms_html": "<div class=\"legal-toc\">\n  <p><strong>ملخص:</strong> خدمة مدفوعة لإعداد وتشغيل تدفقات دردشة واستقبال طلبات متعدد القنوات. أنت تحتفظ بملكية المحتوى، وعليك استخدام الخدمة قانونيًا وحماية الوصول للقنوات.</p>\n</div>\n\n<h2>1. الخدمات</h2>\n<p>إعداد ودعم (الموقع، واتساب للأعمال، إنستغرام/فيسبوك عبر Meta، البريد حسب الحاجة): توجيه، قوالب، أسئلة، حجز مواعيد، موثوقية أساسية.</p>\n\n<h2>2. مدة الإعداد</h2>\n<p>عادةً <strong>24–48 ساعة</strong> بعد استلام المعلومات والوصول المطلوب.</p>\n\n<h2>3. الرسوم</h2>\n<p>اشتراك شهري + رسوم إعداد مرة واحدة (عادةً عبر رابط دفع بعد المكالمة). عدم الدفع قد يوقف الخدمة.</p>\n\n<h2>4. الاستخدام المقبول</h2>\n<p>ممنوع السبام أو الخداع أو المخالفات القانونية أو محاولة اختراق الأنظمة.</p>\n\n<h2>5. خدمات الطرف الثالث</h2>\n<p>تعتمد الخدمة على منصات خارجية بشروطها. لا نتحمل مسؤولية انقطاعاتها.</p>\n\n<h2>6. المسؤولية</h2>\n<p>الخدمة “كما هي”. نحد المسؤولية ضمن ما يسمح به القانون وبحد أقصى ما تم دفعه خلال آخر 3 أشهر.</p>",
    "nav_handle": "القائمة",
    "lang_fab_label": "اللغة",
    "cta_pricing": "عرض الأسعار"
  }
};

  // Elements
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const bookingLinks = Array.from(document.querySelectorAll("[data-booking]"));

  // Language FAB
  const langFabToggle = document.querySelector("[data-lang-fab-toggle]");
  const langFabMenu = document.querySelector("[data-lang-fab-menu]");

  // Form
  const form = document.getElementById("contactForm");
  const statusEl = document.querySelector("[data-form-status]");

  // Header show/hide
  function hideHeader() {
    if (!header) return;
    header.classList.remove("is-visible");
  }
  function showHeader() {
    if (!header) return;
    header.classList.add("is-visible");
  }

  // Assign booking links
  bookingLinks.forEach((a) => {
    a.setAttribute("href", BOOKING_URL);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  // Nav menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) showHeader();
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.classList.contains("is-open")) return;
      const inside = navMenu.contains(e.target) || navToggle.contains(e.target);
      if (!inside) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Smooth hash scroll
  function scrollToHash(hash) {
    const el = document.querySelector(hash);
    if (!el) return;
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute("href");
    if (!hash || hash === "#") return;
    e.preventDefault();
    history.pushState(null, "", hash);
    scrollToHash(hash);
  });
  window.addEventListener("load", () => {
    if (location.hash && document.querySelector(location.hash)) {
      setTimeout(() => scrollToHash(location.hash), 0);
    }
  });

  // Reveal behavior: make content visible immediately to avoid pop-in on scroll
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  function revealNow(el) {
    el.classList.remove("will-reveal");
    el.classList.add("reveal-in");
    // clear inline transitionDelay if any
    el.style.transitionDelay = "";
  }
  // Immediately reveal all elements (disable reveal-on-scroll behavior)
  revealEls.forEach((el) => {
    el.classList.add("will-reveal");
    revealNow(el);
  });

  // Copy helper
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    }
  }
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const value = btn.getAttribute("data-copy");
    if (!value) return;
    const ok = await copyText(value);
    const original = btn.textContent;
    btn.textContent = ok ? "Copied" : "Copy failed";
    setTimeout(() => (btn.textContent = original), 1100);
  });

  // mailto builder
  function buildMailto(subject, body) {
    const to = "mishal.almoqdad@gmail.com,colibri.co.140@gmail.com";
    const params = new URLSearchParams();
      // Contact form handler (Formspree) — robust fetch with native fallback
      if (form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        form.addEventListener('submit', async function (ev) {
          ev.preventDefault();

          const name = form.querySelector('[name="name"]');
          const email = form.querySelector('[name="email"]');
          const message = form.querySelector('[name="message"]');

          // Basic validation
          if (!email || !message || !email.value.trim() || !message.value.trim()) {
            if (statusEl) statusEl.textContent = 'Please complete required fields.';
            (email && email.value.trim()) ? message.focus() : email.focus();
            return;
          }

          // Honeypot check — silently drop bots
          if (form.querySelector('[name="_gotcha"]')?.value || form.querySelector('[name="website"]')?.value) {
            return;
          }

          if (submitBtn) {
            submitBtn.disabled = true;
            var oldText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
          }
          if (statusEl) statusEl.textContent = 'Sending…';

          try {
            const data = new FormData(form);
            // Ensure reply-to is set for Formspree
            if (email && email.value) data.set('_replyto', email.value);

            const resp = await fetch(form.action, {
              method: form.method || 'POST',
              body: data,
              headers: { Accept: 'application/json' }
            });

            if (resp.ok) {
              if (statusEl) statusEl.textContent = 'Thanks — message sent! We\'ll reply soon.';
              form.reset();
            } else {
              // Try to parse JSON error, otherwise fallback to native submit (server side)
              let json = null;
              try { json = await resp.json(); } catch (e) { /* ignore */ }
              const msg = json?.error || json?.message || 'There was a problem sending your message.';
              if (statusEl) statusEl.textContent = msg;
              // Fallback: try native submit once (bypass JS handlers)
              try {
                form.submit();
                return;
              } catch (e) { /* last resort: continue */ }
            }
          } catch (err) {
            // Network error — try native submit as a fallback
            if (statusEl) statusEl.textContent = 'Network error — attempting native submit...';
            try { form.submit(); return; } catch (e) { /* ignore */ }
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = oldText;
            }
          }
        });
      }
    params.set("subject", subject);
    params.set("body", body);
    return `mailto:${to}?${params.toString()}`;
  }
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-mailto]");
    if (!link) return;
    e.preventDefault();
    const subject = "Assistio — New setup request";
    const body =
`Hi Assistio team,

I'd like to set up chat + intake for my business.

Business / industry:
Website:
Channels needed (Website / Instagram+Facebook / WhatsApp / Email):
Appointment booking needed? (Yes/No + details):
Top 3–5 questions the chatbot should ask:
Routing owners (sales/support/etc.):
Business hours:
Anything else:

Thanks,`;
    window.location.href = buildMailto(subject, body);
  });
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const hp = form.elements["website"]?.value?.trim();
      if (hp) return;

      const name = form.elements["name"]?.value?.trim();
      const email = form.elements["email"]?.value?.trim();
      const company = form.elements["company"]?.value?.trim();
      const message = form.elements["message"]?.value?.trim();

      if (!name || !email || !message) {
        if (statusEl) statusEl.textContent = "Please complete Name, Email, and Message.";
        return;
      }

      const subject = `Assistio — Inquiry from ${name}`;
      const body =
`Name: ${name}
Email: ${email}
Company: ${company || "(not provided)"}

Message:
${message}`;

      window.location.href = buildMailto(subject, body);
    });
  }

  // i18n
  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    // Legal content blocks (privacy/terms pages)
    const legal = document.querySelector("[data-legal-content]");
    if (legal) {
      const type = legal.getAttribute("data-legal-content");
      if (type === "privacy" && dict.privacy_html) legal.innerHTML = dict.privacy_html;
      if (type === "terms" && dict.terms_html) legal.innerHTML = dict.terms_html;
    }

    // Active lang buttons
    document.querySelectorAll("[data-lang-seg] .lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    setLangFabLabel();
    closeLangFab();
  }

  function getStoredLang() {
    try { return localStorage.getItem("assistio_lang"); } catch { return null; }
  }
  function storeLang(lang) {
    try { localStorage.setItem("assistio_lang", lang); } catch {}
  }

  // Language FAB behaviors
  function setLangFabLabel() {
    if (!langFabToggle) return;
    const cur = document.documentElement.getAttribute("lang") || "en";
    const node = langFabToggle.querySelector("[data-lang-fab-current]");
    if (node) node.textContent = cur.toUpperCase();
  }
  function closeLangFab() {
    if (!langFabMenu || !langFabToggle) return;
    langFabMenu.classList.remove("is-open");
    langFabToggle.setAttribute("aria-expanded", "false");
  }
  function toggleLangFab() {
    if (!langFabMenu || !langFabToggle) return;
    const isOpen = langFabMenu.classList.toggle("is-open");
    langFabToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (langFabToggle) {
    langFabToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLangFab();
    });
  }
  document.addEventListener("click", (e) => {
    if (!langFabMenu || !langFabToggle) return;
    if (!langFabMenu.classList.contains("is-open")) return;
    const inside = langFabMenu.contains(e.target) || langFabToggle.contains(e.target);
    if (!inside) closeLangFab();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLangFab();
  });

  document.querySelectorAll("[data-lang-seg] .lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (!lang) return;
      applyLang(lang);
      storeLang(lang);
    });
  });

  applyLang(getStoredLang() || "en");

  // Header behavior: hidden by default; show on scroll up / handle click / near top edge
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const delta = y - lastY;
    const menuOpen = navMenu && navMenu.classList.contains("is-open");

    if (menuOpen) {
      showHeader();
      lastY = y;
      return;
    }

    if (delta < -8) showHeader();
    else if (delta > 8) hideHeader();

    lastY = y;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // Make header visible by default; keep scroll-based hide/show behavior
  showHeader();
})();
