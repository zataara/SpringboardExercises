// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0



function findRotationCount(arr, low = 0, high = arr.length -1) {
    //if array is empty
    if(high < low) return 0;
    //if array has only one value
    if(high === 0) return low;

    //get the middle element of the array
    let mid = Math.floor((low + high)/2);

    //check if element (mid + 1) is minimum element
    if(mid < high && arr[mid + 1] < arr[mid]) {
        return mid + 1
    }

    //check if mid itself is minimum element
    if(mid > low && arr[mid] < arr[mid-1]) {
        return mid;
    }

    //determine which diretion we need to continue looking for minimum element.
    if(arr[high] > arr[mid]) {
        return findRotationCount(arr, low, mid - 1)
    }
    return findRotationCount(arr, mid + 1, high);
}


module.exports = findRotationCount