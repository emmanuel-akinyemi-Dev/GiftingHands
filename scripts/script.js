// Mobile drawer toggle
const menu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menu.classList.toggle('active');
});

// Optional: Animate bars into “X” when active
menu.addEventListener('click', () => {
  menu.classList.toggle('toggle');
});

// Simple form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We’ll get back to you soon.');
  this.reset();
});
