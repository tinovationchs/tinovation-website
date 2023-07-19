<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{"Error - Tinovation"}</title>
</svelte:head>

<div class="fixed mt-20 flex w-full flex-row justify-center md:mt-24">
  <div class="flex flex-col gap-4">
    <h1 class="font-header text-4xl font-semibold text-retro-white md:text-6xl">
      {`${$page.error?.message} :(`}
    </h1>
    <img class="w-full rounded-lg" src="/sad_cat.gif" alt="sad cat gif" />
    <a
      href="/"
      class="text-center text-xl text-retro-white transition ease-in hover:scale-105 hover:text-amber-600">
      back to home

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        class="ml-1 inline-block h-5 w-5 -translate-y-0.5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    </a>
  </div>
</div>
