<script lang="ts">
  import { allLeaderboards, currentLeaderboard } from "$lib/leaderboard";
</script>

<select
  class="rounded border border-purple-900 bg-white px-1 font-sans text-purple-900 outline-none"
  bind:value={$currentLeaderboard}>
  {#each allLeaderboards as name}
    <option value={name}>{name.replace("_", " ")}</option>
  {/each}
</select>
