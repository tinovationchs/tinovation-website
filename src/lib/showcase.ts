import type { Project } from "./types";

const showcaseProjects: Project[] = [
  {
    thumbnail_image: "tinochan.png",
    name: "Tinochan",
    authors: ["Shine Chang", "Shauryan Kanaujia"],
    date: "2023-07-27",
    description:
      "A recreation of traditional online forums, now using modern frameworks and deployable on the edge!",
    main_link: "https://tinochan.vercel.app/",
    github_link: "https://github.com/shine00chang/tinochan",
  },
  {
    thumbnail_image: "tinovation-website.png",
    name: "Tinovation Website",
    authors: ["Daniel Cui"],
    date: "2023-07-20",
    description:
      "The amazing Tinovation website! This is kinda meta, huh? Well, ain't that something.",
    main_link: "https://www.tinovation.org",
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
  {
    thumbnail_image: "tino-clubs.png",
    name: "Tino Clubs",
    authors: ["Jiaming Liu"],
    date: "2023-07-22",
    description:
      "The official website for students to explore and find information about clubs at Cupertino High School.",
    main_link: "https://tinoclubs.com/",
  },
  {
    thumbnail_image: "apcs-java-website.png",
    name: "Tino APCS/Intro Java",
    authors: ["Jiaming Liu"],
    date: "2023-07-22",
    description:
      "The official curriculum websites for APCS and Intro Java classes at Cupertino High School.",
    main_link: "https://apcs.tinocs.com/",
    other_links: ["https://java.tinocs.com/"],
  },
  {
    thumbnail_image: "leetdeal.png",
    name: "LeetDeal",
    authors: ["Jiaming Liu"],
    date: "2023-07-22",
    description: "Mobile app and website for finding the best shopping deals. (defunct)",
    main_link: "https://apps.apple.com/us/app/leetdeal-save-big-with-deals/id1534467869",
    other_links: ["https://www.instagram.com/leetdeal/"],
  },
];

export default showcaseProjects;
