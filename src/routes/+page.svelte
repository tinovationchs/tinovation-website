<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import HomePageLogo from "$lib/components/HomePageLogo.svelte";
  import SocialsBar from "$lib/components/SocialsBar.svelte";
  import info from "$lib/info";
</script>

<svelte:head>
  <title>{"Tinovation"}</title>
  <meta property="og:title" content={"Tinovation"} />
</svelte:head>

<!-- CONTENT STREAM -->
<div class="flex w-full flex-col bg-retro-gray text-lg text-retro-white md:items-center">
  <!-- BANNER/HEADER THINGY -->
  <div class="flex min-h-[40rem] w-full flex-row justify-center rounded-b-3xl bg-retro-black pb-4">
    <div class="flex flex-col items-center pt-52">
      <HomePageLogo />

      <h1 class="mt-4 font-header text-6xl font-semibold text-retro-white md:text-7xl">
        Tinovation
      </h1>
      <h3 class="font-header text-lg text-retro-white md:text-2xl">programming club at CHS</h3>

      <SocialsBar />
    </div>
  </div>

  <!-- ACTUAL CONTENT -->
  <div class="my-12 flex w-fit flex-col gap-4 px-4 md:w-[44rem]">
    <!-- ============== -->
    <!-- ABOUT US BLOCK -->
    <!-- ============== -->
    <h2 class="font-header text-4xl">About Us</h2>
    <p>
      Tinovation is the largest programming and software development club at Cupertino High School!
      At Tinovation, you will build innovative projects with your fellow programmers and improve
      upon your coding skills. Anyone can learn to bring an idea to life!
    </p>

    <!-- =============== -->
    <!-- LINKS AND STUFF -->
    <!-- =============== -->
    <div
      class="mt-2 flex w-full flex-row flex-wrap gap-4 px-2 text-center text-retro-black sm:flex-nowrap">
      <a
        href="/resources"
        class="flex w-full flex-col gap-1 rounded-lg border-2 border-retro-black bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 p-2 text-retro-white shadow-lg transition ease-in hover:scale-[102%] hover:shadow-2xl">
        <h2 class="text-xl font-bold">Coding Resources</h2>
        <p>
          A collection of guides and external links designed to help members figure things out on
          their own.
        </p>
      </a>
      <a
        href="/showcase"
        class="flex w-full flex-col gap-1 rounded-lg border-2 border-retro-black bg-gradient-to-tl from-indigo-200 via-red-200 to-yellow-100 p-2 shadow-lg transition ease-in hover:scale-[102%] hover:shadow-2xl">
        <h2 class="text-xl font-bold">Project Showcase</h2>
        <p>
          Several cool projects made by Tinovation members, both past and present. Use for
          inspiration!
        </p>
      </a>
    </div>

    <!-- =================== -->
    <!-- MEETING TIMES BLOCK -->
    <!-- =================== -->
    <h2 class="mt-4 font-header text-4xl">Meeting Times</h2>
    <div class="mb-4 flex flex-col gap-1 text-xl">
      <p>
        <em class="not-italic text-blue-300">Mondays</em> during
        <em class="not-italic text-green-300">Lunch</em>
        at
        <a href="https://chs-map.vercel.app" target="_blank" class="text-red-300">Room 307</a>
      </p>
      <p>
        <em class="not-italic text-blue-300">Saturdays</em> from
        <em class="not-italic text-green-300">10am to 1pm (tentative)</em>
        at the
        <a href="https://sccld.org/locations/cupertino/" target="_blank" class="text-red-300"
          >Cupertino Library</a>
      </p>
    </div>

    <!-- ================== -->
    <!-- CODE SPRINTS BLOCK -->
    <!-- ================== -->
    <div
      class="my-4 rounded-lg bg-retro-white p-4 font-semibold text-retro-black shadow-md shadow-retro-white">
      <div class="flex flex-row items-center gap-4">
        <h2 class="font-header text-4xl text-rose-400">Code Sprints</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-10 w-10 fill-yellow-400 stroke-rose-400 stroke-[1.5]">
          <path
            fill-rule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <hr class="my-2 rounded border-2 border-rose-400" />
      <p>
        Our club will mostly consist of code sprints that last ~2 weeks, where members will be able
        to learn and improve by creating their own projects in a short timeframe. They will be able
        to earn points that count towards winning prizes at the end of the semester!

        <a
          href="/leaderboard"
          class="text-semibold group mt-2 flex w-fit flex-row items-center justify-center gap-1 self-center rounded-lg text-center text-lg
      font-bold text-rose-400 transition duration-100 ease-in hover:translate-x-1">
          <span class="align-baseline">check leaderboard</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="inline-block h-4 w-4 transition duration-[25ms] ease-in">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </p>
    </div>

    <!-- ========== -->
    <!-- FUN? BLOCK -->
    <!-- ========== -->
    <div
      class="my-4 rounded-lg bg-slate-100 p-4 font-semibold text-retro-black shadow-md shadow-slate-100">
      <div class="flex flex-row items-center gap-4">
        <h2 class="font-header text-4xl text-indigo-500">Fun & Games?</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-10 w-10 -translate-y-0.5 fill-pink-400 stroke-retro-black stroke-1">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
        </svg>
      </div>
      <hr class="my-2 rounded border-2 border-indigo-500" />
      <p>
        To be honest, coding can be quite frustrating. That's why we want to maintain a relaxed,
        casual environment for anyone to work on their projects or just to hang out. We will also
        have fun interim activities to keep members engaged and even to win some points! :D

        <a
          href={info.fun_games_link}
          target="_blank"
          class="text-semibold group mt-2 flex w-fit flex-row items-center justify-center gap-1 self-center rounded-lg text-center text-lg
      font-bold text-indigo-500 transition duration-100 ease-in hover:translate-x-1">
          <span class="align-baseline">fun link</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="inline-block h-4 w-4 transition duration-[25ms] ease-in">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </p>
    </div>

    <!-- ================== -->
    <!-- PIONEERHACKS BLOCK -->
    <!-- ================== -->
    <div
      class="my-4 rounded-lg bg-[#bde5ef] p-4 font-semibold text-[#653d24] shadow-md shadow-[#bde5ef]">
      <div class="flex flex-row items-center gap-4">
        <h2 class="font-header text-4xl text-[#cd8c4a] transition ease-in">PioneerHacks</h2>
        <img src="/website/pioneerhacks_logo.png" alt="pioneerhacks logo" class="inline w-12" />
      </div>

      <hr class="my-2 rounded border-2 border-[#cd8c4a]" />

      <p>
        Every year, Tinovation runs PioneerHacks, a hackathon where hundreds of teenagers across the
        Bay Area compete to build winning products with tech.
      </p>

      <a
        href={info.pioneerhacks_link}
        target="_blank"
        class="text-semibold group mt-2 flex w-fit flex-row items-center justify-center gap-1 self-center rounded-lg text-center text-lg
              font-bold text-[#cd8c4a] transition duration-100 ease-in hover:translate-x-1">
        <span class="align-baseline">more info</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="inline-block h-4 w-4 transition duration-[25ms] ease-in">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>

    <!-- ================== -->
    <!-- OFFICER TEAM BLOCK -->
    <!-- ================== -->
    <div class="mt-4 flex flex-col gap-3">
      <h2 class="font-header text-4xl">The Officer Team</h2>
      <p>
        <b class="text-pink-300">Club Advisor:</b>
        {info.club_advisor}
      </p>
      <p>
        <b class="text-purple-300">Co-Presidents:</b>
        {`${info.co_presidents.join(", ")}`}
      </p>
      <p>
        <b class="text-blue-300">Vice President:</b>
        {info.vice_president}
      </p>
      <p>
        <b class="text-green-300">Secretary/Treasurer:</b>
        {info.secretary_treasurer}
      </p>
      <p>
        <b class="text-red-300">Mentors:</b>
        {info.mentors.join(", ")}
      </p>
    </div>
  </div>

  <!-- ===================== -->
  <!-- CONTACT INFO & FOOTER -->
  <!-- ===================== -->
  <Footer>
    <div class="flex flex-row justify-center">
      <div class="my-16 flex w-fit flex-col justify-center gap-2">
        <h2 class="text-4xl">Contact Us</h2>

        <div class="flex w-fit flex-col gap-2 p-4 pt-2 text-left">
          <div>
            <span class="select-none">Discord: </span><a
              href={info.discord_link}
              target="_blank"
              class="inline underline underline-offset-4 hover:text-purple-400"
              >{info.discord_link.replace(/(www.)|(https:\/\/)/g, "")}</a>
          </div>
          <div>
            <span class="select-none">Instagram: </span><a
              href={info.instagram_link}
              target="_blank"
              class="inline underline underline-offset-4 hover:text-purple-400"
              >{info.instagram_link.replace(/(www.)|(https:\/\/)/g, "")}</a>
          </div>
          <div>
            <span class="select-none">{"Email: "}</span>
            <h3 class="inline underline underline-offset-4 hover:text-blue-400">{info.email}</h3>
          </div>
          <div>
            <span class="select-none">{"Club Advisor Email: "}</span>
            <h3 class="inline underline underline-offset-4 hover:text-blue-400">
              {info.club_advisor_email}
            </h3>
          </div>
          <div>
            <span class="select-none">GitHub: </span><a
              href={info.github_link}
              target="_blank"
              class="inline underline underline-offset-4 hover:text-purple-400"
              >{info.github_link.replace(/(www.)|(https:\/\/)/g, "")}</a>
          </div>
        </div>

        <!-- <hr class="border rounded border-retro-white mx-2"/> -->
      </div>
    </div>
  </Footer>
</div>
