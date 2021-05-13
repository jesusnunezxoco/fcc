// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  // full alphabet to compare against
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstLetterIndex = alphabet.indexOf(str[0]);
  let lastLetterIndex = alphabet.indexOf(str[str.length - 1]);
  //   makes alphabet range from full alabaphet index
  let alphaRange = alphabet
    .slice(firstLetterIndex, lastLetterIndex + 1)
    .split("");
  let missingLetters = [];

  alphaRange.forEach((letter) =>
    //   if the string doesn't the current letter from alphaRange
    str.indexOf(letter) === -1
      ? // then push and console.log() the current letter
        missingLetters.push(letter) & `${letter} is not present`
      : // otherwise, just console.log() the current letter
        `${letter} is present`
  );

  missingLetters = missingLetters.join("")

 
  return missingLetters.length === 0 ? undefined : missingLetters & console.log(missingLetters)


}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf")
