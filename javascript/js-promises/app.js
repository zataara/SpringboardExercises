
const base_url = 'http://numbersapi.com/'

const fav_num = 7

// PART 1
// 1.
$.getJSON(`${base_url}${fav_num}?json`, data => console.log(data))

//2.
const fav_nums = [7,11,13,21]
$.getJSON(`${base_url}${fav_nums}?json`, data => console.log(data))

//3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${base_url}/${fav_num}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});