export interface Person {
  name: string;
  points?: number[];
  comment?: string;
  totalPoints?: number;
  currentPlacement?: number;
}

export type Leaderboard = Person[];
