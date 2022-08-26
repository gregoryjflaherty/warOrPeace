class Turn {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.spoilsOfWar = [];
        this.type = this.determineType();
        this.winner = this.determineWinner();
    }

    determineType(){
        let rank1 = this.player1.deck.cards[0].rank
        let rank2 = this.player2.deck.cards[0].rank

        if(rank1 != rank2){
            rank1 > rank2 ? this.winner = this.player1 : this.winner = this.player1
            return 'basic';
        }
    }

    determineWinner(){
        let rank1 = this.player1.deck.cards[0].rank
        let rank2 = this.player2.deck.cards[0].rank

        return rank1 > rank2 ? this.player1 : this.player2
    }

    pileCards(){
        if(this.type === 'basic'){
            this.spoilsOfWar.push(this.player1.deck.cards.shift()) 
            this.spoilsOfWar.push(this.player2.deck.cards.shift()) 
        }
    }

    awardSpoils(player){
        player.deck.cards.push(this.spoilsOfWar)
        player.deck.cards = player.deck.cards.flat()
    }
}


module.exports = Turn;