import type { Project } from "./types";

const showcaseProjects: Project[] = [
  {
    thumbnail_image: "tinovation-website.png",
    name: "Tinovation Website",
    authors: ["Daniel Cui"],
    date: "2023-07-20",
    description:
      "The amazing Tinovation website! This is kinda meta, ain't it? Well, isn't that something.",
    main_link: "https://tinovation-website.vercel.app/",
    guide_name: "dev-notes",
    github_link: "https://github.com/tinovationchs/tinovation-website",
  },
  {
    thumbnail_image: "chs-map.png",
    name: "CHS Map",
    authors: ["Daniel Cui"],
    date: "2023-07-20",
    description:
      "An interactive map for Cupertino High School to help students navigate around campus.",
    main_link: "https://chs-map.vercel.app/",
    github_link: "https://github.com/solunian/chs-map",
  },
];

export default showcaseProjects;
