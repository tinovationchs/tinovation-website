export interface Person {
  name: string;
  points?: number[];
  comment?: string;
  totalPoints?: number;
  currentPlacement?: number;
}

export type Leaderboard = Person[];

export enum ItemType {
  Guide,
  Link,
  Code,
}

export interface Item {
  type: ItemType;
  path: string;
  displayName: string;
}

export interface Categories {
  [index: string]: (Item | string)[];
}

export interface Project {
  thumbnail_image: string;
  name: string;
  authors: string[];
  date: string;
  description: string;
  main_link: string;
  guide_name?: string;
  github_link?: string;
  other_links?: string[];
}
