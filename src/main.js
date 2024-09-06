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



// Testimonial ----------------------------

fetch("testimonial.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".even-columns-3");
    const existingCard = document.querySelector(".card");

    function populateCard(cardElement, memberData) {
      const avatar = cardElement.querySelector("#card-avatar");
      const rating = cardElement.querySelector("#card-rating");
      const heading = cardElement.querySelector("#card-heading");
      const comment = cardElement.querySelector("#card-comment");

      avatar.src = memberData.avatar;
      rating.src = memberData.rating
      heading.textContent = memberData.heading;
      comment.textContent = memberData.comment;
    }

    populateCard(existingCard, data.data[0]);

    for (let i = 1; i < data.data.length; i++) {
      const newCard = existingCard.cloneNode(true);

      populateCard(newCard, data.data[i]);

      container.appendChild(newCard);
    }
  });

