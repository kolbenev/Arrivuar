document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".about__inner");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("_visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  elements.forEach((el) => observer.observe(el));
});
