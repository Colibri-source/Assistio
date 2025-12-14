const LINKS = {
  book: "https://calendar.app.google/GMchKdxTNZm9UJVS6",
  subscribe: "https://buy.stripe.com/cNi6oH3XA13u6bD8NI8IU01",
  setup: "https://buy.stripe.com/14AaEX2Tw4fGgQhe828IU02"
};

function $(sel, root=document) { return root.querySelector(sel); }
function $all(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

function setActiveNav() {
  const hash = window.location.hash || "#home";
  $all('.links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
  $all('.mobile .stack a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
}

function toggleMobile() {
  const m = $('#mobileMenu');
  if (!m) return;
  m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}

function bindButtons() {
  $all('[data-action="book"]').forEach(btn => btn.addEventListener('click', () => window.open(LINKS.book, '_blank', 'noopener')));
  $all('[data-action="subscribe"]').forEach(btn => btn.addEventListener('click', () => window.open(LINKS.subscribe, '_blank', 'noopener')));
  $all('[data-action="setup"]').forEach(btn => btn.addEventListener('click', () => window.open(LINKS.setup, '_blank', 'noopener')));
}

function bindFAQ() {
  $all('.qa .q').forEach(q => {
    q.addEventListener('click', () => {
      const qa = q.closest('.qa');
      const open = qa.classList.contains('open');
      $all('.qa').forEach(x => x.classList.remove('open'));
      if (!open) qa.classList.add('open');
    });
  });
}

function toast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed';
  t.style.left='50%';
  t.style.bottom='28px';
  t.style.transform='translateX(-50%)';
  t.style.padding='10px 12px';
  t.style.border='1px solid rgba(255,255,255,.12)';
  t.style.background='rgba(10,12,18,.75)';
  t.style.backdropFilter='blur(10px)';
  t.style.borderRadius='12px';
  t.style.color='rgba(234,240,255,.9)';
  t.style.fontWeight='700';
  t.style.zIndex='9999';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 900);
}

function copyText(text) {
  if (!navigator.clipboard) {
    toast('Copy not supported');
    return;
  }
  navigator.clipboard.writeText(text).then(() => toast('Copied'));
}

function bindCopy() {
  $all('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      copyText(btn.getAttribute('data-copy'));
    });
  });
}

function bindContactForm() {
  const form = $('#contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#c_name').value.trim();
    const email = $('#c_email').value.trim();
    const msg = $('#c_msg').value.trim();
    const subject = encodeURIComponent('Assistio inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n\nBooking: https://calendar.app.google/GMchKdxTNZm9UJVS6`);
    window.location.href = `mailto:mishal.almoqdad@gmail.com?subject=${subject}&body=${body}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = $('#hamburger');
  if (burger) burger.addEventListener('click', toggleMobile);
  window.addEventListener('hashchange', setActiveNav);
  setActiveNav();
  bindButtons();
  bindFAQ();
  bindCopy();
  bindContactForm();
});