


$(function() {
    let baseURL = 'http://deckofcardsapi.com/api/deck/' ;

    $.getJSON(`${baseURL}new/draw/?count=1`).then(data => {
        let {suit,value} = data.cards[0];
        console.log(`Your card is the ${value.toLowerCase()} of ${suit.toLowerCase()}`)
        let deckID = data.deck_id;
        let firstCard = data.cards[0]
        console.log(firstCard)
        return $.getJSON(`${baseURL}/${deckID}/draw`)
    }).then(data => {
        let secondCard = data.cards[0]
        console.log(secondCard)
    })


    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');

    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btn.show();
    });

    $btn.on('click', function() {
        $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
            src: cardSrc,
            css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
            })
        );
        if (data.remaining === 0) $btn.remove();
        });
    });
});