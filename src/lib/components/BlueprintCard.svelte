<script lang="ts">
  import type { Item } from "$lib/types";
  export let blueprint: Item;
</script>

<a
  href={`/resources/${blueprint.path}`}
  class="flex flex-col gap-2 rounded-xl border-2 border-retro-black bg-retro-white p-4 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#232222]">
  <h3 class="font-header text-2xl">{blueprint.displayName}</h3>
  {#if blueprint.description}
    <p class="text-sm text-retro-gray">{blueprint.description}</p>
  {/if}

  <div class="mt-auto flex flex-wrap gap-2 pt-2">
    {#if blueprint.difficulty}
      <span
        class="rounded-full border border-pink-400 bg-pink-200 px-2 py-1 text-xs font-bold text-pink-900">
        {blueprint.difficulty}
      </span>
    {/if}
    {#if blueprint.tech_stack}
      {#each blueprint.tech_stack as tech}
        <span
          class="rounded-full border border-blue-300 bg-blue-100 px-2 py-1 text-xs text-blue-800">
          {tech}
        </span>
      {/each}
    {/if}
  </div>
</a>
