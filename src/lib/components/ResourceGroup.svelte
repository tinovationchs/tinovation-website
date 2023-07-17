<script lang="ts">
  import resourceCategories from "$lib/resources";

  export let category: string;
  export let resources: string[];
</script>

<div class="rounded-md border-2 border-retro-black bg-retro-white p-2 w-80">
    <h2>{category}</h2>
    <div class="flex flex-col">
      {#each resources as resource}
      <a href={`/resources/${resource}`} class="block border border-retro-black rounded">{resource}</a>
    {/each}
    </div>
    
    <div></div>
</div>