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
  <!-- Modern macOS Sequoia Pointer -->
  <div
    class="pointer-events-none fixed left-0 top-0 z-[100] transition-transform duration-75"
    style="
      left: {clientX}px; 
      top: {clientY}px; 
      transform: translate({isHovering ? '-9px' : '-8px'}, {isHovering
      ? '-1px'
      : '-2px'}) scale({isClicking ? 0.85 : 1});
      transform-origin: top left;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4));
    ">
    {#if isHovering}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10,13.8c-0.2-0.3-0.5-0.8-0.9-1.5c-0.2-0.4-0.9-1.1-1.1-1.4c-0.2-0.3-0.2-0.5-0.1-0.8c0.1-0.5,0.5-0.8,1-0.8c0.4,0,0.8,0.3,1,0.5c0.2,0.2,0.4,0.5,0.5,0.6c0.1,0.2,0.1,0.2,0.3,0.4c0.2,0.2,0.2,0.4,0.1,0.1C10.7,10.5,10.6,9.9,10.5,9.3C10.4,8.9,10.3,8.8,10.2,8.5C10.1,8.1,10.1,7.9,10,7.5C9.9,7.3,9.8,6.7,9.8,6.4C9.7,6,9.7,5.3,10,5C10.2,4.8,10.7,4.7,11,4.9c0.4,0.2,0.6,0.8,0.7,1c0.2,0.4,0.3,0.9,0.4,1.5c0.2,0.8,0.4,1.9,0.4,2.1c0-0.3-0.1-0.8,0-1.1c0.1-0.2,0.2-0.5,0.5-0.6C13.2,7.7,13.5,7.7,13.7,7.7c0.2,0.1,0.5,0.2,0.6,0.4c0.3,0.5,0.3,1.4,0.3,1.4c0.1-0.3,0.1-0.9,0.2-1.2c0.1-0.2,0.4-0.3,0.5-0.4c0.2-0.1,0.5-0.1,0.8,0c0.2,0,0.5,0.2,0.5,0.4C16.8,8.5,16.8,9.3,16.9,9.6c0,0.1,0.1-0.3,0.2-0.5c0.3-0.5,1.4-0.6,1.4,0.5c0,0.5,0,0.5,0,0.8c0,0.4,0,0.6,0,0.9c0,0.3-0.1,1-0.2,1.3c-0.1,0.2-0.3,0.8-0.5,1.1c0,0-0.8,0.9-0.9,1.4c-0.1,0.5-0.1,0.5-0.1,0.8c0,0.3,0.1,0.7,0.1,0.7s-0.6,0.1-0.9,0c-0.3-0.1-0.7-0.6-0.8-0.8c-0.2-0.2-0.4-0.2-0.5,0c-0.2,0.3-0.5,0.8-0.8,0.8c-0.5,0.1-1.6,0-2.3,0c0,0,0.2-0.8-0.2-1.1c-0.2-0.2-0.6-0.6-0.8-0.8L10,13.8z"
          fill="black"
          stroke="white"
          stroke-width="1.2"
          stroke-linejoin="round" />
      </svg>
    {:else}
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.15 3.19C9.72 2.76 9 3.06 9 3.67V27.39C9 28.02 9.75 28.31 10.17 27.84L14.93 22.56L19.46 31.25C19.64 31.6 20.06 31.75 20.42 31.56L23.47 29.98C23.82 29.79 23.97 29.37 23.8 29.02L19.26 20.4H25.32C25.93 20.4 26.23 19.65 25.79 19.24L10.15 3.19Z"
          fill="black"
          stroke="white"
          stroke-width="1.5"
          stroke-linejoin="round" />
      </svg>
    {/if}
  </div>
{/if}
