<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const konamiCode = ["t", "i", "n", "o"];
  let konamiIndex = 0;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key.toLowerCase() === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerConfetti();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  }

  function triggerConfetti() {
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      // 50% left, 50% right
      createParticle(Math.random() > 0.5 ? "left" : "right");
    }
  }

  function createParticle(side: "left" | "right") {
    const img = document.createElement("img");
    img.src = "/website/cupertino_c.png";
    img.style.position = "fixed";
    img.style.pointerEvents = "none";
    img.style.zIndex = "99999";

    const size = Math.random() * 20 + 25; // 25px to 45px
    img.style.width = `${size}px`;
    img.style.height = "auto";
    img.style.filter = "drop-shadow(0px 4px 6px rgba(0,0,0,0.3))";

    // Start at bottom corners
    let startX = side === "left" ? -50 : window.innerWidth + 50;
    let startY = window.innerHeight;

    let x = startX;
    let y = startY;

    // Shoot inwards and upwards
    let vx = (Math.random() * 12 + 8) * (side === "left" ? 1 : -1);
    let vy = -(Math.random() * 18 + 15);

    let rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 30;

    const gravity = 0.5;
    const drag = 0.99; // Air resistance

    document.body.appendChild(img);

    function animate() {
      vx *= drag;
      vy += gravity;

      x += vx;
      y += vy;
      rotation += rotationSpeed;

      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      if (y < window.innerHeight + 100) {
        requestAnimationFrame(animate);
      } else {
        img.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", handleKeydown);
    }
  });
</script>
