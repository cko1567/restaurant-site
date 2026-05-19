const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

const closeMenu = () => {
  if (!navToggle || !navMenu || !header) {
    return;
  }

  navMenu.classList.remove("is-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
};

const toggleMenu = () => {
  if (!navToggle || !navMenu || !header) {
    return;
  }

  const isOpen = navMenu.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
};

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (!contactForm || !formStatus) {
    return;
  }

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const participantName = String(formData.get("participantName") || "").trim();
  const program = String(formData.get("program") || "").trim();
  const displayName = participantName || "your student";

  formStatus.textContent = `Thanks. We received the trial request for ${displayName}${
    program ? ` and the ${program.replaceAll("-", " ")} program` : ""
  }. Please call 703-665-0906 for the fastest confirmation.`;

  contactForm.reset();
};

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

if (navMenu) {
  navMenu.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", closeMenu);
