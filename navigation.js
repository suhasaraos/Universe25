// Dynamic slide navigation
const TOTAL_SLIDES = 18; // Update this when adding/removing slides

function getCurrentSlideNumber() {
    const currentPage = window.location.pathname.split('/').pop();
    const match = currentPage.match(/slide(\d+)\.html/);
    return match ? parseInt(match[1]) : null;
}

function navigateToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= TOTAL_SLIDES) {
        window.location.href = `slide${slideNumber}.html`;
    }
}

// Keyboard navigation for slides
document.addEventListener('keydown', (e) => {
    const currentSlide = getCurrentSlideNumber();
    
    if (!currentSlide) return;
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        navigateToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToSlide(currentSlide - 1);
    }
});

// Update navigation buttons and indicators
window.addEventListener('DOMContentLoaded', () => {
    const currentSlide = getCurrentSlideNumber();
    
    if (!currentSlide) return;
    
    const slideIndicator = document.querySelector('.slide-indicator');
    const navbar = document.querySelector('.navbar .container-fluid');
    
    // Update slide indicator and move it to navbar
    if (slideIndicator) {
        slideIndicator.textContent = `${currentSlide} / ${TOTAL_SLIDES}`;
        // Move the indicator to the navbar if it's not already there
        if (navbar && slideIndicator.parentElement.classList.contains('nav-controls')) {
            navbar.appendChild(slideIndicator);
        }
    }
});

// Add smooth page transition effect
window.addEventListener('load', () => {
    document.querySelector('.slide').classList.add('active');
});
