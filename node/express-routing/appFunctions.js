


function mean(arr) {
    return arr.reduce((a,b) => a + b ) / arr.length
}


function median(arr) {
    arr = arr.sort()
    if(arr.length % 2 === 1) {
        return arr[Math.floor((arr.length / 2)) + 1];
    } else {
        return (arr[arr.length / 2] + arr[(arr.length / 2) + 1]) / 2;
    }
}

function mode(arr) {
    // count amount of occurances of each number
    const obj = {};
    arr.forEach(number => {
        //for each number in array, if it doesn't already exists as a key on the object, create one and set its value to zero.
        if (!obj[number]) {
            obj[number] = 1;
        } else {
            obj[number] += 1;
        }
    })
    let highestValue = 0;
    let highestValueKey = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
        }
    }
    return Number(highestValueKey);
}



module.exports = {mean, median, mode}