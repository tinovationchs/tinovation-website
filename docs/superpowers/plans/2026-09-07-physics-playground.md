# Physics Playground Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a hidden Easter egg where the navbar links fall down as Matter.js physics objects along with some fun bouncy shapes and a pendulum.

**Architecture:** A new Svelte component `PhysicsPlayground.svelte` acts as an absolute full-screen overlay. It initializes a Matter.js engine with walls, reads the DOM to clone the navbar links, replaces them, and syncs the clones' positions to falling bodies. The original `Navbar.svelte` adds a small toggle button to mount this component and hide the original links.

**Tech Stack:** SvelteKit, TailwindCSS, Matter.js

---

### Task 1: Install Dependencies

**Files:**

- Modify: `package.json`

- [ ] **Step 1: Install matter-js**

```bash
npm install matter-js
npm install --save-dev @types/matter-js
```

- [ ] **Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: install matter-js"
```

### Task 2: Create PhysicsPlayground Component

**Files:**

- Create: `src/lib/components/PhysicsPlayground.svelte`

- [ ] **Step 1: Create the basic overlay and engine setup**

```html
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Matter from "matter-js";

  export let navLinks: HTMLElement[] = [];
  export let close: () => void;

  let canvasContainer: HTMLDivElement;
  let engine: Matter.Engine;
  let render: Matter.Render;
  let runner: Matter.Runner;

  let clones: { element: HTMLElement; body: Matter.Body }[] = [];
  let updateFrame: number;

  onMount(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    engine = Engine.create();

    render = Render.create({
      element: canvasContainer,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 25,
      window.innerWidth,
      50,
      { isStatic: true }
    );
    const leftWall = Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(
      window.innerWidth + 25,
      window.innerHeight / 2,
      50,
      window.innerHeight,
      { isStatic: true }
    );

    Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Setup navbar clones
    navLinks.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const body = Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        { restitution: 0.8, friction: 0.1 }
      );

      const clone = link.cloneNode(true) as HTMLElement;
      clone.style.position = "absolute";
      clone.style.margin = "0";
      clone.style.top = "0";
      clone.style.left = "0";
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.transformOrigin = "center center";
      clone.style.pointerEvents = "none"; // let canvas handle mouse

      document.body.appendChild(clone);
      clones.push({ element: clone, body });
      Composite.add(engine.world, body);
    });

    // Fun elements
    const stack = Composites.stack(
      window.innerWidth / 2 - 100,
      0,
      5,
      4,
      0,
      0,
      (x: number, y: number) => {
        return Bodies.circle(x, y, 20, { restitution: 0.9, render: { fillStyle: "#ef4444" } });
      }
    );

    const softBody = Composites.softBody(200, 100, 5, 5, 0, 0, true, 18, {
      render: { visible: false },
    });

    Composite.add(engine.world, [stack, softBody]);

    // Mouse constraint
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);

    const syncDOM = () => {
      clones.forEach(({ element, body }) => {
        element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${
          body.position.y - element.offsetHeight / 2
        }px) rotate(${body.angle}rad)`;
      });
      updateFrame = requestAnimationFrame(syncDOM);
    };
    syncDOM();
  });

  onDestroy(() => {
    cancelAnimationFrame(updateFrame);
    clones.forEach((c) => c.element.remove());
    if (render) Matter.Render.stop(render);
    if (runner) Matter.Runner.stop(runner);
    if (engine) Matter.Engine.clear(engine);
    if (render) render.canvas.remove();
  });
</script>

<div class="pointer-events-none fixed inset-0 z-50">
  <!-- Escape button -->
  <button
    on:click="{close}"
    class="pointer-events-auto absolute right-4 top-4 z-[60] rounded-lg border-2 border-retro-black bg-retro-white px-4 py-2 font-header text-xl shadow-[4px_4px_0px_0px_#232222] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#232222]">
    Exit Playground
  </button>

  <div bind:this="{canvasContainer}" class="pointer-events-auto h-full w-full"></div>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/components/PhysicsPlayground.svelte
git commit -m "feat: create PhysicsPlayground component"
```

### Task 3: Integrate Trigger in Navbar

**Files:**

- Modify: `src/lib/components/Navbar.svelte`

- [ ] **Step 1: Add state, trigger, and hidden CSS class**

```html
<script>
  import { page } from "$app/stores";
  import info from "$lib/info";
  import PhysicsPlayground from "./PhysicsPlayground.svelte";

  let playgroundActive = false;
  let navContainer;

  function togglePlayground() {
    playgroundActive = true;
  }
</script>

<div class="fixed z-30 flex w-full flex-col items-center gap-4 py-4">
  <div>
    <nav
      bind:this="{navContainer}"
      class="text-semibold flex max-w-[calc(100vw-1rem)] flex-row flex-wrap justify-center gap-x-4 gap-y-1 rounded-3xl bg-retro-white px-4 py-1 font-header text-base opacity-90 shadow-md shadow-transparent transition ease-in hover:-translate-y-0.5 hover:shadow-retro-white sm:text-lg md:gap-x-8 md:px-10 md:py-1.5 md:text-2xl"
      class:opacity-0="{playgroundActive}">
      <!-- existing nav links here -->
      <!-- ... -->

      <!-- hidden trigger button -->
      <button
        on:click="{togglePlayground}"
        class="pointer-events-auto ml-2 opacity-10 transition-opacity hover:opacity-100">
        🍎
      </button>
    </nav>
  </div>
  <div
    class="rounded-3xl bg-retro-white px-4 py-1 font-header text-2xl"
    class:opacity-0="{playgroundActive}">
    {info.school_year} meetings:
    <span class="text-sky-600">{info.meeting_day}</span>
    @ {info.meeting_time}, {info.meeting_room}
  </div>
</div>

{#if playgroundActive} <PhysicsPlayground navLinks={Array.from(navContainer.querySelectorAll('a'))}
close={() => playgroundActive = false} /> {/if}
```

_Note: Ensure the existing nav links and routing logic remain intact. Add the `class:opacity-0={playgroundActive}` to hide the elements visually but allow them to stay mounted._

- [ ] **Step 2: Format and run check**

```bash
npm run format
npm run check
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/components/Navbar.svelte
git commit -m "feat: add physics playground trigger to navbar"
```
