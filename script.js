// Wireframe helper scripts. Production CTA behavior is expected to be handled in STUDIO.
window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.body.classList.add("is-loaded");
  }, 1600);
});

const pageTopButton = document.querySelector(".page-top");

window.addEventListener("scroll", () => {
  const isVisible = window.scrollY > 720;
  pageTopButton.classList.toggle("is-visible", isVisible);
});

pageTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") {
      event.preventDefault();
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const revealSections = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.18,
  rootMargin: "0px 0px -8% 0px"
});

revealSections.forEach((section) => {
  revealObserver.observe(section);
});
