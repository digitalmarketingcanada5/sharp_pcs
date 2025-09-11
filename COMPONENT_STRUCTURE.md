# Project Structure Documentation

## Overview
This Next.js project has been organized into a clean, maintainable structure with three main pages: Home, Services, and Contact. The components have been modularized for reusability and easy maintenance.

## Directory Structure

```
src/
├── app/                          # Next.js 13+ App Router
│   ├── contact/
│   │   └── page.js              # Contact page
│   ├── services/
│   │   └── page.js              # Services page
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout
│   └── page.js                  # Home page
└── components/                   # Reusable components
    ├── ContactContent.js         # Contact page content
    ├── Footer.js                 # Site footer (shared)
    ├── Header.js                 # Site header with navigation (shared)
    ├── HeroSlider.js             # Home page hero slider
    ├── Layout.js                 # Layout wrapper component
    ├── ServicesContent.js        # Services page main content
    ├── ServicesHero.js           # Services page hero section
    └── index.js                  # Component exports
```

## Components Description

### Shared Components
- **Header.js**: Navigation header with responsive menu, logo, and dropdown menus for services and projects
- **Footer.js**: Site footer with company information, links, contact details, and certifications
- **Layout.js**: Wrapper component that includes Header and Footer, provides consistent layout

### Page-specific Components
- **HeroSlider.js**: Animated hero slider for the home page with multiple slides
- **ServicesHero.js**: Hero section specific to the services page
- **ServicesContent.js**: Main content area for the services page
- **ContactContent.js**: Contact form and sidebar information for the contact page

## Pages

### Home Page (`/`)
- Uses Layout component for header/footer
- Features HeroSlider component with rotating project images and content

### Services Page (`/services`)
- Uses Layout component for header/footer
- Features ServicesHero and ServicesContent components
- Shows program and project management information

### Contact Page (`/contact`)
- Uses Layout component for header/footer
- Features ContactContent component with contact form and office information

## Navigation
The navigation is implemented in the Header component and uses Next.js Link components for client-side routing between pages:
- Home: `/`
- Services: `/services`
- Contact: `/contact`

## Styling
- Uses Tailwind CSS for styling
- Responsive design with mobile-first approach
- Consistent color scheme (blue theme)
- Professional, clean design aesthetic

## Key Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Client-side Routing**: Fast navigation using Next.js routing
- **Modular Components**: Easy to maintain and extend
- **Reusable Layout**: Consistent header and footer across all pages
- **Interactive Elements**: Dropdowns, form validation, hero slider
- **Professional Styling**: Business-appropriate design with good UX

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open http://localhost:3000 in your browser

## Adding New Pages
1. Create a new folder in `src/app/` with the page name
2. Add a `page.js` file in that folder
3. Import and use the Layout component
4. Add any page-specific components to the `src/components/` directory
5. Update navigation in `Header.js` if needed
