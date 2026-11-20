# Hidden Physics Playground Design

## Overview

A hidden Easter egg inside the Navbar that turns the menu items into a Matter.js physics playground. When triggered, the actual menu visually disappears, and physics-enabled clones drop to the bottom of the screen alongside other complex physics bodies.

## 1. Trigger & Setup

- **Trigger**: A small, inconspicuous icon (e.g., an apple or gravity symbol) placed on the right side of the Navbar.
- **Overlay Component**: A new Svelte component (`PhysicsPlayground.svelte`) will be mounted over the entire screen (`fixed`, `inset-0`, `z-50`, `pointer-events-none` for the background, but allowing interaction with physics objects).
- **Hiding the Menu**: The original Navbar links will have their opacity set to `0` to hide them while the playground is active.

## 2. Core Physics Mechanics & DOM Synchronization

- **Engine & World**: A Matter.js engine will be initialized.
- **Boundaries**: Static bodies will be placed at the left, right, and bottom (the floor) of the viewport to keep objects on screen.
- **Menu Bodies**: We will calculate the initial `BoundingClientRect` of each visible menu link and spawn a corresponding Matter.js rectangle body at those exact coordinates.
- **DOM Syncing**: For each menu link, an absolutely positioned HTML `<div>` clone will be created. On every `Engine.update` tick, these clones will have their `transform: translate(x, y) rotate(rad)` updated to perfectly match their corresponding Matter.js bodies.
- **Interactivity**: A `MouseConstraint` will be added so the user can drag, toss, and interact with the falling menu links.

## 3. Fun Physics Features (Matter.js Showcase)

In addition to the menu links, the playground will spawn a variety of unique Matter.js objects:

- **Newton's Cradle / Pendulum**: A constraint-based swinging pendulum attached near the top.
- **Soft Body**: A squishy, deformable object made of multiple particles connected by springs (using `Composites.softBody`).
- **Mixed Stacks**: Stacks of varied shapes (polygons, circles) with bouncy/restitution properties that cascade down.
- **Car Composite**: A basic wheeled vehicle using `Composites.car` that rolls into the scene.

## 4. Teardown / Escape Hatch

- **Exit Trigger**: An obvious "Close" or "Reset" button (or pressing the `Escape` key) will tear down the playground.
- **Cleanup**: On close, the Matter.js engine is destroyed, the requestAnimationFrame loop is cancelled, the DOM clones are removed, and the original Navbar opacity is restored to `1`.
