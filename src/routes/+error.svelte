<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{"Error - Tinovation"}</title>
</svelte:head>

<div class="fixed mt-20 flex w-full flex-row justify-center md:mt-24">
  <div class="flex flex-col gap-4">
    <p class="font-header text-4xl font-semibold text-retro-white md:text-6xl">
      {`${$page.error?.message} :(`}
    </p>
    <img class="w-full rounded-lg" src="/sad_cat.gif" alt="sad cat gif" />
  </div>
</div>
