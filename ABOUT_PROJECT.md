# About This Project: Interactive WebGL Portfolio

This project is built using a modern "Creative Web Development" tech stack. It's designed to be a highly interactive, fluid, and immersive 3D portfolio—often referred to as an "Awwwards-winning" style website.

## 📚 Core Terminologies

- **WebGL (Web Graphics Library):** A JavaScript API for rendering high-performance interactive 2D and 3D graphics within any compatible web browser without using plug-ins. It draws directly to an HTML `<canvas>`.
- **Shaders (Vertex & Fragment):** Tiny programs written in GLSL that run directly on the GPU to calculate positions and colors of pixels at lightning speed. Used for distortion, liquid, or grain effects.
- **Smooth Scrolling / Scroll Hijacking:** Using "Virtual Scrolling" where the default scrollbar is disabled, and the page is moved using math and CSS transforms to create a buttery-smooth, inertia-based scroll.
- **Kinesthetic/Physics-Based Animation:** Animations that use virtual springs, mass, and friction instead of fixed times, making movement feel organic and responsive.
- **Micro-interactions:** Tiny, subtle animations (like a custom cursor morphing on hover).
- **Parallax:** Background elements moving at a slower speed than foreground elements to create an illusion of depth.

## 🛠️ The Tech Stack (As seen in `package.json`)

This project relies on industry-standard tools for rendering and animation:

### The Visuals (3D & WebGL)
- **Three.js (`three`):** The core 3D library for the web.
- **React Three Fiber (`@react-three/fiber`):** A React renderer for Three.js, allowing 3D scenes to be built as React components.
- **React Three Drei (`@react-three/drei`):** Useful helpers for R3F (cameras, controls, environment lighting).
- **React Three Rapier (`@react-three/rapier`):** A 3D physics engine for the web (handles gravity, collisions).

### The Movement (DOM Animation)
- **GSAP (`gsap`):** The industry standard for complex choreographies and scroll-based animations.
- **GSAP React (`@gsap/react`):** React-specific hooks for using GSAP safely in components without memory leaks.

## 🚀 Why is it so smooth?

Achieving 60-120 FPS on the web requires specific techniques:

1. **Hardware Acceleration (GPU vs. CPU):** Smooth animations ONLY animate `transform` (translate, scale, rotate) and `opacity`. The browser passes these directly to the GPU, avoiding expensive DOM layout recalculations (thrashing).
2. **`requestAnimationFrame` (rAF):** Animations sync perfectly with the monitor's refresh rate instead of using clunky `setInterval` timers.
3. **Drawing to the `<canvas>`:** Bypassing the DOM entirely allows the GPU to render thousands of objects (like particles) without crashing the browser.
4. **Sub-pixel Rendering:** CSS transforms don't snap to whole pixels, preventing "stair-stepping" jitter when elements move slowly.

## 💡 How to Create "Perfect" Animations

To elevate the animations in this project:
- **Master the Easing:** Avoid linear animations. Use custom bezier curves or GSAP's `power4.out`/`expo.inOut` so elements glide to a smooth halt.
- **Choreography & Staggering:** Animate elements sequentially (e.g., stagger a grid of images so they appear one by one with a tiny delay).
- **Tie Animation to User Input:** Link camera movement to mouse coordinates or trigger animations based on scroll position (`ScrollTrigger`).
- **Keep it Clean:** Always use the `useGSAP()` hook to manage animations and automatically clean them up when components unmount.
