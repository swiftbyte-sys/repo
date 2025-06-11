document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Close nav menu when clicking any nav link (on mobile)
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  // Form submission alert
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for requesting a demo. We’ll contact you soon!');
    e.target.reset();
  });
});
