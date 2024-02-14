window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  
  // Check if scrolled past the hero section
  if (window.scrollY > heroHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// typing animation script
document.addEventListener('DOMContentLoaded', function() {
  const text = "Hi, I'm Kritin"; // Text to be typed
  const speed = 50; // Typing speed in milliseconds
  const element = document.getElementById('typing-text');
  
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});