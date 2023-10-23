import moment from "moment";
import type { Leaderboard, Person } from "$lib/types";
import { writable, derived } from "svelte/store";

// ======== ONLY EDIT THE STRINGS HERE! ========= //
// default/current leaderboard filename w/o ".ts" //
export const currentLeaderboard = writable("23-24_(S1)");
// use format for the date, date of last update   //
export const leaderboardLastUpdated = moment("2023-10-23", "YYYY-MM-DD");
// ============================================== //

// ================================ //
// DO NOT EDIT ANYTHING BELOW THIS! //
// ================================ //

export const leaderboardData = derived(currentLeaderboard, async (name) =>
  initLeaderboardValues(await getData(name))
);
export const allLeaderboards = getLeaderboards();

// dynamic imports, baby... but gross async await promises... ugh... but svelte makes it kinda nice
async function getData(filename: string) {
  return <Person[]>(await import(`./leaderboards/${filename}.ts`)).default;
}

function getLeaderboards() {
  const filenames = Object.keys(import.meta.glob("./leaderboards/*.ts"));
  return filenames.map((name: string) =>
    name.substring(name.lastIndexOf("/") + 1, name.lastIndexOf("."))
  );
}

function setTotalPoints(person: Person) {
  if (person.points === undefined) {
    person.points = [0];
  }
  let totalPoints = 0;
  for (const pt of person.points) {
    totalPoints += pt;
  }
  person.totalPoints = totalPoints;
}

function initLeaderboardValues(leaderboard: Leaderboard | undefined) {
  if (leaderboard === undefined) {
    leaderboard = [];
  }
  // adding total score
  for (const p of leaderboard) {
    setTotalPoints(p);
  }

  // sorting array by total score
  leaderboard.sort((a, b) => {
    return b.totalPoints! - a.totalPoints!; // descending order
  });

  // setting current placement by index after sorting
  for (const [index, person] of leaderboard.entries()) {
    person.currentPlacement = index + 1;
  }

  return leaderboard;
}
