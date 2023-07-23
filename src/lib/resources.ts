import { ItemType, type Categories, type Item } from "$lib/types";

const resourceCategories: Categories = {
  Basics: [
    // "languages",
    // "editors",
    "git",
    // "command-line",
    // "filesystem",
  ],
  "Web Development": [
    { type: ItemType.Guide, displayName: "intro", path: "web-intro" },
    "html-css",
    "javascript",
    "web-frameworks",
    "rust-and-elm-architecture",
    
    { type: ItemType.Guide, displayName: "deployment", path: "deployment" },
  ],
  "Artificial Intelligence": [
    // "machine-learning",
    // "deep-learning",
    {
      type: ItemType.Code,
      displayName: "computer-vision-basics",
      path: "https://colab.research.google.com/drive/1_6WNF_CzHt635Y23hUTIUAzpE7NzEK3e",
    },
  ],
  "Databases/Servers": [
    { type: ItemType.Guide, displayName: "backend-basics", path: "backend-basics" },
    { type: ItemType.Guide, displayName: "database-basics", path: "database-basics" },
    { type: ItemType.Guide, displayName: "cloud-infrastructure", path: "cloud-infrastructure" },
    { type: ItemType.Guide, displayName: "mongo-db", path: "mongo-db" },
    { type: ItemType.Guide, displayName: "backend-miscellaneous", path: "backend-miscellaneous" },
    // "firebase",
    // "rest",
    // "chatgpt-api",
  ],
  "App Development": [
    // "react-native",
    // "flutter",
    // "electron",
    // "tauri",
    { type: ItemType.Code, displayName: ".net-framework", path: "https://colab.research.google.com/drive/15fYsChnCx88ixVNTWEPpPWGo8ZJFxqkP?usp=sharing" },
  ],
  Miscellaneous: [
    // "vim",
    // "assembly",
    { type: ItemType.Guide, displayName: "google-earth-engine", path: "gee-basics" },
    { type: ItemType.Code, displayName: "discord-bot-tutorial", path: "https://colab.research.google.com/drive/1SS4oZzZzuQBDoSV8vJO244ZUVH9MTiMI?usp=sharing" },
  ],
  "Hack Club": [
    { type: ItemType.Link, displayName: "toolbox", path: "https://toolbox.hackclub.com/" },
    { type: ItemType.Link, displayName: "workshops", path: "https://workshops.hackclub.com/" },
    { type: ItemType.Link, displayName: "hackathons", path: "https://hackathons.hackclub.com/" },
    { type: ItemType.Link, displayName: "slack", path: "https://hackclub.com/slack/" },
  ],
  Tinovation: [
    { type: ItemType.Guide, displayName: "dev-notes", path: "dev-notes" },
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
