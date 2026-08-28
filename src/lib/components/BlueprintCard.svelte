<script lang="ts">
  import type { Item } from "$lib/types";
  export let blueprint: Item;
</script>

<a
  href={`/resources/${blueprint.path}`}
  class="relative flex flex-col gap-2 overflow-hidden rounded-xl border-2 border-retro-black bg-blue-900 p-5 font-mono transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#232222]">
  <!-- Blueprint grid background -->
  <div
    class="pointer-events-none absolute inset-0 opacity-20"
    style="background-image: linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px); background-size: 20px 20px;" />

  <div class="relative z-10 flex h-full flex-col gap-2">
    <div class="flex items-center justify-between border-b border-blue-400/50 pb-2">
      <h3 class="font-header text-2xl text-white">{blueprint.displayName}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-6 w-6 text-blue-300">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.25 9.75L19.5 15l-5.25 5.25m-6-10.5L3 15l5.25 5.25" />
      </svg>
    </div>

    {#if blueprint.description}
      <p class="text-sm text-blue-100">{blueprint.description}</p>
    {/if}

    <div class="mt-auto flex flex-wrap gap-2 pt-4">
      {#if blueprint.difficulty}
        <span
          class="rounded border border-blue-400 bg-blue-800 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#60a5fa]">
          {blueprint.difficulty}
        </span>
      {/if}
      {#if blueprint.tech_stack}
        {#each blueprint.tech_stack as tech}
          <span
            class="rounded border border-blue-500 bg-blue-950 px-2 py-0.5 text-xs text-blue-100 shadow-[2px_2px_0px_0px_#1e3a8a]">
            {tech}
          </span>
        {/each}
      {/if}
    </div>
  </div>
</a>
