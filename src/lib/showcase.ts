import type { Project } from "./types";

// =========================== //
// PUT NEW ONES AT THE TOP!!!! //
// =========================== //

const showcaseProjects: Project[] = [
  {
    thumbnail_image: "confbooker.png",
    name: "Conference Room Booker",
    authors: ["Purva Marfatia"],
    date: "2023-12-10",
    description: "...it's a conference room booker :3",
    main_link:
      "https://www.loom.com/share/3d350a1781bf45a5aa42ef4ae3694c2b?sid=a7158d81-fb1f-4a04-922f-9a4f40bb0fd8",
    github_link: "https://github.com/sourcherryscones/tino-conf",
  },
  {
    thumbnail_image: "getalife.png",
    name: "get-a-life",
    authors: ["Dhruva Srinivas", "Shine Chang"],
    date: "2023-12-09",
    description:
      "A Chrome extension that aims to improve the user's productivity by blocking websites they waste time on.",
    main_link: "https://github.com/carrotfarmer/get-a-life",
    github_link: "https://github.com/carrotfarmer/get-a-life",
  },
  {
    thumbnail_image: "error.jpg",
    name: "Private TOR Streaming?",
    authors: ["Taisei De La Cruz"],
    date: "2023-11-04",
    description: "Private manga, anime, music viewer on TOR.",
    main_link: "https://drive.google.com/file/d/1VR1QcVm5w8BUD1Tipd3XMtjy0qxXzfRQ/view?usp=sharing",
  },
  {
    thumbnail_image: "music_transcription.png",
    name: "Music Transcription",
    authors: ["Purva Marfatia", "Advaiyt Sane"],
    date: "2023-11-05",
    description: "Allows the user to upload an audio file and converts it directly to sheet music!",
    main_link:
      "https://www.loom.com/share/18f883ca86e54b459940732d01fc31a9?sid=faefb6f5-37e0-4f23-adbc-3ceb39a56cc1",
    github_link: "https://github.com/sourcherryscones/music_transcription",
  },
  {
    thumbnail_image: "diamondforge.png",
    name: "DiamondForge",
    authors: ["Michael Chuang", "Chris Zhang", "Tanay Gupta"],
    date: "2023-11-04",
    description:
      "A goal-setting app that provides you with ai-generated steps and real-money incentives.",
    main_link: "https://www.youtube.com/watch?v=VgRh1WlAYBc",
    github_link: "https://github.com/Chrisandyu/diamondforge",
  },
  {
    thumbnail_image: "tinotorial.jpg",
    name: "Tino Tutorial",
    authors: ["Pragya Sharma", "Kavya Gupta", "Namita Gaidhani"],
    date: "2023-10-07",
    description:
      "This is an organizer for the availability in different rooms during tutorials on Mondays, Wednesdays, and Fridays for Cupertino High School.",
    main_link: "https:/chs-tut-vercel.vercel.app/",
    github_link: "https://github.com/pragisharma/chs-tutorial/",
  },
  {
    thumbnail_image: "swoosh.png",
    name: "Project Swoosh",
    authors: ["Michael Chuang", "Chris Zhang", "Tanay Gupta"],
    date: "2023-10-07",
    description:
      "A web application that automates Spotify media controls with the wave of your hand.",
    main_link: "https://drive.google.com/file/d/1ihQXmlHnQGJOZvjDwEj4k1T1vdjO6dCP/view?usp=sharing",
    github_link: "https://github.com/mchuang413/TinovationCodeSprint1",
  },
  {
    thumbnail_image: "tinofind.png",
    name: "Tinofind",
    authors: ["Dhruva Srinivas"],
    date: "2023-10-06",
    description:
      "Tinofind is a lost and found website for our school, allowing people to report and claim lost items.",
    main_link: "https://tinofind.vercel.app/",
    github_link: "https://github.com/carrotfarmer/tinofind",
  },
  {
    thumbnail_image: "flametest.png",
    name: "VR Chemistry Lab",
    authors: ["Laurier Ke", "Arnav Gupta"],
    date: "2023-09-23",
    description: "A VR application of the flame tests chemistry lab.",
    main_link: "https://drive.google.com/file/d/1OVgo9jz7gu5Zvs1Hv6hH5RGlxUcHnqM7/view?usp=sharing",
    github_link: "https://github.com/LaurierKe/ChemLab",
  },
  {
    thumbnail_image: "tinomarket.png",
    name: "Tino Market",
    authors: ["Purva Marfatia"],
    date: "2023-09-10",
    description: "Platform for students to share books, calculators, and other resources.",
    main_link: "https://tino-market-fe.onrender.com/",
    github_link: "https://github.com/sourcherryscones/tino_market",
  },
  {
    thumbnail_image: "retro.png",
    name: "Retro Website",
    authors: ["---"],
    date: "2023-08-12",
    description: "Retro style personal website with terminal and minesweeper.",
    main_link:
      "https://aadsfjkslda.user5829.repl.co/?background=https://cdn.discordapp.com/attachments/695408753658298470/1127040540039446549/fbafa9e921610f2bb55799fd36cd1051.webp",
  },
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
    thumbnail_image: "tinovation-website.webp",
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
    thumbnail_image: "southbayrobotics.png",
    name: "South Bay Robotics Website",
    authors: ["Taisei De La Cruz", "Skyler Tabofunda"],
    date: "2023-08-03",
    description: "South Bay Robotics website and blog!",
    main_link: "https://www.southbayrobotics.org",
    github_link: "https://github.com/frc-sbr/sbr-site",
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
