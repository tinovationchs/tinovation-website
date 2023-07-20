<script lang="ts">
  import { onMount } from "svelte";
  import colors from "$lib/tailwindColors";
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

  const vals = Object.values(colors);
  const hueArray: string[] = [];
  for (const val of vals) {
    hueArray.push(val["400"]);
  }
  const color = hexToRgb(hueArray.at(Math.abs(getHash(data.metadata.title)) % hueArray.length)!);
</script>

<svelte:head>
  <title>
    {data.metadata.title} - Tinovation
  </title>
</svelte:head>

<div
  class="absolute h-[45rem] w-full -translate-y-28"
  style="background-image: linear-gradient({180 +
    (getHash(data.metadata.title) %
      7)}deg, rgba({color?.r}, {color?.g}, {color?.b}, 0.8), #232222 50%);" />

<div class="flex flex-row justify-center">
  <main
    class="md:w-max-[30rem] z-10 flex w-full flex-col gap-4 px-6 py-14 font-sans text-lg font-light text-retro-white md:w-[42rem] md:py-20 lg:w-[52rem]">
    <div class="flex flex-row justify-center">
      <div class="flex flex-col font-header">
        <span class="translate-y-4 text-retro-lightgray">
          {`${data.metadata.date ? moment(data.metadata.date).format("MMM Do, YYYY") : ""}`}
        </span>

        <h1 class="">{data.metadata.title}</h1>

        <span class="-translate-y-2 text-retro-lightgray">
          {`Author${data.metadata.authors.length === 1 ? "" : "s"}: ${data.metadata.authors.join(
            ", "
          )}`}
        </span>
      </div>
    </div>

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
  :global(h4),
  :global(h5),
  :global(h6) {
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
  :global(strong) {
    @apply font-semibold text-yellow-400;
  }

  /* ===== */
  /* LINKS */
  /* ===== */
  main :global(a) {
    @apply font-normal text-purple-400 underline underline-offset-2 break-words;
  }
  main :global(a):hover {
    @apply decoration-wavy;
  }

  /* ====== */
  /* IMAGES */
  /* ====== */
  main :global(img) {
    @apply rounded-lg my-4 mx-auto;
  }

  /* =========== */
  /* blockquote? */
  /* =========== */
  main :global(blockquote) {
    @apply rounded-lg border-l-4 border-green-600 bg-retro-lightgray px-2 py-2 text-lg font-semibold text-retro-black transition ease-in hover:scale-[102%] leading-tight;
  }
  main :global(blockquote) :global(em), :global(blockquote) :global(i) {
    @apply italic text-pink-600;
  }
  main :global(blockquote) :global(strong), :global(blockquote) :global(b) {
    @apply font-bold text-yellow-600;
  }
  main :global(blockquote) :global(a) {
    @apply text-purple-800;
  }
  

  /* =========== */
  /* CODE BLOCKS */
  /* =========== */
  main :global(pre) {
    @apply my-4 w-full whitespace-pre-wrap rounded-lg px-4 py-2.5;
  }
  main :global(code) {
    @apply mx-0.5 rounded p-1 text-sm;
  }
  main :global(pre) :global(code) {
    @apply m-0 p-0;
  }
  main :global(pre),
  :global(code) {
    @apply bg-black font-mono text-sm text-blue-400;
  }

  /* ================================= */
  /* THE ATROCITIES OF UNORDERED LISTS */
  /* ================================= */
  main :global(ul) {
    @apply list-disc pl-6;
  }
  main > :global(ul) {
    @apply list-disc py-2 pl-6;
  }
  main > :global(ul) > :global(li) {
    @apply pl-1;
  }
  main > :global(ul) > :global(li) > :global(ul) {
    @apply pl-6;
    list-style-type: circle;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-1;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) {
    @apply pl-6;
    list-style-type: square;
  }
  main > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-1;
  }

  /* =============================== */
  /* THE ATROCITIES OF ORDERED LISTS */
  /* =============================== */
  main :global(ol) {
    @apply list-decimal pl-6;
  }
  main > :global(ol) {
    @apply list-decimal py-2 pl-6;
  }
  main > :global(ol) > :global(li) {
    @apply pl-1;
  }
  main > :global(ol) > :global(li) > :global(ol) {
    @apply pl-6;
    list-style-type: lower-alpha;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-1;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) {
    @apply pl-6;
    list-style-type: lower-roman;
  }
  main > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-1;
  }
</style>
