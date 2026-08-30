<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { spring } from "svelte/motion";

  let clientX = -100;
  let clientY = -100;
  let isVisible = false;
  let isHovering = false;

  // Small dot follows instantly
  $: dotX = clientX;
  $: dotY = clientY;

  // Ring follows with spring physics
  const ringX = spring(-100, { stiffness: 0.1, damping: 0.25 });
  const ringY = spring(-100, { stiffness: 0.1, damping: 0.25 });
  const ringSize = spring(30, { stiffness: 0.2, damping: 0.4 });

  function handleMouseMove(e: MouseEvent) {
    clientX = e.clientX;
    clientY = e.clientY;
    ringX.set(clientX);
    ringY.set(clientY);

    if (!isVisible) isVisible = true;
  }

  function handleMouseLeave() {
    isVisible = false;
  }

  function handleMouseEnter() {
    isVisible = true;
  }

  function handleHoverStart(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, input, [role='button']");
    if (isClickable) {
      isHovering = true;
      ringSize.set(50); // Expand ring on hover
    }
  }

  function handleHoverEnd(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, input, [role='button']");
    if (isClickable) {
      isHovering = false;
      ringSize.set(30); // Reset ring size
    }
  }

  onMount(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseover", handleHoverStart);
      window.addEventListener("mouseout", handleHoverEnd);

      // Hide default cursor on body
      document.body.style.cursor = "none";

      // Add global style to hide cursor on all elements
      const style = document.createElement("style");
      style.id = "custom-cursor-style";
      style.innerHTML = `
        * { cursor: none !important; }
      `;
      document.head.appendChild(style);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);

      const style = document.getElementById("custom-cursor-style");
      if (style) style.remove();
      document.body.style.cursor = "auto";
    }
  });
</script>

{#if isVisible}
  <!-- Inner Dot -->
  <div
    class="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 mix-blend-difference transition-transform duration-75"
    style="left: {dotX}px; top: {dotY}px; transform: translate(-50%, -50%) scale({isHovering
      ? 0
      : 1});" />

  <!-- Outer Ring with spring physics -->
  <div
    class="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pink-400 mix-blend-difference"
    style="
      left: {$ringX}px; 
      top: {$ringY}px; 
      width: {$ringSize}px; 
      height: {$ringSize}px;
      background-color: {isHovering ? 'rgba(244, 114, 182, 0.2)' : 'transparent'};
    " />
{/if}
