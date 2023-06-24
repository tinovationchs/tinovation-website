<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>{data.metadata.title}</h1>
<h2>{data.metadata.authors.toString()}</h2>
<svelte:component this={data.component} />
