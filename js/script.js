// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("#navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  // Animate skill bars on skills page
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.setProperty("--width", level + "%");
      bar.querySelector("::after");
      bar.style.setProperty("width", level + "%");
    }, 500);
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out! I’ll get back to you soon.");
      form.reset();
    });
  }
});
