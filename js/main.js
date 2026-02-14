// Navbar Dynamic Scroll Effect
const navbar = document.getElementById('navbar');
const navCta = document.getElementById('nav-cta');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled State (White Nav)
        navbar.classList.add('nav-scrolled', 'text-theme-text-main');
        navbar.classList.remove('nav-transparent', 'text-theme-text-light');

        // Button swap
        navCta.classList.replace('bg-theme-text-light', 'bg-theme-primary');
        navCta.classList.replace('text-theme-primary', 'text-theme-text-light');

    } else {
        // Transparent State (Cyan Nav)
        navbar.classList.remove('nav-scrolled', 'text-theme-text-main');
        navbar.classList.add('nav-transparent', 'text-theme-text-light');

        // Button swap
        navCta.classList.replace('bg-theme-primary', 'bg-theme-text-light');
        navCta.classList.replace('text-theme-text-light', 'text-theme-primary');
    }
});

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    iconMenu.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');

    // Adjust colors for mobile menu button when opened
    if (!menu.classList.contains('hidden') && window.scrollY <= 50) {
        btn.classList.replace('text-theme-text-light', 'text-theme-text-main');
    } else if (window.scrollY <= 50) {
        btn.classList.replace('text-theme-text-main', 'text-theme-text-light');
    }
}

btn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!menu.classList.contains('hidden')) {
            toggleMenu();
        }
    });
});

