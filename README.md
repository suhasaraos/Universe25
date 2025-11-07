# GitHub Universe 2025 - Interactive Presentation Deck

A modern, developer-friendly HTML/CSS/JavaScript presentation deck showcasing GitHub Universe 2025 announcements and features. Built with Bootstrap 5, designed for easy customization, and optimized for both desktop and mobile viewing.

## 🎯 Why This Format?

### Developer-Friendly
- **Plain HTML/CSS/JS** - No complex frameworks or build tools required
- **Easy to modify** - Each slide is a separate HTML file
- **GitHub Copilot ready** - AI-powered editing and content updates
- **Version control friendly** - Track changes with Git
- **Lightweight** - Fast loading, no dependencies beyond CDN libraries

### Professional & Shareable
- **Mobile-responsive** - Works seamlessly on phones, tablets, and desktops
- **Easy to host** - Deploy to GitHub Pages, Azure Static Web Apps, or any web server
- **Shareable links** - Send customers a single URL instead of heavy PowerPoint files
- **Accessible** - Works in any modern browser, no special software required
- **Always up-to-date** - Update once, everyone sees the latest version

### Customizable
- **Modular design** - Add, remove, or reorder slides without breaking navigation
- **Brand-ready** - Easy to customize colors, logos, and content
- **Dynamic navigation** - Automatically adjusts to slide count
- **No vendor lock-in** - Standard web technologies, works anywhere

## 📂 File Structure

### Core Files
- **`index.html`** - Landing page with Universe logo and presentation info
- **`slide1.html` - `slide19.html`** - Individual presentation slides
- **`styles.css`** - Global styles, colors, responsive design
- **`navigation.js`** - Dynamic slide navigation and keyboard controls

### Assets
- **`images/`** - Slide images and screenshots
  - `butterfly.png` - Universe 25 logo butterfly
  - `*.jpg` - Slide content images (15 experience photos + 8 feature images)

### Slide Content Overview
1. **Slide 1**: Title slide - Universe 2025 branding
2. **Slide 2**: Photo slideshow - GitHub Universe 2025 experience (15 images)
3. **Slide 3**: Agentic Future - Three key themes
4. **Slide 4**: Universe Highlights - Five major announcements
5. **Slide 5**: Agent HQ Introduction
6. **Slide 6**: Mission Control (Public Preview)
7. **Slide 7**: AI Controls (Public Preview)
8. **Slide 8**: Custom Agents (General Availability)
9. **Slide 9**: Agentic Code Review (Public Preview)
10. **Slide 10**: Copilot CLI Enhancements (Public Preview)
11. **Slide 11**: Coding Agent Enhancements (General Availability)
12. **Slide 12**: Usage Metrics Dashboard & API (Public Preview)
13. **Slide 13**: Copilot for VS Code Upgrade (Public Preview)
14. **Slide 14**: GitHub Code Quality (Public Preview)
15. **Slide 15**: Security & Quality Validation (General Availability)
16. **Slide 16**: Code Scanning Alerts Assignment (Public Preview)
17. **Slide 17**: Enterprise Teams and Roles (Public Preview)
18. **Slide 18**: Unified Copilot Licensing (General Availability)
19. **Slide 19**: Call to Action - Resources and links

## 🚀 Getting Started

### Quick Start
1. Clone this repository:
   ```bash
   git clone https://github.com/suhasaraos/Universe25.git
   cd Universe25
   ```

2. Open `index.html` in your browser:
   - **Windows**: Double-click `index.html` or `start index.html`
   - **Mac**: Open with browser or `open index.html`
   - **Linux**: `xdg-open index.html`

3. Start presenting!

### Navigation
- **Mouse/Touch**: Click slide indicator in top-right to see current position
- **Keyboard**: 
  - `→` or `Space` - Next slide
  - `←` - Previous slide
- **Note**: Navigation buttons are hidden; use keyboard for seamless presentation

## 📝 Customization Guide

### 1. Personalize the Presentation

#### Update Presenter Information
Edit `index.html` (lines 180-190):
```html
<div class="author-info">
    <div class="author-name">Your Name</div>
    <div class="author-title">Your Title, Company</div>
</div>
```

Also update `slide1.html` if you're using it.

#### Change Repository Name
After cloning, rename the repository:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 2. Modify Slides

#### Hide/Remove Slides
To hide slide 1 (title slide):
- Delete or rename `slide1.html`
- Update `navigation.js` - change `TOTAL_SLIDES` from 19 to 18
- Update `index.html` - change slide count display

#### Add New Slides
1. Copy an existing slide: `cp slide19.html slide20.html`
2. Edit content in `slide20.html`
3. Update slide indicator: `20 / 20`
4. Update `navigation.js`: `const TOTAL_SLIDES = 20;`
5. Update `index.html`: change to `20 Slides`

#### Edit Slide Content
Each slide follows this structure:
```html
<div class="slide-content">
    <i class="bi bi-icon-name github-icon"></i>
    <h2>Slide Title</h2>
    <h3 class="subtitle">Subtitle</h3>
    
    <div class="agent-hq-image">
        <img src="images/your-image.jpg" alt="Description">
    </div>
    
    <div class="content-section">
        <p class="intro-text">Introduction paragraph</p>
        <div class="content-list">
            <ul>
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
            </ul>
        </div>
    </div>
</div>
```

