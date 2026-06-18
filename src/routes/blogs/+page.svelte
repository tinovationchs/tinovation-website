<script lang="ts">
  import moment from "moment";

  const posts = [
    {
      title: "Twitch x Tinovation AMA",
      date: "2026-05-18",
      description:
        "Tinovation hosted Marc Szanto from Twitch for an AMA about developer relations, customer success, and career advice for students.",
      link: "/resources/twitch-x-tinovation-ama",
    },
  ];
</script>

<svelte:head>
  <title>{"Blogs - Tinovation"}</title>
  <meta property="og:title" content={"Blogs - Tinovation"} />
  <meta property="theme-color" content="#059669" />
  <meta property="description" content="Tinovation blog posts and event recaps." />

  <meta property="og:description" content="Tinovation blog posts and event recaps." />
  <meta property="twitter:title" content={"Blogs - Tinovation"} />
  <meta property="twitter:description" content="Tinovation blog posts and event recaps." />
</svelte:head>

<div class="absolute -z-10 h-full w-full fill-emerald-300">
  <div class="h-64 bg-emerald-300" />

  <div class="fill-inherit">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 250"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(1.025,0,0,1.25,-5,-12)">
        <path
          d="M784,150.6C784,150.6 775.797,124.513 738.667,121.267C700.586,117.938 684.226,86.268 671.594,83.834C655.762,80.783 650.764,77.16 630.767,115.9C619.275,138.161 605.924,120.033 580.75,141.933C541.57,176.019 561.036,107.903 531.05,109.367C497.593,111 491.067,187.339 468.217,177.703C452.702,171.16 467.957,66.756 449.6,71.133C418.296,78.599 428.668,169.05 404.8,156.467C387.517,147.355 346.885,44.642 311.467,59.933C281.966,72.67 265.832,134.538 234.133,146.733C204.083,158.294 176.916,144.641 161.933,128.2C142.964,107.385 123.959,75.579 116.2,99.867C114.319,105.755 114.332,128.332 99.2,127.667C76.313,126.661 69.743,128.12 43.2,142C27.902,150 20.46,142.624 25.067,122.867C26.558,116.471 19.267,108.234 14.4,105.8C10.747,103.973 6.421,105.209 2.667,106.291L2.667,1.267L784,1.267L784,150.6Z" />
      </g>
    </svg>
  </div>
</div>

<div class="fixed -z-20 h-full min-h-screen w-full bg-retro-black" />

<div class="flex flex-row justify-center">
  <main class="flex w-full flex-col gap-6 px-4 pb-10 text-retro-white md:w-[46rem]">
    <div class="pt-8 text-center">
      <h1 class="font-header text-5xl md:text-6xl">Blogs</h1>
      <p class="mx-auto mt-2 max-w-[32rem] text-lg text-retro-lightgray">
        Club event recaps and longer writeups from Tinovation.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      {#each posts as post}
        <a
          href={post.link}
          class="rounded-lg border-2 border-retro-black bg-retro-white p-4 text-retro-black shadow-lg transition ease-in hover:-translate-y-1 hover:shadow-2xl">
          <div class="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 class="font-header text-3xl">{post.title}</h2>
            <span class="whitespace-nowrap font-header text-lg text-retro-gray">
              {moment(post.date, "YYYY-MM-DD").format("MMM Do, YYYY")}
            </span>
          </div>
          <p class="mt-2 text-lg leading-snug">{post.description}</p>
        </a>
      {/each}
    </div>
  </main>
</div>
