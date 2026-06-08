<script lang="ts">
  import { onMount } from "svelte";
  import { activeTheme, allThemes, themesUnlocked, isThemeActiveForDate } from "$lib/theme";

  interface TerminalLine {
    text: string;
    type: "input" | "output" | "error" | "success" | "ascii";
  }

  let inputVal = "";
  let terminalLines: TerminalLine[] = [
    { text: "Welcome to the Tinovation Terminal v1.1.0", type: "success" },
    { text: "Type 'help' to see list of available commands.", type: "output" },
  ];

  let scrollContainer: HTMLDivElement;
  let inputEl: HTMLInputElement;

  const commands: Record<string, string | (() => string | TerminalLine[])> = {
    help: "Available commands:\n  about        - What is Tinovation?\n  officers     - Meet the leadership team\n  sprints      - Learn about our code sprints\n  theme <name> - Change theme (default, halloween, christmas, summer, july4th)\n  hack         - Unlock theme controls\n  clear        - Clear terminal logs",
    about:
      "Tinovation is Cupertino High School's premier programming and software development club! We build projects, host PioneerHacks, and run competitive coding workshops.",
    officers:
      "Co-Presidents: Prakruti Sunil, Bernard Freund\nVice President: Arnav Gokhale\nSecretary & Treasurer: Connor Wang\nOfficers: Amogh Bhatta, Michael Zhao, Adarsh Sudheer, Shreeansh Bharadwaj\nClub Advisor: Mr. Ferrante",
    sprints:
      "Code Sprints are 2-week programming cycles. Build custom software, showcase it, earn points, and climb the leaderboard to win cool prizes at the semester's end!",
    hack: () => {
      // Trigger themes unlock override
      themesUnlocked.set(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("tino-themes-unlocked", "true");
      }

      const currentThemeName = $activeTheme.name;
      let ascii = "";
      let emoji = "💡";

      if (currentThemeName === "halloween") {
        emoji = "👻";
        ascii = `
     .-.
    (o.o)   👻
     |=|
    /   \\
   |     |
    \\___/
   SPOOKY SEASON!
`;
      } else if (currentThemeName === "christmas") {
        emoji = "🎄";
        ascii = `
       *
      / \\
     /   \\   🎄
    /     \\
   /       \\
   ---------
      |_|
   MERRY CS!
`;
      } else if (currentThemeName === "july4th") {
        emoji = "🎆";
        ascii = `
      \\ _ /
     '-.I.-'
    -== o ==-  🎆
     .-'I'-.
      /   \\
    BOOM! 🇺🇸
`;
      } else if (currentThemeName === "summer") {
        emoji = "☀️";
        ascii = `
      \\ _ /
    -= (_) =-  ☀️
      /   \\
    TINOVATION
`;
      } else {
        ascii = `
      ,---.
     /     \\
    |   💡  |
    |  TINO |
     \\     /
      \`---\`
      |___|
      |___|
      (( ))
`;
      }

      return [
        { text: "Unlocking theme controls...", type: "output" },
        { text: `Theme controls unlocked. ${emoji}`, type: "success" },
        { text: ascii, type: "ascii" },
      ];
    },
  };

  function executeCommand() {
    const rawInput = inputVal.trim();
    if (!rawInput) return;

    // Split input into command and arguments (handles spaces)
    const args = rawInput.split(/\s+/);
    const cmd = args[0].toLowerCase();

    // Add input line to history
    terminalLines = [...terminalLines, { text: `tinovation@chs:~$ ${rawInput}`, type: "input" }];

    if (cmd === "clear") {
      terminalLines = [];
    } else if (cmd === "theme") {
      if (args.length < 2) {
        terminalLines = [
          ...terminalLines,
          { text: `Current theme: ${$activeTheme.name} ${$activeTheme.cursor}`, type: "output" },
          { text: "Usage: theme [default|halloween|christmas|summer|july4th]", type: "output" },
        ];
      } else {
        const targetThemeName = args[1].toLowerCase();
        if (targetThemeName in allThemes) {
          const isAvailable = isThemeActiveForDate(targetThemeName, new Date()) || $themesUnlocked;
          if (isAvailable) {
            activeTheme.set(allThemes[targetThemeName]);
            if (typeof window !== "undefined") {
              localStorage.setItem("tino-preferred-theme", targetThemeName);
            }
            terminalLines = [
              ...terminalLines,
              {
                text: `Theme successfully updated to: ${targetThemeName} ${allThemes[targetThemeName].cursor}`,
                type: "success",
              },
            ];
          } else {
            terminalLines = [
              ...terminalLines,
              {
                text: `Theme '${targetThemeName}' is currently locked for this season 🔒`,
                type: "error",
              },
              {
                text: `Available: ${allThemes[targetThemeName].availableRange}. Run 'hack' to unlock theme controls.`,
                type: "output",
              },
            ];
          }
        } else {
          terminalLines = [
            ...terminalLines,
            {
              text: `Theme '${args[1]}' not recognized. Available: default, halloween, christmas, summer, july4th`,
              type: "error",
            },
          ];
        }
      }
    } else if (cmd in commands) {
      const result = commands[cmd];
      if (typeof result === "function") {
        const linesToAdd = result();
        if (Array.isArray(linesToAdd)) {
          terminalLines = [...terminalLines, ...linesToAdd];
        } else {
          terminalLines = [...terminalLines, { text: linesToAdd, type: "output" }];
        }
      } else {
        // Multi-line support
        const splitText = result.split("\n");
        const formattedLines: TerminalLine[] = splitText.map((t) => ({ text: t, type: "output" }));
        terminalLines = [...terminalLines, ...formattedLines];
      }
    } else {
      terminalLines = [
        ...terminalLines,
        { text: `bash: command not found: ${cmd}. Type 'help' for commands.`, type: "error" },
      ];
    }

    inputVal = "";
    autoScroll();
  }

  function autoScroll() {
    setTimeout(() => {
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }, 10);
  }

  function focusInput() {
    inputEl?.focus();
  }

  onMount(() => {
    focusInput();
  });
