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
    }, { stiffness: 0.9 });

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
        element.style.transform = `translate(${body.position.x - rectOffset(element).x}px, ${
          body.position.y - rectOffset(element).y
        }px) rotate(${body.angle}rad)`;
      });
      updateFrame = requestAnimationFrame(syncDOM);
    };

    const rectOffset = (el: HTMLElement) => ({
      x: el.offsetWidth / 2,
      y: el.offsetHeight / 2,
    });

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
    on:click={close}
    class="pointer-events-auto absolute right-4 top-4 z-[60] rounded-lg border-2 border-retro-black bg-retro-white px-4 py-2 font-header text-xl shadow-[4px_4px_0px_0px_#232222] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#232222]">
    Exit Playground
  </button>

  <div bind:this={canvasContainer} class="pointer-events-auto h-full w-full" />
</div>
