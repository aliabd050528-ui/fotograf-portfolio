// Filtrera bilderna i galleriet.
const filterButtons = document.querySelectorAll(".filter-button");
const photoCards = document.querySelectorAll(".photo-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    photoCards.forEach((card) => {
      const shouldShow =
        chosenCategory === "alla" ||
        card.dataset.category === chosenCategory;

      card.hidden = !shouldShow;
    });
  });
});

// Visa ett meddelande när formuläret skickas.
// Formuläret skickar inte information till en server.
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Tack! Detta är bara en demo och meddelandet har inte skickats.";
  contactForm.reset();
});
