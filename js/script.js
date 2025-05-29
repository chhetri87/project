// Selecting the theme toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Adding an event listener to the button for detecting clicks
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  body.classList.toggle('dark-mode');
  
  // Dynamically update the button text based on the current theme
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light 🌞'; // If in dark mode, show 'Light' and a sun emoji
  } else {
    themeToggle.textContent = 'Dark 🌙'; // If in light mode, show 'Dark' and a moon emoji
  }
});