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

// card section
document.addEventListener('DOMContentLoaded', function() {
  const viewMoreBtn = document.getElementById('view-more-btn');
  const hiddenCards = document.querySelectorAll('.hidden');

  viewMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => {
      card.classList.toggle('hidden');
    });

    if (viewMoreBtn.textContent === 'View More Projects') {
      viewMoreBtn.textContent = 'View less';
    } else {
      viewMoreBtn.textContent = 'View More Projects';
    }
  });
});
// active link
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar ul li a');

  window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      // console.log("sectionTop", sectionTop);
      const sectionHeight = section.clientHeight;
      // console.log("sectionHeight", sectionHeight);
      const scrollOnY = window.scrollY;
      // console.log("scrollY", scrollY);
      if (scrollOnY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
