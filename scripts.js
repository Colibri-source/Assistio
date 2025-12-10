// scripts.js – small helpers for the Assistio marketing + demo pages

// Signup handler (global, used by signup.html)
function handleSignup(e) {
    if (!e) return;
    e.preventDefault();

    const form = e.target;
    const nameField = form.querySelector('[name="name"]');
    const emailField = form.querySelector('[name="email"]');

    const name = nameField ? nameField.value.trim() : "";
    const email = emailField ? emailField.value.trim() : "";

    const who = name || email || "there";

    alert(
        "Thanks " +
            who +
            ".\n\nThis is a demo signup handler. In production, this would send your details to the real backend or auth provider."
    );

    form.reset();
}

// Login handler (global, used by login.html)
function handleLogin(e) {
    if (!e) return;
    e.preventDefault();

    const form = e.target;
    const emailField = form.querySelector('[name="email"]');

    const email = emailField ? emailField.value.trim() : "";

    alert(
        "Login submitted for " +
            (email || "this account") +
            ".\n\nThis is a demo login handler. In production, this would validate credentials against your backend."
    );

    form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    // Auto-attach signup handler if needed (backup to inline onsubmit)
    const signupForm =
        document.querySelector('form[data-role="signup-form"]') ||
        document.getElementById("signup-form");

    if (signupForm && !signupForm.hasAttribute("onsubmit")) {
        signupForm.addEventListener("submit", handleSignup);
    }

    // Contact form demo handler (only when action="#")
    const contactForm = document.querySelector("form.contact-form");
    if (contactForm && contactForm.getAttribute("action") === "#") {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = contactForm.querySelector("#name");
            const name = nameInput ? nameInput.value.trim() : "there";

            alert(
                "Thank you, " +
                    name +
                    ".\n\nWe received your message. For the live site, replace action=\"#\" with your real endpoint (Formspree, Netlify forms, or your backend)."
            );

            contactForm.reset();
        });
    }

    // Optional photo-slot support for an internal dashboard/profile mock
    const photoSlot = document.getElementById("photo-slot");
    if (photoSlot) {
        const img = document.createElement("img");
        img.src = "photo.png";
        img.alt = "You";
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";

        img.onerror = function () {
            // If photo.png does not exist, keep any existing placeholder text.
        };

        img.onload = function () {
            photoSlot.textContent = "";
            photoSlot.appendChild(img);
        };
    }
});
