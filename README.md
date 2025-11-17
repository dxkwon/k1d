# k1d - Interactive Apple Notes Portfolio

A minimalist portfolio website inspired by Apple Notes with glassmorphic design and beautiful micro animations.

## Design Philosophy

This portfolio combines the clean simplicity of Apple Notes with interactive glassmorphic elements and storytelling through design. Every element is crafted with attention to micro-interactions, scroll-triggered animations, and smooth transitions.

## Features

- **Apple Notes Aesthetic**: Single-column note-style layout with SF Pro Display typography
- **Glassmorphic Design**: Enhanced backdrop blur effects with subtle borders and depth
- **Animated Ouroboros**: Subtly rotating SVG logo symbolizing continuous growth
- **Micro Animations**: Scroll-triggered reveals, staggered entrances, and smooth transitions
- **Interactive Elements**: Hover effects, click states, and fluid motion throughout
- **Note Header**: Time-stamped header with availability status
- **Highlighted Projects**: Accent indicators for standout achievements
- **Dark Mode**: Default dark theme matching Apple's design language

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations

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

### Accent Color
Update the `--accent` CSS variable in `app/globals.css`:

```css
:root {
  --accent: 255, 204, 0; /* RGB format */
}
```

### Social Links
Update social links in `app/page.tsx` (socialLinks array)

### Projects
Update projects in `app/page.tsx` (projects array)

### Color Theme
Modify color variables in `app/globals.css`:
```css
:root {
  --note-bg: 18, 18, 18;
  --note-paper: 28, 28, 30;
  --note-border: 48, 48, 51;
}
```

## Components

- `NoteHeader` - Time-stamped header with status indicator
- `Ouroboros` - Animated SVG logo
- `AnimatedText` - Scroll-triggered text reveal wrapper
- `NoteProject` - Glassmorphic project card with micro animations

## Inspiration

Design inspired by [wabi.ai](https://wabi.ai) and [alanagoyal.com](https://www.alanagoyal.com/notes/about-me)
