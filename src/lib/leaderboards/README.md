# Editing Guide

## Generating a Leaderboard

You can use my python script `fill_leaderboard.py` to generate a leaderboard .ts file from `name_list.txt`.

Just copy all names with each name on one line. 

Then run the script and input the name of the new leaderboard. It should work...

## Editing Notes

- Each leaderboard is of type `Leaderboard` (an array of `Person`) and it should be the default export in each ts file. Just copy the `example.ts` and add values.
  - All attributes in `Person` are optional except for `name`, so it is pretty easy to generate with copy and pasting
- just append their points to the end of the `points` array
- The name of the leaderboard is the filename, and underscores will be replaced by a whitespace in the dropdown.
  - **Do not use whitespace in filename!**
- The default leaderboard is set in `leaderboard.ts` as `currentLeaderboard`. Just edit the filename to the correct one.
- Make sure to update the `leaderboardLastUpdated`!
