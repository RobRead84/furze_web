# Furze from Firehills - Landing Page

A modern, animated landing page for the Furze product launch from Firehills Consulting.

## Overview

This is a clean, professional landing page featuring:
- Animated Firehills F logo (fade-in effect)
- "Coming Soon" announcement with delayed animation
- Email notification signup with mailto functionality
- Social media links (LinkedIn)
- Fully responsive design (mobile, tablet, desktop)
- Accessibility-compliant (WCAG 2.1 AA)

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **SVG**: Scalable vector graphics for the logo

## Project Structure

```
Firehills.io/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Core styles with brand colors
│   ├── animations.css     # F logo and text animations
│   └── responsive.css     # Mobile/desktop breakpoints
├── js/
│   ├── main.js           # Email form and main functionality
│   └── animations.js     # Animation sequencing
├── assets/
│   ├── logos/
│   │   ├── firehills-f-icon.svg                    # Animated F icon (SVG)
│   │   └── Firehills-logo-h-dark-yellowdoctor.png  # Horizontal logo
│   └── images/           # (reserved for future use)
└── README.md             # This file
```

## Brand Guidelines

Colors based on Firehills Style Guide V1.0:

- **Gorse Yellow**: `#fff301` (Primary brand color)
- **Midnight Black**: `#171d1a` (Background)
- **Doctor White**: `#fafafa` (Text)
- **Turbo**: `#f4c927` (Accent)
- **Assistant Font**: Google Fonts (primary typeface)

## Features

### 1. Animated F Logo
- Fades in with subtle scale animation (0.8s duration)
- No glow effect - clean and minimal
- Rotated 45° to create "hill" shape per brand guidelines

### 2. Coming Soon Text
- Appears after F logo completes (2s delay)
- Fades in from below (0.6s duration)
- Bold, large typography for impact

### 3. Email Signup
- **mailto: Link Implementation**
- User enters email in form
- Submit button opens email client with pre-filled:
  - To: rob@firehills.io
  - Subject: "Furze Launch Notification Request"
  - Body: Includes user's email
- Client-side email validation

### 4. Social Media
- LinkedIn link to Firehills Consulting
- Hover effects with brand color
- Scalable SVG icons

### 5. Responsive Design
- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Max Width**: 1920px
- Mobile-first approach

### 6. Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Proper ARIA labels
- Semantic HTML

## Setup & Installation

### Local Development

1. Clone or download the repository
2. Navigate to the `Firehills.io` folder
3. Open `index.html` in a web browser

### Using a Local Server (Recommended)

```bash
# Option 1: Python (if installed)
cd Firehills.io
python -m http.server 8080

# Option 2: Node.js http-server (if installed)
npx http-server Firehills.io -p 8080

# Then open: http://localhost:8080
```

### No Build Step Required
This project uses vanilla JavaScript and CSS - no compilation or bundling needed!

## Customization

### Update Tagline
Edit the placeholder text in `index.html`:
```html
<p class="tagline" id="tagline-placeholder">[Your tagline here]</p>
```

### Change Email Address
Update the email in `js/main.js`:
```javascript
const CONFIG = {
    email: 'rob@firehills.io',  // Change this
    ...
};
```

### Add More Social Links
Add additional social icons in `index.html` in the `.social-links` section:
```html
<a href="https://twitter.com/firehills" class="social-link">
    <!-- Add Twitter SVG icon here -->
</a>
```

### Modify Colors
Update CSS variables in `css/styles.css`:
```css
:root {
    --gorse-yellow: #fff301;
    --midnight-black: #171d1a;
    /* etc. */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lightweight: ~50KB total (HTML, CSS, JS)
- No external dependencies (except Google Fonts)
- Fast load times (< 1 second)
- Optimized animations (60fps target)

## Testing

### Manual Testing Checklist
- [ ] F logo animation plays on page load
- [ ] "Coming Soon" text appears after logo (2s delay)
- [ ] Email form validation works
- [ ] mailto: link opens email client correctly
- [ ] Social media link opens in new tab
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Works with reduced motion preference

### Cross-Browser Testing
Test in all major browsers and devices.

## Future Enhancements

Potential additions for future versions:
- [ ] Backend email collection (vs. mailto)
- [ ] Additional social media links
- [ ] About page content
- [ ] Product screenshots/mockups
- [ ] Countdown timer to launch date
- [ ] Newsletter integration
- [ ] Analytics tracking

## Credits

- **Design**: Based on Firehills Style Guide V1.0
- **Development**: Created for Firehills Consulting
- **Fonts**: Assistant by Google Fonts
- **Icons**: Custom SVG

## Contact

For questions or support:
- Email: rob@firehills.io
- LinkedIn: [Firehills Consulting](https://www.linkedin.com/company/firehills-consulting/)

---

**© 2024 Firehills. All rights reserved.**
