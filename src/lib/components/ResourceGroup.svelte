<script lang="ts">
  import resourceCategories from "$lib/resources";
  import { ItemType, type Item } from "$lib/types";

  export let category: string;
  export let resources: Item[];
</script>

<div
  class="flex h-fit w-80 flex-col gap-2 rounded-md border-2 border-retro-black bg-retro-white py-4 text-center">
  <h2 class="text-2xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="inline-block h-6 w-6 -translate-y-0.5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>

    {category}
  </h2>

  <hr class="border border-retro-black" />

  <div class="mt-2 flex flex-col">
    <div class="">
      {#each resources as resource}
        {#if resource.type === ItemType.Guide}
          <a
            href={`/resources/${resource.path ?? "error"}`}
            class="flex flex-row px-3 py-1 transition ease-in odd:bg-retro-lightgray even:bg-retro-white hover:-translate-y-1 hover:text-pink-700">
            {#if typeof resource === "string"}
              {`/${resource}`}
            {:else if typeof resource === "object"}
              {`/${resource.displayName}`}
            {/if}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="ml-auto h-5 w-5 translate-y-0.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </a>
        {:else if resource.type === ItemType.Link}
          <a
            href={resource.path ?? "/resources/error"}
            target="_blank"
            class="flex flex-row px-2 py-1 transition ease-in odd:bg-retro-lightgray even:bg-retro-white hover:-translate-y-1 hover:text-purple-700">
            {`/${resource.displayName}`}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="ml-auto h-5 w-5 translate-x-0.5 translate-y-0.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        {:else if resource.type === ItemType.Code}
          <a
            href={resource.path ?? "/resources/error"}
            target="_blank"
            class="flex flex-row px-2 py-1 transition ease-in odd:bg-retro-lightgray even:bg-retro-white hover:-translate-y-1 hover:text-blue-700">
            {`/${resource.displayName}`}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="ml-auto h-5 w-5 translate-y-0.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>
