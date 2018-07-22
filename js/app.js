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
// DONE: Cards shuffling!
// DONE: Clicking same card twice no longer yields a match!

// DEBUGGING: restart button created but doesn't change timer; flips two matched diamonds on restart
// TO-DO: too many cards can flip at once / try adding a 'disabled' class to the deck and add css to disable clicking on the card. So IF the card is 'open', disabled clicking on the card
// or try only allowing cards to be added to flippedCards if they did not have class open.
// TO-DO: no modal yet
// TO-DO: no star rating yet
// TO-DO: no readme detailing dependencies yet

////////////// GLOBAL VARIABLES ///////////////////////

let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');
let timer = 0;
const seconds = timer % 60; // Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
const minutes = timer / 60; // Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010

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

function countMoves () {
	moves++; // increment moves
	let movesNumber = document.querySelector('.moves');
	movesNumber.innerHTML = moves;
}

////////////// CHECK FOR MATCH ///////////////////////

// check if two cards in new array are a match
function checkMatch () {
	if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
		for (let card of openCards) { // loop over cards in openCards array; add match class
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
		//card.classList.add('card'); / not necessary anymore?
	}
	openCards.length = 0;  // empty array after matching
}

////////////// START TIMER ///////////////////////

// Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010

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
    deck.removeEventListener('click', arguments.callee); // stops timer from compounding with each click
}
function stopTimer() {
	const timerHTML = document.querySelector('.timer');
	restart.addEventListener('click', this);
}

////////////// ADD EVENT LISTENER TO CARDS & DISPLAY IF CLICKED ///////////////////////

// loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

////////////// ADD EVENT LISTENER TO DECK & START TIMER IF CLICKED ///////////////////////

deck.addEventListener('click', startTimer);

////////////// SHUFFLE ///////////////////////

// Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code
function shuffle(array) { 
    var array = document.getElementsByClassName('card'); // to declare array
    var currentIndex = array.length, temporaryValue, randomIndex; 

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck[currentIndex]; 
        array[currentIndex] = array[randomIndex]; 
        array[randomIndex] = temporaryValue; 
    }
    for (let card of array) {
            deck.append(card);
        }
}    

////////////// RESTART THE GAME ///////////////////////

restart.addEventListener('click', refresh); // restarts the game when the restart button is clicked

// NOT WORKING
function refresh () {
	shuffle();
	resetCards();
	stopTimer();
	timer = 0;
	moves = 0;
	console.log('game refreshed');
}