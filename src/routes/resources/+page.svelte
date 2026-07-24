<script lang="ts">
  import ResourceGroup from "$lib/components/ResourceGroup.svelte";
  import info from "$lib/info";
  import resourceCategories from "$lib/resources";
  import { ItemType, type Item } from "$lib/types";

  let searchQuery = "";
  let selectedCategory = "All";

  const categoriesList = Object.keys(resourceCategories);

  $: filteredCategories = Object.entries(resourceCategories).reduce(
    (acc, [category, resources]) => {
      if (selectedCategory !== "All" && selectedCategory !== category) {
        return acc;
      }

      const query = searchQuery.trim().toLowerCase();
      const matchingResources = resources.filter((resource) => {
        if (!query) return true;

        const displayName = resource.displayName.toLowerCase();
        const path = resource.path.toLowerCase();

        let typeText = "";
        if (resource.type === ItemType.Guide) typeText = "guide";
        else if (resource.type === ItemType.Link) typeText = "link";
        else if (resource.type === ItemType.Code) typeText = "code colab notebook";

        return displayName.includes(query) || path.includes(query) || typeText.includes(query);
      });

      if (matchingResources.length > 0) {
        acc[category] = matchingResources;
      }

      return acc;
    },
    {} as Record<string, Item[]>
  );

  $: hasResults = Object.keys(filteredCategories).length > 0;
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

    <!-- SEARCH BAR -->
    <div
      class="mx-auto mb-6 flex max-w-[32rem] items-center rounded-xl border-2 border-retro-black bg-retro-white px-3 py-2 text-retro-black shadow-[3px_3px_0px_0px_#232222] transition-all focus-within:translate-x-[-1px] focus-within:translate-y-[-1px] focus-within:shadow-[4px_4px_0px_0px_#232222]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="mr-2 h-6 w-6 text-retro-gray">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input
        type="text"
        placeholder="Search resources..."
        bind:value={searchQuery}
        class="placeholder-retro-gray/60 w-full bg-transparent font-sans text-lg font-medium text-retro-black outline-none" />
      {#if searchQuery}
        <button
          on:click={() => (searchQuery = "")}
          class="ml-2 text-retro-gray hover:text-retro-black"
          type="button"
          aria-label="Clear search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      {/if}
    </div>

    <!-- CATEGORY TABS -->
    <div class="mx-auto mb-8 flex max-w-[50rem] flex-wrap justify-center gap-2 px-4">
      <button
        on:click={() => (selectedCategory = "All")}
        class="rounded-lg border-2 border-retro-black px-4 py-1.5 font-header text-lg transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#232222]
          {selectedCategory === 'All'
          ? 'bg-pink-700 text-retro-white shadow-[1px_1px_0px_0px_#232222]'
          : 'bg-retro-white text-retro-black shadow-[3px_3px_0px_0px_#232222] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#232222]'}">
        All
      </button>
      {#each categoriesList as category}
        <button
          on:click={() => (selectedCategory = category)}
          class="rounded-lg border-2 border-retro-black px-4 py-1.5 font-header text-lg transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#232222]
            {selectedCategory === category
            ? 'bg-pink-700 text-retro-white shadow-[1px_1px_0px_0px_#232222]'
            : 'bg-retro-white text-retro-black shadow-[3px_3px_0px_0px_#232222] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#232222]'}">
          {category}
        </button>
      {/each}
    </div>

    <!-- GRID / RESULTS -->
    {#if hasResults}
      <div class="grid w-fit grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {#each Object.entries(filteredCategories) as [category, resources]}
          <ResourceGroup {category} {resources} />
        {/each}
      </div>
    {:else}
      <div
        class="mx-auto my-12 max-w-[28rem] rounded-xl border-2 border-retro-black bg-retro-white p-8 text-center text-retro-black shadow-[4px_4px_0px_0px_#232222]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-retro-gray/60 mx-auto mb-4 h-16 w-16">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
        <h2 class="mb-2 font-header text-3xl">No Resources Found</h2>
        <p class="font-sans text-lg text-retro-gray">
          We couldn't find any resources matching "<b>{searchQuery}</b
          >"{#if selectedCategory !== "All"} in category <b>{selectedCategory}</b>{/if}.
        </p>
      </div>
    {/if}
  </div>
</div>
