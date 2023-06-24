<script lang="ts">
  const woof = () => {
    alert("woof!");
  };
</script>

<button
  on:click={woof}
  class="rounded border bg-orange-100 px-2 py-1 transition hover:animate-pulse">I'm a dog!</button>
