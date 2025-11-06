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
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideIndicator = document.querySelector('.slide-indicator');
    
    // Update slide indicator
    if (slideIndicator) {
        slideIndicator.textContent = `${currentSlide} / ${TOTAL_SLIDES}`;
    }
    
    // Update prev button
    if (prevBtn) {
        if (currentSlide === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            prevBtn.onclick = () => navigateToSlide(currentSlide - 1);
        }
    }
    
    // Update next button
    if (nextBtn) {
        if (currentSlide === TOTAL_SLIDES) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
            nextBtn.onclick = () => navigateToSlide(currentSlide + 1);
        }
    }
});

// Add smooth page transition effect
window.addEventListener('load', () => {
    document.querySelector('.slide').classList.add('active');
});
