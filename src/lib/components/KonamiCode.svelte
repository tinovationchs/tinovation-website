<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const konamiCode = ["t", "i", "n", "o"];
  let konamiIndex = 0;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key.toLowerCase() === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerConfetti();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  }

  function triggerConfetti() {
    import("$lib/confetti").then((mod) => {
      mod.popTinoCs();
    });
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", handleKeydown);
    }
  });
</script>
