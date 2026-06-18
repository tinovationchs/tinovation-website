<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { initializeScrollAtTop } from "$lib/scroll.js";
  import "../app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    initializeScrollAtTop(window);
  });
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />

  <div class="h-28 md:h-32" />

  <slot />

  {#if $page.url.pathname !== "/"}
    <Footer />
  {/if}
</div>
