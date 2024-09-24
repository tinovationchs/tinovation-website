import { ItemType, type Categories, type Item } from "$lib/types";

const resourceCategories: Categories = {
  Basics: ["languages", "editors", "file-system", "command-line", "git", "github"],
  "Web Development": [
    { type: ItemType.Guide, displayName: "intro", path: "web-intro" },
    "html-css",
    { type: ItemType.Guide, displayName: "embedding-media", path: "embedding-media" },
    "javascript",
    "web-frameworks",
    "rust-and-elm-architecture",
    { type: ItemType.Guide, displayName: "deployment", path: "web-deployment" },
    "tinofind-walkthrough",
    { type: ItemType.Guide, displayName: "deply-on-github-pages", path: "gh-pages" },
  ],
  "Artificial Intelligence": [
    // "machine-learning",
    // "deep-learning",
    {
      type: ItemType.Code,
      displayName: "numpy",
      path: "https://colab.research.google.com/drive/1puZZLzJvNTVSeEfzQ2YFgB_uYfKnUFIM?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "pandas",
      path: "https://colab.research.google.com/drive/1TQKG_o188szZrHn9qLvz3Vi17gLZJA08?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "matplotlib-and-seaborn",
      path: "https://colab.research.google.com/drive/15rJXcXzi4bg2B1soQwlLPb5uzrvxPVeN?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "scikit-learn",
      path: "https://colab.research.google.com/drive/1PoQzeqATIb6S8zqsTfT5JovbcLu4f6gD?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "keras",
      path: "https://colab.research.google.com/drive/1-vXXPz_PVyLLASxzV2ZQXsgGQsfQjjuw?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "computer-vision",
      path: "https://colab.research.google.com/drive/127X3yfZlQQsVqOIFW8aYWlQkRAgHwqte?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "natural-language-processing",
      path: "https://colab.research.google.com/drive/1e7JHymFZNZbB9cRKY3Hy0cWMRbvmYHh3?usp=sharing",
    },
    {
      type: ItemType.Code,
      displayName: "open-cv-basics",
      path: "https://colab.research.google.com/drive/1_6WNF_CzHt635Y23hUTIUAzpE7NzEK3e",
    },
  ],
  "Databases/Servers": [
    { type: ItemType.Guide, displayName: "backend-basics", path: "backend-basics" },
    { type: ItemType.Guide, displayName: "database-basics", path: "database-basics" },
    { type: ItemType.Guide, displayName: "cloud-infrastructure", path: "cloud-infrastructure" },
    { type: ItemType.Guide, displayName: "mongo-db", path: "mongo-db" },
    { type: ItemType.Guide, displayName: "backend-miscellaneous", path: "backend-miscellaneous" },
    { type: ItemType.Guide, displayName: "flask-example", path: "flask-example" },
    // "firebase",
    // "rest",
    // "chatgpt-api",
  ],
  Miscellaneous: [
    // "vim",
    // "assembly",
    { type: ItemType.Guide, displayName: "google-earth-engine", path: "gee-basics" },
    { type: ItemType.Guide, displayName: "vr-applications", path: "vr-applications" },
    {
      type: ItemType.Code,
      displayName: "discord-bot-tutorial",
      path: "https://colab.research.google.com/drive/1SS4oZzZzuQBDoSV8vJO244ZUVH9MTiMI?usp=sharing",
    },
    { type: ItemType.Guide, displayName: "figma", path: "figma" },
    "cool-stuff",
  ],
  "Hack Club": [
    { type: ItemType.Link, displayName: "toolbox", path: "https://toolbox.hackclub.com/" },
    { type: ItemType.Link, displayName: "workshops", path: "https://workshops.hackclub.com/" },
    { type: ItemType.Link, displayName: "hackathons", path: "https://hackathons.hackclub.com/" },
    { type: ItemType.Link, displayName: "slack", path: "https://hackclub.com/slack/" },
  ],
  Tinovation: [
    { type: ItemType.Guide, displayName: "dev-notes", path: "dev-notes" },
    "scoring",
    "error",
    {
      type: ItemType.Link,
      displayName: "rick",
      path: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    { type: ItemType.Code, displayName: "github", path: "https://github.com/tinovationchs" },
  ],
};

interface exportCategories {
  [index: string]: Item[];
}

for (const [_, arr] of Object.entries(resourceCategories)) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = {
        type: ItemType.Guide,
        displayName: arr[i] as string,
        path: arr[i] as string,
      };
    }
  }
}
export default resourceCategories as exportCategories;
