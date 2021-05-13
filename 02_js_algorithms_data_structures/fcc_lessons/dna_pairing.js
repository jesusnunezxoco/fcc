// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let pairedArr = [];
  str.split("").map((letter) => {
    switch (letter) {
      case "G":
        pairedArr.push([letter, "C"]);
        break;
      case "C":
        pairedArr.push([letter, "G"]);
        break;
      case "A":
        pairedArr.push([letter, "T"]);
        break;
      case "T":
        pairedArr.push([letter, "A"]);
        break;
    }
  });

  return pairedArr;
}

console.log(pairElement("GCG"));
