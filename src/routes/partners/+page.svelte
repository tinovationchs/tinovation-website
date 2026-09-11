<script>
</script>

<svelte:head>
  <title>{"Industry Partners - Tinovation"}</title>
  <meta property="og:title" content={"Industry Partners - Tinovation"} />
  <meta property="theme-color" content="#1d4ed8" />
  <meta property="description" content="Our amazing industry partners!" />
</svelte:head>

<div class="absolute -z-10 h-full w-full fill-blue-300">
  <div class="h-64 bg-blue-300" />
  <div class="fill-inherit">
    <!-- SVG from showcase for the squiggly bottom -->
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 250"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(1.02389,0,0,2.15947,-2.73038,-2.73533)">
        <path
          d="M784,117.036C784,117.036 720.628,95.946 688.817,90.082C611.958,75.914 583.122,113.94 548.232,109.337C510.374,104.342 569.243,71.786 506.503,75.064C456.181,77.694 407.184,102.721 378.767,107.875C354.901,112.203 311.209,89.897 363.717,73.754C370.238,71.749 390.582,77.492 397.418,75.087C404.147,72.719 399.937,62.81 389.992,57.932C383.688,54.84 368.347,50.882 332.301,53.673C290.841,56.883 176.345,118.085 140.888,115.887C114.714,114.265 110.008,87.8 120.064,82.498C125.693,79.53 148.651,73.224 158.358,84.034C163.712,89.995 136.745,107.041 162.827,98.903C164.134,98.495 165.423,98.109 166.692,97.737C183.68,92.758 192.673,95.975 190.043,76.884C188.814,67.96 166.785,57.621 120.843,61.11C67.604,65.153 3.824,105.957 2.667,106.291L2.667,1.267L784,1.267L784,117.036Z" />
      </g>
    </svg>
  </div>
</div>

<div class="fixed -z-20 h-full min-h-screen w-full bg-retro-black" />

<div class="mb-8 flex flex-row justify-center">
  <div class="flex flex-col items-center">
    <h1 class="text-center font-header text-5xl text-retro-black md:text-6xl">Industry Partners</h1>

    <div class="mb-2 block max-w-2xl text-center font-header text-lg text-retro-black">
      We would like to thank our mentors and the following companies for extending a hand to help
      high school developers.
    </div>

    <hr class="mx-2 mb-12 w-full rounded-full border-2 border-retro-black" />

    <div
      class="flex flex-col flex-wrap items-center justify-center gap-16 px-4 md:flex-row md:gap-12 lg:gap-24">
      <div
        class="flex flex-col items-center justify-center rounded-2xl border-4 border-retro-black bg-retro-white p-8 shadow-[8px_8px_0px_0px_#232222] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#232222]">
        <img src="/website/twitch_full.svg" alt="Twitch" class="h-20 w-48 object-contain" />
        <span class="mt-4 font-header text-2xl text-retro-black">Twitch</span>
      </div>

      <div
        class="flex flex-col items-center justify-center rounded-2xl border-4 border-retro-black bg-retro-white p-8 shadow-[8px_8px_0px_0px_#232222] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#232222]">
        <img src="/website/figma_full.svg" alt="Figma" class="h-20 w-48 object-contain" />
        <span class="mt-4 font-header text-2xl text-retro-black">Figma</span>
      </div>

      <div
        class="flex flex-col items-center justify-center rounded-2xl border-4 border-retro-black bg-retro-white p-8 shadow-[8px_8px_0px_0px_#232222] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#232222]">
        <img src="/website/mongodb_full.svg" alt="MongoDB" class="h-20 w-48 object-contain" />
        <span class="mt-4 font-header text-2xl text-retro-black">MongoDB</span>
      </div>

      <div
        class="flex flex-col items-center justify-center rounded-2xl border-4 border-retro-black bg-retro-white p-8 shadow-[8px_8px_0px_0px_#232222] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#232222]">
        <img src="/website/koss.svg" alt="Koss" class="h-20 w-48 object-contain" />
        <span class="mt-4 font-header text-2xl text-retro-black">Koss</span>
      </div>

      <div
        class="flex flex-col items-center justify-center rounded-2xl border-4 border-retro-black bg-retro-white p-8 shadow-[8px_8px_0px_0px_#232222] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#232222]">
        <img
          src="/website/soldred.png"
          alt="Soldred Electronics"
          class="h-20 w-48 object-contain" />
        <span class="mt-4 font-header text-2xl text-retro-black">Soldred Electronics</span>
      </div>
    </div>

    <div class="mt-16 text-center font-header text-xl text-retro-white">
      Want to join the growing list? <br class="md:hidden" />
      Email us at:
      <a
        href="mailto:team@tinovation.org"
        class="text-blue-300 underline decoration-2 underline-offset-4 transition-colors hover:text-blue-400"
        >team@tinovation.org</a>
    </div>
  </div>
</div>
