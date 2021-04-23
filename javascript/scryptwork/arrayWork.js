//find the average of an array of numbers

function averageOf(arr) {
    let totalNums = 0;
    for (let num of arr) {
        
        totalNums += num;
       
    }
    let averageNum = totalNums / arr.length;
    return averageNum
}