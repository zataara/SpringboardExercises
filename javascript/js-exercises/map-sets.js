// What does the following code return?
new Set([1,1,2,2,3,4])
// [1,2,3,4]

// What does the following code return?
[...new Set('referee')].join('')
// refr

//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//Map {([1,2,3] => true), ([1,2,3] => false)}

//Write a function called hasDuplicate which accepts an array and returns true
//or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

//solution
function hasDuplicate(array) 
let compare = new Set(...array)
if (array.length === compare.size) {
    return false;
} else {
    return true;
}

//Write a function called vowelCount which accepts a string and returns a map
//where the keys are numbers and the values are the count of the vowels in the
//string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

//solution
function isVowel(char) {
    return 'aeiou'.includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.Map.set(lowerCaseChar, voweMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}
