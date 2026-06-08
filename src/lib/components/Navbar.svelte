<script>
  import { page } from "$app/stores";
  import info from "$lib/info";
</script>

<div class="fixed z-30 flex w-full flex-col items-center gap-4 py-4">
  <div>
    <nav
      class="text-semibold flex max-w-[calc(100vw-1rem)] flex-row flex-wrap justify-center gap-x-4 gap-y-1 rounded-3xl bg-retro-white px-4 py-1 font-header text-base opacity-90 shadow-md shadow-transparent transition ease-in hover:-translate-y-0.5 hover:shadow-retro-white sm:text-lg md:gap-x-8 md:px-10 md:py-1.5 md:text-2xl">
      {#if $page.url.pathname === "/"}
        <a href="/" class="text-amber-700 transition ease-in">home</a>
      {:else}
        <a href="/" class="transition ease-in hover:text-amber-700">home</a>
      {/if}

      {#if $page.url.pathname.includes("/resources")}
        <a href="/resources" class="text-pink-700 transition ease-in">resources</a>
      {:else}
        <a href="/resources" class="transition ease-in hover:text-pink-700">resources</a>
      {/if}

      {#if $page.url.pathname === "/join"}
        <a href="/join" class="text-rose-700 transition ease-in">join</a>
      {:else}
        <a href="/join" class="transition ease-in hover:text-rose-700">join</a>
      {/if}

      {#if $page.url.pathname === "/showcase"}
        <a href="/showcase" class="text-blue-700 transition ease-in">showcase</a>
      {:else}
        <a href="/showcase" class="transition ease-in hover:text-blue-700">showcase</a>
      {/if}

      {#if $page.url.pathname.includes("/blogs")}
        <a href="/blogs" class="text-emerald-700 transition ease-in">blogs</a>
      {:else}
        <a href="/blogs" class="transition ease-in hover:text-emerald-700">blogs</a>
      {/if}

      {#if $page.url.pathname === "/leaderboard"}
        <a href="/leaderboard" class="text-purple-700 transition ease-in">leaderboard</a>
      {:else}
        <a href="/leaderboard" class="transition ease-in hover:text-purple-700">leaderboard</a>
      {/if}
    </nav>
  </div>
  <div class="rounded-3xl bg-retro-white px-4 py-1 font-header text-2xl">
    {info.school_year} meetings:
    <span class="text-sky-600">{info.meeting_day}</span>
    @ {info.meeting_time}, {info.meeting_room}
  </div>
</div>
