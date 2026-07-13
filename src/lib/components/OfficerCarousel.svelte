<script lang="ts">
  import { onMount } from "svelte";

  // Officer profiles with simplified display roles and color styling matching the retro theme
  const officers = [
    {
      name: "Mr. Ferrante",
      displayRole: "advisor",
      accentBg: "bg-pink-400/20",
      dotColor: "bg-pink-500",
    },
    {
      name: "Prakruti Sunil",
      displayRole: "coprez",
      accentBg: "bg-purple-400/20",
      dotColor: "bg-purple-500",
    },
    {
      name: "Bernard Freund",
      displayRole: "coprez",
      accentBg: "bg-purple-400/20",
      dotColor: "bg-purple-500",
    },
    {
      name: "Arnav Gokhale",
      displayRole: "vp",
      accentBg: "bg-blue-400/20",
      dotColor: "bg-blue-500",
    },
    {
      name: "Connor Wang",
      displayRole: "sec / treas",
      accentBg: "bg-green-400/20",
      dotColor: "bg-green-500",
    },
    {
      name: "Amogh Bhatta",
      displayRole: "officer",
      accentBg: "bg-rose-400/20",
      dotColor: "bg-rose-500",
    },
    {
      name: "Michael Zhao",
      displayRole: "officer",
      accentBg: "bg-rose-400/20",
      dotColor: "bg-rose-500",
    },
    {
      name: "Adarsh Sudheer",
      displayRole: "officer",
      accentBg: "bg-rose-400/20",
      dotColor: "bg-rose-500",
    },
    {
      name: "Shreeansh Bharadwaj",
      displayRole: "officer",
      accentBg: "bg-rose-400/20",
      dotColor: "bg-rose-500",
    },
  ];

  let scrollContainer: HTMLDivElement;
  let showLeftBtn = false;
  let showRightBtn = true;

  function handleScroll() {
    if (!scrollContainer) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    showLeftBtn = scrollLeft > 10;
    // Keep a buffer of 10px to account for floating point rounding
    showRightBtn = scrollLeft < scrollWidth - clientWidth - 10;
  }

  function scroll(direction: "left" | "right") {
    if (!scrollContainer) return;
    // Scroll by roughly 1 card width (256px) + gap (24px)
    const cardOffset = 280;
    scrollContainer.scrollBy({
      left: direction === "left" ? -cardOffset : cardOffset,
      behavior: "smooth",
    });
  }

  onMount(() => {
    handleScroll();
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="relative w-full">
  <!-- HEADER & BUTTONS -->
  <div class="mb-6 flex items-center justify-between">
    <h2 class="font-header text-4xl text-retro-white">The Officer Team</h2>
    <div class="flex gap-2">
      <!-- Left Scroll Button -->
      <button
        on:click={() => scroll("left")}
        class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-retro-black bg-retro-white text-retro-black shadow-[2px_2px_0px_0px_#232222] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#232222] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#232222] disabled:pointer-events-none disabled:opacity-40"
        disabled={!showLeftBtn}
        type="button"
        aria-label="Scroll left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <!-- Right Scroll Button -->
      <button
        on:click={() => scroll("right")}
        class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-retro-black bg-retro-white text-retro-black shadow-[2px_2px_0px_0px_#232222] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#232222] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#232222] disabled:pointer-events-none disabled:opacity-40"
        disabled={!showRightBtn}
        aria-label="Scroll right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>

  <!-- SCROLLABLE CAROUSEL CONTAINER -->
  <div
    bind:this={scrollContainer}
    class="hide-scrollbar flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 py-4">
    {#each officers as officer}
      <div
        class="group relative flex h-60 w-64 shrink-0 select-none snap-start flex-col justify-between rounded-2xl border-2 border-retro-black bg-retro-white p-6 text-retro-black shadow-[4px_4px_0px_0px_#232222] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#232222]">
        <!-- CARD BACKDROP GRID PATTERN (Subtle Tech Aesthetic) -->
        <div
          class="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-[0.03]"
          style="background-image: radial-gradient(circle, #232222 1px, transparent 1px); background-size: 16px 16px;" />

        <!-- TOP CARD INFO -->
        <div class="flex flex-col items-center">
          <!-- Animated Custom Logo Avatar (No Emoji, using Tinovation lightbulb logo) -->
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-retro-black {officer.accentBg} transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
            <img src="/website/new_logo.svg" alt="" aria-hidden="true" class="h-10 w-10" />
          </div>

          <!-- Officer Name -->
          <h3
            class="mt-4 text-center font-header text-2xl font-bold leading-tight tracking-wide text-retro-black">
            {officer.name}
          </h3>

          <!-- Simplified Display Role (e.g. coprez, vp, advisor, sec / treas) -->
          <p
            class="text-retro-gray/80 mt-1 font-sans text-sm font-semibold uppercase tracking-wider">
            {officer.displayRole}
          </p>
        </div>

        <!-- BOTTOM CARD DECORATION -->
        <div
          class="border-retro-black/10 text-retro-gray/60 flex items-center justify-between border-t pt-3 text-[10px] font-semibold">
          <span>TINOVATION '26</span>
          <!-- Dynamic accent glow dot -->
          <div
            class="border-retro-black/20 flex h-4 w-4 items-center justify-center rounded-full border bg-retro-white">
            <span
              class="border-retro-black/30 h-2 w-2 rounded-full border {officer.dotColor} animate-pulse" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Utility rule to hide standard scrollbars while preserving scrolling functionality */
  .hide-scrollbar {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Opera */
  }
</style>
