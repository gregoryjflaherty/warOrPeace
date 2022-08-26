class Player {
    constructor(name, deck){
        this.name = name;
        this.deck = deck;
    }

    hasLost(){
        return this.deck.cards.length === 0 ?  true : false
    }
}

module.exports = Player;