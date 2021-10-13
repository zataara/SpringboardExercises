function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // look for edge cases of all 0s or all 1s
    if(arr[leftIdx] === 0) {
            return arr.length
        } else if(arr[rightIdx] === 1){
            return 0;
        }

    // divide array in half
    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        
        // look for a 0 with a 1 before it
        if(middleVal === 0 && arr[middleIdx - 1] === 1) {
            return arr.length - middleIdx;
        } else if(middleVal === 1 ) {
            leftIdx = middleIdx + 1;
        } else if(middleVal === 0) {
            rightIdx = middleIdx - 1;
        } else {
            return arr.length
        }
    }
}

module.exports = countZeroes