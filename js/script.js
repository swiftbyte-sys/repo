document.addEventListener("DOMContentLoaded", function () {
  // Contact form handler
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting SwiftByte! We will get back to you soon.');
    this.reset();
  });

  // Navigation toggle elements
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const closeBtn = document.getElementById('closeBtn');
  const overlay = document.getElementById('overlay');

  // Open navigation
  function openMenu() {
    navMenu.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  // Close navigation
  function closeMenu() {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = ''; // Restore scroll
  }

  // Event bindings
  hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Optional: Close nav with ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});
