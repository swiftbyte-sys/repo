// Toggle mobile nav menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Optional: Close menu on link click (for better mobile UX)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thanks for requesting a demo. We’ll contact you soon!');
    this.reset();
  });
});
