<script lang="ts">
  import { hypercolorGradients } from "$lib/colors";
  import type { Project } from "$lib/types";
  import moment from "moment";

  export let index: number;
  export let projectInfo: Project;
  export let numProjects: number;
</script>

<div
  class="flex h-fit w-auto max-w-[32rem] flex-col rounded-lg border-2 border-retro-black bg-retro-white shadow-xl"
  style={`background-image: ${
    hypercolorGradients[(numProjects - index) % hypercolorGradients.length]
  };`}>
  <div id="shader" class="relative bg-white opacity-20" />

  <a
    href={projectInfo.main_link}
    target="_blank"
    class="group relative mx-4 mt-4 rounded-lg shadow-xl transition hover:scale-[101%] hover:shadow">
    <img
      src={`/showcase/${projectInfo.thumbnail_image}`}
      alt="project thumbnail"
      class="rounded-lg transition group-hover:opacity-90" />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 opacity-0 transition group-hover:scale-105 group-hover:opacity-40">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </a>

  <div class="mx-4 my-4 flex flex-col">
    <div class="flex flex-row items-center gap-2 fill-retro-gray">
      <h2 class="font-header text-2xl text-retro-black sm:text-3xl">
        {projectInfo.name}
      </h2>

      <span class="ml-auto" />

      {#if projectInfo.other_links}
        {#each projectInfo.other_links as link}
          <a
            href={link}
            target="_blank"
            class="fill-none stroke-retro-gray transition ease-in hover:stroke-retro-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 stroke-inherit">
              <path
                fill-rule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                clip-rule="evenodd" />
            </svg>
          </a>
        {/each}
      {/if}

      {#if projectInfo.guide_name}
        <a
          href={`/resources/${projectInfo.guide_name}`}
          target="_blank"
          class="transition ease-in hover:fill-retro-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-7 w-7 fill-inherit stroke-none">
            <path
              d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
            <path
              d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
        </a>
      {/if}

      {#if projectInfo.github_link}
        <a
          href={projectInfo.github_link}
          target="_blank"
          class="transition ease-in hover:fill-retro-black">
          <svg
            viewBox="0 0 98 96"
            class="h-auto w-7 fill-inherit"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
        </a>
      {/if}
    </div>

    <div
      class="ml-1 mb-1 flex -translate-y-0.5 flex-row gap-6 items-baseline justify-between font-header text-base sm:text-lg">
      <h3 class="leading-tight pl-4 -indent-4">
        created by: {projectInfo.authors.join(", ")}
      </h3>

      <h3 class="text-base text-retro-gray whitespace-nowrap">
        {moment(projectInfo.date, "YYYY-MM-DD").format("MMM Do, YYYY")}
      </h3>
    </div>
    <p class="mx-2">
      {projectInfo.description}
    </p>
  </div>
</div>
