<script>
  import ResourceGroup from "$lib/components/ResourceGroup.svelte";
  import info from "$lib/info";
  import resourceCategories from "$lib/resources";
</script>

<svelte:head>
  <title>{"Resources - Tinovation"}</title>
  <meta property="og:title" content={"Resources - Tinovation"} />
  <meta property="theme-color" content="#be185d" />
  <meta
    property="description"
    content="Coding resources to help anyone learn to build cool stuff!" />

  <meta
    property="og:description"
    content="Coding resources to help anyone learn to build cool stuff!" />
  <meta property="og:image" content="https://tinovation.org/website/meta/resources.webp" />

  <meta property="twitter:title" content={"Resources - Tinovation"} />
  <meta
    property="twitter:description"
    content="Coding resources to help anyone learn to build cool stuff!" />
  <meta property="twitter:image" content="https://tinovation.org/website/meta/resources.webp" />
</svelte:head>

<div class="absolute -z-10 h-full w-full fill-pink-300">
  <div class="h-64 bg-pink-300" />

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
      <g transform="matrix(1.02389,0,0,1.41023,-2.73038,-1.78629)">
        <path
          d="M784,150.6C784,150.6 775.797,124.513 738.667,121.267C700.586,117.938 684.226,86.268 671.594,83.834C655.762,80.783 650.764,77.16 630.767,115.9C619.275,138.161 605.924,120.033 580.75,141.933C541.57,176.019 561.036,107.903 531.05,109.367C497.593,111 491.067,187.339 468.217,177.703C452.702,171.16 467.957,66.756 449.6,71.133C418.296,78.599 428.668,169.05 404.8,156.467C387.517,147.355 346.885,44.642 311.467,59.933C281.966,72.67 265.832,134.538 234.133,146.733C204.083,158.294 176.916,144.641 161.933,128.2C142.964,107.385 123.959,75.579 116.2,99.867C114.319,105.755 114.332,128.332 99.2,127.667C76.313,126.661 69.743,128.12 43.2,142C27.902,150 20.46,142.624 25.067,122.867C26.558,116.471 19.267,108.234 14.4,105.8C10.747,103.973 6.421,105.209 2.667,106.291L2.667,1.267L784,1.267L784,150.6Z" />
      </g>
    </svg>
  </div>
</div>

<div class="fixed -z-20 h-full min-h-screen w-full bg-retro-black" />

<div class="mb-8 flex flex-row justify-center">
  <div>
    <h1 class="text-center font-header text-5xl md:text-6xl">Resources</h1>

    <a
      href={info.resource_contribution_link}
      target="_blank"
      class="mb-2 block text-center font-header text-lg underline-offset-2 hover:text-pink-900 hover:underline">
      want to contribute?
    </a>

    <hr class="mx-2 mb-8 rounded-full border-2 border-retro-black" />
    <div class="grid w-fit grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
      {#each Object.entries(resourceCategories) as [category, resources]}
        <ResourceGroup {category} {resources} />
      {/each}
    </div>
  </div>
</div>
