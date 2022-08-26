const {expect, assert} = require('chai')
const Player = require('../lib/player')
const Card = require('../lib/card')
const Deck = require('../lib/deck')
const Turn = require('../lib/turn')

describe('Turn', function (){
    let card1 = new Card('heart', 'Jack', 11)
    let card2 = new Card('heart', '10', 10)
    let card3 = new Card('heart', '9', 9)
    let card4 = new Card('diamond', 'Jack', 11)
    let card5 = new Card('heart', '8', 8)
    let card6 = new Card('diamond', 'Queen', 12)
    let card7 = new Card('heart', '3', 3)
    let card8 = new Card('diamond', '2', 2)

    let deck1 = new Deck([card1, card2, card5, card8])
    let deck2 = new Deck([card3, card4, card6, card7])

    let player1 = new Player("Megan", deck1)
    let player2 = new Player("Aurora", deck2)
    
    let turn = new Turn(player1, player2)

    it('is a function', function(){
        assert.isFunction(Turn);
    })

    it('instantiates', function(){
        assert.isFunction(Turn);
    })

    it('a turn has two players', function(){
        assert.equal(turn.player1, player1);
        assert.equal(turn.player2, player2);
    })
})