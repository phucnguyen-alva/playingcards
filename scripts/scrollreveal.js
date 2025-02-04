document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.card', {
      delay: 200,
      duration: 800,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      interval: 100,
      reset: false, // Prevents re-triggering
      beforeReveal: function (el) {
          el.style.transform = "none"; // Ensures hover is not disabled
      }
  });
});
