/*write a function that accepts a string and returns true if 
there all letters in the string are unique characters and 
false if any character repeats. Unique characters are case 
sensitive*/

function hasUniqueChars(str){
    for (let i = 0;i<str.length;i++){
      for (let j = i+1;j<str.length;j++){
     if(str[i] === str[j]){
      return false;
        }
        return true;
      }
    }
  }

  /*Write a function which accepts a string and returns 
a new string with each character followed by the number 
of times it appears in a string. The characters should 
be returned in the same order as the string with each 
unique letter followed by the number of times it appears
in the string */

function strLetterCount(word) {
    let newWord = {};
    let str = '';
    for (let char of word) {
        newWord[char] = newWord[char] + 1 || 1;
    }
    for (let key in newWord) {
        str += `${key}${newWord[key]}`
    }
    console.log(str)
    return str;
}


//check to see if every letter of the alphabet is present in a string

function isPangram(str) {
    let lowerC = str.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerC.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}