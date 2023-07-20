# Editing Guide

- Each leaderboard is of type `Leaderboard` (an array of `Person`) and it should be the default export in each ts file. Just copy the `example.ts` and add values.
  - All attributes in `Person` are optional except for `name`, so it is pretty easy to generate with copy and pasting
- just append their points to the end of the `points` array
- The name of the leaderboard is the filename, and underscores will be replaced by a whitespace in the dropdown.
  - **Do not use whitespace in filename!**
- The default leaderboard is set in `leaderboard.ts` as `currentLeaderboard`. Just edit the filename to the correct one.
- make sure to update the `leaderboardLastUpdated`!
