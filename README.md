# Alphe.AI Landing Page

A modern, responsive landing page built with Next.js 15, React 19, and Tailwind CSS. Features smooth animations, infinite marquee, and scroll-triggered effects.

## Features

- **Modern Design**: Earthy gradient background (#F8F4D9 to #D3CD99) with soft, professional aesthetics
- **Space Grotesk Font**: Clean, modern typography throughout
- **Smooth Scroll**: Implemented with Lenis for buttery smooth scrolling
- **Animations**: Framer Motion for sophisticated entrance and scroll animations
- **Responsive**: Fully responsive design for mobile and desktop
- **84% Width Layout**: Clean, centered layout with 8% padding on each side
- **Infinite Marquee**: Smooth, seamless logo carousel with blur effects
- **Scroll-Triggered Cards**: Cards animate into view as you scroll
- **Fixed Sidebar**: Left section stays fixed while right cards scroll

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lenis** - Smooth scroll library
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx          # Root layout with Space Grotesk font
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with gradient background
├── components/
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── Navbar.tsx          # Transparent navbar with rounded corners
│   ├── Hero.tsx            # Hero section with logo and CTA
│   ├── TrustSection.tsx    # Trust section with infinite marquee
│   ├── ProblemsSection.tsx # Problems section with card grid
│   └── WhatWeBuildSection.tsx # Split layout with fixed text
└── public/
    └── logo.png            # Alphe.AI logo
```

## Customization

### Replace Placeholder Content

1. **Company Logos**:
   - Add your company logo images to the `public/` folder
   - Update `TrustSection.tsx` to use actual logo images instead of placeholder text

2. **Icons**:
   - Icons are from Lucide React library
   - Replace with custom icons in component files if needed

3. **Colors**:
   - Main gradient: `globals.css` (lines 23-24)
   - Component colors: Update in individual component files

4. **Content**:
   - Navbar: `components/Navbar.tsx`
   - Hero tagline: `components/Hero.tsx`
   - Problem cards: `components/ProblemsSection.tsx`
   - Solutions: `components/WhatWeBuildSection.tsx`

## Sections Overview

### Navbar
- Full-width (90% max) with transparent background
- Logo on left, navigation items on right
- Fully rounded corners with backdrop blur

### Hero Section
- Centered logo
- Impactful tagline about AI infrastructure
- "Try Alphe.AI" button with transparent background and rounded border

### Trust Section
- "Trusted by developers and enterprises" text
- Infinite marquee at 80% width
- Blurred edges on left and right
- Smooth continuous scroll animation

### Problems Section
- Headline and subhead
- Red highlight box (#f05c55) with crisis message
- 3 problem cards in a row
- 1 wide security card below
- Result box with gradient background

### What We Are Building Section
- Split layout: Fixed text on left, scrollable cards on right
- Cards animate into view as you scroll
- Each card has an icon and description

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel
```

## Performance Optimizations

- Next.js Image component for optimized images
- Font optimization with next/font/google
- Smooth animations without layout shifts
- Efficient scroll handling with Lenis
- Framer Motion animations optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
