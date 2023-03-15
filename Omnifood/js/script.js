// Mobile Navigation
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
  });
const allLink = document.querySelectorAll("a:link");
allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const selectEl = document.querySelector(href);
      selectEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In The View Prot
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
