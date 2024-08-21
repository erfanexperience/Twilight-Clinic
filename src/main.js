const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

document.addEventListener("click", (event) => {
  const isClickInsideNav = primaryNav.contains(event.target);
  const isClickInsideToggle = navToggle.contains(event.target);

  if (!isClickInsideNav && !isClickInsideToggle && primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
    primaryNav.removeAttribute("data-visible");
    primaryHeader.removeAttribute("data-overlay");
  }
});



const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: false,
  arrows: false,
});