<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import CustomCursor from "$lib/components/CustomCursor.svelte";
  import { activeTheme, initTheme } from "$lib/theme";
  import { initializeScrollAtTop } from "$lib/scroll.js";
  import "../app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    initializeScrollAtTop(window);
    initTheme();
  });

  $: if (typeof document !== "undefined" && $activeTheme) {
    document.documentElement.style.setProperty("--color-retro-black", $activeTheme.colors.black);
    document.documentElement.style.setProperty("--color-retro-gray", $activeTheme.colors.gray);
    document.documentElement.style.setProperty(
      "--color-retro-lightgray",
      $activeTheme.colors.lightgray
    );
    document.documentElement.style.setProperty("--color-retro-white", $activeTheme.colors.white);
  }
</script>

<CustomCursor />

<div class="flex min-h-screen flex-col">
  <Navbar />

  <div class="h-28 md:h-32" />

  <slot />

  {#if $page.url.pathname !== "/"}
    <Footer />
  {/if}

  <ThemeSwitcher />
</div>
