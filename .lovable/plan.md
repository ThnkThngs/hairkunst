

# Replace Photo Assets with Uploaded Images

## Overview
Replace all Unsplash stock photos with the 9 uploaded salon photos across 5 sections. The Story section gets expanded to showcase achievement photos alongside the existing stylist image.

## Image Mapping

| # | File | Section | Replaces |
|---|------|---------|----------|
| 1 | `The_image_features...` (purple hair) | **Hero** | Unsplash hero image |
| 2 | `bb.jpg` (stylist + client) | **Story** | Unsplash team photo |
| 3 | `IMG_2618.jpg` (training scene) | **Welcome/About** | Unsplash salon interior |
| 4 | `WhatsApp...10.51_edited.jpg` (storefront w/ menu) | **Outlet: The Curve** | Unsplash outlet image |
| 5 | `WhatsApp...31_2_1.jpeg` (Hijabis arched windows) | **Outlet: Melawati Mall** | Unsplash outlet image |
| 6 | `WhatsApp...26_1_1.jpeg` (plants/flowers storefront) | **Outlet: Shah Alam** | Unsplash outlet image |
| 7 | `WhatsApp...14.18.53_1.jpeg` (Dashing Diva interior) | **Dashing Diva** | Unsplash Dashing Diva image |
| 8 | `achievement.jpg` (certificate) | **Story** | New addition |
| 9 | `achievement2.jpg` (Asia Glory Awards) | **Story** | New addition |

## Implementation Steps

### 1. Copy all 9 images to `src/assets/`
Copy each uploaded file to a clean filename in `src/assets/` (e.g., `hero.jpg`, `story-stylist.jpg`, `about-training.jpg`, `outlet-curve.jpg`, `outlet-melawati.jpg`, `outlet-shahalam.jpg`, `dashing-diva.jpg`, `achievement-cert.jpg`, `achievement-award.jpg`).

### 2. Update HeroSection.tsx
- Import hero image from `@/assets/hero.jpg`
- Replace both desktop and mobile `src` URLs with the imported asset

### 3. Update AboutSection.tsx
- Import training image from `@/assets/about-training.jpg`
- Replace the background image URL

### 4. Update StorySection.tsx
- Import stylist image + both achievement images
- Replace the existing single image with the stylist photo
- Add a small gallery row below the main image showing the two achievement photos side by side (rounded corners, subtle shadow, same animation style)

### 5. Update OutletsSection.tsx
- Import all 3 outlet images
- Replace each outlet's `image` field with the corresponding imported asset

### 6. Update DashingDivaSection.tsx
- Import Dashing Diva interior image
- Replace the stock photo URL

### 7. Gallery & Instagram sections
- These remain unchanged (stock placeholders) since no gallery-specific photos were provided

## Technical Details
- All images imported as ES6 modules via `@/assets/` for Vite bundling and optimization
- No new components or CSS utilities needed
- Story section layout changes from single image to image + achievement row (flexbox column with gap)
- All existing responsive behavior, animations, and lazy loading preserved

