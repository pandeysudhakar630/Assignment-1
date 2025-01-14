// JavaScript to toggle the collapsible menu
document.getElementById('toggle-menu').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  });
  
  // JavaScript for dynamic resizing based on screen width
  function resizePage() {
    const screenWidth = window.innerWidth;
    const container = document.querySelector('.container');
  
    if (screenWidth >= 992 && screenWidth <= 1600) {
      container.style.transform = 'scale(0.9)';
    } else if (screenWidth >= 700 && screenWidth <= 767) {
      container.style.transform = 'scale(0.8)';
    } else if (screenWidth >= 600 && screenWidth < 700) {
      container.style.transform = 'scale(0.75)';
    } else if (screenWidth <= 600) {
      container.style.transform = 'scale(0.5)';
    } else {
      container.style.transform = 'scale(1)';
    }
  }
  
  // Attach resize function to window resize event
  window.addEventListener('resize', resizePage);
  
  // Run on initial load
  resizePage();
  