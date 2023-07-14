<script lang="ts">
  import { leaderboardData, leaderboardLastUpdated } from "$lib/leaderboard";
</script>

<div
  class="mx-8 flex flex-col rounded-lg border-2 border-retro-black bg-retro-white p-4 pt-3 font-jetbrains text-lg sm:mx-24 md:w-[42rem]">
  <h1 class="mt-2 text-center font-header text-5xl md:text-6xl">Leaderboard</h1>
  <h2 class="text-center font-header">last updated: {leaderboardLastUpdated}</h2>

  <hr class="mb-4 mt-2 border border-retro-black" />

  <div class="flex flex-row gap-4 pb-2 pl-4 pr-2 text-sm">
    <span>{"#"}</span>
    <span>{"name"}</span>
    <span class="invisible mx-auto md:visible">{"comment"}</span>
    <span>{"points"}</span>
  </div>

  <div
    class="[&>*:nth-child(1)]:bg-[#c49f25] [&>*:nth-child(1)]:text-retro-white [&>*:nth-child(2)]:bg-[#8f8f8f] [&>*:nth-child(2)]:text-retro-white [&>*:nth-child(3)]:bg-yellow-700 [&>*:nth-child(3)]:text-retro-white">
    {#each leaderboardData as person, i}
      <div
        class="flex flex-row items-baseline gap-4 p-4 first:rounded-t-lg last:rounded-b-lg odd:bg-[rgb(201,199,196)] even:bg-retro-white">
        <span class="md:w-[14.5rem]">
          <span>{i + 1 || "-1"}</span>
          <span>{person.name || "no name?"}</span>
        </span>
        <span class="invisible h-0 w-0 text-sm md:visible md:h-auto md:w-56"
          >{person.comment || ""}</span>
        <span class="ml-auto">{person.totalPoints || "-1"}</span>
      </div>
    {/each}
  </div>
</div>
