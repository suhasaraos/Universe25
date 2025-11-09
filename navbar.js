// Common Navbar Component
// This file creates a consistent navbar across all slides

function createNavbar() {
    return `
        <div class="navbar navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand" style="cursor: pointer; text-decoration: none;">
                    <i class="bi bi-github"></i>
                    <span class="universe-logo-inline">
                        <span>Universe</span>
                        <img src="images/butterfly.png" alt="Universe butterfly" class="universe-butterfly-small">
                        <span class="universe-number">25</span>
                    </span>
                </a>
            </div>
        </div>
    `;
}

// Insert navbar into the page
document.addEventListener('DOMContentLoaded', () => {
    const slideElement = document.querySelector('.slide');
    if (slideElement) {
        slideElement.insertAdjacentHTML('afterbegin', createNavbar());
    }
});
