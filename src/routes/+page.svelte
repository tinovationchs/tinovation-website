<script lang="ts">
  import HomePageLogo from "$lib/components/HomePageLogo.svelte";
  import SocialsBar from "$lib/components/SocialsBar.svelte";
</script>

<!-- CONTENT STREAM -->
<div class="flex w-full flex-col items-center text-retro-black">
  <!-- BANNER/HEADER THINGY -->
  <div class="flex h-[40rem] w-full flex-row justify-center rounded-b-xl bg-retro-black">
    <div class="flex flex-col items-center pt-56">
      <HomePageLogo />

      <h1 class="mt-4 font-header text-7xl font-semibold text-retro-white">Tinovation</h1>
      <h3 class=" font-header text-2xl text-retro-gray">
        programming club at CHS
      </h3>

      <SocialsBar />
    </div>
  </div>
</div>
