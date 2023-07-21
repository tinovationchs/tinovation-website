<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />

  <slot />

  {#if $page.url.pathname !== "/"}
    <Footer />
  {/if}
</div>
