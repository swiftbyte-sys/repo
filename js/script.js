
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Accessibility: toggle nav with keyboard (Enter/Space)
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('open');
    }
  });

  // Close nav menu when clicking a nav link (on mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Sticky header on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Smooth scroll & active nav link highlighting
  const sections = document.querySelectorAll('section');
  const navLinksArray = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinksArray.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

  // Video modal open/close
  const openVideoBtn = document.getElementById('open-video-btn');
  const videoModal = document.getElementById('video-modal');
  const closeVideoBtn = document.getElementById('close-video-btn');
  const videoIframe = document.getElementById('video-iframe');

  openVideoBtn.addEventListener('click', () => {
    videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // Replace with your video URL
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
  });

  closeVideoBtn.addEventListener('click', () => {
    videoIframe.src = '';
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
  });

  // Close modal on clicking outside content
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoIframe.src = '';
      videoModal.classList.remove('active');
      videoModal.setAttribute('aria-hidden', 'true');
    }
  });

  // Form submission with confirmation popup
  const contactForm = document.getElementById('contact-form');
  const popup = document.getElementById('popup');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Only proceed if form is valid
    if (contactForm.checkValidity()) {
      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => {
          if (response.ok) {
            popup.style.display = 'block';
            contactForm.reset();
          } else {
            alert('There was an error submitting the form. Please try again.');
          }
        })
        .catch(() => {
          alert('There was a problem sending your request.');
        });
    } else {
      contactForm.reportValidity();
    }
  });
