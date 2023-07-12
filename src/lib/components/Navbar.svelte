<script>
  import { page } from "$app/stores";
</script>

<div class="flex w-full flex-row justify-center">
  <nav
    class="text-semibold fixed top-4 z-30 flex flex-row gap-4 rounded-3xl bg-retro-white px-4 py-1 font-header text-lg shadow-md shadow-transparent transition ease-in hover:-translate-y-0.5 hover:shadow-retro-white md:gap-8 md:px-10 md:py-1.5 md:text-2xl">
    <!-- NOTE: ALL THESE IF STATEMENTS WAS PROBABLY INEFFICIENT BUT I WAS LAZY AND DIDN'T WANT TO FIND ANOTHER SOLUTION -->
    {#if $page.url.pathname === "/"}
      <a href="/" class="text-amber-700 transition ease-in">home</a>
    {:else}
      <a href="/" class="transition ease-in hover:text-amber-700">home</a>
    {/if}

    {#if $page.url.pathname === "/resources"}
      <a href="/resources" class="text-pink-700 transition ease-in">resources</a>
    {:else}
      <a href="/resources" class="transition ease-in hover:text-pink-700">resources</a>
    {/if}

    {#if $page.url.pathname === "/showcase"}
      <a href="/showcase" class="text-blue-700 transition ease-in">showcase</a>
    {:else}
      <a href="/showcase" class="transition ease-in hover:text-blue-700">showcase</a>
    {/if}

    {#if $page.url.pathname === "/leaderboard"}
      <a href="/leaderboard" class="text-purple-700 transition ease-in">leaderboard</a>
    {:else}
      <a href="/leaderboard" class="transition ease-in hover:text-purple-700">leaderboard</a>
    {/if}
  </nav>
</div>
