// main.js

// Function to toggle the navigation menu on mobile devices
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Event listener for the mobile menu button
document.getElementById('menu-button').addEventListener('click', toggleMenu);

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data here (e.g., send to server)
    alert('Form submitted successfully!');
}

// Event listener for the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Additional JavaScript functionality can be added here