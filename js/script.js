// Simple form submit handler (placeholder)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting SwiftByte! We will get back to you soon.');
  this.reset();
});
