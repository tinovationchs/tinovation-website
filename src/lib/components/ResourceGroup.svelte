<script lang="ts">
  import resourceCategories from "$lib/resources";

  export let category: string;
  export let resources: string[];
</script>

<div class="w-80 rounded-md border-2 border-retro-black bg-retro-white p-2 text-center">
  <p class="text-lg">{category}</p>
  <div class="flex flex-col gap-2">
    {#each resources as resource}
      <a href={`/resources/${resource}`} class="block rounded border border-retro-black"
        >{resource}</a>
    {/each}
  </div>

  <div />
</div>
