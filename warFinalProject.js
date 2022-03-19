//Creating an automated version of the Card Game War! 

const SUITS = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const VALUES = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];    //our two arrays with every card value and suit
var playerPoints = 0;             //player and computer point variables initialized
var computerPoints = 0;

class Deck {
    constructor(cards) {             //will pass our cards into the deck class, can be a full 52 card deck, or 26 cards, or any sort of card pile here.
        this.cards = cards;
    }
    deckShuffle() {                  //creating a function to shuffle our completed, built deck
        for (let i = this.cards.length - 1; i > 0; i--) {             //we are going to start at the end of our deck and pull each card out and swap it with a card in a different position.
            let newIndex = Math.floor(Math.random() * (i + 1));      //getting a random index for a card that is before the card we are on
            let oldIndex = this.cards[newIndex];                  //getting the card at our new index so that we can swap it with our old index  
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldIndex;                         //we are looping through all our cards and swapping them with another card (shuffle)
        }
    }

}


class Card {                       //class for each one of our cards that we will have
    constructor(suit, value) {     //Now we can creat our 'deck' using a variable for suit and a variable for value with all our suits and variables, we will make them global
        this.suit = suit;
        this.value = value;
    }
    
}

function combineDeck() {               //function to create our main deck of 52 unique cards
    return SUITS.flatMap(suit =>{          //flatMap combines multiple arrays into one single array, which is what we want
        return VALUES.map(value =>{
            return new Card(suit,value)
        });
    });
    
}

//console.log(combineDeck());           //checking our combineDeck() function, looks like our deckarray concatinates, combines suit with value of card, every combination for 52 cards

function Play() {                     //creating a function to start the game; deal 26 cards to each of two players, after shuffling deck, then playing until no cards are left
    var deck = new Deck(combineDeck());          //creating a new Deck
    deck.deckShuffle();                //shuffling our newly created Deck
    

    let playerDeck = (deck.cards.splice(0, 26));        //giving both the player and computer half of the full deck
    let computerDeck = (deck.cards.splice(0, 26));

    while(playerDeck.length > 0 && computerDeck.length> 0)
    {
        let playerCard = playerDeck.pop();             //pulling a card out of Player's deck
        let computerCard = computerDeck.pop();       // pulling a card out of computer's deck

        console.log(`Player Played: ${playerCard.value} of ${playerCard.suit}  
Computer Played: ${computerCard.value} of ${computerCard.suit}`);

        Points(playerCard, computerCard);       //calling our Points function from down below

        
    };
    if (playerPoints > computerPoints) {
        console.log('Out of Cards! Player won!!');
    }
    else if (computerPoints > playerPoints) {
        console.log('Out of Cards! Computer won!!');
    }

    else {
        console.log('Out of Cards! Player tied with Computer!!');
    }
    
    // console.log(playerDeck);
    // console.log(computerDeck);
}

function Points(playerCard, computerCard) {            //creating our point calculator for player and computer
    if(playerCard.value > computerCard.value)
    {
        playerPoints++;
        console.log(`Player wins a point!`);
    }
    else if(playerCard.value < computerCard.value)
    {
        computerPoints++;
        console.log('Computer wins a point!');

    }
    else
    {
        console.log('Tie, no one wins a point.');
    }

    console.log(`Current Point Total: 
    Player: ${playerPoints}
    Computer: ${computerPoints}`);

}

// const deck = new Deck();
// console.log(deck.cards);

Play();



// const deck = new Deck();
// deck.deckShuffle();            //making sure our deckShuffle function in our Deck class works, looks good!
// console.log(deck.cards);     //checking our deck of cards that everything was combined correctly, looks good!



