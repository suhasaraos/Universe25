// Dynamic slide navigation
const TOTAL_SLIDES = 19; // Update this when adding/removing slides

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
    
    // Mobile touch navigation
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    // Swipe gesture handling
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        const xDiff = touchEndX - touchStartX;
        const yDiff = Math.abs(touchEndY - touchStartY);
        
        // Only trigger if horizontal swipe is greater than vertical (not scrolling)
        if (Math.abs(xDiff) > swipeThreshold && Math.abs(xDiff) > yDiff) {
            if (xDiff > 0) {
                // Swipe right - previous slide
                navigateToSlide(currentSlide - 1);
            } else {
                // Swipe left - next slide
                navigateToSlide(currentSlide + 1);
            }
        }
    }
    
    // Tap navigation (left/right sides of screen)
    document.addEventListener('click', (e) => {
        // Ignore clicks on links and interactive elements
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        // Ignore clicks on slideshow controls and within slideshow container
        if (e.target.closest('.slideshow-prev') || 
            e.target.closest('.slideshow-next') || 
            e.target.closest('.slideshow-dot') ||
            e.target.closest('.slideshow-container')) {
            return;
        }
        
        const screenWidth = window.innerWidth;
        const clickX = e.clientX;
        const tapZone = screenWidth * 0.25; // 25% from each edge
        
        // Only on mobile/tablet devices
        if (screenWidth < 1024) {
            if (clickX < tapZone) {
                // Tap on left side - previous slide
                navigateToSlide(currentSlide - 1);
            } else if (clickX > screenWidth - tapZone) {
                // Tap on right side - next slide
                navigateToSlide(currentSlide + 1);
            }
        }
    });
});

// Add smooth page transition effect
window.addEventListener('load', () => {
    document.querySelector('.slide').classList.add('active');
});
