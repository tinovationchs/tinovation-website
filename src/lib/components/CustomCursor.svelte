<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let clientX = -100;
  let clientY = -100;
  let isVisible = false;
  let isClicking = false;
  let isHovering = false;

  function handleMouseMove(e: MouseEvent) {
    clientX = e.clientX;
    clientY = e.clientY;

    if (!isVisible) isVisible = true;
  }

  function handleMouseLeave() {
    isVisible = false;
  }

  function handleMouseEnter() {
    isVisible = true;
  }

  function handleMouseDown() {
    isClicking = true;
  }

  function handleMouseUp() {
    isClicking = false;
  }

  function handleHoverStart(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, input, [role='button']");
    if (isClickable) {
      isHovering = true;
    }
  }

  function handleHoverEnd(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickable = target.closest("a, button, input, [role='button']");
    if (isClickable) {
      isHovering = false;
    }
  }

  onMount(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseover", handleHoverStart);
      window.addEventListener("mouseout", handleHoverEnd);

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
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);

      const style = document.getElementById("custom-cursor-style");
      if (style) style.remove();
    }
  });
</script>

{#if isVisible}
  <!-- Retro Mac Pointer -->
  <div
    class="pointer-events-none fixed left-0 top-0 z-[100] transition-transform duration-75"
    style="
      left: {clientX}px; 
      top: {clientY}px; 
      transform: translate({isHovering ? '-10.5px' : '0px'}, 0px) scale({isClicking ? 0.85 : 1});
      transform-origin: top left;
    ">
    {#if isHovering}
      <img
        src="/mac-hand.png"
        alt="pointing hand"
        style="image-rendering: pixelated;"
        class="h-6 w-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" />
    {:else}
      <img
        src="/mac-arrow.png"
        alt="arrow pointer"
        style="image-rendering: pixelated;"
        class="h-6 w-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" />
    {/if}
  </div>
{/if}
