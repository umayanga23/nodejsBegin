// Select the logo container
const logoContainer = document.getElementById('logo-container');

// Create an <img> element for the logo
const logo = document.createElement('img');
logo.src = 'logo.jpeg'; // Replace with your actual logo file path
logo.alt = 'Website Logo';
logo.classList.add('logo'); // Add a class for CSS styling

// Append the logo to the container
logoContainer.appendChild(logo);
