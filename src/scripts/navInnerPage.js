document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function() {
      let fromTop = window.scrollY || document.documentElement.scrollTop;
  
      if (fromTop > 0) {
        navbar.classList.add("nav-inner-page-fixed");
      } else {
        navbar.classList.remove("nav-inner-page-fixed");
      }
    });
  });
