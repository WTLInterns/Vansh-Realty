# Real Estate App

A modern real estate application built with React.js, Tailwind CSS, and Framer Motion.

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── HeroSection.js
│   ├── LuxuryProjects.js
│   ├── PropertyTypes.js
│   ├── TopBuilders.js
│   ├── TrendingProjects.js
│   ├── AboutUs.js
│   ├── Statistics.js
│   ├── PropertyCollection.js
│   ├── Footer.js
│   └── FloatingActions.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Features

1. **Responsive Design** - Works on mobile, tablet, and desktop
2. **Modern UI** - Clean and professional interface with blue and orange color scheme
3. **Animations** - Smooth transitions and hover effects using Framer Motion
4. **Component-Based Architecture** - Organized and reusable components

## Components

### Header
- Sticky navigation bar with company logo
- Navigation links for all major sections
- Prominent "Enquire Now" button

### Hero Section
- Full-width banner with tagline
- Advanced property search form with filters
- Location, property type, budget, and name search options

### Luxury Projects
- Grid layout showcasing premium properties
- Project cards with images, details, and action buttons
- Hover animations for better user experience

### Property Types
- Icon-based navigation for different property categories
- Hover effects and transitions

### Top Builders
- Horizontal scrolling carousel of builder logos
- Featured and top-rated badges

### Trending Projects
- Horizontal slider of popular properties
- Navigation arrows for browsing

### About Us
- Two-column layout with image and company information
- "Read More" call-to-action button

### Statistics
- Animated counters showing company achievements
- Icons for visual representation

### Property Collection
- Carousel of premium property cards
- Featured/New badges

### Footer
- Company information and social media links
- Quick navigation links
- Contact information
- Copyright notice

### Floating Actions
- WhatsApp chat button
- Enquire Now button
- Scroll-to-top button

## Tech Stack

- **React.js** - Frontend library
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Color Palette

- Primary Blue: #0099cc
- Accent Orange: #ff6600
- Secondary colors: White, Light Grey

## Typography

- Primary: Poppins
- Secondary: Montserrat

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Customization

To customize the color scheme, update the values in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      blue: {
        500: '#0099cc',
        600: '#0088b3',
      },
      orange: {
        500: '#ff6600',
      },
    },
  },
},
```

To customize fonts, update the Google Fonts import in `src/index.css` and the font family in `tailwind.config.js`.