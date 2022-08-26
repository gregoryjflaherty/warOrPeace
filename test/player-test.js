const { expect, assert } = require('chai')
let Deck = require('../lib/deck');
let Card = require('../lib/card');
let Player = require('../lib/player');

describe('Player', function () {
    let card = new Card('diamond', 'Queen', 12)
    let card2 = new Card('spade', '3', 3)
    let card3 = new Card('heart', 'Ace', 14)
    let cards = [card, card2, card3]
    let deck = new Deck(cards)

    
    it('is a function', function(){
        assert.isFunction(Player);
    })
    
    it('instantiates', function (){
        let player = new Player('Clarisa', deck)
        assert.isObject(player)
    })
    
    it('has a name', function (){
        let player = new Player('Clarisa', deck)
        assert.equal(player.name, 'Clarisa')
    })
    
    it('has a deck', function (){
        let player = new Player('Clarisa', deck)
        assert.equal(player.deck, deck)
    })
    
    it('checks if player has lost', function (){
        let player = new Player('Clarisa', deck)
        assert.equal(player.hasLost(), false)
    })
    
    it('returns true if player has no cards left', function (){
        let player = new Player('Clarisa', deck)
        for(let i = 0; i < 3; i++){
            player.deck.removeCard()
        }

        assert.equal(player.hasLost(), true)
    })
})  