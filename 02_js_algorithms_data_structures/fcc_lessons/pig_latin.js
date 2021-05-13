// Pig Latin is a way of altering English Words.

// If a word begins with a consonant
// take the first consonant or consonant cluster
// move it to the end of the word
// add "ay" to it.

// If a word begins with a vowel
// add "way" at the end.

// Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  // make split array of the string

  // define vowels
  let vowels = ["a", "e", "i", "o", "u"];
  // initialize where to store consonant clusters
  let consonantCluster = [];
  // function if consonant, returns true, otherwise returns false
  let ifConsonant = (x) => (vowels.indexOf(x) === -1 ? true : false);

  //if there are no vowels
  //return the string with "ay" at the end

  //if first letter is consonant
  if (ifConsonant(str[0])) {
    // loop through the string
    for (let i = 0; i < str.length; i++) {
      // if there re no vowels in the string
      if (!vowels.includes(str[i])) {
        // return the string plus "ay"
        return str + "ay";
      }
      // otherwise stop if you see a vowel
      else if (!ifConsonant(str[i])) {
        // remove consonant cluster from string
        str = str.slice([i]);
        break;
      }
      //and push all consonants to consonantCluster
      consonantCluster.push(str[i]);
    }
    console.log();
    // return the concat of the string, consonant cluster, and "ay"
    return str + consonantCluster.join("") + "ay";
  } else {
    // if the first letter is not a consonnt
    // just add the string and way
    return str + "way";
  }

  return str;
}

console.log("CONSONANTS");
console.log(translatePigLatin("california"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));
console.log("---");

console.log("VOWELS");
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("india"));
console.log("---");
console.log("NO VOWELS");
console.log(translatePigLatin("rythym"));
console.log(translatePigLatin("try"));
console.log(translatePigLatin("why"));
