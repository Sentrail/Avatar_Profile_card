# Profile Card Component

A sleek, accessible, and responsive Profile Card built with semantic HTML, modern CSS (Flexbox/Grid), and vanilla JS. Perfect for portfolios, dashboards, or user profiles. Features live timestamp updates, social links, and avatar upload.

## ✨ Features
- **Semantic & Accessible**: Uses `<article>`, `<figure>`, ARIA labels, and keyboard-focusable elements (WCAG-friendly).
- **Responsive Design**: Stacks vertically on mobile (<768px); horizontal layout on desktop.
- **Interactive Upload**: Click "Upload Avatar" to replace the image via FileReader (data URL).
- **Live Timestamp**: Updates every 5s with `Date.now()` in ms.
- **Testable**: All elements have `data-testid` attributes for e2e testing (e.g., Cypress/Jest).

## 🛠 Tech Stack
- **HTML5** (semantics for accessibility)
- **CSS3** (Flexbox, media queries for responsiveness)
- **Vanilla JS** (no frameworks—lightweight & fast)

## 🚀 Quick Start
1. **Clone & Run Locally**:
 git clone https://github.com/Sentrail/Avatar_Profile_card.git
 cd profile-card-component
 open index.html  # Or drag to browser

- View in any browser. Resize window to test responsiveness.

2. **Customize**:
- Edit user data in `index.html` (name, bio, links, lists).
- Swap avatar: Update `<img src>` or use the upload button.
- Extend: Add more social links or hobbies dynamically via JS.

3. **Development Tips**:
- **Live Reload**: Use VS Code Live Server extension for auto-refresh.
- **Build for Prod**: Minify CSS/JS with tools like Parcel or just serve as-is (it's already optimized).

## 🧪 Testing
- **Automated Checks**: Run `test-profile-card.js` in your browser console (F12 > Console). It validates elements, timestamp, and upload flow.
- **Manual QA**:
- Accessibility: Lighthouse audit in Chrome DevTools (aim for 100% on images/semantics).
- Responsiveness: DevTools device emulation (iPhone, iPad, Desktop).
- Keyboard Nav: Tab through links/button—focus styles should glow blue.
- **Notes on Edge Cases**:
- Upload supports JPG/PNG/GIF (<10MB recommended; add size checks in JS if needed).
- Timestamp delta: Allows ±500ms for render lag in tests.
- No external deps: Pure vanilla for easy embedding (e.g., in React/Vue via iframe).

## 📁 Project Structure
Profile_card/
├── index.html          # Main component (copy-paste ready)
├── test-profile-card.js # Simple JS tests (run in console)
├── contact.html
├── about.html
└── README.md           # You're reading it!

## 🤝 Contributing
Fork, tweak, and PR! Ideas: Add drag-and-drop upload or dark mode toggle.

## 📄 License
MIT—use freely, attribute if you like.

Built with ❤️ by [Yusuf Israel](https://github.com/Sentrail). Questions? Open an issue!

---
*Last Updated: October 21, 2025*