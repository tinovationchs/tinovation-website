<svelte:head>
  <link rel="stylesheet" href="/css/atom-one-dark.min.css">
  <script src="/js/highlight.min.js"></script>
</svelte:head>

<slot></slot>


<script>
  import { onMount } from "svelte";

  onMount(() => {
    hljs?.highlightAll();
  });
</script>
