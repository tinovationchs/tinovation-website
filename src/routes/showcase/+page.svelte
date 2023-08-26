<script>
  import Project from "$lib/components/Project.svelte";
  import info from "$lib/info";
  import showcaseProjects from "$lib/showcase";
</script>

<svelte:head>
  <title>{"Showcase - Tinovation"}</title>
  <meta property="og:title" content={"Showcase - Tinovation"} />
</svelte:head>

<div class="absolute -z-10 h-full w-full fill-blue-300">
  <div class="h-64 bg-blue-300" />

  <div class="fill-inherit">
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

<div class="mb-8 mt-20 flex flex-row justify-center md:mt-24">
  <div>
    <h1 class="text-center font-header text-5xl md:text-6xl">Showcase</h1>

    <a
      href={info.showcase_contribution_link}
      target="_blank"
      class="mb-2 block text-center font-header text-lg underline-offset-2 hover:text-blue-900 hover:underline">
      want to add your project?
    </a>

    <hr class="mx-2 mb-8 rounded-full border-2 border-retro-black" />
    <div class="grid w-fit grid-cols-1 gap-9 px-4 lg:grid-cols-2">
      {#each showcaseProjects as projectInfo, index}
        <Project {index} {projectInfo} numProjects={showcaseProjects.length} />
      {/each}
    </div>
  </div>
</div>
