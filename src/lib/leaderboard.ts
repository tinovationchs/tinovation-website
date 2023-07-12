interface Person {
  points: number[];
  comment?: string;
}

interface Leaderboard {
  [index: string]: Person;
}

const leaderboard: Leaderboard = {
  Daniel: {
    points: [1, 5, 3, 2],
  },
  Shine: {
    points: [-6, 3, -1, 5],
    comment: "likes anime",
  },
};

export default leaderboard;
