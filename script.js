const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const form = document.querySelector(".reservation-form");
const formStatus = document.querySelector("[data-form-status]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "there";
  formStatus.textContent = `Thanks, ${name}. Your reservation request has been received.`;
  form.reset();
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
