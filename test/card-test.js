let assert = require('chai').assert;
let Card = require('../lib/card');

describe('Card', function () {

    it('should be a function', function(){
        assert.isFunction(Card);
    })

    it('should instantiate', function(){
        let card = new Card('diamond', 'Queen', 12)
        assert.isObject(card);
    })

    it('has readable attributes', function(){
        let card = new Card('diamond', 'Queen', 12)
        assert.equal(card.suit, 'diamond');
        assert.equal(card.value, 'Queen');
        assert.equal(card.rank, 12);
    })
})