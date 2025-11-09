// Presentation Configuration
// Edit these values to customize presenter information across all slides

const presentationConfig = {
    presenter: {
        name: "Suhas Rao",
        title: "App Innovation Architect",
        company: "Microsoft"
    },
    event: {
        name: "GitHub Universe 2025",
        date: "November 2025",
        totalSlides: 19
    },
    // Hidden slides configuration
    // Add slide numbers to this array to hide them from navigation
    // Example: [1, 5, 10] will hide slides 1, 5, and 10
    hiddenSlides: [2]
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.presentationConfig = presentationConfig;
}
