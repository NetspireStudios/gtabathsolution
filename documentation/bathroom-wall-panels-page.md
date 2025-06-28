# Bathroom Wall Panels Service Page Documentation

## File Location
`app/services/bathroom-wall-panels/page.tsx`

## Overview
This page showcases the bathroom wall panels service using a dynamic, reusable `ServiceDetailPage` component. The page features modern animations, responsive design, and comprehensive service information.

## Key Components

### 1. Service Page Component (Lines 1-99)
```typescript
export default function BathroomWallPanelsPage() {
  return <ServiceDetailPage {...bathroomWallPanelsContent} />
}
```
The main component passes structured content data to the reusable `ServiceDetailPage` component.

### 2. Content Structure (Lines 5-95)
The `bathroomWallPanelsContent` object contains:

#### Basic Information (Lines 6-10)
```typescript
title: 'Bathroom Wall Panels',
subtitle: 'Transform Your Shower in Just One Day',
icon: Waves,
heroImage: 'https://images.unsplash.com/...',
description: `Are you tired of your old shower...`
```

#### Main Content Sections (Lines 12-27)
Three content blocks explaining:
- Quick & Easy Installation
- 100% Waterproof properties
- Low Maintenance benefits

#### Features List (Lines 29-38)
Eight key features including:
- Grout-free installation
- 100% waterproof
- 3-year warranty
- 1-day installation

#### Process Steps (Lines 40-60)
Four-step process:
1. Free Consultation
2. Custom Design
3. Professional Installation
4. Final Inspection

#### Pricing Information (Lines 62-70)
- Starting price: From $1,200
- Factors affecting price:
  - Shower/bathroom size
  - Current condition
  - Selected materials
  - Additional features

#### FAQs (Lines 72-90)
Four frequently asked questions covering:
- Installation time
- Wall panels vs tiles comparison
- Installation over existing tiles
- Available styles

#### Related Services (Lines 92-96)
Links to three related services:
- Bathtub chip repair
- Bathtub & tiles reglazing
- Walk-in tub

## ServiceDetailPage Component Features

### Hero Section
- Full-width background image with gradient overlay
- Breadcrumb navigation
- Service icon display
- Title and subtitle
- Call-to-action buttons

### Main Content Area
- Two-column layout (content + sidebar)
- Animated content sections
- Expandable FAQ accordion
- Step-by-step process display

### Sidebar Features
- Sticky positioning
- Key features checklist
- Pricing information
- Trust badges (warranty, support, etc.)
- Primary CTA button

### Bottom Sections
- Related services grid
- Full-width CTA section with gradient background

## Animations & Interactions
- Framer Motion animations on scroll
- Staggered animations for lists
- Hover effects on buttons and links
- Accordion functionality for FAQs
- Smooth transitions throughout

## Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen sizes
- Touch-friendly interactive elements
- Optimized image loading

## SEO Considerations
- Structured content hierarchy
- Descriptive headings
- Alt text for images
- Internal linking to related services
- Clear call-to-action elements

## Performance Optimizations
- Next.js Image component for optimized loading
- Lazy loading animations
- Component code splitting
- Minimal external dependencies 