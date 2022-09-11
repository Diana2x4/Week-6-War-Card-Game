// we need a deck of 52 cards 
//we want to have 2 players in the game 
//each player will be dealt 26 cards 
//each round, we need logic to compare which card is greater 
//we need to keep track of score (every time someone wins round, they get +1 points)
//if they tie, no one is awarded points 
//after 26 rounds, we want to determine who is the winner 

//card has value, suite, rank





//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   class for players -  score, hand, name
class Player {
    constructor(name){
        this.name = name
        this.score = 0;
        this.hand = [];
        
    }
}

let player1 = new Player('Player One' );
let player2 = new Player('Player Two')
//console.log(player1 )
//console.log(player2 )


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  create a class for card ›

let values= [2,3,4,5,6,7,8,9,10, 'J' , 'Q' , 'K' , 'A'];
let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
let ranks = [ 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


class Card {
    constructor(value,suit,rank){
        this.value= value;
        this.suit= suit;
        this.rank = rank;
    }
}   

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ create a class for deck     

class Deck{
    constructor(){
        this.deck=[]; //going to push cards to this deck 
    }
    //create a method to create the deck

    shuffleDeck() {
            const deckShuffle = this.deck;
            let i = deckShuffle.length, mix, temp;
            while(--i > 0) {
                mix = Math.floor(Math.random() * (i +1)); 
                temp = deckShuffle[mix]; 
                deckShuffle[mix] = deckShuffle[i];
                deckShuffle[i] = temp;
            } 

    }

    createDeck(){

        for (let valuesIndex=0; valuesIndex < values.length; valuesIndex++){
        //console.log("printing values:", values[valuesIndex]);
        //nest for loop
        for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++){
        //console.log("printing suits:", suits[suitsIndex]);
        this.deck.push(new Card(values[valuesIndex], suits[suitsIndex], ranks[valuesIndex]))
            }
        }
        //console.log(this.deck)
    }
    
    dealDeck(){
        for (let i = 0; i < this.deck.length; i++){
             if (i % 2 === 0){
                player2.hand.push(this.deck[i])
             } else {player1.hand.push(this.deck[i])}
        }
    }

}

class Game{
    constructor(){
        this.winner = "";
    }
    start(){
        for( let i = 0; i < player1.hand.length; i++){
            if (player1.hand[i].rank > player2.hand[i].rank ){
                player1.score += 1
                //console.log(player1.score) 
            }
            else if (player2.hand[i].rank > player1.hand[i].rank ){
                player2.score += 1
            }    
            else if ( player2.hand[i].rank === player1.hand[i].rank ){
                console.log(` Round ${i+1} issa tie!`)
            }
            console.log(`\n \n Players 1 hand is ${player1.hand[i].value} of ${player1.hand[i].suit}       Players 2 hand is ${player2.hand[i].value} of ${player2.hand[i].suit}`)
            console.log(` Round ${i+1} Player 1 score: ${player1.score}         Player 2 score: ${player2.score}`)
        }
        if (player1.score > player2.score){
            this.winner = "Player One wins!"
        }
        else if (player1.score < player2.score){
            this.winner = "Player Two wins!"
        }
        else if (player1.score === player2.score){
            this.winner = "Issa Tie!" 
        }
        console.log (`
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ final score  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
         Player 1 score: ${player1.score}         Player 2 score: ${player2.score}
         Final Score : ${this.winner}
        `)
    }
}

//creating an instance of deck 
let freshDeck = new Deck();
freshDeck.createDeck()
freshDeck.shuffleDeck()
freshDeck.dealDeck()

let newGame = new Game() 
newGame.start()








