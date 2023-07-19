<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import colors from "$lib/tailwindColors";

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

<div
  class="absolute h-[45rem] w-full -translate-y-28"
  style="background-image: linear-gradient({180 + getHash(data.metadata.title) % 7}deg, rgba({color?.r}, {color?.g}, {color?.b}, 0.8), #232222 50%);" />

<div class="flex flex-row justify-center">
  <main
    class="md:w-max-[30rem] z-10 flex w-full flex-col gap-4 px-6 py-16 font-sans text-lg font-light text-retro-white md:w-[42rem] md:py-20 md:pt-24 lg:w-[52rem]">
    <div>
      <h1 class="text-center">{data.metadata.title}</h1>
      <h3 class="-translate-y-1 text-center">
        {`author${data.metadata.authors.length === 1 ? "" : "s"}: ${data.metadata.authors.join(
          ", "
        )}`}
      </h3>
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
    @apply mt-2 font-header text-lg md:text-xl;
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
    @apply font-normal text-purple-400 underline underline-offset-2;
  }
  main :global(a):hover {
    @apply decoration-wavy;
  }

  /* ====== */
  /* IMAGES */
  /* ====== */
  main :global(img) {
    @apply w-full rounded-lg py-4;
  }

  /* =========== */
  /* CODE BLOCKS */
  /* =========== */
  main :global(pre) {
    @apply my-4 w-full whitespace-pre-wrap rounded-lg px-2 py-1.5;
  }
  main :global(code) {
    @apply mx-0.5 rounded p-1 text-sm;
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
