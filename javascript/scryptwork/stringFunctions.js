// write a function that generates a random playing card as an object

function getCard() {
    let card = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
    let suit = ['Clubs','Spades','Hearts','Diamonds'];
    let randomCard = card[Math.floor(Math.random()*card.length)];
    let randomSuit = suit[Math.floor(Math.random()*suit.length)];
    return {
        card: randomCard;
        suit: randomSuit;
    }