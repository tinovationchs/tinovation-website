<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />

  <div class="h-28 md:h-32">
  </div>

  <slot />

  {#if $page.url.pathname !== "/"}
    <Footer />
  {/if}
</div>
