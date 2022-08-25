let assert = require('chai').assert;
let Deck = require('../lib/deck');
let Card = require('../lib/card');

describe('Card', function () {
        
    let card = new Card('diamond', 'Queen', 12)
    let card2 = new Card('spade', '3', 3)
    let card3 = new Card('heart', 'Ace', 14)
    let cards = [card, card2, card3]


    it('should be a function', function () {
        assert.isFunction(Deck);
    })

    it('should instantiate', function () {
        let deck = new Deck(cards)
        assert.isObject(deck);
    })

    it('has readable cards attribute', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.cards, cards);
    })

    it.skip('gives rank of card by index', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.rankOfCardAt(0), 12);
        assert.equal(deck.rankOfCardAt(2), 14);
    })

    it.skip('returns high ranking cards', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.highRankingCards(), [card, card3]);
    })

    it.skip('gives percentage of high ranking cards', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.percentHighRanking(), 66.67);
    })
})