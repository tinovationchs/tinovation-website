import moment from "moment";
import data from "$lib/leaderboards/test";
import type { Person } from "$lib/types";

// the array used for inputting the data
export const leaderboardLastUpdated = moment("07-14-2023", "MM-DD-YYYY").format("MMM Do, YYYY");
export const leaderboardData: Person[] = data;

// ============================================================== //
// WHEN ADDING SCORES, EDIT ONLY FILE PATH TO LEADERBOARD TS FILE //
// ============================================================== //

const setTotalPoints = (person: Person) => {
  let totalPoints = 0;
  for (let pt of person.points) {
    totalPoints += pt;
  }
  person.totalPoints = totalPoints;
};

// adding total score
for (let p of leaderboardData) {
  setTotalPoints(p);
}

// sorting array by total score
leaderboardData.sort((a, b) => {
  return b.totalPoints! - a.totalPoints!; // descending order
});

// setting current placement by index after sorting
for (let [index, person] of leaderboardData.entries()) {
  person.currentPlacement = index + 1;
}
