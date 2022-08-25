const { expect, assert } = require('chai')
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
    
    it('gives rank of card by index', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.rankOfCardAt(0), 12);
        assert.equal(deck.rankOfCardAt(2), 14);
    })
    
    it('returns high ranking cards', function () {
        let deck = new Deck(cards)

        expect(deck.highRankingCards()).to.eql([card, card3]);
    })
    
    it('gives percentage of high ranking cards', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.percentHighRanking(), 66.67);
    })
    
    it('removes top card from deck', function () {
        let deck = new Deck(cards)
        
        assert.equal(deck.removeCard(), card);

        expect(deck.cards).to.eql([card2, card3]);
        expect(deck.highRankingCards()).to.eql([card3]);
        assert.equal(deck.percentHighRanking(), 50.0);
    })
    
    
    let card4 = new Card('club', '5', 5)
    
    it('adds a card to the botton if the deck', function () {
        let deck = new Deck(cards)
        deck.addCard(card4)
        

        expect(deck.cards).to.eql([card2, card3, card4]);
        expect(deck.highRankingCards()).to.eql([card3]);
        assert.equal(deck.percentHighRanking(), 33.33);
    })
})