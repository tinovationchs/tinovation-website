<script>
  import info from "$lib/info";
</script>

<div
  class="mt-auto w-full rounded-t-3xl bg-retro-black px-1 py-4 pb-7 text-center font-header text-retro-lightgray">
  <slot />

  <div class="text-base">
    © {info.copyright_year}
    <span class="transition duration-100 ease-in-out hover:text-retro-white">Tinovation</span>. Made
    with
    <a
      href="https://kit.svelte.dev/"
      target="_blank"
      class="underline-offset-2 transition duration-100 ease-in-out hover:text-orange-300 hover:underline">
      SvelteKit</a>
    &
    <a
      href="https://tailwindcss.com/"
      target="_blank"
      class="underline-offset-2 transition duration-100 ease-in-out hover:text-blue-300 hover:underline">
      Tailwind</a
    >.
  </div>
</div>
