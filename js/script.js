document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
      
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Video Modal
  const videoBtn = document.getElementById('videoBtn');
  const videoModal = document.getElementById('videoModal');
  const closeModal = document.querySelector('.close-modal');

  if (videoBtn && videoModal) {
    videoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      document.body.classList.add('no-scroll');
    });

    closeModal.addEventListener('click', () => {
      videoModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to your server
      console.log('Form submitted:', data);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Thank you for your request! We'll contact you within 24 hours.</p>
      `;
      
      contactForm.parentNode.insertBefore(successMessage, contactForm);
      contactForm.style.display = 'none';
      
      // Reset form
      this.reset();
      
      // Scroll to success message
      setTimeout(() => {
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    });
  }

  // Sticky header on scroll
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });

  // Add active class to nav link based on scroll position
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Initialize active link on page load
  const currentSection = window.location.hash || '#home';
  const activeLink = document.querySelector(`.nav-link[href="${currentSection}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});

// Service worker registration for PWA
//if ('serviceWorker' in navigator) {
 // window.addEventListener('load', () => {
  //  navigator.serviceWorker.register('/sw.js').then(registration => {
    //  console.log('ServiceWorker registration successful');
   // }).catch(err => {
  //    console.log('ServiceWorker registration failed: ', err);
  //  });
//  });
//}

document.getElementById('reserveBtn').addEventListener('click', function () {
    window.location.href = 'https://swiftbyte-sys.github.io/issa-resto-menu/#'; // Replace with your target link
  });


document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xldnlllj', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      document.getElementById('popup').style.display = 'block';
      form.reset();
    } else {
      const err = await response.json();
      alert(err.message || "There was a problem submitting your form.");
    }
  } catch (error) {
    alert("Network error. Please check your connection and try again.");
  }
});
