


$(function() {
    let baseURL = 'http://deckofcardsapi.com/api/deck/' ;

    $.getJSON(`${baseURL}new/draw/?count=1`).then(data => {
        let {suit,value} = data.cards[0];
        console.log(`Your card is the ${value.toLowerCase()} of ${suit.toLowerCase()}`)
        let deckID = data.deck_id;
        let firstCard = data.cards[0]
        console.log(firstCard)
        return $.getJSON(`${baseURL}${deckID}/draw`)
    }).then(data => {
        let secondCard = data.cards[0]
        console.log(secondCard)
    })


});