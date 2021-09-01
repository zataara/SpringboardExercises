const base_url = 'http://numbersapi.com/'

const fav_num = 7


//1.
async function luckyNum() {
    let res = await axios.get(`${base_url}${fav_num}`)
    console.log(res)
}
luckyNum()
//2.
const fav_nums = [7,11,13,22]
async function luckyNums() {
    let res = await axios.get(`${base_url}${fav_nums}`)
    console.log(res)
}
luckyNums()
//3.
async function luckyNumber() {
    let res1 = await axios.get(`${base_url}${fav_num}`)
    let res2 = await axios.get(`${base_url}${fav_num}`)
    let res3 = await axios.get(`${base_url}${fav_num}`)
    let res4 = await axios.get(`${base_url}${fav_num}`)
    console.log(res1)
    console.log(res2)
    console.log(res3)
    console.log(res4)
}
luckyNumber()





// // PART 1
// // 1.
// $.getJSON(`${base_url}${fav_num}?json`, data => console.log(data))

// //2.
// const fav_nums = [7,11,13,21]
// $.getJSON(`${base_url}${fav_nums}?json`, data => console.log(data))

// //3.
// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON(`${base_url}/${fav_num}?json`);
//     })
// ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });
