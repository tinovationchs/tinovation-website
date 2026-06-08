<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { activeTheme, initTheme } from "$lib/theme";
  import { onMount } from "svelte";

  onMount(() => {
    initTheme();
  });

  $: colors = $activeTheme.colors;
  $: if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.style.setProperty("--color-retro-black", colors.black);
    root.style.setProperty("--color-retro-gray", colors.gray);
    root.style.setProperty("--color-retro-lightgray", colors.lightgray);
    root.style.setProperty("--color-retro-white", colors.white);
  }
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />

  <div class="h-28 md:h-32" />

  <slot />

  {#if $page.url.pathname !== "/"}
    <Footer />
  {/if}
</div>
