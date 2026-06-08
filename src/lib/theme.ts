import { writable } from "svelte/store";

export interface Theme {
  name: string;
  displayName: string;
  colors: {
    black: string;
    gray: string;
    lightgray: string;
    white: string;
  };
  cursor: string;
  badge: string;
  availableRange: string;
}

export const defaultTheme: Theme = {
  name: "default",
  displayName: "Default (OG)",
  colors: {
    black: "#232222",
    gray: "#545B64",
    lightgray: "rgb(201,199,196)",
    white: "#ECE8E0",
  },
  cursor: "💡",
  badge: "",
  availableRange: "Always available",
};

export const halloweenTheme: Theme = {
  name: "halloween",
  displayName: "Halloween",
  colors: {
    black: "#0c0a0f",
    gray: "#1d112b",
    lightgray: "#4c1d95",
    white: "#f97316",
  },
  cursor: "🎃",
  badge: "",
  availableRange: "Oct 24 - Nov 1",
};

export const christmasTheme: Theme = {
  name: "christmas",
  displayName: "Winter",
  colors: {
    black: "#0c1713",
    gray: "#0b4632",
    lightgray: "#b91c1c",
    white: "#f3f4f6",
  },
  cursor: "❄️",
  badge: "",
  availableRange: "Dec 10 - Dec 31",
};

export const patrioticTheme: Theme = {
  name: "july4th",
  displayName: "July 4th",
  colors: {
    black: "#0b132b",
    gray: "#1c3d5a",
    lightgray: "#e53e3e",
    white: "#f7fafc",
  },
  cursor: "🎆",
  badge: "",
  availableRange: "July 3 - July 5",
};

export const summerTheme: Theme = {
  name: "summer",
  displayName: "Summer",
  colors: {
    black: "#1c1917",
    gray: "#0284c7",
    lightgray: "#38bdf8",
    white: "#fef08a",
  },
  cursor: "🌴",
  badge: "",
  availableRange: "June 1 - Aug 31",
};

export const allThemes: Record<string, Theme> = {
  default: defaultTheme,
  summer: summerTheme,
  halloween: halloweenTheme,
  christmas: christmasTheme,
  july4th: patrioticTheme,
};

// Check if a theme is active for the current calendar date
export function isThemeActiveForDate(themeName: string, date: Date): boolean {
  if (themeName === "default") return true;

  const month = date.getMonth(); // 0 = Jan, 11 = Dec
  const day = date.getDate();

  if (themeName === "july4th") {
    return month === 6 && day >= 3 && day <= 5;
  }
  if (themeName === "halloween") {
    return (month === 9 && day >= 24) || (month === 10 && day === 1);
  }
  if (themeName === "christmas") {
    return month === 11 && day >= 10;
  }
  if (themeName === "summer") {
    return month >= 5 && month <= 7;
  }

  return false;
}

export const activeTheme = writable<Theme>(defaultTheme);
export const themesUnlocked = writable<boolean>(false);

export function initTheme() {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("tino-preferred-theme");
    const overrideUnlocked = localStorage.getItem("tino-themes-unlocked") === "true";
    if (overrideUnlocked) {
      themesUnlocked.set(true);
    }

    if (savedTheme && savedTheme in allThemes) {
      const theme = allThemes[savedTheme];
      // If not unlocked and not available for date, fallback to default
      if (overrideUnlocked || isThemeActiveForDate(savedTheme, new Date())) {
        activeTheme.set(theme);
        return theme;
      }
    }
  }

  // Fallback to OG theme by default as requested
  activeTheme.set(defaultTheme);
  return defaultTheme;
}
