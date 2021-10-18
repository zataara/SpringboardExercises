/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestSoFar=0) {
  if(!words.length) return 0;
  if(i === words.length) return longestSoFar;
  if(words[i].length > longestSoFar) {
    longestSoFar = words[i].length;
  }
  return longest(words, i + 1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, out='') {
  if(i >= str.length) return out;
  out += str[i];
  return everyOther(str, i+2, out)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let lefti = i;
  let righti = str.length - i - 1;
  if(lefti >= righti) return true;
  if(str[lefti] !== str[righti]) return false;
  return isPalindrome(str, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(arr[i] === val) return i;
  if(i === arr.length) return -1;
  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, out='') {
  if(Math.abs(i) === str.length) return out;
  out += str[str.length - 1 - i];
  return revString(str, i + 1, out)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for(let key in obj) {
    if(typeof obj[key] === "string") {
      stringArray.push(obj[key]);
    }
    if(typeof obj[key] === "object") {
      stringArray.push(...gatherStrings(obj[key]));
    }
  }
  return stringArray;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right)/2);
  if(arr[middle] === val) {
    return middle;
  }
  if(arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1)
  }
  return binarySearch(arr, val , middle + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
