// Simple form submit handler (placeholder)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting SwiftByte! We will get back to you soon.');
  this.reset();
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
