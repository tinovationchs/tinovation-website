<script lang="ts">
  import info from "$lib/info";
</script>

<svelte:head>
  <title>{"Join - Tinovation"}</title>
  <meta property="og:title" content={"Join - Tinovation"} />
  <meta property="theme-color" content="#e11d48" />
  <meta
    property="description"
    content="Start here for Tinovation meetings, project sprints, points, and member resources." />

  <meta
    property="og:description"
    content="Start here for Tinovation meetings, project sprints, points, and member resources." />
  <meta property="og:image" content="https://tinovation.org/website/meta/home.webp" />

  <meta property="twitter:title" content={"Join - Tinovation"} />
  <meta
    property="twitter:description"
    content="Start here for Tinovation meetings, project sprints, points, and member resources." />
  <meta property="twitter:image" content="https://tinovation.org/website/meta/home.webp" />
</svelte:head>

<div class="absolute -z-10 h-full w-full fill-rose-300">
  <div class="h-64 bg-rose-300" />

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
          d="M784,150.6C784,150.6 745.797,132.513 708.667,129.267C670.586,125.938 650.226,86.268 637.594,83.834C621.762,80.783 608.764,116.16 588.767,154.9C577.275,177.161 543.924,122.033 518.75,143.933C479.57,178.019 461.036,107.903 431.05,109.367C397.593,111 391.067,187.339 368.217,177.703C352.702,171.16 367.957,66.756 349.6,71.133C318.296,78.599 328.668,169.05 304.8,156.467C287.517,147.355 246.885,44.642 211.467,59.933C181.966,72.67 165.832,134.538 134.133,146.733C104.083,158.294 76.916,144.641 61.933,128.2C42.964,107.385 23.959,75.579 16.2,99.867C14.319,105.755 14.332,128.332 2.667,130.667L2.667,1.267L784,1.267L784,150.6Z" />
      </g>
    </svg>
  </div>
</div>

<div class="fixed -z-20 h-full min-h-screen w-full bg-retro-black" />

<main class="mb-8 flex flex-row justify-center px-4">
  <div class="flex w-full max-w-[46rem] flex-col gap-5">
    <h1 class="text-center font-header text-5xl md:text-6xl">Start Here</h1>

    <div
      class="rounded-lg border-2 border-retro-black bg-retro-white p-4 font-semibold text-retro-black shadow-[4px_4px_0px_0px_#232222]">
      <h2 class="font-header text-4xl text-rose-700">Join Tinovation</h2>
      <p class="mt-2 text-lg">
        Come to {info.meeting_day} meetings during {info.meeting_time} in
        <a
          href={info.meeting_room_link}
          target="_blank"
          class="text-blue-700 underline-offset-2 hover:underline">{info.meeting_room}</a
        >. You do not need coding experience. Bring a laptop if you can, join the Discord, and pick
        a project path that fits your skill level.
      </p>

      <div class="mt-4 flex flex-wrap gap-3">
        <a
          href={info.discord_link}
          target="_blank"
          class="rounded-lg border-2 border-retro-black bg-[#5865F2] px-4 py-2 font-header text-lg text-white shadow-[3px_3px_0px_0px_#232222] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#232222]">
          join Discord
        </a>
        {#if info.form_visible}
          <a
            href={info.form_link}
            target="_blank"
            class="rounded-lg border-2 border-retro-black bg-yellow-300 px-4 py-2 font-header text-lg text-retro-black shadow-[3px_3px_0px_0px_#232222] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#232222]">
            {info.form_text}
          </a>
        {/if}
      </div>
    </div>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        class="rounded-lg border-2 border-retro-black bg-blue-100 p-4 text-retro-black shadow-md">
        <h2 class="font-header text-3xl text-blue-700">First Meeting</h2>
        <ul class="mt-2 list-inside list-disc text-lg">
          <li>Meet officers and other builders.</li>
          <li>Choose beginner, web, AI, game, or open project work.</li>
          <li>Find teammates or work solo.</li>
        </ul>
      </div>

      <div
        class="rounded-lg border-2 border-retro-black bg-green-100 p-4 text-retro-black shadow-md">
        <h2 class="font-header text-3xl text-green-700">Every Sprint</h2>
        <ul class="mt-2 list-inside list-disc text-lg">
          <li>Build for about two weeks.</li>
          <li>Ask for help in meetings or Discord.</li>
          <li>Submit your project for points and feedback.</li>
        </ul>
      </div>

      <div
        class="rounded-lg border-2 border-retro-black bg-yellow-100 p-4 text-retro-black shadow-md">
        <h2 class="font-header text-3xl text-amber-700">Stay Involved</h2>
        <ul class="mt-2 list-inside list-disc text-lg">
          <li>Check the leaderboard after sprints and activities.</li>
          <li>Add finished work to the showcase.</li>
          <li>Help newer members once you learn something useful.</li>
        </ul>
      </div>

      <div
        class="rounded-lg border-2 border-retro-black bg-pink-100 p-4 text-retro-black shadow-md">
        <h2 class="font-header text-3xl text-pink-700">Need Help?</h2>
        <ul class="mt-2 list-inside list-disc text-lg">
          <li>Start with the resources page.</li>
          <li>Post questions in Discord.</li>
          <li>Ask officers to help scope your idea smaller.</li>
        </ul>
      </div>
    </section>

    <section
      class="rounded-lg border-2 border-retro-black bg-retro-white p-4 text-retro-black shadow-[4px_4px_0px_0px_#232222]">
      <h2 class="font-header text-4xl text-purple-700">Quick Paths</h2>
      <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <a
          href="/resources"
          class="rounded-lg bg-purple-200 p-3 font-header text-xl transition hover:scale-[101%]">
          learn something
        </a>
        <a
          href="/leaderboard"
          class="rounded-lg bg-rose-200 p-3 font-header text-xl transition hover:scale-[101%]">
          earn points
        </a>
        <a
          href="/showcase"
          class="rounded-lg bg-sky-200 p-3 font-header text-xl transition hover:scale-[101%]">
          see projects
        </a>
      </div>
    </section>
  </div>
</main>
