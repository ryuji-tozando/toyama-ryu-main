// ===================================
// Mobile Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  // Toggle mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const isOpen = !mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      }
    });
  }

  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });

  // ===================================
  // Smooth Scroll for Navigation Links
  // ===================================
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal anchor links
      if (href !== '#' && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Calculate offset for fixed navigation
          const navHeight = document.getElementById('navigation').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // "詳しく知る" button scroll to about section
  const secondaryButtons = document.querySelectorAll('.btn-secondary');
  
  secondaryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const navHeight = document.getElementById('navigation').offsetHeight;
        const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===================================
  // Hero Slider
  // ===================================
  const slides = document.querySelectorAll('.hero-slide');
  const prevButton = document.querySelector('.hero-prev');
  const nextButton = document.querySelector('.hero-next');
  const indicators = document.querySelectorAll('.hero-indicator');
  
  let currentSlide = 0;
  let slideInterval;
  const slideDelay = 8000; // 8 seconds

  function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Wrap around if index is out of bounds
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDelay);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Navigation button event listeners
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      prevSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual interaction
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function() {
      nextSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual interaction
    });
  }

  // Indicator event listeners
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      showSlide(index);
      stopAutoSlide();
      startAutoSlide(); // Restart auto-slide after manual interaction
    });
  });

  // Pause auto-slide on hover (for desktop)
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }

  // Start auto-slide
  if (slides.length > 1) {
    startAutoSlide();
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    }
  });
});
