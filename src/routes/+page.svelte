<script lang="ts">
  import HomePageLogo from "$lib/components/HomePageLogo.svelte";
  import SocialsBar from "$lib/components/SocialsBar.svelte";
</script>

<!-- CONTENT STREAM -->
<div class="flex w-full flex-col md:items-center text-lg text-retro-white">
  <!-- BANNER/HEADER THINGY -->
  <div class="flex h-[40rem] w-full flex-row justify-center rounded-b-3xl bg-retro-black">
    <div class="flex flex-col items-center pt-56">
      <HomePageLogo />

      <h1 class="mt-4 font-header text-7xl font-semibold text-retro-white">Tinovation</h1>
      <h3 class="font-header text-2xl text-retro-white">programming club at CHS</h3>

      <SocialsBar />
    </div>
  </div>

  <!-- ACTUAL CONTENT -->
  <div class="mb-8 mt-16 flex sm:w-fit md:w-[40rem] flex-col gap-6 px-8">
    <h2 class="font-header text-4xl">About Us</h2>
    <p>
      Tinovation is the largest programming and software development club at CHS! At Tinovation, you
      will improve your coding skills by building innovative projects with fellow programmers at
      Cupertino High School. All members will have a chance to participate in month-long Code
      Sprints where you work with a small team and an experienced mentor to bring an idea to life!
    </p>

    <p>
      Every year, Tinovation also hosts PioneerHacks where hundreds of software geeks across the Bay
      Area compete to build winning products.
    </p>
  </div>

  <div class="mb-8 mt-8 flex sm:w-fit md:w-[40rem] flex-col gap-6 px-6">
    <h2 class="font-header text-4xl">The Officer Team</h2>
    <p>Exec: Daniel, Ryan, Arnav, Bhargav</p>
    <p>Mentors: Taisei, Shine, Sharma, Purva, Shauryan, Laurier</p>
  </div>
</div>
