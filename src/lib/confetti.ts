import Matter from "matter-js";

let activeBatches = 0;
let resizeHandler: (() => void) | null = null;

function getOrInitEngine() {
  if (typeof window === "undefined") return null;

  if ((window as any).confettiEngine) {
    return (window as any).confettiEngine;
  }

  let container = document.getElementById("confetti-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "confetti-container";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: container,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const floor = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 25,
      window.innerWidth * 3, // Wide enough for resize
      50,
      { isStatic: true }
    );
    const leftWall = Matter.Bodies.rectangle(
      -25,
      window.innerHeight / 2,
      50,
      window.innerHeight * 3,
      { isStatic: true }
    );
    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth + 25,
      window.innerHeight / 2,
      50,
      window.innerHeight * 3,
      { isStatic: true }
    );

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);
    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    (window as any).confettiEngine = engine;
    (window as any).confettiRender = render;
    (window as any).confettiRunner = runner;
    (window as any).confettiFloor = floor;
    (window as any).confettiRightWall = rightWall;

    resizeHandler = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition((window as any).confettiFloor, {
        x: window.innerWidth / 2,
        y: window.innerHeight + 25,
      });
      Matter.Body.setPosition((window as any).confettiRightWall, {
        x: window.innerWidth + 25,
        y: window.innerHeight / 2,
      });
    };
    window.addEventListener("resize", resizeHandler);
  }
  return (window as any).confettiEngine;
}

function tearDownEngine() {
  if (typeof window === "undefined") return;
  const engine = (window as any).confettiEngine;
  const render = (window as any).confettiRender;
  const runner = (window as any).confettiRunner;

  if (engine && render && runner) {
    Matter.Render.stop(render);
    Matter.Runner.stop(runner);
    Matter.Engine.clear(engine);
    if (render.canvas) render.canvas.remove();
  }

  const container = document.getElementById("confetti-container");
  if (container) {
    container.remove();
  }

  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
    resizeHandler = null;
  }

  delete (window as any).confettiEngine;
  delete (window as any).confettiRender;
  delete (window as any).confettiRunner;
  delete (window as any).confettiFloor;
  delete (window as any).confettiRightWall;
}

function scheduleCleanup(engine: Matter.Engine, bodies: Matter.Body[]) {
  activeBatches++;
  setTimeout(() => {
    Matter.Composite.remove(engine.world, bodies);
    activeBatches--;
    if (activeBatches <= 0) {
      activeBatches = 0;
      tearDownEngine();
    }
  }, 10000);
}

export function popMatterConfetti() {
  const engine = getOrInitEngine();
  if (!engine) return;

  const colors = ["#f472b6", "#38bdf8", "#fbbf24", "#a78bfa", "#34d399"];

  const bodies = [];
  for (let i = 0; i < 60; i++) {
    const x = window.innerWidth / 2 + (Math.random() - 0.5) * 50;
    const y = window.innerHeight * 0.2 + (Math.random() - 0.5) * 50;
    const color = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 8 + 6;
    const isCircle = Math.random() > 0.5;

    let body;
    if (isCircle) {
      body = Matter.Bodies.circle(x, y, size, {
        render: { fillStyle: color },
        restitution: 0.6,
        friction: 0.1,
      });
    } else {
      body = Matter.Bodies.rectangle(x, y, size * 2, size * 1.5, {
        render: { fillStyle: color },
        restitution: 0.6,
        friction: 0.1,
      });
    }

    Matter.Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 30,
      y: (Math.random() - 0.5) * 10 - 15,
    });

    Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.5);
    bodies.push(body);
  }

  Matter.Composite.add(engine.world, bodies);
  scheduleCleanup(engine, bodies);
}

export function popTinoCs() {
  const engine = getOrInitEngine();
  if (!engine) return;

  const particleCount = 60;
  const bodies = [];

  for (let i = 0; i < particleCount; i++) {
    const side = Math.random() > 0.5 ? "left" : "right";
    const startX = side === "left" ? 0 : window.innerWidth;
    const startY = window.innerHeight;

    const size = Math.random() * 20 + 25; // 25px to 45px

    const body = Matter.Bodies.rectangle(startX, startY, size, size, {
      render: {
        sprite: {
          texture: "/website/cupertino_c.png",
          xScale: size / 100, // Assuming natural size of image is ~100px. We scale down.
          yScale: size / 100,
        },
      },
      restitution: 0.6,
      friction: 0.1,
    });

    Matter.Body.setVelocity(body, {
      x: (Math.random() * 12 + 8) * (side === "left" ? 1 : -1),
      y: -(Math.random() * 18 + 15),
    });
    Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.5);

    bodies.push(body);
  }

  Matter.Composite.add(engine.world, bodies);
  scheduleCleanup(engine, bodies);
}
