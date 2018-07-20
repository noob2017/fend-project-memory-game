// Master (home)
// STATUS: Debugging timer issues; trying to shuffle and disable cards
// DONE: Cards flipping!
// DONE: Cards matching!
// DONE: Moves counter counting!
// DONE: Anchors started from card class!
// DONE: Lightning bolt restarted from card class!
// DONE: Unmatched cards turn purple, then return to original .card state!
// DONE: Comment in HTML moved to bottom of code; for some reason inline commenting didn't work
// DONE: Lighting bolts take match class!
// DONE: Timer displays properly!
// DONE: Timer counts up with first click!
// DONE: Fixed clock running too fast!
// DEBUGGING: restart button created but no restart button action yet / rethink this / one card will restart, but not multiple or matches
// DEBUGGING: not shuffling
// TO-DO: too many cards can flip at once / try adding a 'disabled' class to the deck and add css to disable clicking on the card. So IF the card is 'open', disabled clicking on the card
// or try only allowing cards to be added to flippedCards if the did not have class open.
// TO-DO: clicking same card twice yields a match / try adding the disabled class, as above
// TO-DO: no modal yet
// TO-DO: no star rating yet
// TO-DO: no readme detailing dependencies yet

////////////// GLOBAL VARIABLES ///////////////////////
let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');
let timer = 0; // also from Bre Bartman
const seconds = timer % 60;
const minutes = timer / 60;


////////////// START GAME ///////////////////////

// not sure about this... this should be for when the user opens, or just on restart?
/*let startGame = function() {
	startTimer();

}*/ 

// NOT WORKING / start game; added restart variable above
/*let restartGame = function () {
		//shuffle(cards); 
		//scorePanel
		moves = 0;
};*/

// NOT WORKING / add event listener to restart button; call startGame function
//restart.addEventListener('click', restartGame);



////////////// SHOW CARDS WHEN CLICKED ///////////////////////
// shows card symbol if clicked; event listener below
let displayCard = function () {
	this.classList.toggle('open');
	this.classList.toggle('show');
	// add the clicked card with .open class to a new array called openCards
	openCards.push(this);

  	// check if the new array contains two items 
  	// if it does, call back a checker function and start moves counter
	if (openCards.length === 2) {
	console.log('two!');
	countMoves();
	checkMatch();
	}	
};  

////////////// COUNT MOVES ///////////////////////
// increment moves
function countMoves () {
	moves++;
	let movesNumber = document.querySelector('.moves');
	movesNumber.innerHTML = moves;
}

////////////// CHECK FOR MATCH ///////////////////////
// check if two cards in new array are a match
function checkMatch () {
	if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
  	// loop over cards in openCards array; add match class
		for (let card of openCards) { 
			card.classList.add('match');
	  	}
    	console.log('match!');
    	openCards.length = 0; // empties array after matching
  	}
  	else {
	    for (let card of openCards) { 
	    card.classList.add('no-match');
		}	
    	setTimeout(resetCards, 1200);
		console.log('no match :( ');
  	}	
}	

////////////// RESET CARDS TO ORIGINAL POSITION ///////////////////////
function resetCards () {
	for (let card of openCards) { 
		card.classList.remove('open', 'show', 'no-match');
		card.classList.add('card');
		//openCards.length = 0; // doesn't work here - closes only one card
	}
	openCards.length = 0;  // empty array after matching
}

////////////// SHUFFLE CARDS ///////////////////////

// NOT SURE IF WORKING
// create function to shuffle cards and create a new deck
// Help from Bre Bartmann: https://codepen.io/Brew42/pen/XBXVvY
/* function shuffleDeck() {

    const shuffledDeck = shuffle(allCards);
    console.log(shuffledDeck);

    //remove classes from all cards
    for (var i = 0; i < allCards.length; i++) {
        deck.innerHTML = '';
        [].forEach.call(allCards, function(item) {
            deck.appendChild(item);
        });
        resetAllCards();
    }
}*/ 


////////////// START TIMER ///////////////////////
// Help from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
// another counter option: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
// another timer resource: https://codepen.io/chrisvneal/pen/OEMJyR

function startTimer() {
    timerStart = setInterval(() => {
        timer++;
        const seconds = timer % 60;
        const minutes = Math.floor(timer / 60);

        function displayTime() {
            const timerHTML = document.querySelector('.timer');
            if (seconds < 10) {
                timerHTML.innerHTML = minutes + ' : 0' + seconds;
            } else {
                timerHTML.innerHTML = minutes + ' : ' + seconds;
            }
        }
        displayTime();
    }, 1000);
    
    deck.removeEventListener('click', arguments.callee); // suggested by Illee / stops timer from compounding with each click
}

