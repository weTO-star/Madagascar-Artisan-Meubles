// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.produit-card, .step, .valeur-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.produit-card, .step, .valeur-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Run animation check on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        
        if (!nameInput.value.trim()) {
            alert('Veuillez entrer votre nom');
            return;
        }
        
        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Merci pour votre message! Nous vous contacterons bientôt.');
        this.reset();
    });
}

// Leaf Animation Enhancement
const leaves = document.querySelectorAll('.leaf');
leaves.forEach((leaf, index) => {
    // Randomize initial positions and animations
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 10;
    const randomSize = 80 + Math.random() * 80;
    
    leaf.style.width = `${randomSize}px`;
    leaf.style.height = `${randomSize}px`;
    leaf.style.animationDelay = `${randomDelay}s`;
    leaf.style.animationDuration = `${randomDuration}s`;
    
    // Random initial positions
    if (index === 0) {
        leaf.style.top = `${10 + Math.random() * 20}%`;
        leaf.style.left = `${5 + Math.random() * 10}%`;
    } else if (index === 1) {
        leaf.style.top = `${60 + Math.random() * 20}%`;
        leaf.style.left = `${70 + Math.random() * 20}%`;
    } else {
        leaf.style.top = `${30 + Math.random() * 40}%`;
        leaf.style.left = `${40 + Math.random() * 40}%`;
    }
});