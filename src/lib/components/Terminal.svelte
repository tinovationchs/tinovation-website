<script lang="ts">
  import { onMount } from "svelte";

  interface TerminalLine {
    text: string;
    type: "input" | "output" | "error" | "success" | "ascii";
  }

  let inputVal = "";
  let terminalLines: TerminalLine[] = [
    { text: "Welcome to the Tinovation Terminal v1.0.0", type: "success" },
    { text: "Type 'help' to see list of available commands.", type: "output" },
  ];

  let scrollContainer: HTMLDivElement;
  let inputEl: HTMLInputElement;

  const commands: Record<string, string | (() => string | TerminalLine[])> = {
    help: "Available commands:\n  about     - What is Tinovation?\n  officers  - Meet the leadership team\n  sprints   - Learn about our code sprints\n  hack      - Run the secret hacker sequence ⚡\n  clear     - Clear terminal logs",
    about:
      "Tinovation is Cupertino High School's premier programming and software development club! We build projects, host PioneerHacks, and run competitive coding workshops.",
    officers:
      "Co-Presidents: Prakruti Sunil, Bernard Freund\nVice President: Arnav Gokhale\nSecretary & Treasurer: Connor Wang\nOfficers: Amogh Bhatta, Michael Zhao, Adarsh Sudheer, Shreeansh Bharadwaj\nClub Advisor: Mr. Ferrante",
    sprints:
      "Code Sprints are 2-week programming cycles. Build custom software, showcase it, earn points, and climb the leaderboard to win cool prizes at the semester's end!",
    hack: () => [
      { text: "Initializing override...", type: "output" },
      { text: "Bypassing firewalls...", type: "output" },
      { text: "HACK SUCCESSFUL! 💡 HACK THE PLANET! 💻⚡", type: "success" },
      {
        text: `
      .---.
     /     \\
    |   💡  |
    |  TINO |
     \\     /
      \`---\`
      |___|
      |___|
      (( ))
`,
        type: "ascii",
      },
    ],
  };

  function executeCommand() {
    const trimmedInput = inputVal.trim().toLowerCase();
    if (!trimmedInput) return;

    // Add input line
    terminalLines = [...terminalLines, { text: `tinovation@chs:~$ ${inputVal}`, type: "input" }];

    if (trimmedInput === "clear") {
      terminalLines = [];
    } else if (trimmedInput in commands) {
      const result = commands[trimmedInput];
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
        {
          text: `bash: command not found: ${trimmedInput}. Type 'help' for commands.`,
          type: "error",
        },
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
    class="flex select-none items-center gap-2 rounded-t-xl border-b border-retro-black bg-retro-gray/30 px-4 py-3">
    <div class="h-3 w-3 rounded-full bg-[#ff5f56]" />
    <div class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
    <div class="h-3 w-3 rounded-full bg-[#27c93f]" />
    <span class="ml-4 font-header text-xs tracking-wider text-retro-white/50"
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
