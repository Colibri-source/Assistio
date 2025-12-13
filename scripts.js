/*
  Assistio static site script
  - Mobile menu toggle
  - Active nav highlighting
  - Contact / FAQ mailto helpers
  - Stripe Payment Link wiring (static-friendly)
*/

const AssistioConfig = {
  // Replace these with YOUR Stripe Payment Links (created in Stripe Dashboard)
  stripe: {
    // Assistio – Automation Pack
    subscriptionStarter: "https://buy.stripe.com/cNi6oH3XA13u6bD8NI8IU01",

    // Assistio – Setup Fee
    setupFee: "https://buy.stripe.com/14AaEX2Tw4fGgQhe828IU02"
  },

  // Replace this with your booking link (Calendly / Google appointment schedule / etc.)
  bookingUrl: "https://calendar.app.google/GMchKdxTNZm9UJVS6",

  // Support emails
  supportEmails: ["mishal.almoqdad@gmail.com", "colibri.co.140@gmail.com"]
};

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const allLinks = $all('a[data-nav]');
  allLinks.forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    const isActive = href === path || (path === "" && href === "index.html");
    a.classList.toggle("active", isActive);
  });
}

function setupMobileMenu(){
  const btn = $("#hamburger");
  const menu = $("#mobilemenu");
  if(!btn || !menu) return;

  btn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", menu.classList.contains("hidden") ? "false" : "true");
  });

  // close on navigation
  $all("#mobilemenu a").forEach(a=>{
    a.addEventListener("click", ()=> menu.classList.add("hidden"));
  });
}

function wireStripeButtons(){
  $all("[data-stripe-link]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const key = btn.getAttribute("data-stripe-link");
      const url = AssistioConfig.stripe[key];
      if(!url || url.includes("REPLACE_")){
        e.preventDefault();
        alert("Stripe link not configured yet. Open scripts.js and replace the Stripe Payment Links in AssistioConfig.");
        return;
      }
      window.location.href = url;
    });
  });
}

function wireBookingButtons(){
  $all("[data-booking]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const url = AssistioConfig.bookingUrl;
      if(!url || url.includes("REPLACE_")){
        e.preventDefault();
        alert("Booking link not configured yet. Open scripts.js and replace AssistioConfig.bookingUrl.");
        return;
      }
      window.open(url, "_blank", "noopener");
    });
  });
}

function wireCopyButtons(){
  $all("[data-copy]").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const text = btn.getAttribute("data-copy") || "";
      try{
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied";
        setTimeout(()=> btn.textContent = "Copy", 1200);
      }catch{
        alert("Copy failed. You can manually copy: " + text);
      }
    });
  });
}

function mailtoCompose({subject, body, to}){
  const recipients = (to && to.length) ? to : AssistioConfig.supportEmails;
  const s = encodeURIComponent(subject || "Assistio request");
  const b = encodeURIComponent(body || "");
  return `mailto:${recipients.join(",")}?subject=${s}&body=${b}`;
}

function wireMailtoForms(){
  // Contact form
  const cForm = $("#contactForm");
  if(cForm){
    cForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = $("#c_name")?.value?.trim() || "";
      const email = $("#c_email")?.value?.trim() || "";
      const company = $("#c_company")?.value?.trim() || "";
      const msg = $("#c_message")?.value?.trim() || "";

      const body =
`Name: ${name}
Email: ${email}
Company: ${company}

Message:
${msg}
`;
      window.location.href = mailtoCompose({subject: "Assistio — Contact request", body});
    });
  }

  // FAQ question submit
  const qForm = $("#faqForm");
  if(qForm){
    qForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = $("#q_name")?.value?.trim() || "";
      const email = $("#q_email")?.value?.trim() || "";
      const question = $("#q_question")?.value?.trim() || "";

      const body =
`Name: ${name}
Email: ${email}

Question:
${question}
`;
      window.location.href = mailtoCompose({subject: "Assistio — FAQ question", body});
    });
  }

  // Login / Signup forms (static)
  const authForms = $all("[data-auth-form]");
  authForms.forEach(form=>{
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const email = form.querySelector("input[type='email']")?.value?.trim() || "";
      const body =
`Please enable portal access.

Email: ${email}

Context:
- I am an active customer (or I want to become one).
- Please send me the access instructions.
`;
      window.location.href = mailtoCompose({subject: "Assistio — Portal access request", body});
    });
  });
}

function setYear(){
  const y = new Date().getFullYear();
  $all("[data-year]").forEach(el=> el.textContent = y);
}

document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();
  setupMobileMenu();
  wireStripeButtons();
  wireBookingButtons();
  wireCopyButtons();
  wireMailtoForms();
  setYear();
});
