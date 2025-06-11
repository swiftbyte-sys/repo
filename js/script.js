// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thanks for booking a demo with SwiftByte! We will contact you soon.');
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  const reserveBtn = document.getElementById('reserveBtn');
  reserveBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});
