# OnlyCampus Landing Page

A modern, responsive landing page for the OnlyCampus mobile application. Built with the same color scheme and design language as the SolarityAI landing page.

## Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive layout that works on all devices
- **Smooth Animations**: WOW.js powered scroll animations
- **Color Scheme**: Uses the same color palette as SolarityAI landing page
  - Primary Blue: `#1e40af`
  - Secondary Green: `#059669`
  - Purple: `#7c3aed`
  - Orange: `#c2410c`
  - Teal: `#0d9488`
  - Dark Background: `#0f172a`

## Structure

```
onlycampus-landing-page/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   └── images/
│       └── logo/           # Logo images (to be added)
└── README.md
```

## Sections

1. **Hero Section**: Main introduction with call-to-action buttons
2. **Features Section**: Showcase of app features
3. **About Section**: Information about OnlyCampus
4. **Download Section**: App store download links
5. **Contact Section**: Contact form and information

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Bootstrap 5.3.0 (CDN)
- WOW.js (CDN) for animations
- LineIcons (CDN) for icons
- Google Fonts (Inter & Poppins)

## Setup

1. Open `index.html` in a web browser
2. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## Customization

### Colors

All colors are defined as CSS variables in `assets/css/main.css`. To change the color scheme, modify the `:root` variables:

```css
:root {
  --color-primary: #1e40af;
  --color-primary-light: #3b82f6;
  /* ... */
}
```

### Content

Edit `index.html` to update:
- Text content
- Feature descriptions
- Contact information
- App store links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 OnlyCampus. All rights reserved.
