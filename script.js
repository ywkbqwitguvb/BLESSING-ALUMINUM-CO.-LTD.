// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const phone = this.querySelector('input[placeholder="Phone Number"]').value;
        const message = this.querySelector('textarea').value;

        // Validate form
        if (name && email && phone && message) {
            // Show success message
            showNotification('Message sent successfully! We will contact you soon.', 'success');
            
            // Reset form
            this.reset();
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

// Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Get Quote Button
const quoteBtn = document.querySelector('.quote-btn');
if (quoteBtn) {
    quoteBtn.addEventListener('click', function () {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Service Cards Hover Effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: -100px;
        right: 20px;
        padding: 20px 30px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        transition: bottom 0.3s ease;
        max-width: 400px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .notification.show {
        bottom: 20px;
    }

    .notification-success {
        background: #27ae60;
    }

    .notification-error {
        background: #e74c3c;
    }

    @media (max-width: 600px) {
        .notification {
            left: 20px;
            right: 20px;
            max-width: 100%;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to service cards and other elements
document.querySelectorAll('.service-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile Menu Toggle (if needed for responsive design)
function setupMobileMenu() {
    const nav = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        // Could add hamburger menu functionality here
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
});

// Call Quote CTA
const callBtn = document.querySelector('.btn-secondary');
if (callBtn) {
    callBtn.addEventListener('click', function () {
        window.location.href = 'tel:+2348037344440';
    });
}

// Log initialization
console.log('Blessing Aluminum Co. Ltd website loaded successfully!');
