// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. 
//Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // split string at white space, underscore, or uppercaseletter
    str = str.split(/\s|(?=[A-Z])|_/)
    // convert each word in split array to lower case
    // join them with a hypen
    str = str.map(word => word.toLowerCase()).join("-")
    return str;
  }
  
  console.log(spinalCase('This Is Spinal Tap'))
  console.log(spinalCase("TheAndyGriffith_Show"))
  console.log(spinalCase("AllThe-small Things"))