<script lang="ts">
  import HomePageLogo from "$lib/components/HomePageLogo.svelte";
  import SocialsBar from "$lib/components/SocialsBar.svelte";
  import info from "$lib/info";
</script>

<svelte:head>
  <title>{"Tinovation"}</title>
</svelte:head>

<!-- CONTENT STREAM -->
<div class="flex w-full flex-col bg-retro-gray text-lg text-retro-white md:items-center">
  <!-- BANNER/HEADER THINGY -->
  <div class="flex h-[40rem] w-full flex-row justify-center rounded-b-3xl bg-retro-black">
    <div class="flex flex-col items-center pt-56">
      <HomePageLogo />

      <h1 class="mt-4 font-header text-6xl font-semibold text-retro-white md:text-7xl">
        Tinovation
      </h1>
      <h3 class="font-header text-lg text-retro-white md:text-2xl">programming club at CHS</h3>

      <SocialsBar />
    </div>
  </div>

  <!-- ACTUAL CONTENT -->
  <div class="my-12 flex w-fit flex-col gap-4 px-4 md:w-[44rem]">
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

    <div class="mb-8 mt-4 flex flex-col gap-3">
      <h2 class="font-header text-4xl">The Officer Team</h2>
      <p>
        <b class="text-purple-300">Co-Presidents:</b>
        {`${info.co_presidents[0]}, ${info.co_presidents[1]}`}
      </p>
      <p>
        <b class="text-blue-300">Vice Presidents:</b>
        {info.vice_president}
      </p>
      <p>
        <b class="text-green-300">Secretary/Treasurer:</b>
        {info.secretary_treasurer}
      </p>
      <p>
        <b class="text-red-300">Mentors:</b>
        {info.mentors.join(", ")}
      </p>
    </div>
  </div>
</div>
