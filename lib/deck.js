class Deck {
    constructor(cards){
        this.cards = cards
    }

    rankOfCardAt(index){
        let card = this.cards[index]
        return card.rank
    }

    highRankingCards(){
        let highRanking = this.cards.filter(card => card.rank >= 11)
        return highRanking
    }

    percentHighRanking(){
        let highRanking = 0
        this.cards.forEach(function(card){
            if(card.rank >= 11){
                highRanking += 1;
            }
        })
        return parseFloat((highRanking / this.cards.length) * 100).toFixed(2);
    }
}

module.exports = Deck;