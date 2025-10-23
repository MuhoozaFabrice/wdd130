// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // 1. Newsletter Form Handler
  // ======================
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();

      if (name === "" || email === "") {
        alert("Please fill out both name and email.");
        return;
      }

      alert(`Thank you, ${name}! You’ve successfully subscribed to our newsletter.`);
      newsletterForm.reset();
    });
  }

  // ======================
  // 2. Contact Form Handler
  // ======================
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.querySelector("#fullname").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
      const purpose = document.querySelector("input[name='purpose']:checked");

      if (!fullName || !email || !message || !purpose) {
        alert("Please fill out all required fields before submitting.");
        return;
      }

      alert(`Thank you, ${fullName}! Your message (${purpose.value}) has been sent successfully.`);
      contactForm.reset();
    });
  }

  // ======================
  // 3. Smooth Scroll for Navigation Links
  // ======================
  const navLinks = document.querySelectorAll("a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  // ======================
  // 4. Highlight Active Page Link
  // ======================
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".nav-flex a");
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
      link.style.color = "#F9C74F";
    }
  });

  // ======================
  // 5. Simple Mobile Menu Toggle (fixed)
  // ======================
  const nav = document.querySelector(".nav-flex");
  const header = document.querySelector(".header-grid");

  if (nav && header) {
    const menuButton = document.createElement("button");
    menuButton.textContent = "☰";
    menuButton.classList.add("menu-toggle");
    menuButton.style.fontSize = "1.5rem";
    menuButton.style.background = "none";
    menuButton.style.border = "none";
    menuButton.style.cursor = "pointer";
    menuButton.style.display = "none";
    menuButton.style.color = "#fff";
  }

});
