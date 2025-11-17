# k1d - Minimalist Portfolio

A minimalist portfolio website with glassmorphic design, inspired by Apple Notes.

## Features

- **Split Layout**: Left side with profile, right side with project cards
- **Glassmorphic Design**: Backdrop blur effects with subtle borders
- **Animated Ouroboros**: Rotating SVG logo in the header
- **3D Hover Effects**: Cards tilt on hover with enhanced glass effect
- **Dark Mode**: Default dark theme
- **Smooth Animations**: Framer Motion powered interactions

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Customization

To update the accent color, modify the `--accent` CSS variable in `app/globals.css`:

```css
:root {
  --accent: 120, 100%, 50%; /* HSL format */
}
```

Update social links in `components/ProfileSection.tsx`.

Update projects in `components/ProjectsGrid.tsx`.
