// Write a function that takes two arguments. Argument 1 is a list of strings, and
// Argument 2 is a string to match against. The function returns a new list of strings that dont have
// any matching character from argument 2. (E.g. if arguments are
// Argument 1 - [“this”, “place” “is ” “an” “island” ]
// Argument 2 - “is”
// The function will return -
// [“place” “an”] )

function filterStringsByMatch(stringsList, matchString) {
    return stringsList.filter(str => !str.includes(matchString));
  }
  
  const inputList = ["this", "place", "is", "an", "island"];
  const matchString = "is";
  const filteredList = filterStringsByMatch(inputList, matchString);
  
  console.log( filteredList);