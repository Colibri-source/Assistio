/* Assistio website scripts (v14 — Mobile Nav + RTL fixes) 
 * 
 * CHANGELOG v14:
 * FIXED — Mobile menu reliability:
 *   - Unified nav class to .is-open across all pages
 *   - Added body scroll lock when mobile menu is open
 *   - Improved click-outside detection with null checks
 *   - Added touchend support for mobile nav links
 *   - Fixed hamburger icon by adding middle bar <span>
 *   - Added max-height and touch-action for mobile viewport
 * 
 * FIXED — Arabic RTL layout:
 *   - Enhanced dir="rtl" handling in applyLang()
 *   - Added logical CSS properties (margin-inline, padding-inline, text-align: start/end)
 *   - Flipped nav dropdown positioning in RTL
 *   - Added mixed LTR isolation for email/URLs/prices with unicode-bidi:isolate
 *   - Fixed header-right flex-direction in RTL
 *   - Added RTL form field text-alignment fixes
 *   - Ensured Arabic glyph support with font-family fallback
 * 
 * All pages (index, privacy, terms) now use unified navigation markup.
 * Tested: 320px–1024px breakpoints, EN/RO/AR languages, dark/light themes.
 */
(() => {
  'use strict';

  const BOOKING_URL = 'https://calendar.app.google/buBm1A7rWTKY1xAi9';

  // Optional GA4: set to your Measurement ID (e.g., "G-XXXXXXXXXX") once ready.
  // Leave empty to disable analytics and the cookie banner.
  const GA_MEASUREMENT_ID = "";

  const I18N = {'en': {'lang_fab_label': 'Language', 'theme': 'Theme', 'brand_tag': 'AI booking & support', 'nav_handle': 'Menu', 'nav_home': 'Home', 'nav_features': 'Features', 'nav_how': 'How it works', 'nav_pricing': 'Pricing', 'nav_faq': 'FAQ', 'nav_contact': 'Contact', 'nav_privacy': 'Privacy', 'nav_terms': 'Terms', 'pill': '14‑day free trial • AI booking & support • Multi‑channel', 'h1': 'Turn messages into booked appointments — automatically.', 'lead': 'Assistio sets up a controlled AI agent trained on your services, pricing, and policies. It replies fast, qualifies leads, and routes or books via your calendar—without sacrificing brand tone.', 'cta_trial': 'Start 14‑day trial', 'cta_book': 'Book a demo call', 'cta_pricing': 'View pricing', 'kpi1_dt': 'AI edge', 'kpi1_dd': 'Consistent replies with guardrails + human handoff', 'kpi2_dt': 'Booking', 'kpi2_dd': 'Qualification → calendar booking (Google Calendar for now)', 'kpi3_dt': 'Channels', 'kpi3_dd': 'Web chat + the main messaging channels (subject to approvals)', 'hero_note': 'Note: WhatsApp/Meta channels may require approvals and may have platform fees. We guide you through setup.', 'panel_title': 'What you get', 'panel_li1': '<strong>AI agent</strong> trained on your FAQs, services, and policies', 'panel_li2': '<strong>Lead qualification</strong> (right questions, fewer back‑and‑forths)', 'panel_li3': '<strong>Booking flow</strong> to your Google Calendar link (MVP)', 'panel_li4': '<strong>Routing rules</strong> (sales/support/urgent) + human handoff', 'panel_li5': '<strong>Multi‑language</strong> handling (EN/RO/AR)', 'panel_li6': '<strong>Operational visibility</strong> (basic logs + iteration)', 'panel_price_main': "From $150 <span class='muted'>USD/mo</span>", 'price_setup_small': '+ $500 USD one-time setup', 'cta_compare': 'Compare plans', 'features_h2': 'Features', 'features_p': 'Designed for booking-heavy operations and high message volume—without chaotic support.', 'feat1_h3': 'AI agent with guardrails', 'feat1_p': 'Controlled, consistent replies—built around your policies and tone.', 'feat1_li1': 'Knowledge base (FAQs, services, pricing)', 'feat1_li2': 'Confidence rules + escalation to a human', 'feat1_li3': 'No risky “hallucination” positioning', 'feat2_h3': 'Booking-first flow', 'feat2_p': 'Qualification → scheduling → confirmation, with minimal friction.', 'feat2_li1': 'Collect the right details for the booking', 'feat2_li2': 'Route to Google Calendar link (MVP)', 'feat2_li3': 'Fallback: handoff to your team', 'feat3_h3': 'Multi-channel intake', 'feat3_p': 'Handle inbound messages where customers already are.', 'feat3_li1': 'Website chat widget', 'feat3_li2': 'Instagram/Facebook messaging (Meta approval)', 'feat3_li3': 'WhatsApp + Email (availability varies)', 'feat4_h3': 'Routing & handoff', 'feat4_p': 'The right message reaches the right owner, fast.', 'feat4_li1': 'Routing by topic, urgency, language, or hours', 'feat4_li2': 'Owners per category (sales/support/etc.)', 'feat4_li3': 'Escalation when a human should take over', 'feat5_h3': 'Operational intelligence', 'feat5_p': 'Reduce noise and surface what matters for the business.', 'feat5_li1': 'Common intents + top questions', 'feat5_li2': 'Lead quality signals (basic)', 'feat5_li3': 'Iteration loop: improve scripts weekly', 'feat6_h3': 'Safer by design', 'feat6_p': 'Built to avoid compliance trouble and overpromising.', 'feat6_li1': 'Conservative claims and disclaimers', 'feat6_li2': 'Clinic-friendly: inquiry handling, not medical advice', 'feat6_li3': 'Data minimization prompts', 'book_h3': 'Appointment booking', 'book_p': 'Collect the right details, confirm intent, and route to a booking link or your team—without breaking your flow.', 'how_h2': 'How it works', 'how_p': 'Fast onboarding, clear scope, and a workflow your team can actually run.', 'step1_h3': 'Share your requirements', 'step1_p': 'Services, FAQs, pricing, tone, business hours, and who owns sales/support.', 'step2_h3': 'We build your AI knowledge base', 'step2_p': 'We structure answers, qualification questions, and escalation rules.', 'step3_h3': 'Connect channels + booking', 'step3_p': 'We install the website widget, connect available channels, and plug in your calendar link.', 'step4_h3': 'Go live + optimize', 'step4_p': 'We launch, monitor early conversations, and refine weekly to improve booking rate and accuracy.', 'pricing_h2': 'Pricing', 'pricing_p': 'Free 14-day trial included (activate on the demo call). Same core features across plans; limits and support differ.', 'setup_fee.*Setup (one-time): €199 – €349', 'trial_cap': 'Free trial: 14 days, up to 500 messages total', 'overage.*Message overage available on request', 'trial_badge': 'Free 14-day trial', 'trial_banner_title': 'Try Assistio free for 14 days', 'trial_banner_text': 'Full access to the core workflow. Activate the trial on the onboarding/demo call (up to 500 messages total).', 'trial_banner_footer': 'Activated during the demo call.', 'trial_chip': '14-day free trial', 'plan_basic_h3.*Launch', 'plan_basic_sub': 'Assistio Pack — بداية', 'plan_pro_h3.*Growth', 'plan_pro_sub': 'Assistio Pack — حجم أعلى', 'plan_ent_h3.*Omni', 'plan_ent_sub': 'حجم ومتطلبات مخصصة', 'per_mo': 'دولار / شهر', 'msg_basic': 'يشمل حوالي 2,000 رسالة / شهر', 'msg_pro': 'يشمل حوالي 6,000 رسالة / شهر', 'msg_ent': 'حدود وSLA وتكاملات مخصصة', 'badge_popular': 'الأكثر اختيارًا', 'p_core1': 'مساعد AI + قاعدة معرفة', 'p_core2': 'حجز + توجيه + تحويل', 'p_core3': 'دعم EN/RO/AR', 'p_core4': 'تقارير أساسية + تحسين', 'p_pro1': 'تحسينات ذات أولوية', 'p_pro2': 'تقارير موسعة', 'p_ent1': 'تدفقات وموافقات مخصصة', 'p_ent2': 'تهيئة مخصصة وخيارات SLA', 'p_ent3': 'مراجعة أمنية ومعالجة بيانات', 'p_ent4': 'تحليلات مخصصة', 'cta_contact': 'تواصل', 'plan_note': 'تُحصَّل رسوم الإعداد بعد تأكيد التهيئة عبر رابط دفع Stripe.', 'plan_note2': 'تُفوتر الزيادات شهريًا عند تجاوز الحد المضمّن.', 'whatsapp_note': 'قد تنطبق رسوم وموافقات WhatsApp/Meta. نؤكد ذلك أثناء التهيئة.', 'contact_us_price': 'تواصل', 'contact_us_price2': 'معنا', 'faq_h2': 'الأسئلة الشائعة', 'faq_p': 'إجابات تقنية واضحة ومتوافقة مع ما نقدمه في MVP.', 'faq_q1': 'ماذا أحصل خلال تجربة 14 يومًا؟', 'faq_a1': 'تحصل على الوصول الكامل لتدفق العمل الأساسي (قاعدة معرفة، توجيه، وحجز) مع حد تجربة يصل إلى 500 رسالة إجمالًا. نقوم بإعداده معك ونحسن أثناء التجربة.', 'faq_q2': 'ما القنوات المتاحة الآن؟', 'faq_a2': 'دردشة الموقع متاحة فورًا. قنوات مثل WhatsApp/Instagram/Facebook قد تتطلب موافقات Meta و/أو مزودًا خارجيًا؛ المدة تختلف. سنؤكد ما يمكن تفعيله أثناء التهيئة.', 'faq_q3': 'هل تقومون بأتمتة الحجز؟', 'faq_a3': 'نعم. في MVP نوجه المستخدم المؤهل إلى رابط حجز Google Calendar. يمكن إضافة قواعد وخيارات تحويل للفريق عند الحاجة.', 'faq_q4': 'كيف تبقون الردود “متحكم بها”؟', 'faq_a4': 'نعتمد على قاعدة معرفة منظمة، وصياغات معتمدة للمواضيع الحساسة، وقواعد ثقة، وتحويل لبشر عند عدم اليقين.', 'faq_q5': 'هل يمكن العمل مع العيادات دون مخاطر امتثال؟', 'faq_a5': 'نهيئ التدفق للرد على الاستفسارات العامة والحجز وتجنب النصيحة الطبية. نقلل جمع البيانات ونقترح الاتصال الهاتفي للمواضيع الحساسة. تبقى مسؤولية الامتثال عليك حسب بلدك.', 'faq_q6': 'كيف تعمل حدود الرسائل والزيادة؟', 'faq_a6': 'كل خطة تتضمن حدًا شهريًا للرسائل عبر القنوات المدعومة. عند تجاوزه، نحتسب $20 لكل 1,000 رسالة إضافية. رسوم المنصات (مثل WhatsApp) منفصلة.', 'faq_q7': 'ما البيانات التي تحتاجونها منا؟', 'faq_a7': 'الخدمات والأسعار والأسئلة الشائعة والسياسات وأمثلة للنبرة وساعات العمل والمسؤولون ورابط الحجز. نوصي بتجنب البيانات الحساسة إلا عند الضرورة.', 'faq_q8': 'كم يستغرق الإعداد؟', 'faq_a8': 'لنطاق MVP عادة بضعة أيام بعد توفر المحتوى والوصول للقنوات. موافقات Meta (إن لزم) قد تزيد الوقت.', 'faq_q9': 'هل تدعمون عدة لغات؟', 'faq_a9': 'نعم. يمكن تهيئة EN/RO/AR. يمكنك البدء بلغة واحدة وإضافة أخرى لاحقًا.', 'faq_q10': 'ماذا عن الأمان في هذه المرحلة؟', 'faq_a10': 'نطبق إجراءات معقولة لمرحلة MVP (تحكم وصول، حد أدنى للصلاحيات، استضافة آمنة). لا ندّعي شهادات محددة في هذه المرحلة.', 'faq_q11': 'هل يمكن الإلغاء؟', 'faq_a11': 'نعم—يمكن الإلغاء بنهاية دورة الفوترة. رسوم الإعداد غير قابلة للاسترداد بعد بدء العمل. يمكن تصدير إعدادات أساسية عند الطلب.', 'faq_q12': 'ما هي خطوات التهيئة؟', 'faq_a12': 'القنوات + قاعدة المعرفة + النبرة + تدفق الحجز + الاختبار + التهيئة. ثم تحسين أسبوعي بناءً على المحادثات الفعلية.', 'contact_h2': 'تواصل', 'contact_p': 'احجز مكالمة توضيحية لتفعيل التجربة المجانية لمدة 14 يومًا (حد 500 رسالة). وإذا تفضل البريد، تواصل مع المبيعات أو الدعم.', 'contact_direct': 'بيانات مباشرة', 'sales_label': 'المبيعات', 'support_label': 'الدعم', 'hello_label': 'عام', 'copy': 'نسخ', 'copied': 'تم النسخ', 'draft': 'إنشاء مسودة بريد', 'draft_hint': 'يفتح مسودة بريد جاهزة في بريدك.', 'include_h4': 'ماذا تكتب', 'include_li1': 'نشاطك وخدماتك', 'include_li2': 'القنوات التي تريد ربطها', 'include_li3': 'مسؤولو التوجيه (مبيعات/دعم...)', 'include_li4': 'رابط الحجز وأسئلة التأهيل', 'send_msg': 'أرسل رسالة', 'f_name': 'الاسم', 'f_email': 'البريد الإلكتروني', 'f_company': 'الشركة (اختياري)', 'f_industry': 'القطاع', 'industry_select': 'اختر…', 'industry_any': 'اختر…', 'industry_clinic': 'عيادة', 'industry_real_estate': 'عقارات', 'industry_gym': 'نادي رياضي', 'industry_restaurant': 'مطعم', 'industry_other': 'أخرى', 'f_message': 'الرسالة', 'f_placeholder': 'اكتب عن نشاطك والقنوات والمسؤولين وهل تحتاج الحجز.', 'f_submit': 'إرسال', 'f_disclaimer': 'بإرسال الرسالة، توافق على أن نرد عبر بريدك ونستخدم بياناتك للرد فقط.', 'footer_tag': 'حجز ودعم بالذكاء الاصطناعي.', 'footer_formation': 'Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء).', 'footer_support': 'الدعم', 'footer_sales': 'المبيعات', 'footer_social': 'روابط', 'back_top': 'أعلى', 'cookie_text': 'نستخدم ملفات تعريف ارتباط تحليلية اختيارية (Google Analytics) لتحسين الموقع. يمكنك القبول أو الرفض.', 'cookie_accept': 'قبول', 'cookie_decline': 'رفض', 'cookie_learn': 'المزيد', 'terms_h1': 'شروط الخدمة', 'privacy_h1': 'سياسة الخصوصية', 'terms_html': '<p><strong>تاريخ السريان:</strong> 15 يناير 2026</p>\n<p><strong>Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء)</strong> (“Assistio” أو “نحن”) يوفّر سير عمل للرسائل مدعومًا بالذكاء الاصطناعي لمساعدة الشركات على التعامل مع الاستفسارات و(عند تهيئته) توجيه المستخدمين إلى رابط حجز. تحكم هذه الشروط استخدام موقعنا وخدماتنا.</p>\n\n<h2>1) نطاق الخدمة</h2>\n<ul>\n  <li><strong>الإعداد والتهيئة:</strong> نُهيّئ سير عمل مدعومًا بالذكاء الاصطناعي، بما في ذلك قاعدة معرفة، وأسئلة تأهيل، وقواعد توجيه، وتدفّق حجز (رابط Google Calendar في نسخة MVP).</li>\n  <li><strong>القنوات:</strong> دردشة الموقع متاحة افتراضيًا. قد تتطلب قنوات مثل WhatsApp وInstagram وFacebook والبريد الإلكتروني موافقات ومزوّدين خارجيين. قد تتغير الإتاحة وفق سياسات المنصات.</li>\n  <li><strong>التجربة:</strong> تجربة 14 يومًا تتضمن نفس الميزات الأساسية، مع حدود استخدام.</li>\n</ul>\n\n<h2>2) مسؤولياتك</h2>\n<ul>\n  <li>تؤكد امتلاكك الحق في ربط القنوات/الحسابات التي تقدمها.</li>\n  <li>عدم استخدام الخدمة لأغراض غير قانونية أو ضارة أو مضللة بما في ذلك الرسائل المزعجة.</li>\n  <li>تقديم معلومات دقيقة عن نشاطك (الخدمات، الأسعار، السياسات) ومراجعة المحتوى الذي قد يؤثر على العملاء.</li>\n</ul>\n\n<h2>3) العيادات والقطاعات المنظّمة</h2>\n<p>إذا كنت عيادة أو نشاطًا منظّمًا، يتم تهيئة النظام افتراضيًا للتعامل مع <strong>الاستفسارات والحجوزات</strong> دون تقديم نصائح طبية. لا تُدخل بيانات صحية حساسة عبر المساعد. يمكننا ضبط الأسئلة لتقليل البيانات وحثّ العملاء على الاتصال الهاتفي في المواضيع الحساسة.</p>\n\n<h2>4) الرسوم والحدود ورسوم الأطراف الثالثة</h2>\n<ul>\n  <li><strong>رسوم الإعداد:</strong> تُطبق رسوم إعداد لمرة واحدة (كما هو موضح في صفحة الأسعار).</li>\n  <li><strong>الاشتراك:</strong> تُطبق رسوم شهرية حسب الخطة.</li>\n  <li><strong>حدود الرسائل والزيادة:</strong> كل خطة تتضمن حدًا للرسائل؛ تُطبق رسوم زيادة عند تجاوز الحد.</li>\n  <li><strong>رسوم الأطراف الثالثة:</strong> رسوم المنصات (مثل رسوم محادثات WhatsApp) والأدوات الخارجية تُفرض من مزوديها ما لم يُنص على خلاف ذلك كتابيًا.</li>\n</ul>\n\n<h2>5) الدقة وعدم الضمان</h2>\n<p>إجابات الذكاء الاصطناعي احتمالية. نستخدم ضوابط وتصعيدًا لبشر عند الحاجة، لكن لا نضمن الدقة أو الاستمرارية أو النتائج أو الحجوزات. تبقى مسؤولًا عن قراراتك ونتائج عملك.</p>\n\n<h2>6) الملكية الفكرية</h2>\n<p>نحتفظ بحقوقنا في القوالب وسير العمل والكود والوثائق. تحتفظ بحقوق محتواك. تمنحنا ترخيصًا محدودًا لاستخدام محتواك لتقديم الخدمة وتحسينها.</p>\n\n<h2>7) السرية</h2>\n<p>نتعامل مع معلومات عملك غير العامة بسرية ونستخدمها فقط لتقديم الخدمة، مع الاعتماد اللازم على مزودي الخدمة.</p>\n\n<h2>8) الأمان</h2>\n<p>نطبق إجراءات أمان معقولة مناسبة لمرحلة MVP (مثل التحكم بالوصول والحد الأدنى للصلاحيات واستضافة آمنة). لا يمكن ضمان الأمان بنسبة 100%.</p>\n\n<h2>9) المدة والإلغاء والتعليق</h2>\n<ul>\n  <li>يمكنك الإلغاء بنهاية دورة الفوترة. رسوم الإعداد غير قابلة للاسترداد بعد بدء العمل.</li>\n  <li>قد نعلّق أو ننهي الوصول عند سوء الاستخدام أو مخاطر أمنية أو مخالفة الشروط.</li>\n</ul>\n\n<h2>10) تحديد المسؤولية</h2>\n<p>إلى أقصى حد يسمح به القانون، لا نتحمل المسؤولية عن الأضرار غير المباشرة أو الخاصة أو التبعية. لا تتجاوز مسؤوليتنا الإجمالية الرسوم التي دفعتها لنا خلال الثلاثة (3) أشهر السابقة للحدث محل المطالبة.</p>\n\n<h2>11) القانون الحاكم</h2>\n<p>تخضع هذه الشروط لقوانين رومانيا، وتُنظر النزاعات أمام المحاكم المختصة في بوخارست ما لم يفرض القانون خلاف ذلك.</p>\n\n<h2>12) التواصل</h2>\n<p>الاستفسارات: <a href="mailto:hello@assistio.co">hello@assistio.co</a> • الدعم: <a href="mailto:support@assistio.co">support@assistio.co</a> • المبيعات: <a href="mailto:sales@assistio.co">sales@assistio.co</a></p>', 'privacy_html': '<p><strong>تاريخ السريان:</strong> 15 يناير 2026</p>\n<p><strong>Assistio — مشروع قيد التأسيس (التسجيل القانوني قيد الإجراء)</strong> (“Assistio” أو “نحن”) يحترم خصوصيتك. تشرح هذه السياسة ما نجمعه وكيف نستخدمه وخياراتك.</p>\n\n<h2>1) ما الذي نجمعه</h2>\n<ul>\n  <li><strong>بيانات التواصل:</strong> الاسم والبريد الإلكتروني والشركة وأي معلومات ترسلها عبر النماذج.</li>\n  <li><strong>محتوى الرسائل:</strong> الاستفسارات الواردة عبر القنوات المتصلة (دردشة الموقع؛ وقنوات أخرى عند تفعيلها).</li>\n  <li><strong>سجلات تشغيلية:</strong> بيانات أساسية مثل الوقت ونتيجة التوجيه وإعدادات التهيئة.</li>\n  <li><strong>تحليلات الموقع (اختياري):</strong> عند تفعيلها، قد يجمع Google Analytics بيانات استخدام عبر ملفات تعريف الارتباط بعد موافقتك.</li>\n</ul>\n\n<h2>2) كيف نستخدم البيانات</h2>\n<ul>\n  <li>تقديم وتشغيل الخدمة (الرد، التوجيه، تدفّق الحجز).</li>\n  <li>الدعم الفني وحل المشكلات.</li>\n  <li>تحسين النصوص وقاعدة المعرفة والأداء (بشكل مُجمّع عندما يكون ذلك ممكنًا).</li>\n  <li>الأمان ومنع إساءة الاستخدام.</li>\n</ul>\n\n<h2>3) الأسس القانونية (GDPR)</h2>\n<p>حيثما ينطبق، نعتمد على: (أ) الموافقة، (ب) تنفيذ عقد/خطوات ما قبل العقد، و/أو (ج) المصلحة المشروعة (الأمان والتحسين) مع مراعاة حقوقك.</p>\n\n<h2>4) المشاركة والمعالجة عبر أطراف ثالثة</h2>\n<p>نستخدم مزودي خدمة (“معالجات”) لتشغيل MVP مثل الاستضافة ومعالجة النماذج (Formspree) ومنصات الرسائل. عند استخدام مزودي ذكاء اصطناعي لتوليد الردود، قد تتم معالجة محتوى الرسائل لتقديم الخدمة فقط. قد تعالج منصات مثل WhatsApp/Meta البيانات وفق شروطها الخاصة.</p>\n\n<h2>5) العيادات والبيانات الحساسة</h2>\n<p>لا نطلب بيانات صحية حساسة افتراضيًا. إذا كنت عيادة، تجنب إدخال معلومات طبية للمرضى عبر المساعد. يمكننا ضبط الأسئلة لتقليل البيانات الحساسة.</p>\n\n<h2>6) الاحتفاظ</h2>\n<p>نحتفظ بالبيانات للمدة اللازمة فقط. مدة الاحتفاظ الافتراضية للرسائل والسجلات تصل إلى 90 يومًا، ما لم تتطلبها الحاجة للدعم أو التزامات قانونية.</p>\n\n<h2>7) الأمان</h2>\n<p>نطبق إجراءات معقولة مناسبة لمرحلة MVP (مثل التحكم بالوصول والحد الأدنى للصلاحيات واستضافة آمنة). لا يوجد نظام آمن بالكامل.</p>\n\n<h2>8) حقوقك</h2>\n<p>بحسب موقعك، قد تملك حقوق الوصول والتصحيح والحذف وتصدير البيانات والاعتراض أو تقييد المعالجة. للتواصل: <a href="mailto:hello@assistio.co">hello@assistio.co</a>.</p>\n\n<h2>9) ملفات تعريف الارتباط والتحليلات</h2>\n<p>عند تفعيل Google Analytics، سنطلب موافقتك قبل وضع ملفات تعريف ارتباط التحليلات. يمكنك تغيير اختيارك عبر مسح بيانات الموقع وإعادة التحميل.</p>\n\n<h2>10) التواصل</h2>\n<p>الاستفسارات: <a href="mailto:hello@assistio.co">hello@assistio.co</a></p>', 'form_success': 'شكرًا — تم استلام رسالتك وسنرد قريبًا.', 'form_error': 'حدث خطأ. حاول مرة أخرى أو راسلنا على hello@assistio.co.'}};

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
      const btn = dd.querySelector('.lang-btn');
      const menu = dd.querySelector('.lang-menu');
      const current = dd.querySelector('[data-lang-current]');
      const items = Array.from(dd.querySelectorAll('.lang-menu button'));

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

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!dd.contains(e.target)) {
          dd.classList.remove('is-open');
          btn && btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dd.classList.contains('is-open')) {
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

    // Helper: lock/unlock body scroll
    const lockBodyScroll = (lock) => {
      if (lock) {
        document.body.style.overflow = 'hidden';
        document.body.style.overscrollBehavior = 'contain';
      } else {
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
      }
    };

    // Close function with scroll unlock
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      lockBodyScroll(false);
    };

    // Open function with scroll lock
    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
      lockBodyScroll(true);
    };

    // Toggle click
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Navlinks close menu
    $$('[data-navlink]').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ESC key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    // Outside click closes menu (with better delegation)
    document.addEventListener('click', (e) => {
      const isMenuOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isMenuOpen) {
        // Check if click is outside both menu and toggle
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          closeMenu();
        }
      }
    });

    // Touch/pointer events for better mobile handling
    menu.addEventListener('touchend', (e) => {
      // Close if tapping on a link (not the menu itself)
      if (e.target.matches('[data-navlink]')) {
        closeMenu();
      }
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
