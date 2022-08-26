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
        let war1 = this.player1.deck.cards[2].rank
        let war2 = this.player2.deck.cards[2].rank
        
        if (rank1 === rank2 && war1 === war2) {
            return 'mutually assured destruction'
        } else if(rank1 != rank2){
            return 'basic';
        } else {
            return 'war'
        }
    }

    determineWinner(){
        if(this.type === 'basic'){    
            return this.player1.deck.cards[0].rank > this.player2.deck.cards[0].rank ? this.player1 : this.player2
        } else if (this.type === 'war') {            
            return this.player1.deck.cards[2].rank > this.player2.deck.cards[2].rank ? this.player1 : this.player2
        } else {            
            return 'No Winner'
        }
    }

    pileCards(){
        if(this.type === 'basic'){
            this.spoilsOfWar.push(this.player1.deck.cards.shift()) 
            this.spoilsOfWar.push(this.player2.deck.cards.shift()) 
        } else if (this.type === 'war') {
            for(let i = 0; i < 3; i++){
                this.spoilsOfWar.push(this.player1.deck.cards.shift())
            }
            for(let i = 0; i < 3; i++){
                this.spoilsOfWar.push(this.player2.deck.cards.shift())
            }
        } else {
            for(let i = 0; i < 3; i++){
                this.player1.deck.cards.shift()
                this.player2.deck.cards.shift()
            }
        }
    }

    awardSpoils(player){
        player.deck.cards.push(this.spoilsOfWar)
        player.deck.cards = player.deck.cards.flat()
    }
}


module.exports = Turn;