### 3. Customize Colors & Branding

#### Change Color Scheme
Edit `styles.css` (lines 1-9):
```css
:root {
    --bg-primary: #0d1117;      /* Main dark background */
    --bg-secondary: #161b22;    /* Secondary background */
    --text-primary: #c9d1d9;    /* Main text color */
    --text-secondary: #8b949e;  /* Muted text */
    --accent: #39d98a;          /* GitHub green (change to your brand) */
    --accent-hover: #2ea472;    /* Hover state */
    --border-color: #30363d;    /* Border color */
}
```

#### Replace Logo
Replace `images/butterfly.png` with your logo, then update `index.html`:
```html
<img src="images/your-logo.png" alt="Your Logo" class="universe-butterfly">
```

### 4. Add Your Own Images

Place images in the `images/` folder and reference them:
```html
<img src="images/your-image.jpg" alt="Description">
```

**Note**: The slide images referenced in slides 5-18 need to be added:
- `agent-hq.jpg`, `mission-control.jpg`, `ai-controls.jpg`, `custom-agents.jpg`
- `code-review.jpg`, `copilot-cli.jpg`, `coding-agent.jpg`, `usage-metrics.jpg`
- `vscode-upgrade.jpg`, `code-quality.jpg`, `security-quality-validation.jpg`
- `code-scanning-alerts.jpg`, `enterprise-teams-roles.jpg`, `unified-licensing-metrics.jpg`

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select branch: `master` or `main`
4. Your deck will be live at: `https://yourusername.github.io/repository-name`

### Azure Static Web Apps
```bash
# Install Azure CLI
az login
az staticwebapp create --name universe25 --resource-group myResourceGroup --source .
```

### Any Web Server
Simply upload all files to your web hosting:
```bash
# Example: Copy to web server
scp -r * user@server:/var/www/html/universe25/
```

### Local Network Sharing
Use Python's built-in server:
```bash
# Python 3
python -m http.server 8000

# Access from network: http://YOUR_IP:8000
```

## 📱 Mobile Optimization

The presentation is fully responsive:
- **Desktop/Tablet** (≥768px): Content fits viewport, no scrolling
- **Mobile** (<768px): Vertical scrolling enabled for readability
- **Touch-friendly**: All interactive elements optimized for touch
- **Fast loading**: Optimized images and minimal dependencies

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)** - Dynamic navigation
- **Bootstrap 5.3.2** - Responsive framework (CDN)
- **Bootstrap Icons** - Icon library (CDN)

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Lightweight**: ~50KB total HTML/CSS/JS (excluding images)
- **Fast loading**: CDN-hosted libraries with browser caching
- **Offline-capable**: Works offline except for CDN resources

### Accessibility Features
- Semantic HTML structure
- Keyboard navigation support
- ARIA-friendly icons
- High contrast color scheme
- Responsive text sizing

## 💡 Tips for Presenters

### Best Practices
1. **Test before presenting**: Open in your browser and run through all slides
2. **Use keyboard shortcuts**: More professional than clicking buttons
3. **Full screen mode**: Press `F11` (Windows/Linux) or `Cmd+Shift+F` (Mac)
4. **Check mobile view**: Test on actual devices before sharing links
5. **Keep images optimized**: Compress large images to improve loading

### Customization with GitHub Copilot
This deck is designed to work seamlessly with GitHub Copilot:
```
# Example prompts:
"Add a new slide about GitHub Actions"
"Change the color scheme to blue"
"Add a comparison table to slide 10"
"Create a new slide with 3 columns"
```

## 📚 Resources & Links

The final slide (slide 19) includes links to:
- **GH Sales Portal**: Internal resources
- **Universe 25 Ships**: PowerPoint deck
- **GHCP Adoption**: Adoption resources
- **Public Labs**: Workshop repositories
- **Recap Events**: APAC Universe recordings

## 🤝 Contributing

Feel free to fork this repository and customize for your needs:
1. Fork the repository
2. Create a feature branch: `git checkout -b my-custom-deck`
3. Commit your changes: `git commit -am 'Customized for my presentation'`
4. Push to the branch: `git push origin my-custom-deck`

## 📄 License

This presentation deck is provided as-is for GitHub Universe 2025 content sharing and internal Microsoft use.

## 🆘 Troubleshooting

### Slides not navigating?
- Check console for JavaScript errors (F12)
- Ensure `navigation.js` is loaded
- Verify `TOTAL_SLIDES` matches actual slide count

### Images not loading?
- Check image paths are correct (case-sensitive on some systems)
- Ensure images exist in `images/` folder
- Verify file extensions match references

### Styling looks broken?
- Check that `styles.css` is loading
- Clear browser cache (Ctrl+Shift+R)
- Verify CSS CDN links are accessible

### Mobile scrolling issues?
- This is by design: mobile allows vertical scroll, desktop doesn't
- To change: edit `.slide` CSS in `styles.css`

---

**Built with ❤️ using GitHub Copilot**  
*Presented by: Suhas Rao, Cloud Solution Architect, Microsoft*

For questions or issues, please open an issue in this repository.