</script>

<div
  class="my-12 flex w-full flex-col rounded-2xl border-2 border-retro-black bg-retro-black font-jetbrains text-sm text-retro-white shadow-[6px_6px_0px_0px_#232222]"
  on:click={focusInput}
  on:keydown={(e) => e.key === "Enter" && focusInput()}
  role="textbox"
  tabindex="0">
  <!-- Window Header Bar (macOS style) -->
  <div
    class="bg-retro-gray/30 flex select-none items-center gap-2 rounded-t-xl border-b border-retro-black px-4 py-3">
    <div class="h-3 w-3 rounded-full bg-[#ff5f56]" />
    <div class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
    <div class="h-3 w-3 rounded-full bg-[#27c93f]" />
    <span class="text-retro-white/50 ml-4 font-header text-xs tracking-wider"
      >tinovation@chs: ~</span>
  </div>

  <!-- Terminal Body -->
  <div
    bind:this={scrollContainer}
    class="hide-scrollbar flex h-64 select-text flex-col gap-1.5 overflow-y-auto p-4">
    {#each terminalLines as line}
      {#if line.type === "ascii"}
        <pre class="select-none font-mono text-xs leading-none text-yellow-400">{line.text}</pre>
      {:else}
        <div
          class="whitespace-pre-wrap leading-relaxed
            {line.type === 'input' ? 'text-blue-300' : ''}
            {line.type === 'error' ? 'text-red-400' : ''}
            {line.type === 'success' ? 'font-bold text-green-400' : ''}
            {line.type === 'output' ? 'text-retro-white' : ''}">
          {line.text}
        </div>
      {/if}
    {/each}

    <!-- Input Line -->
    <div class="mt-1 flex items-center gap-2">
      <span class="select-none text-blue-300">tinovation@chs:~$</span>
      <input
        bind:this={inputEl}
        bind:value={inputVal}
        on:keydown={(e) => e.key === "Enter" && executeCommand()}
        type="text"
        class="flex-1 border-none bg-transparent p-0 font-jetbrains text-retro-white caret-green-400 outline-none focus:outline-none focus:ring-0"
        aria-label="Terminal Input" />
    </div>
  </div>
</div>

<style>
  /* Hide scrollbar for standard look */
  .hide-scrollbar {
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
