document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener("click", function (e) {
      navLinks.classList.toggle("active");
      e.stopPropagation(); // Prevent closing the dropdown when clicking the hamburger
    });
  
    // Close the dropdown when clicking outside of the nav-links
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  });
  