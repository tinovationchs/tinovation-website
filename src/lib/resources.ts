import { ItemType, type Categories, type Item } from "$lib/types";

const resourceCategories: Categories = {
  Basics: [
    "git",
    // "command-line",
    // "editors",
    // "filesystem",
    // "languages",
  ],
  "Web Development": [
    { type: ItemType.Guide, displayName: "backend", path: "backend-development" },
    // "html-css",
    // "javascript",
    // "frameworks",
    // "deployment",
    "error",
  ],
  "Artificial Intelligence": [
    // "machine-learning",
    // "deep-learning",
    // "computer-vision",
  ],
  "Databases/Servers": [
    { type: ItemType.Guide, displayName: "databases-101", path: "databases-101" },
    // "firebase",
    // "rest",
    // "mongo-db",
    // "chatgpt-api",
  ],
  "App Development": [
    // "react-native",
    // "flutter",
    // "electron",
    // "tauri",
  ],
  Miscellaneous: [
    // "vim",
    // "assembly",
  ],
  "Hack Club": [
    { type: ItemType.Link, displayName: "toolbox", path: "https://toolbox.hackclub.com/" },
    { type: ItemType.Link, displayName: "workshops", path: "https://workshops.hackclub.com/" },
    { type: ItemType.Link, displayName: "hackathons", path: "https://hackathons.hackclub.com/" },
    { type: ItemType.Link, displayName: "slack", path: "https://hackclub.com/slack/" },
  ],
  Tinovation: [
    {
      type: ItemType.Guide,
      displayName: "dev-notes",
      path: "dev-notes",
    },
    {
      type: ItemType.Link,
      displayName: "rick",
      path: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      type: ItemType.Code,
      displayName: "github",
      path: "https://github.com/tinovationchs",
    },
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
