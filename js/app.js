// Master (home)
// STATUS: Cards flipping and matching! Moves counter working!
// BROKEN: setTimeout not working at all; breaks the whole game due to unexpected token at line 65
// unmatched cards flip, but way too fast
// no timer yet
// not shuffling
// too many cards can flip at once; also counts closing clicks
// clicking same card twice yields a match
// lightning bolts won't change color / match; fix this (in HTML?)
// anchors remain open; need to close
// no modal yet
// no star rating yet
// no readme detailing dependencies yet

let cards = document.querySelectorAll('.card');
const openCards = [];
let restart = document.querySelector('.restart');
//let moves = document.querySelector('moves');
let moves = 0;
const deck = document.querySelector('.deck');
//let flipTimeout = setTimeout();

let displayCard = function () {
  this.classList.toggle('open');
  this.classList.toggle('show');

	// WORKS / increment moves
	function countMoves () {
		moves++;
		let movesNumber = document.querySelector('.moves');
		movesNumber.innerHTML = moves;
		//NOT WORKING / start timer on first move / error start timer is not defined
	   /*if (moves === 1) {
	        seconds = 0;
	        minutes = 0;
	        hour = 0;
	        startTimer();
    	}*/
	}  

	  // WORKS / add the clicked card with .open class to a new array called openCards
	openCards.push(this);

	  // WORKS / check if the new array contains two items 
	  // WORKS / if it does, call back a checker function
	if (openCards.length === 2) {
		console.log('two!');
		checkMatch();
		countMoves();
	}	
};

// WORKS / check if two cards in new array are a match
function checkMatch () {
	if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
  	// WORKS / loop over cards in openCards array; add match class
		for (card of openCards) { 
			card.classList.add('match');
	  	}
    	console.log('match!');
    	openCards.length = 0; // empty array after matching
  	}
  	else {
  	// PARTIALLY WORKS / FLIPPING OVER TOO FAST / loop over cards; flip them back over if no match
  	// NOT WORKING / setTimeout not working at all; breaks the whole game due to unexpected token at line 65 or 67
	    //setTimeout () {	
	    //setTimeout(checkMatch, 1000);	
	    	//setTimeout(5000);
	    	//setTimeout (
		    	for (card of openCards) { 
					card.classList.remove('open', 'show');
					// NOT WORKING
					//setTimeout(5000);
					//checkMatch(setTimeout, 1000);
					// setTimeout // https://www.w3schools.com/jsref/met_win_settimeout.asp
			  	}//, 1000;
			//)  	
		    	openCards.length = 0; // WORKS / empty array after matching
		    	console.log('no match :( ');
		    	// NOT WORKING / setTimeout doesn't work below, either
		    	//setTimeout(5000);
			//}
			//5000,
			//);

  	}	
};	


// NOT WORKING / doesn't work here, either; thought if I called it outside of the checkMatch function it might, but no go :(
//setTimeout(checkMatch, 1000);

// NOT WORKING / start game; added restart variable above
let restartGame = function () {
		//shuffle(cards); 
		//scorePanel
		moves = 0;
}

// NOT WORKING / add event listener to restart button; call startGame function
restart.addEventListener('click', restartGame);

// ======================================== END OF FIRST SESSION =======================================

// WORKS / loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

// NOT WORKING / Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    // NOT WORKING / write a for loop that appends cards to the deck using the deck and the array
    for (card of cards) {
    	deck.appendChild(card);
    }
    return array;
}


// below is test code

/* const deck = document.querySelector('.deck');
function startGame() {
  let shuffledCards = shuffle(cards);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
  }
}


function moveCounter() {
    moves++;
    const counter = document.querySelector('.moves');
    counter.innerHTML = moves;
    //start timer on first move
    if (moves === 1) {
        seconds = 0;
        minutes = 0;
        hour = 0;
        startTimer();
    }
}
*/ 