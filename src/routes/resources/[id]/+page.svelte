<script lang="ts">
  import { onMount } from "svelte";
  import { twColors } from "$lib/colors";
  import moment from "moment";

  export let data: any;

  // all links open new tab now
  onMount(() => {
    document.querySelectorAll("main a").forEach((el) => {
      el.setAttribute("target", "_blank");
    });
  });

  const getHash = (s: string) =>
    s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

  function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const vals = Object.values(twColors);
  const hueArray: string[] = [];
  for (const val of vals) {
    hueArray.push(val["300"]);
  }
  const color = hexToRgb(hueArray.at(Math.abs(getHash(data.metadata.title)) % hueArray.length)!);
</script>

<svelte:head>
  <title>
    {data.metadata.title} - Tinovation
  </title>
  <meta property="og:title" content={`${data.metadata.title} - Tinovation`} />
</svelte:head>

<div
  class="absolute h-[45rem] w-full -translate-y-28"
  style="background-image: linear-gradient({180 +
    (getHash(data.metadata.title) %
      5)}deg, rgba({color?.r}, {color?.g}, {color?.b}, 0.8), rgba({color?.r}, {color?.g}, {color?.b}, 0) 50%);" />

<div class="flex flex-row justify-center">
  <main
    class="md:w-max-[30rem] z-10 flex w-full flex-col gap-4 px-6 py-16 font-sans text-lg font-light text-retro-white md:w-[42rem] md:py-20 lg:w-[52rem]">
    <div class="flex flex-row justify-center">
      <div class="flex flex-col font-header">
        <span class="translate-y-2 text-retro-lightgray">
          {`${
            data.metadata.date
              ? moment(data.metadata.date, "YYYY-MM-DD").format("MMM Do, YYYY")
              : ""
          }`}
        </span>

        <h1 class="-translate-y-2">{data.metadata.title}</h1>

        <span class="-translate-y-4 text-retro-lightgray">
          {`Author${data.metadata.authors.length === 1 ? "" : "s"}: ${data.metadata.authors.join(
            ", "
          )}`}
        </span>

        <!-- <span class="-translate-y-4 text-retro-lightgray">
          {`Prerequisites: ${(typeof data.metadata.prereqs !== 'undefined') ? data.metadata.prereqs.join(
            ", "
          ) : "none"}`}
        </span> -->
      </div>
    </div>

    {#if data.metadata.checked === undefined || !data.metadata.checked}
      <div
        class="mb-2 -translate-y-2 rounded-lg border-l-4 border-red-600 bg-retro-lightgray px-2 py-2 text-center font-sans text-lg font-bold leading-tight text-red-700 transition ease-in hover:scale-[102%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="inline h-5 w-5 -translate-y-[1px]">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>

        guide incomplete!
      </div>
    {/if}

    <svelte:component this={data.component} />
  </main>
</div>

<style lang="postcss">
  /* ======= */
  /* HEADERS */
  /* ======= */
  main :global(h1) {
    @apply mb-2 mt-4 font-header text-4xl font-semibold md:text-5xl;
  }

  main :global(h2) {
    @apply mt-4 font-header text-2xl md:text-3xl;
  }

  main :global(h3),
  main :global(h4),
  main :global(h5),
  main :global(h6) {
    @apply mt-2 font-header text-xl md:text-2xl;
  }

  /* ========= */
  /* HOR. RULE */
  /* ========= */
  main :global(hr) {
    @apply rounded-full border;
  }

  /* ======= */
  /* ITALICS */
  /* ======= */
  main :global(i),
  :global(em) {
    @apply italic text-pink-400;
  }

  /* ==== */
  /* BOLD */
  /* ==== */
  main :global(b),
  main :global(strong) {
    @apply font-semibold text-yellow-400;
  }

  /* ===== */
  /* LINKS */
  /* ===== */
  main :global(a) {
    @apply break-words font-normal text-purple-400 underline underline-offset-2;
  }
  main :global(a):hover {
    @apply decoration-wavy;
  }

  /* ====== */
  /* IMAGES */
  /* ====== */
  main :global(img) {
    @apply mx-auto my-4 rounded-lg;
  }

  /* things inside links */
  main :global(a) > :global(code) {
    @apply text-blue-400 underline decoration-blue-400 underline-offset-2;
  }

  main :global(a) > :global(strong),
  main :global(a) > :global(b) {
    @apply text-yellow-400 underline decoration-yellow-400 underline-offset-2;
  }

  main :global(a) > :global(em),
  main :global(a) > :global(i) {
    @apply text-pink-400 underline decoration-pink-400 underline-offset-2;
  }

  main :global(a) > :global(code):hover,
  main :global(a) > :global(strong):hover,
  main :global(a) > :global(b):hover,
  main :global(a) > :global(em):hover,
  main :global(a) > :global(i):hover {
    @apply text-purple-400 no-underline;
  }

  /* =========== */
  /* CODE BLOCKS */
  /* =========== */
  main :global(pre) {
    @apply my-4 w-full overflow-y-auto whitespace-pre-wrap rounded-lg px-4 py-2.5;
  }
  main :global(code) {
    @apply mx-0.5 break-words rounded p-1 text-sm;
  }
  main :global(pre) :global(code) {
    @apply m-0 whitespace-pre p-0;
  }
  main :global(pre),
  main :global(code) {
    @apply bg-black !important;
    @apply font-mono text-sm text-blue-400;
  }

  /* =========== */
  /* blockquotes */
  /* =========== */
  main :global(blockquote) {
    @apply my-2 rounded-lg border-l-4 border-green-600 bg-retro-lightgray px-2 py-2 text-lg font-semibold leading-tight text-retro-black transition ease-in hover:scale-[102%];
  }
  main :global(blockquote) :global(em),
  :global(blockquote) :global(i) {
    @apply italic text-pink-600;
  }
  main :global(blockquote) :global(strong),
  :global(blockquote) :global(b) {
    @apply font-bold text-yellow-600;
  }
  main :global(blockquote) :global(a) {
    @apply text-purple-800;
  }
  main :global(blockquote) :global(code) {
    @apply py-0.5;
  }

  /* ================================= */
  /* THE ATROCITIES OF UNORDERED LISTS */
  /* ================================= */
  main :global(ul) {
    @apply flex list-disc flex-col gap-4 pl-6;
  }
  main > :global(ul) {
    @apply mb-2 flex list-disc flex-col gap-4 py-2 pl-6;
  }
  main > :global(ul) > :global(li) {
    @apply pl-1;
  }
  main > :global(ul) > :global(li) > :global(ul) {
    @apply mt-2 flex flex-col gap-4 pl-6;
    list-style-type: circle;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-1;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) {
    @apply mt-2 flex flex-col gap-4 pl-6;
    list-style-type: square;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-1;
  }

  /* =============================== */
  /* THE ATROCITIES OF ORDERED LISTS */
  /* =============================== */
  main :global(ol) {
    @apply flex list-decimal flex-col gap-4 pl-6;
  }
  main > :global(ol) {
    @apply mb-2 flex list-decimal flex-col gap-4 py-2 pl-6;
  }
  main > :global(ol) > :global(li) {
    @apply pl-1;
  }
  main > :global(ol) > :global(li) > :global(ol) {
    @apply mt-2 flex flex-col gap-4 pl-6;
    list-style-type: lower-alpha;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-1;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) {
    @apply mt-2 flex flex-col gap-4 pl-6;
    list-style-type: lower-roman;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-1;
  }
</style>
