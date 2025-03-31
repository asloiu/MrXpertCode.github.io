// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Remove loading overlay when page is loaded
window.addEventListener('load', function() {
    document.querySelector('.loading-overlay').style.display = 'none';
});

// Chat widget functionality
const chatButton = document.querySelector('.chat-button');
chatButton.addEventListener('click', function() {
    // Add your chat widget implementation here
    alert('Chat feature coming soon!');
});

// Form submission handling
const appointmentForm = document.querySelector('.appointment-form form');
appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for booking an appointment! We will contact you shortly.');
    this.reset();
});

// Chat Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            alert('Chat feature coming soon! We\'re working on implementing a live chat system to better serve you.');
        });
    }
});

// Blog Read More Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.blog-card .btn-link');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('We apologize, but this service is currently under maintenance. Our team is working to bring you exciting content soon!');
        });
    });
}); 