////////////// STOP TIMER ///////////////////////
// TO-DO / need a stop timer function
// do I need this if I just reset it? 


////////////// RESET TIMER ///////////////////////
// TO-DO / need a RESET timer function





// ======================================== END OF FIRST SESSION =======================================

////////////// ADD EVENT LISTENER TO CARDS & DISPLAY IF CLICKED ///////////////////////
// WORKS / loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

////////////// ADD EVENT LISTENER TO DECK & START TIMER IF CLICKED ///////////////////////
deck.addEventListener('click', startTimer); // suggested by Illee 
//cards[i].addEventListener('click', startTimer); / old version removed 7/19


////////////// SHUFFLE ///////////////////////
function shuffleCards() { // Help from https://strugglebus.io/
    // grab all the cards in the deck, turn the NodeList into an array for shuffle()
        const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
        const shuffledCards = shuffle(cardsToShuffle);
    //append shuffled cards to the deck
        for (let card of shuffledCards) {
            cardContainer.append(card);
        }
    }
shuffleCards();
//generateStars();


// NOT WORKING / Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code
function shuffle(array) { //changed from array to cards, then to deck (for each instance below!)
    var currentIndex = array.length, temporaryValue, randomIndex; //changed array.length to cards.length

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex]; //changed array to cards
        array[currentIndex] = array[randomIndex]; //changed array to cards
        array[randomIndex] = temporaryValue; //changed array to cards
    }

    return array;

// NOT WORKING / write a for loop that appends cards to the deck using the deck and the array; inserted inside the shuffle function provided by Udacity   
    /*for (var i = 0; i < deck.length; i++) { // changed allCards to cards, then to deck / Illee suggested I move inside the function; not sure if this is right place?
        deck.innerHTML = '';
        [].forEach.call(deck, function(item) { //changed allCards to cards
            deck.appendChild(card);
        });
        resetCards(); //changed allCards to cards
        console.log('cards shuffled');
    }*/ 

    /*let li_cards = document.querySelectorAll('li.card');
    for (var i = 0; i < li_cards.length; i++) {
    	li_cards[i].remove();
    } //this removes everything! how to put it back?? / Help from Jonathan Piva in Slack

	for (var i = 0; i < cards.length; i++) {
    deck.append(cards[i]);
  	}*/ 
}

	//Brent (FEND) - Michigan [21 hours ago] / note to another student in slack
	//In the code above it looks like you're calling the shuffle function on each 
	//card, but the function works on the whole deck. I would call shuffle on the 
	//whole deck and save the result in a variable, then use that variable to add 
	//back the html for the deck.

////////////// RESTART THE GAME ///////////////////////
restart.addEventListener('click', refresh); // restarts the game when the restart button is clicked

// NOT WORKING / console message prints, but none of the functions are completed; is it the order?
function refresh () {
	shuffle(cards);//added cards 
	resetCards();
	startTimer();
	moves = 0;
	console.log('game refreshed');
}





////////////// DISREGARD EVERYTHING BELOW THIS LINE ///////////////////////





////////////// START GAME ///////////////////////

// NOT WORKING / start game; added restart variable above
/*let restartGame = function () {
		//shuffle(cards); 
		//scorePanel
		moves = 0;
};*/

// NOT WORKING / add event listener to restart button; call startGame function
//restart.addEventListener('click', restartGame);


////////////// TIMER ///////////////////////

// NOT WORKING / NEW 7/17 / working on setting up and starting / stopping the game timer
/*function timerAction () {
	deck.addEventListener('click', startTimer);
}*/ 

// NOT WORKING / NEW 7/17 / 
/*function startTimer () { // Help found here: https://stackoverflow.com/questions/46458740/starting-timer-when-clicking-first-card-of-memory-game
    if (timer.seconds === 59) {
        timer.minutes++;
        timer.seconds = 0;
    } 
    else {
        timer.seconds++;
    };
}*/


////////////// TIMER ///////////////////////
// NOT WORKING
/* const deck = document.querySelector('.deck');
function startGame() {
  let shuffledCards = shuffle(cards);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
  }
}

*/ 

////////////// TIMER ///////////////////////

// Help from Peter (@soli...) in Slack / pad is not defined :(
/*totalSeconds = 0;
function setTime(minutesLabel, secondsLabel) {
  totalSeconds++;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function startTimer() {
	minutesLabel = document.getElementById('minutes');
	secondsLabel = document.getElementById('seconds');
	interval = setInterval(function () { 
		setTime(minutesLabel, secondsLabel) }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}*/ 