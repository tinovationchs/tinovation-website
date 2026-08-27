<script lang="ts">
  import { activeTheme, allThemes, themesUnlocked, isThemeActiveForDate } from "$lib/theme";
  import { onMount } from "svelte";

  let isOpen = false;
  let clickedLockedTheme = "";
  let timeoutId: number;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function selectTheme(themeName: string) {
    const isAvailable = isThemeActiveForDate(themeName, new Date()) || $themesUnlocked;

    if (isAvailable) {
      const selected = allThemes[themeName];
      activeTheme.set(selected);
      if (typeof window !== "undefined") {
        localStorage.setItem("tino-preferred-theme", themeName);
      }
      isOpen = false;
    } else {
      clickedLockedTheme = themeName;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        clickedLockedTheme = "";
      }, 3000) as unknown as number;
    }
  }

  function closeMenu(event: MouseEvent) {
    // Close menu if clicked outside
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest(".theme-switcher-container")) {
      isOpen = false;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", closeMenu);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("click", closeMenu);
      }
    };
  });
</script>

<div
  class="theme-switcher-container fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-header">
  <!-- DROPDOWN MENU -->
  {#if isOpen}
    <div
      class="flex w-64 select-none flex-col rounded-2xl border-2 border-retro-black bg-retro-white p-4 text-retro-black shadow-[6px_6px_0px_0px_#232222]">
      <h3
        class="mb-3 border-b-2 border-retro-black pb-1 text-center text-lg font-bold uppercase tracking-wider">
        Select Theme
      </h3>

      <div class="flex flex-col gap-2">
        {#each Object.entries(allThemes) as [name, theme]}
          {@const isAvailable = isThemeActiveForDate(name, new Date()) || $themesUnlocked}
          {@const isSelected = $activeTheme.name === name}

          <button
            on:click={() => selectTheme(name)}
            class="flex items-center justify-between rounded-xl border-2 border-retro-black px-3 py-2 text-left font-sans text-sm font-bold shadow-[2px_2px_0px_0px_#232222] transition-all
              {isSelected
              ? 'translate-x-[2px] translate-y-[2px] bg-retro-black text-retro-white shadow-[0px_0px_0px_0px_#232222]'
              : ''}
              {!isSelected && isAvailable
              ? 'bg-retro-white text-retro-black hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#232222] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#232222]'
              : ''}
              {!isAvailable
              ? 'bg-retro-gray/10 text-retro-gray/50 border-retro-gray/30 cursor-not-allowed opacity-70 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]'
              : ''}">
            <span class="flex items-center gap-2">
              <span>{theme.cursor}</span>
              <span>{theme.displayName}</span>
            </span>

            {#if isSelected}
              <span class="text-xs font-bold uppercase text-green-400">active</span>
            {:else if !isAvailable}
              <span class="text-xs">🔒</span>
            {/if}
          </button>

          <!-- Warning Message if user clicks a locked theme -->
          {#if clickedLockedTheme === name}
            <div
              class="rounded-lg bg-red-100 p-2 text-center font-sans text-[11px] font-semibold text-red-700">
              Only available seasonally:<br />
              <span class="underline">{theme.availableRange}</span> or unlock in CLI!
            </div>
          {/if}
        {/each}
      </div>

      {#if !$themesUnlocked}
        <div
          class="border-retro-black/10 text-retro-gray/60 mt-4 border-t pt-2 text-center font-sans text-[10px] font-semibold">
          💡 Tip: run <code class="bg-retro-gray/10 rounded px-1 py-0.5">hack</code> in CLI to unlock
          all themes!
        </div>
      {/if}
    </div>
  {/if}

  <!-- FLOATING ACTION BUTTON -->
  <button
    on:click={toggleMenu}
    class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-retro-black bg-retro-white text-3xl text-retro-black shadow-[4px_4px_0px_0px_#232222] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#232222] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#232222]"
    aria-label="Toggle theme settings">
    {$activeTheme.cursor === "💡" ? "🎨" : $activeTheme.cursor}
  </button>
</div>
