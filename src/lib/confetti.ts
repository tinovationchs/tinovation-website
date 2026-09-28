import Matter from "matter-js";

export function popMatterConfetti() {
  if (typeof window === "undefined") return;

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
      }
    });

    const floor = Matter.Bodies.rectangle(
      window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, { isStatic: true }
    );
    const leftWall = Matter.Bodies.rectangle(
      -25, window.innerHeight / 2, 50, window.innerHeight * 2, { isStatic: true }
    );
    const rightWall = Matter.Bodies.rectangle(
      window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight * 2, { isStatic: true }
    );

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);
    Matter.Render.run(render);
    
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    (window as any).confettiEngine = engine;
  }

  const engine = (window as any).confettiEngine;
  const colors = ['#f472b6', '#38bdf8', '#fbbf24', '#a78bfa', '#34d399'];
  
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
      y: (Math.random() - 0.5) * 10 - 15
    });
    
    Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.5);
    bodies.push(body);
  }
  
  Matter.Composite.add(engine.world, bodies);
}
