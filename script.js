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

        // Get form values using IDs
        const name = document.getElementById('cf-name').value.trim();
        const phone = document.getElementById('cf-phone').value.trim();
        const email = document.getElementById('cf-email').value.trim();
        const message = document.getElementById('cf-message').value.trim();

        // Validate form
        if (name && phone && email && message) {
            // Show success message
            showNotification('Message sent successfully! We will contact you soon.', 'success');

            // Reset form
            this.reset();
        } else {
            showNotification('Please fill in all required fields.', 'error');
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
document.querySelectorAll('.service-card, .info-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        // show overlay
        const overlay = document.getElementById('navOverlay');
        if (overlay) overlay.classList.toggle('active');
        // when opening, set focus trap
        if (navLinks.classList.contains('open')) {
            trapFocus(navLinks);
        } else {
            releaseFocus();
        }
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            const overlay = document.getElementById('navOverlay');
            if (overlay) overlay.classList.remove('active');
            releaseFocus();
        });
    });

    // close when clicking overlay
    const overlay = document.getElementById('navOverlay');
    if (overlay) {
        overlay.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            releaseFocus();
        });
    }
}

// Focus trap helpers
let previousFocus = null;
function trapFocus(container) {
    previousFocus = document.activeElement;
    const focusable = container.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();

    function handleKey(e) {
        if (e.key === 'Escape') {
            // close menu
            const hamburger = document.getElementById('hamburgerBtn');
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.getElementById('navOverlay');
            if (hamburger) hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
            releaseFocus();
            return;
        }

        if (e.key === 'Tab') {
            const focusableElements = Array.from(container.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])'))
                .filter(el => !el.hasAttribute('disabled'));
            if (focusableElements.length === 0) return;
            const first = focusableElements[0];
            const last = focusableElements[focusableElements.length - 1];

            if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        }
    }

    document.addEventListener('keydown', handleKey);
    // store handler so we can remove it later
    container._trapHandler = handleKey;
}

function releaseFocus() {
    if (previousFocus) previousFocus.focus();
    // remove key handler from document
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navLinks._trapHandler) {
        document.removeEventListener('keydown', navLinks._trapHandler);
        delete navLinks._trapHandler;
    }
    previousFocus = null;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
   
        // WhatsApp send handler for contact form
        const sendWhatsapp = document.getElementById('sendWhatsapp');
        if (sendWhatsapp) {
            sendWhatsapp.addEventListener('click', function () {
                const name = document.getElementById('cf-name').value.trim();
                const email = document.getElementById('cf-email').value.trim();
                const message = document.getElementById('cf-message').value.trim();

                if (!name || !email || !message) {
                    showNotification('Please fill in name, email and message before sending.', 'error');
                    return;
                }

                const waNumber = '2348037344440';
                const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${encodeURIComponent(message)}`;
                const url = `https://wa.me/${waNumber}?text=${text}`;
                window.open(url, '_blank');
            });
        }
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
