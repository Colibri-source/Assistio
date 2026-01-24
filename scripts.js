/* Assistio website scripts (v12) */
(() => {
  'use strict';

  const BOOKING_URL = 'https://calendar.app.google/buBm1A7rWTKY1xAi9';

  // Optional GA4: set to your Measurement ID (e.g., "G-XXXXXXXXXX") once ready.
  // Leave empty to disable analytics and the cookie banner.
  const GA_MEASUREMENT_ID = "";

  const I18N = {'en': {'lang_fab_label': 'Language', 'theme': 'Theme', 'brand_tag': 'AI booking & support', 'nav_handle': 'Menu', 'nav_home': 'Home', 'nav_features': 'Features', 'nav_how': 'How it works', 'nav_pricing': 'Pricing', 'nav_faq': 'FAQ', 'nav_contact': 'Contact', 'nav_privacy': 'Privacy', 'nav_terms': 'Terms', 'pill': '14‑day free trial • AI booking & support • Multi‑channel', 'h1': 'Turn messages into booked appointments — automatically.', 'lead': 'Assistio sets up a controlled AI agent trained on your services, pricing, and policies. It replies fast, qualifies leads, and routes or books via your calendar—without sacrificing brand tone.', 'cta_trial': 'Start 14‑day trial', 'cta_book': 'Book a demo call', 'cta_pricing': 'View pricing', 'kpi1_dt': 'AI edge', 'kpi1_dd': 'Consistent replies with guardrails + human handoff', 'kpi2_dt': 'Booking', 'kpi2_dd': 'Qualification → calendar booking (Google Calendar for now)', 'kpi3_dt': 'Channels', 'kpi3_dd': 'Web chat + the main messaging channels (subject to approvals)', 'hero_note': 'Note: WhatsApp/Meta channels may require approvals and may have platform fees. We guide you through setup.', 'panel_title': 'What you get', 'panel_li1': '<strong>AI agent</strong> trained on your FAQs, services, and policies', 'panel_li2': '<strong>Lead qualification</strong> (right questions, fewer back‑and‑forths)', 'panel_li3': '<strong>Booking flow</strong> to your Google Calendar link (MVP)', 'panel_li4': '<strong>Routing rules</strong> (sales/support/urgent) + human handoff', 'panel_li5': '<strong>Multi‑language</strong> handling (EN/RO/AR)', 'panel_li6': '<strong>Operational visibility</strong> (basic logs + iteration)', 'panel_price_main': "From $150 <span class='muted'>USD/mo</span>", 'price_setup_small': '+ $500 USD one-time setup', 'cta_compare': 'Compare plans', 'features_h2': 'Features', 'features_p': 'Designed for booking-heavy operations and high message volume—without chaotic support.', 'feat1_h3': 'AI agent with guardrails', 'feat1_p': 'Controlled, consistent replies—built around your policies and tone.', 'feat1_li1': 'Knowledge base (FAQs, services, pricing)', 'feat1_li2': 'Confidence rules + escalation to a human', 'feat1_li3': 'No risky “hallucination” positioning', 'feat2_h3': 'Booking-first flow', 'feat2_p': 'Qualification → scheduling → confirmation, with minimal friction.', 'feat2_li1': 'Collect the right details for the booking', 'feat2_li2': 'Route to Google Calendar link (MVP)', 'feat2_li3': 'Fallback: handoff to your team', 'feat3_h3': 'Multi-channel intake', 'feat3_p': 'Handle inbound messages where customers already are.', 'feat3_li1': 'Website chat widget', 'feat3_li2': 'Instagram/Facebook messaging (Meta approval)', 'feat3_li3': 'WhatsApp + Email (availability varies)', 'feat4_h3': 'Routing & handoff', 'feat4_p': 'The right message reaches the right owner, fast.', 'feat4_li1': 'Routing by topic, urgency, language, or hours', 'feat4_li2': 'Owners per category (sales/support/etc.)', 'feat4_li3': 'Escalation when a human should take over', 'feat5_h3': 'Operational intelligence', 'feat5_p': 'Reduce noise and surface what matters for the business.', 'feat5_li1': 'Common intents + top questions', 'feat5_li2': 'Lead quality signals (basic)', 'feat5_li3': 'Iteration loop: improve scripts weekly', 'feat6_h3': 'Safer by design', 'feat6_p': 'Built to avoid compliance trouble and overpromising.', 'feat6_li1': 'Conservative claims and disclaimers', 'feat6_li2': 'Clinic-friendly: inquiry handling, not medical advice', 'feat6_li3': 'Data minimization prompts', 'book_h3': 'Appointment booking', 'book_p': 'Collect the right details, confirm intent, and route to a booking link or your team—without breaking your flow.', 'how_h2': 'How it works', 'how_p': 'Fast onboarding, clear scope, and a workflow your team can actually run.', 'step1_h3': 'Share your requirements', 'step1_p': 'Services, FAQs, pricing, tone, business hours, and who owns sales/support.', 'step2_h3': 'We build your AI knowledge base', 'step2_p': 'We structure answers, qualification questions, and escalation rules.', 'step3_h3': 'Connect channels + booking', 'step3_p': 'We install the website widget, connect available channels, and plug in your calendar link.', 'step4_h3': 'Go live + optimize', 'step4_p': 'We launch, monitor early conversations, and refine weekly to improve booking rate and accuracy.', 'pricing_h2': 'Pricing', 'pricing_p': 'Free 14-day trial included (activate on the demo call). Same core features across plans; limits and support differ.', 'setup_fee': 'Setup (one-time): $500', 'trial_cap': 'Free trial: 14 days, up to 500 messages total', 'overage': 'Overage: $20 per extra 1,000 messages', 'trial_badge': 'Free 14-day trial', 'trial_banner_title': 'Try Assistio free for 14 days', 'trial_banner_text': 'Full access to the core workflow. Activate the trial on the onboarding/demo call (up to 500 messages total).', 'trial_banner_footer': 'Activated during the demo call.', 'trial_chip': '14-day free trial', 'plan_basic_h3': 'Basic', 'plan_basic_sub': 'Assistio Pack — starter', 'plan_pro_h3': 'Pro', 'plan_pro_sub': 'Assistio Pack — higher volume', 'plan_ent_h3': 'Enterprise', 'plan_ent_sub': 'Custom volume + requirements', 'per_mo': 'USD / mo', 'msg_basic': 'Includes ~2,000 messages / month', 'msg_pro': 'Includes ~6,000 messages / month', 'msg_ent': 'Custom limits, SLA, and integrations', 'badge_popular': 'Most popular', 'p_core1': 'AI agent + knowledge base', 'p_core2': 'Booking flow + routing + handoff', 'p_core3': 'EN/RO/AR support', 'p_core4': 'Basic reporting + iteration', 'p_pro1': 'Priority iterations', 'p_pro2': 'Expanded reporting', 'p_ent1': 'Custom workflows + approvals', 'p_ent2': 'Dedicated onboarding & SLA options', 'p_ent3': 'Security & data handling review', 'p_ent4': 'Custom analytics', 'cta_contact': 'Contact us', 'plan_note': 'After onboarding is confirmed, we send a Stripe payment link for the one-time setup fee.', 'plan_note2': 'Overages are billed monthly when you exceed your included messages.', 'whatsapp_note': 'WhatsApp/Meta fees and approvals may apply. We’ll confirm feasibility during onboarding.', 'contact_us_price': 'Contact', 'contact_us_price2': 'us', 'faq_h2': 'FAQ', 'faq_p': 'Technical, concrete answers—aligned with what we can deliver in the MVP.', 'faq_q1': 'What do I get during the 14‑day trial?', 'faq_a1': 'You get full access to the core workflow (knowledge base, routing, and booking flow) with a trial cap of up to 500 messages total. We set it up with you and iterate during the trial.', 'faq_q2': 'Which channels are available today?', 'faq_a2': 'Website chat is available immediately. Messaging channels like WhatsApp, Instagram, and Facebook may require Meta approvals and/or a third-party provider; timing varies. We’ll confirm what can be enabled during onboarding.', 'faq_q3': 'Do you automate booking?', 'faq_a3': 'Yes. In the MVP, we route qualified users to your Google Calendar booking link. For complex scheduling logic, we can add rules and handoff options.', 'faq_q4': 'How do you keep replies “controlled”?', 'faq_a4': 'We use a curated knowledge base, approved wording for sensitive topics, confidence rules, and escalation to a human when the assistant is uncertain.', 'faq_q5': 'Can you work with clinics without compliance risk?', 'faq_a5': 'We configure clinic workflows to handle general inquiries and scheduling, and to avoid medical advice. We also minimize data collection and can prompt users to call for sensitive topics. You remain responsible for compliance in your jurisdiction.', 'faq_q6': 'How do message limits and overages work?', 'faq_a6': 'Each plan includes a monthly message cap across supported channels. If you exceed it, we bill overages at $20 per additional 1,000 messages. Platform fees (e.g., WhatsApp) are separate.', 'faq_q7': 'What data do you need from us?', 'faq_a7': 'Services, pricing, FAQs, policies, tone examples, business hours, routing owners (sales/support), and your booking link. We recommend avoiding sensitive personal data unless strictly required.', 'faq_q8': 'How long does setup take?', 'faq_a8': 'For the MVP scope, onboarding is typically a few days once we have your content and channel access. Meta approvals (if needed) can add time.', 'faq_q9': 'Do you support multiple languages?', 'faq_a9': 'Yes. We can configure EN/RO/AR flows. You can also choose a single language or add more later.', 'faq_q10': 'What security can you claim today?', 'faq_a10': 'We apply reasonable safeguards for an early-stage MVP (access control, least-privilege, secure hosting practices). No system is 100% secure, and we do not claim specific certifications at this stage.', 'faq_q11': 'Can we cancel anytime?', 'faq_a11': 'Yes—cancel at the end of your billing period. Setup fees are non-refundable after work starts. We can export basic configuration details on request.', 'faq_q12': 'What is the onboarding process?', 'faq_a12': 'Channels + knowledge base + tone + booking flow + testing + onboarding. We then iterate weekly based on real conversations.', 'contact_h2': 'Contact', 'contact_p': 'Book a demo call to activate your free 14-day trial (500 messages cap). If you prefer email, contact Sales or Support.', 'contact_direct': 'Direct contacts', 'sales_label': 'Sales', 'support_label': 'Support', 'hello_label': 'General', 'copy': 'Copy', 'copied': 'Copied', 'draft': 'Create email draft', 'draft_hint': 'Opens a pre-filled draft so you can send it from your inbox.', 'include_h4': 'What to include', 'include_li1': 'Your business and services', 'include_li2': 'Channels you want to connect', 'include_li3': 'Routing owners (sales/support/etc.)', 'include_li4': 'Booking link + qualification questions', 'send_msg': 'Send a message', 'f_name': 'Name', 'f_email': 'Email', 'f_company': 'Company (optional)', 'f_industry': 'Industry', 'industry_select': 'Select…', 'industry_any': 'Select…', 'industry_clinic': 'Clinic', 'industry_real_estate': 'Real estate', 'industry_gym': 'Gym', 'industry_restaurant': 'Restaurant', 'industry_other': 'Other', 'f_message': 'Message', 'f_placeholder': 'Tell us your business, channels, routing owners, and whether you need appointment booking.', 'f_submit': 'Send message', 'f_disclaimer': 'By sending a message, you agree that we can reply to your email and use your details only to respond.', 'footer_tag': 'AI booking & customer support automation.', 'footer_formation': 'Assistio — project in formation (legal registration pending).', 'footer_support': 'Support', 'footer_sales': 'Sales', 'footer_social': 'Social', 'back_top': 'Back to top', 'cookie_text': 'We use optional analytics cookies (Google Analytics) to improve the site. You can accept or decline.', 'cookie_accept': 'Accept', 'cookie_decline': 'Decline', 'cookie_learn': 'Learn more', 'terms_h1': 'Terms of Service', 'privacy_h1': 'Privacy Policy', 'terms_html': '<p><strong>Effective date:</strong> January 15, 2026</p>\n<p><strong>Assistio — project in formation (legal registration pending)</strong> (“Assistio”, “we”, “us”) provides AI-assisted messaging workflows that help businesses handle inquiries and (where configured) route users to a booking link. These Terms govern your use of our website and services.</p>\n\n<h2>1) Scope of services</h2>\n<ul>\n  <li><strong>Setup & configuration:</strong> we configure an AI-driven workflow, including a knowledge base, qualification questions, routing rules, and a booking flow (Google Calendar link in the MVP).</li>\n  <li><strong>Channels:</strong> website chat is available by default. Messaging channels such as WhatsApp, Instagram, Facebook, and email may require approvals and third-party providers. Availability can change based on platform policies.</li>\n  <li><strong>Trial:</strong> the 14-day trial provides the same feature set as paid plans, subject to usage caps.</li>\n</ul>\n\n<h2>2) Your responsibilities</h2>\n<ul>\n  <li>You confirm you have the right to connect and use any channel/accounts you provide.</li>\n  <li>You will not use the service for unlawful, harmful, or deceptive activities, including spam.</li>\n  <li>You will provide accurate business information (services, pricing, policies) and promptly review content that could affect customer outcomes.</li>\n</ul>\n\n<h2>3) Clinics and regulated contexts</h2>\n<p>If you operate a clinic or a regulated business, our standard configuration is designed to handle <strong>inquiries and scheduling</strong> while avoiding medical advice. You must not submit or request sensitive health data via the assistant. We can configure prompts to minimize personal data and encourage direct phone contact for sensitive topics.</p>\n\n<h2>4) Fees, limits, and third‑party charges</h2>\n<ul>\n  <li><strong>Setup fee:</strong> a one-time setup fee applies (as shown on the pricing page).</li>\n  <li><strong>Subscription:</strong> monthly fees apply per your selected plan.</li>\n  <li><strong>Usage caps & overages:</strong> plans include a message cap; overage pricing applies if you exceed your included messages.</li>\n  <li><strong>Third-party fees:</strong> platform fees (e.g., WhatsApp conversation charges) and third-party tools are billed by those providers, not by Assistio, unless explicitly stated in writing.</li>\n</ul>\n\n<h2>5) Accuracy and no guarantees</h2>\n<p>AI-generated responses are probabilistic. We implement guardrails and escalation rules, but we do not guarantee accuracy, uninterrupted availability, conversions, or bookings. You remain responsible for your business decisions and customer outcomes.</p>\n\n<h2>6) Intellectual property</h2>\n<p>We retain all rights to our templates, workflows, code, and documentation. You retain rights to your business content. You grant us a limited license to use your content to provide and improve the service.</p>\n\n<h2>7) Confidentiality</h2>\n<p>We treat your non-public business information as confidential and use it only to provide the service, subject to necessary third-party processors.</p>\n\n<h2>8) Security</h2>\n<p>We use reasonable administrative, technical, and organizational safeguards appropriate for an early-stage MVP (e.g., access control, least-privilege, and secure hosting practices). No system is 100% secure, and we cannot guarantee absolute security.</p>\n\n<h2>9) Term, cancellation, and suspension</h2>\n<ul>\n  <li>You can cancel at the end of your billing period. Setup fees are non-refundable once work begins.</li>\n  <li>We may suspend or terminate access for misuse, security risks, or violations of these Terms.</li>\n</ul>\n\n<h2>10) Limitation of liability</h2>\n<p>To the maximum extent permitted by law, Assistio will not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability for any claim will not exceed the fees you paid to Assistio in the three (3) months preceding the event giving rise to the claim.</p>\n\n<h2>11) Governing law</h2>\n<p>These Terms are governed by the laws of Romania. Any disputes will be handled by the competent courts in Bucharest, unless mandatory law requires otherwise.</p>\n\n<h2>12) Contact</h2>\n<p>Questions: <a href="mailto:hello@assistio.co">hello@assistio.co</a> • Support: <a href="mailto:support@assistio.co">support@assistio.co</a> • Sales: <a href="mailto:sales@assistio.co">sales@assistio.co</a></p>', 'privacy_html': '<p><strong>Effective date:</strong> January 15, 2026</p>\n<p><strong>Assistio — project in formation (legal registration pending)</strong> (“Assistio”, “we”, “us”) respects your privacy. This policy explains what we collect, how we use it, and your choices.</p>\n\n<h2>1) What we collect</h2>\n<ul>\n  <li><strong>Contact details:</strong> name, email, company, and any information you submit via our forms.</li>\n  <li><strong>Message content:</strong> inquiries sent through connected channels (e.g., website chat; other channels when enabled).</li>\n  <li><strong>Operational logs:</strong> basic metadata such as timestamps, routing outcomes, and configuration settings.</li>\n  <li><strong>Website analytics (optional):</strong> if enabled, Google Analytics may collect device and usage data via cookies, subject to your consent.</li>\n</ul>\n\n<h2>2) How we use data</h2>\n<ul>\n  <li>Provide and operate the service (replying, routing, booking flow).</li>\n  <li>Support and troubleshooting.</li>\n  <li>Improve scripts, knowledge base structure, and performance (in aggregated form where possible).</li>\n  <li>Security and abuse prevention.</li>\n</ul>\n\n<h2>3) Legal bases (GDPR)</h2>\n<p>Where applicable, we rely on: (a) your consent, (b) performance of a contract or pre-contract steps, and/or (c) legitimate interests (security, service improvement), balanced against your rights.</p>\n\n<h2>4) Sharing and processors</h2>\n<p>We use service providers (“processors”) to operate the MVP, such as hosting providers, form handling (Formspree), and messaging platforms. If AI providers are used to generate replies, message content may be processed by those providers strictly to provide the service. WhatsApp/Meta channels and other platforms may process data under their own terms.</p>\n\n<h2>5) Clinics and sensitive data</h2>\n<p>We do not request sensitive health data by default. If you are a clinic, you should avoid submitting patient medical information through the assistant. We can configure prompts to minimize sensitive data collection.</p>\n\n<h2>6) Retention</h2>\n<p>We retain data only as long as needed for the purposes above. Default retention for operational logs and messages is up to 90 days unless a longer period is required for support or legal reasons.</p>\n\n<h2>7) Security</h2>\n<p>We apply reasonable safeguards appropriate for an early-stage MVP (e.g., access controls, least-privilege, and secure hosting practices). No system is entirely secure.</p>\n\n<h2>8) Your rights</h2>\n<p>Depending on your location, you may have rights to access, correct, delete, or export your data, and to object or restrict processing. To exercise these rights, contact <a href="mailto:hello@assistio.co">hello@assistio.co</a>.</p>\n\n<h2>9) Cookies and analytics</h2>\n<p>If we enable Google Analytics, we will request your consent before setting analytics cookies. You can change your choice anytime by clearing site storage and reloading the page.</p>\n\n<h2>10) Contact</h2>\n<p>Questions: <a href="mailto:hello@assistio.co">hello@assistio.co</a></p>', 'form_success': 'Thanks — we received your message and will reply shortly.', 'form_error': 'Something went wrong. Please try again, or email us at hello@assistio.co.'}, 'ro': {'lang_fab_label': 'Limbă', 'theme': 'Temă', 'brand_tag': 'Programări & suport AI', 'nav_handle': 'Meniu', 'nav_home': 'Acasă', 'nav_features': 'Funcții', 'nav_how': 'Cum funcționează', 'nav_pricing': 'Prețuri', 'nav_faq': 'Întrebări', 'nav_contact': 'Contact', 'nav_privacy': 'Confidențialitate', 'nav_terms': 'Termeni', 'pill': 'Trial 14 zile • Programări & suport AI • Multi‑canal', 'h1': 'Transformă mesajele în programări — automat.', 'lead': 'Assistio configurează un agent AI controlat, antrenat pe serviciile, prețurile și politicile tale. Răspunde rapid, califică lead‑uri și trimite la programare—fără să strice tonul brandului.', 'cta_trial': 'Începe trialul de 14 zile', 'cta_book': 'Programează un apel demo', 'cta_pricing': 'Vezi prețurile', 'kpi1_dt': 'Avantaj AI', 'kpi1_dd': 'Răspunsuri consistente + guardrails + preluare umană', 'kpi2_dt': 'Programări', 'kpi2_dd': 'Calificare → programare (Google Calendar, deocamdată)', 'kpi3_dt': 'Canale', 'kpi3_dd': 'Chat pe site + canale de mesagerie (în funcție de aprobări)', 'hero_note': 'Notă: canalele WhatsApp/Meta pot necesita aprobări și pot avea taxe de platformă. Te ghidăm la setup.', 'panel_title': 'Ce primești', 'panel_li1': '<strong>Agent AI</strong> antrenat pe FAQ, servicii și politici', 'panel_li2': '<strong>Calificare lead‑uri</strong> (întrebările potrivite, mai puțin ping‑pong)', 'panel_li3': '<strong>Flux de programare</strong> către link-ul tău Google Calendar (MVP)', 'panel_li4': '<strong>Rutare</strong> (sales/support/urgent) + preluare umană', 'panel_li5': '<strong>Multi‑limbă</strong> (EN/RO/AR)', 'panel_li6': '<strong>Vizibilitate operațională</strong> (loguri + iterații)', 'panel_price_main': "De la $150 <span class='muted'>USD/lună</span>", 'price_setup_small': '+ $500 USD taxă unică de setup', 'cta_compare': 'Compară planurile', 'features_h2': 'Funcții', 'features_p': 'Creat pentru business-uri cu programări și volum mare de mesaje—fără suport haotic.', 'feat1_h3': 'Agent AI cu guardrails', 'feat1_p': 'Răspunsuri controlate și consistente, pe baza politicilor și tonului tău.', 'feat1_li1': 'Bază de cunoștințe (FAQ, servicii, prețuri)', 'feat1_li2': 'Reguli de încredere + escaladare către om', 'feat1_li3': 'Fără poziționare riscantă (halucinații)', 'feat2_h3': 'Flux orientat pe programări', 'feat2_p': 'Calificare → programare → confirmare, cu fricțiune minimă.', 'feat2_li1': 'Colectează detaliile corecte pentru programare', 'feat2_li2': 'Trimite către link Google Calendar (MVP)', 'feat2_li3': 'Fallback: preluare de către echipă', 'feat3_h3': 'Intake multi‑canal', 'feat3_p': 'Gestionează mesaje acolo unde sunt clienții.', 'feat3_li1': 'Widget chat pe site', 'feat3_li2': 'Mesagerie Instagram/Facebook (aprobare Meta)', 'feat3_li3': 'WhatsApp + Email (în funcție de disponibilitate)', 'feat4_h3': 'Rutare & handoff', 'feat4_p': 'Mesajul ajunge rapid la owner-ul potrivit.', 'feat4_li1': 'Rutare după subiect, urgență, limbă sau program', 'feat4_li2': 'Owner-i pe categorii (sales/support/etc.)', 'feat4_li3': 'Escaladare când e nevoie de om', 'feat5_h3': 'Inteligență operațională', 'feat5_p': 'Reduce zgomotul și scoate la suprafață ce contează.', 'feat5_li1': 'Intenții comune + top întrebări', 'feat5_li2': 'Semnale de calitate lead (basic)', 'feat5_li3': 'Iterații săptămânale pentru îmbunătățire', 'feat6_h3': 'Mai sigur, by design', 'feat6_p': 'Gândit să evite probleme de compliance și promisiuni exagerate.', 'feat6_li1': 'Afirmații conservative + disclaimere', 'feat6_li2': 'Potrivit pentru clinici: solicitări, nu sfaturi medicale', 'feat6_li3': 'Minimizare date în întrebări', 'book_h3': 'Programări', 'book_p': 'Colectează informațiile corecte, confirmă intenția și trimite la programare sau la echipă—fără să rupe fluxul.', 'how_h2': 'Cum funcționează', 'how_p': 'Onboarding rapid, scope clar și un flux pe care echipa îl poate rula.', 'step1_h3': 'Spui cerințele', 'step1_p': 'Servicii, FAQ, prețuri, ton, program, owner-i pentru sales/support.', 'step2_h3': 'Construim baza AI', 'step2_p': 'Structurăm răspunsurile, întrebările de calificare și regulile de escaladare.', 'step3_h3': 'Conectăm canale + programare', 'step3_p': 'Instalăm widget-ul, conectăm canalele disponibile și adăugăm link-ul de calendar.', 'step4_h3': 'Lansare + optimizare', 'step4_p': 'Lansăm, monitorizăm conversațiile și iterăm săptămânal pentru conversii mai bune.', 'pricing_h2': 'Prețuri', 'pricing_p': 'Probă gratuită 14 zile (se activează în timpul apelului demo). Aceleași funcții de bază pe toate planurile; diferă limitele și suportul.', 'setup_fee': 'Setup (o singură dată): $500', 'trial_cap': 'Probă gratuită: 14 zile, până la 500 mesaje total', 'overage': 'Overage: $20 / 1.000 mesaje extra', 'trial_badge': 'Probă gratuită 14 zile', 'trial_banner_title': 'Încearcă Assistio gratuit 14 zile', 'trial_banner_text': 'Acces complet la fluxul de bază. Activăm proba în apelul de onboarding/demo (până la 500 de mesaje în total).', 'trial_banner_footer': 'Activare în apelul demo.', 'trial_chip': 'Probă gratuită 14 zile', 'plan_basic_h3': 'Basic', 'plan_basic_sub': 'Assistio Pack — start', 'plan_pro_h3': 'Pro', 'plan_pro_sub': 'Assistio Pack — volum mai mare', 'plan_ent_h3': 'Enterprise', 'plan_ent_sub': 'Volum + cerințe custom', 'per_mo': 'USD / lună', 'msg_basic': 'Include ~2.000 mesaje / lună', 'msg_pro': 'Include ~6.000 mesaje / lună', 'msg_ent': 'Limite, SLA și integrări custom', 'badge_popular': 'Cel mai ales', 'p_core1': 'Agent AI + bază de cunoștințe', 'p_core2': 'Programare + rutare + handoff', 'p_core3': 'Suport EN/RO/AR', 'p_core4': 'Raportare basic + iterații', 'p_pro1': 'Iterații prioritare', 'p_pro2': 'Raportare extinsă', 'p_ent1': 'Fluxuri și aprobări custom', 'p_ent2': 'Onboarding dedicat & opțiuni SLA', 'p_ent3': 'Review securitate & date', 'p_ent4': 'Analytics custom', 'cta_contact': 'Contact', 'plan_note': 'Taxa de setup se plătește după confirmarea onboardingului, prin link Stripe.', 'plan_note2': 'Depășirile sunt facturate lunar când depășești volumul inclus.', 'whatsapp_note': 'Pot exista taxe și aprobări WhatsApp/Meta. Confirmăm în onboarding.', 'contact_us_price': 'Contact', 'contact_us_price2': 'ne', 'faq_h2': 'Întrebări frecvente', 'faq_p': 'Răspunsuri concrete, aliniate cu ceea ce livrăm în MVP.', 'faq_q1': 'Ce primesc în trialul de 14 zile?', 'faq_a1': 'Ai acces la fluxul complet (bază de cunoștințe, rutare, programare), cu limită de până la 500 de mesaje total. Îl setăm împreună și iterăm în timpul trialului.', 'faq_q2': 'Ce canale sunt disponibile acum?', 'faq_a2': 'Chat-ul de pe site este disponibil imediat. Canalele WhatsApp/Instagram/Facebook pot necesita aprobări Meta și/sau un furnizor terț; durata variază. Confirmăm în onboarding.', 'faq_q3': 'Automatizați programările?', 'faq_a3': 'Da. În MVP, trimitem utilizatorii calificați către link-ul tău de programare Google Calendar. Putem adăuga reguli și opțiuni de handoff.', 'faq_q4': 'Cum păstrați răspunsurile „controlate”?', 'faq_a4': 'Folosim o bază de cunoștințe curată, formulări aprobate pentru subiecte sensibile, reguli de încredere și escaladare către om când e nevoie.', 'faq_q5': 'Puteți lucra cu clinici fără risc de compliance?', 'faq_a5': 'Configurăm fluxul pentru solicitări generale și programări, evitând sfaturi medicale. Minimizăm colectarea de date și putem recomanda apel telefonic pentru subiecte sensibile. Responsabilitatea legală rămâne la tine.', 'faq_q6': 'Cum funcționează limitele și overage-ul?', 'faq_a6': 'Fiecare plan include un plafon lunar de mesaje pe canalele suportate. Dacă îl depășești, facturăm $20 per 1.000 mesaje extra. Taxele de platformă (ex. WhatsApp) sunt separate.', 'faq_q7': 'Ce date aveți nevoie de la noi?', 'faq_a7': 'Servicii, prețuri, FAQ, politici, exemple de ton, program, owner-i (sales/support) și link-ul de programare. Recomandăm evitarea datelor personale sensibile.', 'faq_q8': 'Cât durează setup-ul?', 'faq_a8': 'Pentru MVP, de obicei câteva zile după ce avem conținutul și accesul la canale. Aprobările Meta (dacă sunt necesare) pot adăuga timp.', 'faq_q9': 'Suportați mai multe limbi?', 'faq_a9': 'Da. Putem configura fluxuri EN/RO/AR. Poți începe cu o singură limbă și adăuga ulterior.', 'faq_q10': 'Ce puteți afirma despre securitate acum?', 'faq_a10': 'Aplicăm măsuri rezonabile pentru un MVP (control acces, least-privilege, găzduire securizată). Nu pretindem certificări specifice în acest stadiu.', 'faq_q11': 'Pot anula oricând?', 'faq_a11': 'Da—poți anula la finalul perioadei de facturare. Taxa de setup nu este rambursabilă după începerea lucrărilor. Putem exporta configurări de bază la cerere.', 'faq_q12': 'Care este procesul de onboarding?', 'faq_a12': 'Canale + bază de cunoștințe + ton + programare + testare + onboarding. Apoi iterăm săptămânal pe conversații reale.', 'contact_h2': 'Contact', 'contact_p': 'Programează un apel demo pentru a activa trialul gratuit de 14 zile (limită 500 mesaje). Dacă preferi email, scrie la Sales sau Support.', 'contact_direct': 'Contact direct', 'sales_label': 'Vânzări', 'support_label': 'Suport', 'hello_label': 'General', 'copy': 'Copiază', 'copied': 'Copiat', 'draft': 'Creează draft email', 'draft_hint': 'Deschide un email precompletat în inbox-ul tău.', 'include_h4': 'Ce să incluzi', 'include_li1': 'Business-ul și serviciile', 'include_li2': 'Canalele pe care vrei să le conectezi', 'include_li3': 'Owner-i pentru rutare (sales/support/etc.)', 'include_li4': 'Link de programare + întrebări de calificare', 'send_msg': 'Trimite un mesaj', 'f_name': 'Nume', 'f_email': 'Email', 'f_company': 'Companie (opțional)', 'f_industry': 'Industrie', 'industry_select': 'Selectează…', 'industry_any': 'Selectează…', 'industry_clinic': 'Clinică', 'industry_real_estate': 'Imobiliare', 'industry_gym': 'Sală de fitness', 'industry_restaurant': 'Restaurant', 'industry_other': 'Altceva', 'f_message': 'Mesaj', 'f_placeholder': 'Spune-ne despre business, canale, owner-i și dacă ai nevoie de programări.', 'f_submit': 'Trimite mesaj', 'f_disclaimer': 'Trimițând mesajul, ești de acord să îți răspundem pe email și să folosim datele doar pentru a răspunde.', 'footer_tag': 'Programări & suport AI.', 'footer_formation': 'Assistio — proiect în formare (înregistrare legală în curs).', 'footer_support': 'Suport', 'footer_sales': 'Vânzări', 'footer_social': 'Social', 'back_top': 'Sus', 'cookie_text': 'Folosim cookie-uri opționale de analytics (Google Analytics) pentru a îmbunătăți site-ul. Poți accepta sau refuza.', 'cookie_accept': 'Accept', 'cookie_decline': 'Refuz', 'cookie_learn': 'Detalii', 'terms_h1': 'Termeni și condiții', 'privacy_h1': 'Politică de confidențialitate', 'terms_html': '<p><strong>Data intrării în vigoare:</strong> 15 ianuarie 2026</p>\n<p><strong>Assistio — proiect în formare (înregistrare legală în curs)</strong> („Assistio”, „noi”) oferă fluxuri de mesagerie asistate de AI, pentru gestionarea solicitărilor și (unde este configurat) trimiterea către un link de programare. Acești Termeni reglementează utilizarea site-ului și a serviciilor.</p>\n\n<h2>1) Domeniul serviciilor</h2>\n<ul>\n  <li><strong>Configurare:</strong> configurăm un flux AI, inclusiv bază de cunoștințe, întrebări de calificare, reguli de rutare și un flux de programare (link Google Calendar în MVP).</li>\n  <li><strong>Canale:</strong> chat-ul de pe site este disponibil implicit. WhatsApp/Instagram/Facebook/email pot necesita aprobări și furnizori terți. Disponibilitatea poate varia în funcție de politicile platformelor.</li>\n  <li><strong>Trial:</strong> trialul de 14 zile are același set de funcții ca planurile plătite, dar cu limită de utilizare.</li>\n</ul>\n\n<h2>2) Responsabilitățile tale</h2>\n<ul>\n  <li>Confirmi că ai dreptul să conectezi și să folosești canalele/conturile furnizate.</li>\n  <li>Nu vei folosi serviciul pentru activități ilegale, dăunătoare sau înșelătoare, inclusiv spam.</li>\n  <li>Furnizezi informații corecte (servicii, prețuri, politici) și revizuiești rapid conținutul care poate afecta clienții.</li>\n</ul>\n\n<h2>3) Clinici și contexte reglementate</h2>\n<p>Dacă ești clinică sau activitate reglementată, configurarea standard este pentru <strong>solicitări și programări</strong>, evitând sfaturi medicale. Nu transmite date medicale sensibile prin asistent. Putem configura prompturi pentru minimizarea datelor și recomandarea contactului telefonic pentru subiecte sensibile.</p>\n\n<h2>4) Taxe, limite și costuri terțe</h2>\n<ul>\n  <li><strong>Taxă de setup:</strong> se aplică o taxă unică (conform paginii de preț).</li>\n  <li><strong>Abonament:</strong> taxe lunare conform planului ales.</li>\n  <li><strong>Limită mesaje & overage:</strong> planurile includ un plafon de mesaje; se aplică overage dacă depășești limita.</li>\n  <li><strong>Costuri terțe:</strong> taxe de platformă (ex. conversații WhatsApp) și instrumente terțe sunt facturate de furnizorii respectivi, dacă nu se menționează altfel în scris.</li>\n</ul>\n\n<h2>5) Acuratețe și fără garanții</h2>\n<p>Răspunsurile generate de AI sunt probabilistice. Implementăm guardrails și escaladare, dar nu garantăm acuratețe, disponibilitate continuă, conversii sau programări. Rămâi responsabil pentru deciziile de business.</p>\n\n<h2>6) Proprietate intelectuală</h2>\n<p>Păstrăm drepturile asupra șabloanelor, fluxurilor, codului și documentației. Tu păstrezi drepturile asupra conținutului tău. Ne acorzi o licență limitată pentru a folosi conținutul tău în furnizarea și îmbunătățirea serviciului.</p>\n\n<h2>7) Confidențialitate</h2>\n<p>Tratăm informațiile tale nepublice ca fiind confidențiale și le folosim doar pentru furnizarea serviciului, cu utilizarea necesară a procesatorilor terți.</p>\n\n<h2>8) Securitate</h2>\n<p>Folosim măsuri rezonabile administrative și tehnice adecvate unui MVP (control acces, least-privilege, practici de găzduire securizată). Nu putem garanta securitate absolută.</p>\n\n<h2>9) Durată, anulare, suspendare</h2>\n<ul>\n  <li>Poți anula la finalul perioadei de facturare. Taxa de setup nu este rambursabilă după începerea lucrărilor.</li>\n  <li>Putem suspenda/închide accesul pentru abuz, riscuri de securitate sau încălcarea Termenilor.</li>\n</ul>\n\n<h2>10) Limitarea răspunderii</h2>\n<p>În limita permisă de lege, Assistio nu răspunde pentru daune indirecte/incidente/consecințiale. Răspunderea totală nu va depăși taxele plătite către Assistio în ultimele trei (3) luni înainte de eveniment.</p>\n\n<h2>11) Legea aplicabilă</h2>\n<p>Acești Termeni sunt guvernați de legea din România. Litigiile vor fi soluționate de instanțele competente din București, cu excepția cazurilor impuse de lege.</p>\n\n<h2>12) Contact</h2>\n<p>Întrebări: <a href="mailto:hello@assistio.co">hello@assistio.co</a> • Support: <a href="mailto:support@assistio.co">support@assistio.co</a> • Sales: <a href="mailto:sales@assistio.co">sales@assistio.co</a></p>', 'privacy_html': '<p><strong>Data intrării în vigoare:</strong> 15 ianuarie 2026</p>\n<p><strong>Assistio — proiect în formare (înregistrare legală în curs)</strong> („Assistio”, „noi”) respectă confidențialitatea. Această politică explică ce colectăm, cum folosim datele și opțiunile tale.</p>\n\n<h2>1) Ce colectăm</h2>\n<ul>\n  <li><strong>Date de contact:</strong> nume, email, companie și informațiile trimise prin formulare.</li>\n  <li><strong>Conținut mesaje:</strong> solicitări trimise prin canalele conectate (chat site; alte canale când sunt activate).</li>\n  <li><strong>Jurnale operaționale:</strong> metadate de bază (timp, rutare, setări).</li>\n  <li><strong>Analytics (opțional):</strong> dacă este activat, Google Analytics poate colecta date de utilizare prin cookie-uri, doar cu consimțământ.</li>\n</ul>\n\n<h2>2) Cum folosim datele</h2>\n<ul>\n  <li>Furnizarea serviciului (răspuns, rutare, programare).</li>\n  <li>Suport și depanare.</li>\n  <li>Îmbunătățirea scripturilor și a bazei de cunoștințe (agregat unde este posibil).</li>\n  <li>Securitate și prevenirea abuzului.</li>\n</ul>\n\n<h2>3) Baze legale (GDPR)</h2>\n<p>Unde este aplicabil, ne bazăm pe: (a) consimțământ, (b) executarea unui contract sau pași pre-contractuali și/sau (c) interes legitim (securitate, îmbunătățire), echilibrat cu drepturile tale.</p>\n\n<h2>4) Partajare și procesatori</h2>\n<p>Folosim furnizori („procesatori”) pentru operarea MVP-ului: găzduire, procesare formulare (Formspree), platforme de mesagerie. Dacă folosim furnizori AI pentru răspunsuri, conținutul poate fi procesat strict pentru furnizarea serviciului. WhatsApp/Meta și alte platforme pot procesa datele conform propriilor termeni.</p>\n\n<h2>5) Clinici și date sensibile</h2>\n<p>Nu solicităm date medicale sensibile implicit. Dacă ești clinică, evită trimiterea informațiilor medicale ale pacienților prin asistent. Putem configura prompturi pentru minimizarea datelor sensibile.</p>\n\n<h2>6) Păstrare</h2>\n<p>Păstrăm datele doar cât este necesar. Retenția implicită pentru mesaje și loguri este până la 90 de zile, cu excepția cazurilor de suport sau obligații legale.</p>\n\n<h2>7) Securitate</h2>\n<p>Aplicăm măsuri rezonabile adecvate unui MVP (control acces, least-privilege, găzduire securizată). Niciun sistem nu este complet sigur.</p>\n\n<h2>8) Drepturile tale</h2>\n<p>În funcție de locație, poți avea drepturi de acces, rectificare, ștergere, portabilitate, opoziție sau restricționare. Pentru solicitări: <a href="mailto:hello@assistio.co">hello@assistio.co</a>.</p>\n\n<h2>9) Cookie-uri și analytics</h2>\n<p>Dacă activăm Google Analytics, vom cere consimțământ înainte de setarea cookie-urilor de analytics. Poți schimba opțiunea prin ștergerea stocării site-ului și reîncărcare.</p>\n\n<h2>10) Contact</h2>\n<p>Întrebări: <a href="mailto:hello@assistio.co">hello@assistio.co</a></p>', 'form_success': 'Mulțumim — am primit mesajul și vom răspunde în curând.', 'form_error': 'A apărut o problemă. Reîncearcă sau scrie la hello@assistio.co.'}, 'ar': {'lang_fab_label': 'اللغة', 'theme': 'المظهر', 'brand_tag': 'حجز ودعم بالذكاء الاصطناعي', 'nav_handle': 'القائمة', 'nav_home': 'الرئيسية', 'nav_features': 'المزايا', 'nav_how': 'كيف يعمل', 'nav_pricing': 'الأسعار', 'nav_faq': 'الأسئلة', 'nav_contact': 'تواصل', 'nav_privacy': 'الخصوصية', 'nav_terms': 'الشروط', 'pill': 'تجربة 14 يومًا • حجز ودعم بالذكاء الاصطناعي • متعدد القنوات', 'h1': 'حوّل الرسائل إلى حجوزات — تلقائيًا.', 'lead': 'يقوم Assistio بتهيئة مساعد ذكاء اصطناعي مُتحكَّم به ومُدرَّب على خدماتك وأسعارك وسياساتك. يرد بسرعة، ويؤهل العملاء، ويوجههم إلى الحجز—مع الحفاظ على نبرة العلامة.', 'cta_trial': 'ابدأ تجربة 14 يومًا', 'cta_book': 'احجز مكالمة توضيحية', 'cta_pricing': 'عرض الأسعار', 'kpi1_dt': 'ميزة الذكاء', 'kpi1_dd': 'ردود متسقة مع ضوابط + تحويل لبشر', 'kpi2_dt': 'الحجز', 'kpi2_dd': 'تأهيل → حجز عبر الرابط (Google Calendar حاليًا)', 'kpi3_dt': 'القنوات', 'kpi3_dd': 'دردشة الموقع + قنوات رئيسية (حسب الموافقات)', 'hero_note': 'ملاحظة: قنوات WhatsApp/Meta قد تتطلب موافقات وقد تفرض رسومًا. سنرشدك في الإعداد.', 'panel_title': 'ما الذي ستحصل عليه', 'panel_li1': '<strong>مساعد AI</strong> مُدرَّب على الأسئلة الشائعة والخدمات والسياسات', 'panel_li2': '<strong>تأهيل العملاء</strong> (أسئلة صحيحة وتقليل الذهاب والإياب)', 'panel_li3': '<strong>تدفّق حجز</strong> إلى رابط Google Calendar (MVP)', 'panel_li4': '<strong>توجيه</strong> (مبيعات/دعم/عاجل) + تحويل لبشر', 'panel_li5': '<strong>تعدد اللغات</strong> (EN/RO/AR)', 'panel_li6': '<strong>رؤية تشغيلية</strong> (سجلات + تحسين)', 'panel_price_main': "ابتداءً من $150 <span class='muted'>شهريًا</span>", 'price_setup_small': '+ $500 رسوم إعداد لمرة واحدة', 'cta_compare': 'قارن الخطط', 'features_h2': 'المزايا', 'features_p': 'مصمم للأعمال التي تعتمد على الحجوزات وحجم رسائل كبير—بدون فوضى الدعم.', 'feat1_h3': 'مساعد AI بضوابط', 'feat1_p': 'ردود متحكم بها ومتسقة مبنية على سياساتك ونبرة علامتك.', 'feat1_li1': 'قاعدة معرفة (FAQ، خدمات، أسعار)', 'feat1_li2': 'قواعد ثقة + تصعيد لبشر', 'feat1_li3': 'تجنب الوعود والمخرجات المحفوفة بالمخاطر', 'feat2_h3': 'تدفق موجه للحجز', 'feat2_p': 'تأهيل → حجز → تأكيد، بأقل احتكاك.', 'feat2_li1': 'جمع التفاصيل الصحيحة للحجز', 'feat2_li2': 'توجيه إلى رابط Google Calendar (MVP)', 'feat2_li3': 'بديل: تحويل للفريق', 'feat3_h3': 'استقبال متعدد القنوات', 'feat3_p': 'تعامل مع الرسائل حيث يوجد العملاء.', 'feat3_li1': 'ودجت دردشة الموقع', 'feat3_li2': 'رسائل Instagram/Facebook (موافقة Meta)', 'feat3_li3': 'WhatsApp والبريد (حسب الإتاحة)', 'feat4_h3': 'توجيه وتحويل', 'feat4_p': 'تصل الرسالة إلى الشخص المناسب بسرعة.', 'feat4_li1': 'توجيه حسب الموضوع/اللغة/الوقت/الأولوية', 'feat4_li2': 'مسؤولون حسب الفئة (مبيعات/دعم...)', 'feat4_li3': 'تصعيد عندما يلزم تدخل بشري', 'feat5_h3': 'ذكاء تشغيلي', 'feat5_p': 'تقليل الضوضاء وإبراز ما يهم للأعمال.', 'feat5_li1': 'النوايا الشائعة وأهم الأسئلة', 'feat5_li2': 'مؤشرات جودة العملاء (أساسية)', 'feat5_li3': 'حلقة تحسين أسبوعية', 'feat6_h3': 'أكثر أمانًا افتراضيًا', 'feat6_p': 'مصمم لتجنب مشاكل الامتثال والمبالغة.', 'feat6_li1': 'ادعاءات حذرة مع تنبيهات', 'feat6_li2': 'مناسب للعيادات: استفسارات وحجز دون نصيحة طبية', 'feat6_li3': 'تقليل جمع البيانات', 'book_h3': 'الحجز', 'book_p': 'اجمع المعلومات الصحيحة، أكد النية، ثم وجه إلى رابط الحجز أو فريقك دون تعطيل التجربة.', 'how_h2': 'كيف يعمل', 'how_p': 'تهيئة سريعة ونطاق واضح وتدفق يمكن لفريقك تشغيله.', 'step1_h3': 'شارك المتطلبات', 'step1_p': 'الخدمات والأسعار والأسئلة الشائعة والنبرة وساعات العمل والمسؤولون.', 'step2_h3': 'نبني قاعدة المعرفة', 'step2_p': 'نرتب الإجابات وأسئلة التأهيل وقواعد التصعيد.', 'step3_h3': 'نربط القنوات والحجز', 'step3_p': 'نثبت ودجت الموقع، ونربط القنوات المتاحة، ونضيف رابط التقويم.', 'step4_h3': 'إطلاق وتحسين', 'step4_p': 'نطلق ونراقب المحادثات ونحسن أسبوعيًا لرفع نسبة الحجوزات.', 'pricing_h2': 'الأسعار', 'pricing_p': 'تجربة مجانية لمدة 14 يومًا (تتفعّل خلال مكالمة العرض). نفس الميزات الأساسية في جميع الخطط؛ تختلف الحدود والدعم.', 'setup_fee': 'رسوم إعداد (مرة واحدة): $500', 'trial_cap': 'تجربة مجانية: 14 يومًا، حتى 500 رسالة إجمالًا', 'overage': 'زيادة: $20 لكل 1,000 رسالة إضافية', 'trial_badge': 'تجربة مجانية 14 يومًا', 'trial_banner_title': 'جرّب Assistio مجانًا لمدة 14 يومًا', 'trial_banner_text': 'وصول كامل للوظائف الأساسية. نفعّل التجربة خلال مكالمة التهيئة/العرض (حتى 500 رسالة إجمالًا).', 'trial_banner_footer': 'التفعيل يتم أثناء مكالمة العرض.', 'trial_chip': 'تجربة مجانية 14 يومًا', 'plan_basic_h3': 'Basic', 'plan_basic_sub': 'Assistio Pack — بداية', 'plan_pro_h3': 'Pro', 'plan_pro_sub': 'Assistio Pack — حجم أعلى', 'plan_ent_h3': 'Enterprise', 'plan_ent_sub': 'حجم ومتطلبات مخصصة', 'per_mo': 'دولار / شهر', 'msg_basic': 'يشمل حوالي 2,000 رسالة / شهر', 'msg_pro': 'يشمل حوالي 6,000 رسالة / شهر', 'msg_ent': 'حدود وSLA وتكاملات مخصصة', 'badge_popular': 'الأكثر اختيارًا', 'p_core1': 'مساعد AI + قاعدة معرفة', 'p_core2': 'حجز + توجيه + تحويل', 'p_core3': 'دعم EN/RO/AR', 'p_core4': 'تقارير أساسية + تحسين', 'p_pro1': 'تحسينات ذات أولوية', 'p_pro2': 'تقارير موسعة', 'p_ent1': 'تدفقات وموافقات مخصصة', 'p_ent2': 'تهيئة مخصصة وخيارات SLA', 'p_ent3': 'مراجعة أمنية ومعالجة بيانات', 'p_ent4': 'تحليلات مخصصة', 'cta_contact': 'تواصل', 'plan_note': 'تُحصَّل رسوم الإعداد بعد تأكيد التهيئة عبر رابط دفع Stripe.', 'plan_note2': 'تُفوتر الزيادات شهريًا عند تجاوز الحد المضمّن.', 'whatsapp_note': 'قد تنطبق رسوم وموافقات WhatsApp/Meta. نؤكد ذلك أثناء التهيئة.', 'contact_us_price': 'تواصل', 'contact_us_price2': 'معنا', 'faq_h2': 'الأسئلة الشائعة', 'faq_p': 'إجابات تقنية واضحة ومتوافقة مع ما نقدمه في MVP.', 'faq_q1': 'ماذا أحصل خلال تجربة 14 يومًا؟', 'faq_a1': 'تحصل على الوصول الكامل لتدفق العمل الأساسي (قاعدة معرفة، توجيه، وحجز) مع حد تجربة يصل إلى 500 رسالة إجمالًا. نقوم بإعداده معك ونحسن أثناء التجربة.', 'faq_q2': 'ما القنوات المتاحة الآن؟', 'faq_a2': 'دردشة الموقع متاحة فورًا. قنوات مثل WhatsApp/Instagram/Facebook قد تتطلب موافقات Meta و/أو مزودًا خارجيًا؛ المدة تختلف. سنؤكد ما يمكن تفعيله أثناء التهيئة.', 'faq_q3': 'هل تقومون بأتمتة الحجز؟', 'faq_a3': 'نعم. في MVP نوجه المستخدم المؤهل إلى رابط حجز Google Calendar. يمكن إضافة قواعد وخيارات تحويل للفريق عند الحاجة.', 'faq_q4': 'كيف تبقون الردود “متحكم بها”؟', 'faq_a4': 'نعتمد على قاعدة معرفة منظمة، وصياغات معتمدة للمواضيع الحساسة، وقواعد ثقة، وتحويل لبشر عند عدم اليقين.', 'faq_q5': 'هل يمكن العمل مع العيادات دون مخاطر امتثال؟', 'faq_a5': 'نهيئ التدفق للرد على الاستفسارات العامة والحجز وتجنب النصيحة الطبية. نقلل جمع البيانات ونقترح الاتصال الهاتفي للمواضيع الحساسة. تبقى مسؤولية الامتثال عليك حسب بلدك.', 'faq_q6': 'كيف تعمل حدود الرسائل والزيادة؟', 'faq_a6': 'كل خطة تتضمن حدًا شهريًا للرسائل عبر القنوات المدعومة. عند تجاوزه، نحتسب $20 لكل 1,000 رسالة إضافية. رسوم المنصات (مثل WhatsApp) منفصلة.', 'faq_q7': 'ما البيانات التي تحتاجونها منا؟', 'faq_a7': 'الخدمات والأسعار والأسئلة الشائعة والسياسات وأمثلة للنبرة وساعات العمل والمسؤولون ورابط الحجز. نوصي بتجنب البيانات الحساسة إلا عند الضرورة.', 'faq_q8': 'كم يستغرق الإعداد؟', 'faq_a8': 'لنطاق MVP عادة بضعة أيام بعد توفر المحتوى والوصول للقنوات. موافقات Meta (إن لزم) قد تزيد الوقت.', 'faq_q9': 'هل تدعمون عدة لغات؟', 'faq_a9': 'نعم. يمكن تهيئة EN/RO/AR. يمكنك البدء بلغة واحدة وإضافة أخرى لاحقًا.', 'faq_q10': 'ماذا عن الأمان في هذه المرحلة؟', 'faq_a10': 'نطبق إجراءات معقولة لمرحلة MVP (تحكم وصول، حد أدنى للصلاحيات، استضافة آمنة). لا ندّعي شهادات محددة في هذه المرحلة.', 'faq_q11': 'هل يمكن الإلغاء؟', 'faq_a11': 'نعم—يمكن الإلغاء بنهاية دورة الفوترة. رسوم الإعداد غير قابلة للاسترداد بعد بدء العمل. يمكن تصدير إعدادات أساسية عند الطلب.', 'faq_q12': 'ما هي خطوات التهيئة؟', 'faq_a12': 'القنوات + قاعدة المعرفة + النبرة + تدفق الحجز + الاختبار + التهيئة. ثم تحسين أسبوعي بناءً على المحادثات الفعلية.', 'contact_h2': 'تواصل', 'contact_p': 'احجز مكالمة توضيحية لتفعيل التجربة المجانية لمدة 14 يومًا (حد 500 رسالة). وإذا تفضل البريد، تواصل مع المبيعات أو الدعم.', 'contact_direct': 'بيانات مباشرة', 'sales_label': 'المبيعات', 'support_label': 'الدعم', 'hello_label': 'عام', 'copy': 'نسخ', 'copied': 'تم النسخ', 'draft': 'إنشاء مسودة بريد', 'draft_hint': 'يفتح مسودة بريد جاهزة في بريدك.', 'include_h4': 'ماذا تكتب', 'include_li1': 'نشاطك وخدماتك', 'include_li2': 'القنوات التي تريد ربطها', 'include_li3': 'مسؤولو التوجيه (مبيعات/دعم...)', 'include_li4': 'رابط الحجز وأسئلة التأهيل', 'send_msg': 'أرسل رسالة', 'f_name': 'الاسم', 'f_email': 'البريد الإلكتروني', 'f_company': 'الشركة (اختياري)', 'f_industry': 'القطاع', 'industry_select': 'اختر…', 'industry_any': 'اختر…', 'industry_clinic': 'عيادة', 'industry_real_estate': 'عقارات', 'industry_gym': 'نادي رياضي', 'industry_restaurant': 'مطعم', 'industry_other': 'أخرى', 'f_message': 'الرسالة', 'f_placeholder': 'اكتب عن نشاطك والقنوات والمسؤولين وهل تحتاج الحجز.', 'f_submit': 'إرسال', 'f_disclaimer': 'بإرسال الرسالة، توافق على أن نرد عبر بريدك ونستخدم بياناتك للرد فقط.', 'footer_tag': 'حجز ودعم بالذكاء الاصطناعي.', 'footer_formation': 'Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء).', 'footer_support': 'الدعم', 'footer_sales': 'المبيعات', 'footer_social': 'روابط', 'back_top': 'أعلى', 'cookie_text': 'نستخدم ملفات تعريف ارتباط تحليلية اختيارية (Google Analytics) لتحسين الموقع. يمكنك القبول أو الرفض.', 'cookie_accept': 'قبول', 'cookie_decline': 'رفض', 'cookie_learn': 'المزيد', 'terms_h1': 'شروط الخدمة', 'privacy_h1': 'سياسة الخصوصية', 'terms_html': '<p><strong>تاريخ السريان:</strong> 15 يناير 2026</p>\n<p><strong>Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء)</strong> (“Assistio” أو “نحن”) يوفّر سير عمل للرسائل مدعومًا بالذكاء الاصطناعي لمساعدة الشركات على التعامل مع الاستفسارات و(عند تهيئته) توجيه المستخدمين إلى رابط حجز. تحكم هذه الشروط استخدام موقعنا وخدماتنا.</p>\n\n<h2>1) نطاق الخدمة</h2>\n<ul>\n  <li><strong>الإعداد والتهيئة:</strong> نُهيّئ سير عمل مدعومًا بالذكاء الاصطناعي، بما في ذلك قاعدة معرفة، وأسئلة تأهيل، وقواعد توجيه، وتدفّق حجز (رابط Google Calendar في نسخة MVP).</li>\n  <li><strong>القنوات:</strong> دردشة الموقع متاحة افتراضيًا. قد تتطلب قنوات مثل WhatsApp وInstagram وFacebook والبريد الإلكتروني موافقات ومزوّدين خارجيين. قد تتغير الإتاحة وفق سياسات المنصات.</li>\n  <li><strong>التجربة:</strong> تجربة 14 يومًا تتضمن نفس الميزات الأساسية، مع حدود استخدام.</li>\n</ul>\n\n<h2>2) مسؤولياتك</h2>\n<ul>\n  <li>تؤكد امتلاكك الحق في ربط القنوات/الحسابات التي تقدمها.</li>\n  <li>عدم استخدام الخدمة لأغراض غير قانونية أو ضارة أو مضللة بما في ذلك الرسائل المزعجة.</li>\n  <li>تقديم معلومات دقيقة عن نشاطك (الخدمات، الأسعار، السياسات) ومراجعة المحتوى الذي قد يؤثر على العملاء.</li>\n</ul>\n\n<h2>3) العيادات والقطاعات المنظّمة</h2>\n<p>إذا كنت عيادة أو نشاطًا منظّمًا، يتم تهيئة النظام افتراضيًا للتعامل مع <strong>الاستفسارات والحجوزات</strong> دون تقديم نصائح طبية. لا تُدخل بيانات صحية حساسة عبر المساعد. يمكننا ضبط الأسئلة لتقليل البيانات وحثّ العملاء على الاتصال الهاتفي في المواضيع الحساسة.</p>\n\n<h2>4) الرسوم والحدود ورسوم الأطراف الثالثة</h2>\n<ul>\n  <li><strong>رسوم الإعداد:</strong> تُطبق رسوم إعداد لمرة واحدة (كما هو موضح في صفحة الأسعار).</li>\n  <li><strong>الاشتراك:</strong> تُطبق رسوم شهرية حسب الخطة.</li>\n  <li><strong>حدود الرسائل والزيادة:</strong> كل خطة تتضمن حدًا للرسائل؛ تُطبق رسوم زيادة عند تجاوز الحد.</li>\n  <li><strong>رسوم الأطراف الثالثة:</strong> رسوم المنصات (مثل رسوم محادثات WhatsApp) والأدوات الخارجية تُفرض من مزوديها ما لم يُنص على خلاف ذلك كتابيًا.</li>\n</ul>\n\n<h2>5) الدقة وعدم الضمان</h2>\n<p>إجابات الذكاء الاصطناعي احتمالية. نستخدم ضوابط وتصعيدًا لبشر عند الحاجة، لكن لا نضمن الدقة أو الاستمرارية أو النتائج أو الحجوزات. تبقى مسؤولًا عن قراراتك ونتائج عملك.</p>\n\n<h2>6) الملكية الفكرية</h2>\n<p>نحتفظ بحقوقنا في القوالب وسير العمل والكود والوثائق. تحتفظ بحقوق محتواك. تمنحنا ترخيصًا محدودًا لاستخدام محتواك لتقديم الخدمة وتحسينها.</p>\n\n<h2>7) السرية</h2>\n<p>نتعامل مع معلومات عملك غير العامة بسرية ونستخدمها فقط لتقديم الخدمة، مع الاعتماد اللازم على مزودي الخدمة.</p>\n\n<h2>8) الأمان</h2>\n<p>نطبق إجراءات أمان معقولة مناسبة لمرحلة MVP (مثل التحكم بالوصول والحد الأدنى للصلاحيات واستضافة آمنة). لا يمكن ضمان الأمان بنسبة 100%.</p>\n\n<h2>9) المدة والإلغاء والتعليق</h2>\n<ul>\n  <li>يمكنك الإلغاء بنهاية دورة الفوترة. رسوم الإعداد غير قابلة للاسترداد بعد بدء العمل.</li>\n  <li>قد نعلّق أو ننهي الوصول عند سوء الاستخدام أو مخاطر أمنية أو مخالفة الشروط.</li>\n</ul>\n\n<h2>10) تحديد المسؤولية</h2>\n<p>إلى أقصى حد يسمح به القانون، لا نتحمل المسؤولية عن الأضرار غير المباشرة أو الخاصة أو التبعية. لا تتجاوز مسؤوليتنا الإجمالية الرسوم التي دفعتها لنا خلال الثلاثة (3) أشهر السابقة للحدث محل المطالبة.</p>\n\n<h2>11) القانون الحاكم</h2>\n<p>تخضع هذه الشروط لقوانين رومانيا، وتُنظر النزاعات أمام المحاكم المختصة في بوخارست ما لم يفرض القانون خلاف ذلك.</p>\n\n<h2>12) التواصل</h2>\n<p>الاستفسارات: <a href="mailto:hello@assistio.co">hello@assistio.co</a> • الدعم: <a href="mailto:support@assistio.co">support@assistio.co</a> • المبيعات: <a href="mailto:sales@assistio.co">sales@assistio.co</a></p>', 'privacy_html': '<p><strong>تاريخ السريان:</strong> 15 يناير 2026</p>\n<p><strong>Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء)</strong> (“Assistio” أو “نحن”) يحترم خصوصيتك. تشرح هذه السياسة ما نجمعه وكيف نستخدمه وخياراتك.</p>\n\n<h2>1) ما الذي نجمعه</h2>\n<ul>\n  <li><strong>بيانات التواصل:</strong> الاسم والبريد الإلكتروني والشركة وأي معلومات ترسلها عبر النماذج.</li>\n  <li><strong>محتوى الرسائل:</strong> الاستفسارات الواردة عبر القنوات المتصلة (دردشة الموقع؛ وقنوات أخرى عند تفعيلها).</li>\n  <li><strong>سجلات تشغيلية:</strong> بيانات أساسية مثل الوقت ونتيجة التوجيه وإعدادات التهيئة.</li>\n  <li><strong>تحليلات الموقع (اختياري):</strong> عند تفعيلها، قد يجمع Google Analytics بيانات استخدام عبر ملفات تعريف الارتباط بعد موافقتك.</li>\n</ul>\n\n<h2>2) كيف نستخدم البيانات</h2>\n<ul>\n  <li>تقديم وتشغيل الخدمة (الرد، التوجيه، تدفّق الحجز).</li>\n  <li>الدعم الفني وحل المشكلات.</li>\n  <li>تحسين النصوص وقاعدة المعرفة والأداء (بشكل مُجمّع عندما يكون ذلك ممكنًا).</li>\n  <li>الأمان ومنع إساءة الاستخدام.</li>\n</ul>\n\n<h2>3) الأسس القانونية (GDPR)</h2>\n<p>حيثما ينطبق، نعتمد على: (أ) الموافقة، (ب) تنفيذ عقد/خطوات ما قبل العقد، و/أو (ج) المصلحة المشروعة (الأمان والتحسين) مع مراعاة حقوقك.</p>\n\n<h2>4) المشاركة والمعالجة عبر أطراف ثالثة</h2>\n<p>نستخدم مزودي خدمة (“معالجات”) لتشغيل MVP مثل الاستضافة ومعالجة النماذج (Formspree) ومنصات الرسائل. عند استخدام مزودي ذكاء اصطناعي لتوليد الردود، قد تتم معالجة محتوى الرسائل لتقديم الخدمة فقط. قد تعالج منصات مثل WhatsApp/Meta البيانات وفق شروطها الخاصة.</p>\n\n<h2>5) العيادات والبيانات الحساسة</h2>\n<p>لا نطلب بيانات صحية حساسة افتراضيًا. إذا كنت عيادة، تجنب إدخال معلومات طبية للمرضى عبر المساعد. يمكننا ضبط الأسئلة لتقليل البيانات الحساسة.</p>\n\n<h2>6) الاحتفاظ</h2>\n<p>نحتفظ بالبيانات للمدة اللازمة فقط. مدة الاحتفاظ الافتراضية للرسائل والسجلات تصل إلى 90 يومًا، ما لم تتطلبها الحاجة للدعم أو التزامات قانونية.</p>\n\n<h2>7) الأمان</h2>\n<p>نطبق إجراءات معقولة مناسبة لمرحلة MVP (مثل التحكم بالوصول والحد الأدنى للصلاحيات واستضافة آمنة). لا يوجد نظام آمن بالكامل.</p>\n\n<h2>8) حقوقك</h2>\n<p>بحسب موقعك، قد تملك حقوق الوصول والتصحيح والحذف وتصدير البيانات والاعتراض أو تقييد المعالجة. للتواصل: <a href="mailto:hello@assistio.co">hello@assistio.co</a>.</p>\n\n<h2>9) ملفات تعريف الارتباط والتحليلات</h2>\n<p>عند تفعيل Google Analytics، سنطلب موافقتك قبل وضع ملفات تعريف ارتباط التحليلات. يمكنك تغيير اختيارك عبر مسح بيانات الموقع وإعادة التحميل.</p>\n\n<h2>10) التواصل</h2>\n<p>الاستفسارات: <a href="mailto:hello@assistio.co">hello@assistio.co</a></p>', 'form_success': 'شكرًا — تم استلام رسالتك وسنرد قريبًا.', 'form_error': 'حدث خطأ. حاول مرة أخرى أو راسلنا على hello@assistio.co.'}};

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function setTheme(theme) {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    try { localStorage.setItem('assistio_theme', theme); } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#070b14');
  }

  function initTheme() {
    let theme = null;
    try { theme = localStorage.getItem('assistio_theme'); } catch (e) {}
    if (!theme) {
      theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }
    setTheme(theme);
    const btn = $('[data-theme-toggle]');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('data-lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    $$('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    $$('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update language UI
    const current = $('[data-lang-fab-current]');
    if (current) current.textContent = lang.toUpperCase();
    const sel = $('[data-lang-select]');
    if (sel) sel.value = lang;

    // Store
    try { localStorage.setItem('assistio_lang', lang); } catch (e) {}
  }

  function initLanguage() {
    let lang = 'en';
    try {
      lang = localStorage.getItem('assistio_lang') || 'en';
    } catch (e) {
      lang = 'en';
    }
    applyLang(lang);

    // Bind header language select (preferred)
    const sel = document.querySelector('[data-lang-select]');
    if (sel) {
      sel.value = lang;
      sel.addEventListener('change', () => {
        const next = sel.value || 'en';
        applyLang(next);
      });
    }

    // Backward compatibility: old FAB language buttons (if present)
    const fab = $('[data-lang-fab]');
    const toggle = $('[data-lang-fab-toggle]');
    const menu = $('[data-lang-fab-menu]');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('is-open', !expanded);
      });

      document.addEventListener('click', (e) => {
        if (!fab) return;
        if (!fab.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('is-open');
        }
      });
    }

    
    // Bind custom language dropdown (styled)
    const dd = document.querySelector('[data-lang-dd]');
    if (dd && sel) {
      const btn = dd.querySelector('.lang-dd-btn');
      const menu = dd.querySelector('.lang-dd-menu');
      const current = dd.querySelector('[data-lang-current]');
      const items = Array.from(dd.querySelectorAll('.lang-dd-item'));

      const sync = () => {
        const val = (sel.value || 'en').toLowerCase();
        if (current) current.textContent = val.toUpperCase();
        items.forEach(it => it.classList.toggle('is-active', (it.dataset.lang || '').toLowerCase() === val));
      };
      sync();

      btn && btn.addEventListener('click', (e) => {
        e.preventDefault();
        const open = dd.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
      });

      items.forEach(it => {
        it.addEventListener('click', (e) => {
          e.preventDefault();
          const next = (it.dataset.lang || 'en').toLowerCase();
          sel.value = next;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          dd.classList.remove('is-open');
          btn && btn.setAttribute('aria-expanded', 'false');
          sync();
        });
      });

      document.addEventListener('click', (e) => {
        if (!dd.contains(e.target)) {
          dd.classList.remove('is-open');
          btn && btn.setAttribute('aria-expanded', 'false');
        }
      });

      // keep in sync if language changes elsewhere
      sel.addEventListener('change', sync);
    }
$$('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-lang') || 'en';
        applyLang(next);
        if (toggle && menu) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('is-open');
        }
      });
    });
  }

  function initBookingLinks() {
    $$('[data-booking]').forEach(a => {
      a.setAttribute('href', BOOKING_URL);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    });
  }

  function initNav() {
    const toggle = $('[data-nav-toggle]');
    const menu = $('[data-nav-menu]');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open', !expanded);
    });

    $$('[data-navlink]').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      });
    });

    // Header show/hide on scroll (simple)
    const header = $('[data-header]');
    if (!header) return;
    let lastY = window.scrollY || 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY;
      if (y < 40) {
        header.classList.add('is-visible');
      } else {
        header.classList.toggle('is-visible', !goingDown);
      }
      lastY = y;
    }, { passive:true });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        return true;
      } catch (e2) {
        return false;
      } finally {
        document.body.removeChild(ta);
      }
    }
  }

  function initCopyButtons() {
    $$('[data-copy]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const value = btn.getAttribute('data-copy') || '';
        const ok = await copyText(value);
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const dict = I18N[lang] || I18N.en;
        const prev = btn.textContent;
        btn.textContent = ok ? (dict.copied || 'Copied') : '…';
        setTimeout(() => btn.textContent = prev, 900);
      });
    });
  }

  function initMailtoDraft() {
    const link = $('[data-mailto="call"]');
    if (!link) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = document.documentElement.getAttribute('data-lang') || 'en';
      const dict = I18N[lang] || I18N.en;

      const subject = encodeURIComponent('Assistio — Trial / Demo request');
      const body = encodeURIComponent(
`Hi Assistio,\n\nI want to start the 14-day trial / book a demo.\n\nBusiness:\nWebsite:\nIndustry:\nChannels needed (web / WhatsApp / Instagram / Facebook / email):\nBooking link (Google Calendar):\nRouting owners (sales/support):\nLanguages (EN/RO/AR):\n\nNotes:\n`
      );
      const to = 'sales@assistio.co';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }

  function initReveal() {
    const els = $$('[data-reveal]');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('reveal-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
  }

  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    const status = $('[data-form-status]');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const honeypot = $('#website');
      const gotcha = $('#_gotcha');
      if ((honeypot && honeypot.value) || (gotcha && gotcha.value)) return;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.8';
      }
      if (status) status.textContent = '';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const dict = I18N[lang] || I18N.en;

        if (res.ok) {
          form.reset();
          if (status) status.textContent = dict.form_success || 'Thanks — message sent.';
        } else {
          if (status) status.textContent = dict.form_error || 'Error.';
        }
      } catch (err) {
        const lang = document.documentElement.getAttribute('data-lang') || 'en';
        const dict = I18N[lang] || I18N.en;
        if (status) status.textContent = dict.form_error || 'Error.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      }
    });
  }

  function cookieBannerText() {
    const lang = document.documentElement.getAttribute('data-lang') || 'en';
    const dict = I18N[lang] || I18N.en;
    return {
      text: dict.cookie_text || 'We use optional analytics cookies.',
      accept: dict.cookie_accept || 'Accept',
      decline: dict.cookie_decline || 'Decline',
      learn: dict.cookie_learn || 'Learn more'
    };
  }

  function loadGA() {
    if (!GA_MEASUREMENT_ID) return;
    if (window.__assistioGAloaded) return;
    window.__assistioGAloaded = true;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s1);

    const s2 = document.createElement('script');
    s2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
    `;
    document.head.appendChild(s2);
  }

  function initCookieConsent() {
    if (!GA_MEASUREMENT_ID) return;

    let consent = null;
    try { consent = localStorage.getItem('assistio_cookie_consent'); } catch (e) {}

    if (consent === 'accepted') {
      loadGA();
      return;
    }
    if (consent === 'declined') return;

    const t = cookieBannerText();

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-text">${t.text} <a href="./privacy.html">${t.learn}</a></div>
      <div class="cookie-actions">
        <button type="button" class="btn btn-small btn-ghost" data-cookie-decline>${t.decline}</button>
        <button type="button" class="btn btn-small btn-primary" data-cookie-accept>${t.accept}</button>
      </div>
    `;
    document.body.appendChild(banner);

    const acceptBtn = banner.querySelector('[data-cookie-accept]');
    const declineBtn = banner.querySelector('[data-cookie-decline]');

    acceptBtn.addEventListener('click', () => {
      try { localStorage.setItem('assistio_cookie_consent', 'accepted'); } catch (e) {}
      banner.remove();
      loadGA();
    });
    declineBtn.addEventListener('click', () => {
      try { localStorage.setItem('assistio_cookie_consent', 'declined'); } catch (e) {}
      banner.remove();
    });

    // Update banner language if user changes language
    const langObserver = new MutationObserver(() => {
      const tt = cookieBannerText();
      banner.querySelector('.cookie-text').innerHTML = `${tt.text} <a href="./privacy.html">${tt.learn}</a>`;
      acceptBtn.textContent = tt.accept;
      declineBtn.textContent = tt.decline;
    });
    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
  }

  function initFormDropdowns() {
    const dds = Array.from(document.querySelectorAll('[data-form-dd]'));
    dds.forEach(dd => {
      const field = dd.getAttribute('data-form-dd');
      const select = document.querySelector(`select[name="${field}"]`);
      if (!select) return;

      const btn = dd.querySelector('.form-dd-btn');
      const menu = dd.querySelector('.form-dd-menu');
      const valSpan = dd.querySelector('[data-dd-value]');
      const items = Array.from(dd.querySelectorAll('.form-dd-item'));

      const setValue = (value, label) => {
        select.value = value;
        if (valSpan) valSpan.textContent = label;
        items.forEach(it => it.classList.toggle('is-active', (it.dataset.value||'') === value));
      };

      // initial
      const initialVal = select.value || '';
      const initialItem = items.find(it => (it.dataset.value||'') === initialVal) || items[0];
      setValue(initialVal, initialItem ? initialItem.textContent.trim() : '');

      btn && btn.addEventListener('click', (e) => {
        e.preventDefault();
        const open = dd.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
      });

      items.forEach(it => {
        it.addEventListener('click', (e) => {
          e.preventDefault();
          const v = it.dataset.value || '';
          const label = it.textContent.trim();
          setValue(v, label);
          dd.classList.remove('is-open');
          btn && btn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!dd.contains(e.target)) {
          dd.classList.remove('is-open');
          btn && btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function boot() {
    initTheme();
    initLanguage();
    initBookingLinks();
    initNav();
    initCopyButtons();
    initMailtoDraft();
    initReveal();
    initContactForm();
    initFormDropdowns();
    initCookieConsent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
