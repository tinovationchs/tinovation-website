# lol the formatting is pretty scuffed.
# this is pretty self explanatory, but there will be guide in the readme.

print("\n====================================")
print("Filling a leaderboard with new names")
print("====================================\n")

name_list_fname = "name_list.txt"
leaderboard_fname = input("Input leaderboard filename to fill (will overwrite existing, do not include file extension): ")

indent = " " * 2

name_list = []
with open(file=name_list_fname, mode="r") as f:
  name_list = "".join(f.readlines()).split("\n");

with open(file=f"{leaderboard_fname}.ts", mode="w+") as f:
  f.write(r'''import type { Leaderboard } from "$lib/types";
        
const data: Leaderboard = [
''')
  
  for name in name_list:
    f.write(indent + "{\n")
    f.write(f'{indent * 2}name: "{name.strip()}",\n') # ugh single quotes
    f.write(f"{indent * 2}points: [],\n")
    f.write(f'{indent * 2}comment: "",\n') # ugh single quotes
    f.write(indent + "},\n")

  f.write(r'''];

export default data;
''')

  print(f"\nWritten to {leaderboard_fname}.ts!")
