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
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.presentationConfig = presentationConfig;
}
