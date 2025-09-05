// Main JavaScript functionality

// Mobile menu toggle function
function toggleMobileMenu() {
  // Add mobile menu functionality here
  console.log('Mobile menu toggled');
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Navbar background on scroll
function initNavbarScroll() {
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
    } else {
      navbar.classList.remove('shadow-lg');
    }
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initSmoothScrolling();
  initNavbarScroll();
  
  // Add any other initialization code here
  console.log('Foodi website loaded successfully!');
});

// Export functions if needed
export { toggleMobileMenu };





class ImageSlider{
  cons
}