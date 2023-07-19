<script lang="ts">
  import { leaderboardData, leaderboardLastUpdated } from "$lib/leaderboard";
  import LeaderboardMessage from "./LeaderboardMessage.svelte";
  import LeaderboardSwitcher from "./LeaderboardSwitcher.svelte";
</script>

<div
  class="mx-4 flex flex-col rounded-lg border-2 border-retro-black bg-retro-white p-4 pt-3 font-mono text-lg sm:mx-12 md:w-[41rem]">
  <h1 class="mt-2 text-center font-header text-5xl md:text-6xl">Leaderboard</h1>

  <div class="grid grid-cols-3 items-baseline">
    <h2
      class="col-span-2 whitespace-nowrap font-header sm:col-span-1 sm:col-start-2 sm:justify-self-center">
      last updated:
      <span class="hidden sm:inline">{leaderboardLastUpdated.format("MMM Do, YYYY")}</span>
      <span class="inline sm:hidden">{leaderboardLastUpdated.format("YYYY-MM-DD")}</span>
    </h2>
    <span class="justify-self-end text-sm md:text-lg">
      <LeaderboardSwitcher />
    </span>
  </div>

  <hr class="mb-4 mt-2 border border-retro-black" />

  {#await $leaderboardData}
    <LeaderboardMessage>loading data...</LeaderboardMessage>
  {:then data}
    {#if data.length !== 0}
      <div class="flex flex-row gap-3.5 pb-2 pl-4 pr-2 text-sm">
        <span>{"#"}</span>
        <span>{"name"}</span>
        <span class="invisible mx-auto md:visible">{"comment"}</span>
        <span>{"points"}</span>
      </div>

      <div
        class="[&>*:nth-child(1)]:bg-[#c49f25] [&>*:nth-child(1)]:text-retro-white [&>*:nth-child(2)]:bg-[#8f8f8f] [&>*:nth-child(2)]:text-retro-white [&>*:nth-child(3)]:bg-yellow-700 [&>*:nth-child(3)]:text-retro-white">
        {#each data as person, i}
          <div
            class="flex flex-row items-baseline gap-4 p-4 first:rounded-t-lg last:rounded-b-lg odd:bg-retro-lightgray even:bg-retro-white">
            <span class="md:w-[16rem]">
              <span>{i + 1}</span>
              <span>{person.name ?? "???"}</span>
            </span>
            <span class="invisible h-0 w-0 text-sm md:visible md:h-auto md:w-56"
              >{person.comment ?? ""}</span>
            <span class="ml-auto">{person.totalPoints ?? "???"}</span>
          </div>
        {/each}
      </div>
    {:else}
      <LeaderboardMessage>no data yet...</LeaderboardMessage>
    {/if}
  {/await}
</div>
