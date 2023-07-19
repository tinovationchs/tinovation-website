<script lang="ts">
  import type { PageData } from "./$types";

  export let data: any;
</script>

<div class="flex flex-row justify-center">
  <div
    id="stuff"
    class="md:w-max-[30rem] flex w-full flex-col gap-4 px-6 py-16 font-sans text-lg font-light text-retro-white md:w-[42rem] md:py-20 md:pt-24 lg:w-[52rem]">
    <div>
      <h1 class="text-center">{data.metadata.title}</h1>
      <h3 class="-translate-y-1 text-center">
        {`author${data.metadata.authors.length === 1 ? "" : "s"}: ${data.metadata.authors.join(
          ", "
        )}`}
      </h3>
    </div>

    <svelte:component this={data.component} />
  </div>
</div>

<style lang="postcss">
  /* ======= */
  /* HEADERS */
  /* ======= */
  #stuff :global(h1) {
    @apply mb-2 mt-4 font-header text-4xl font-semibold md:text-5xl;
  }

  #stuff :global(h2) {
    @apply mt-4 font-header text-2xl md:text-3xl;
  }

  #stuff :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    @apply mt-2 font-header text-lg md:text-xl;
  }

  /* ========= */
  /* HOR. RULE */
  /* ========= */
  #stuff :global(hr) {
    @apply rounded-full border;
  }

  /* ======= */
  /* ITALICS */
  /* ======= */
  #stuff :global(i),
  :global(em) {
    @apply italic text-pink-400;
  }

  /* ==== */
  /* BOLD */
  /* ==== */
  #stuff :global(b),
  :global(strong) {
    @apply font-semibold text-yellow-400;
  }

  /* ===== */
  /* LINKS */
  /* ===== */
  #stuff :global(a) {
    @apply font-normal text-purple-400 underline underline-offset-2;
  }
  #stuff :global(a):hover {
    @apply decoration-wavy;
  }

  /* ====== */
  /* IMAGES */
  /* ====== */
  #stuff :global(img) {
    @apply w-full rounded-lg py-4;
  }

  /* =========== */
  /* CODE BLOCKS */
  /* =========== */
  #stuff :global(pre) {
    @apply my-4 w-full whitespace-pre-wrap rounded-lg px-2 py-1.5;
  }
  #stuff :global(code) {
    @apply mx-0.5 rounded p-1 text-sm;
  }
  #stuff :global(pre),
  :global(code) {
    @apply bg-black font-mono text-sm text-blue-400;
  }

  /* ================================= */
  /* THE ATROCITIES OF UNORDERED LISTS */
  /* ================================= */
  #stuff :global(ul) {
    @apply list-disc pl-4;
  }
  #stuff > :global(ul) {
    @apply list-disc py-2 pl-4;
  }
  #stuff > :global(ul) > :global(li) {
    @apply pl-2;
  }
  #stuff > :global(ul) > :global(li) > :global(ul) {
    @apply pl-4;
    list-style-type: circle;
  }
  #stuff > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-2;
  }
  #stuff > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) {
    @apply pl-4;
    list-style-type: square;
  }
  #stuff > :global(ul) > :global(li) > :global(ul) > :global(li) > :global(ul) > :global(li) {
    @apply pl-2;
  }

  /* =============================== */
  /* THE ATROCITIES OF ORDERED LISTS */
  /* =============================== */
  #stuff :global(ol) {
    @apply list-decimal pl-4;
  }
  #stuff > :global(ol) {
    @apply list-decimal py-2 pl-4;
  }
  #stuff > :global(ol) > :global(li) {
    @apply pl-2;
  }
  #stuff > :global(ol) > :global(li) > :global(ol) {
    @apply pl-4;
    list-style-type: lower-alpha;
  }
  #stuff > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-2;
  }
  #stuff > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) {
    @apply pl-4;
    list-style-type: lower-roman;
  }
  #stuff > :global(ol) > :global(li) > :global(ol) > :global(li) > :global(ol) > :global(li) {
    @apply pl-2;
  }
</style>
