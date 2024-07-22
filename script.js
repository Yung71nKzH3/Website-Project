const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactButton = document.getElementById('contactButton');
const contactForm = document.getElementById('contactForm');

contactButton.addEventListener('click', () => {
  contactForm.style.display = 'block';
});

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
  contactForm.style.display = 'none';
});