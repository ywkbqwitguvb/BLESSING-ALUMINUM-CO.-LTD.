# Responsive Hamburger Menu Component

A production-ready, fully accessible hamburger menu that works across all devices.

---

## 📦 What's Included

- **HTML Template** — Complete navigation structure with accessibility attributes
- **CSS Styles** — Mobile-first responsive design with smooth animations
- **JavaScript** — Toggle functionality, focus management, keyboard navigation
- **Accessibility** — ARIA labels, keyboard support, skip link

---

## 🚀 Quick Start

### 1. Copy HTML
Add this to your page inside the `<body>`:

```html
<a class="skip-link" href="#main">Skip to content</a>

<nav class="navbar">
    <div class="container">
        <div class="nav-content">
            <!-- Logo/Brand -->
            <div class="logo">
                <div class="logo-icon">🏢</div>
                <div class="logo-text">
                    <h1>Your Brand</h1>
                    <p>Tagline here</p>
                </div>
            </div>
            
            <!-- Navigation Links -->
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <!-- Hamburger Button -->
            <button class="hamburger" id="hamburgerBtn" 
                    aria-label="Open menu" 
                    aria-expanded="false" 
                    aria-controls="navMenu">
                <svg width="26" height="18" viewBox="0 0 26 18" 
                     aria-hidden="true" focusable="false">
                    <rect class="line line1" x="0" y="0" width="26" height="2" rx="1" fill="currentColor"></rect>
                    <rect class="line line2" x="0" y="8" width="26" height="2" rx="1" fill="currentColor"></rect>
                    <rect class="line line3" x="0" y="16" width="26" height="2" rx="1" fill="currentColor"></rect>
                </svg>
            </button>
            
            <!-- Menu Overlay -->
            <div id="navOverlay" class="nav-overlay" tabindex="-1" aria-hidden="true"></div>
            
            <!-- CTA Button (Optional) -->
            <button class="quote-btn">Get Started</button>
        </div>
    </div>
</nav>

<main id="main">
    <!-- Your page content here -->
</main>
```

### 2. Copy CSS
Add this to your stylesheet or `<style>` tag:

```css
/* Variables */
:root {
    --primary-color: #e74c3c;
    --dark-bg: #2c3e50;
    --text-light: #ffffff;
}

/* Navigation Bar */
.navbar {
    background: var(--dark-bg);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--text-light);
}

.logo-icon {
    font-size: 2.5rem;
}

.logo-text h1 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
}

.logo-text p {
    font-size: 0.8rem;
    color: var(--primary-color);
    font-style: italic;
    margin: 0;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* Hamburger Button */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 120;
    margin-left: 10px;
}

.hamburger svg {
    display: block;
    color: var(--text-light);
}

.hamburger .line {
    transform-origin: 13px 9px;
    transition: transform 0.28s ease, opacity 0.28s ease;
}

.hamburger.active .line1 {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .line2 {
    opacity: 0;
}

.hamburger.active .line3 {
    transform: translateY(-8px) rotate(-45deg);
}

/* Menu Overlay */
.nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease;
    z-index: 105;
}

.nav-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Skip Link */
.skip-link {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.skip-link:focus {
    left: 16px;
    top: 12px;
    width: auto;
    height: auto;
    padding: 8px 12px;
    background: var(--text-light);
    color: var(--dark-bg);
    border-radius: 6px;
    z-index: 9999;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

/* CTA Button (Optional) */
.quote-btn {
    background: var(--primary-color);
    color: var(--text-light);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.quote-btn:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
}

/* Mobile Menu - Tablet (768px) */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: -100vw;
        background: var(--dark-bg);
        width: 200px;
        gap: 0;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        border-radius: 0 0 10px 10px;
        padding: 18px 0;
        transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 110;
    }

    .nav-links.open {
        right: 0;
    }

    .nav-links li {
        width: 100%;
        text-align: left;
        padding: 10px 24px;
    }
}

/* Mobile Menu - Phone (600px) */
@media (max-width: 600px) {
    .nav-content {
        flex-wrap: wrap;
        gap: 20px;
    }

    .logo-text h1 {
        font-size: 0.9rem;
    }

    .quote-btn {
        width: 100%;
    }
}
```

### 3. Copy JavaScript
Add this to your script file or `<script>` tag:

```javascript
// Mobile Menu Setup
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        
        const overlay = document.getElementById('navOverlay');
        if (overlay) overlay.classList.toggle('active');
        
        if (navLinks.classList.contains('open')) {
            trapFocus(navLinks);
        } else {
            releaseFocus();
        }
    });

    // Close menu on link click
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

    // Close on overlay click
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

// Focus Trap for Accessibility
let previousFocus = null;

function trapFocus(container) {
    previousFocus = document.activeElement;
    const focusable = container.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();

    function handleKey(e) {
        if (e.key === 'Escape') {
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
    container._trapHandler = handleKey;
}

function releaseFocus() {
    if (previousFocus) previousFocus.focus();
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navLinks._trapHandler) {
        document.removeEventListener('keydown', navLinks._trapHandler);
        delete navLinks._trapHandler;
    }
    previousFocus = null;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
});
```

---

## 🎨 Customization Guide

### Change Breakpoint
Find this in CSS and change `768` to your desired value:
```css
@media (max-width: 768px) { ... }
```

### Change Colors
Update the CSS variables:
```css
:root {
    --primary-color: #your-color;
    --dark-bg: #your-dark;
    --text-light: #your-light;
}
```

### Change Animation Speed
Modify the transition values:
```css
.nav-links {
    transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);  /* Change 0.3s */
}
```

### Change Overlay Opacity
Adjust the background in `.nav-overlay`:
```css
background: rgba(0, 0, 0, 0.6);  /* Change 0.45 to your value */
```

### Add More Menu Items
Simply add more `<li>` items inside `.nav-links`:
```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

---

## ♿ Accessibility Features

✅ **ARIA Labels** — `aria-label`, `aria-expanded`, `aria-controls`
✅ **Keyboard Navigation** — Tab, Shift+Tab, Enter, Escape
✅ **Focus Management** — Focus trap inside menu, returns on close
✅ **Screen Readers** — Skip link, semantic HTML
✅ **Skip Link** — Visible on focus for keyboard users

---

## 🧪 Testing Checklist

- [ ] Desktop (>768px): Hamburger hidden, nav visible
- [ ] Tablet (768px): Hamburger visible, menu toggles
- [ ] Mobile (<600px): Menu responsive and touch-friendly
- [ ] Keyboard: Tab/Shift+Tab navigation, Escape closes menu
- [ ] Screen Reader: Skip link announced, menu state read aloud
- [ ] Animation: Smooth slide-in/out of menu
- [ ] Overlay: Click to close menu

---

## 📁 File Structure

```
project/
├── index.html          (Copy HTML template)
├── styles.css          (Copy CSS styles)
├── script.js           (Copy JavaScript)
└── README.md           (This file)
```

---

## 💡 Tips

- Use `currentColor` in SVG to inherit text color easily
- The hamburger button is 40×40px (touch-friendly)
- Menu slides from right; change `right: -100vw` to `left: -100vw` for left slide
- Overlay background is semi-transparent; adjust opacity as needed
- All animations use cubic-bezier for modern feel

---

## 📄 License

Free to use and modify for personal and commercial projects.

---

**Version:** 1.0  
**Last Updated:** November 2025  
**Browser Support:** Chrome, Firefox, Safari, Edge (and all modern browsers)
