<script type="ts">
  import hljs from "highlight.js";
  import { onMount } from "svelte";

  onMount(() => {
    hljs.highlightAll();
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/atom-one-dark.min.css" />
</svelte:head>

<slot />
