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