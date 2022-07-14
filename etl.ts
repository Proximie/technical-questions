// The goal is to perform Transform step of an Extract-Transform-Load. We're going to extract some scrabble scores from a legacy system.

// The old system stored a list of letters per score:

// 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
// 2 points: "D", "G",
// 3 points: "B", "C", "M", "P",
// 4 points: "F", "H", "V", "W", "Y",
// 5 points: "K",
// 8 points: "J", "X",
// 10 points: "Q", "Z",

// The new scrabble system instead stores the score per letter. It also stores the letters in lower-case regardless of the case of the input letters:

// "a" is worth 1 point.
// "b" is worth 3 points.
// "c" is worth 3 points.
// "d" is worth 2 points.
// Etc.

// Your function should transform the legacy data format to the new format.

// Notes

// A final note about scoring, Scrabble is played around the world in a variety of languages, each with its own unique scoring table. For example, an "E" is scored at 2 in the Māori-language version of the game while being scored at 4 in the Hawaiian-language version.

// Your code goes here!
export const execute = (old: Record<number, string[]>): Record<string, number> => {
  throw new Error("Remove this statement and implement this function");
};