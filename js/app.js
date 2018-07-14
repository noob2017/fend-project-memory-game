// Master (home)
// STATUS: Debugging / broken
// WORKING: Cards flipping!
// BROKEN: Cards not matching (no color change on match; no console log message)
// BROKEN: Moves counter stopped counting
// BROKEN: setTimeout not working at all; breaks the whole game due to unexpected token at line 65
// TO-DO: unmatched cards flip, but way too fast
// TO-DO: no timer yet
// TO-DO: not shuffling
// TO-DO: too many cards can flip at once; also counts closing clicks
// TO-DO: clicking same card twice yields a match
// TO-DO: lightning bolts won't change color / match; fix this (in HTML?)
// TO-DO: anchors remain open; need to close
// TO-DO: no modal yet
// TO-DO: no star rating yet
// TO-DO: no readme detailing dependencies yet

let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');

// WORKS / shows card symbol if clicked; event listener below
let displayCard = function () {
	this.classList.toggle('open');
	this.classList.toggle('show');
	// WORKS / add the clicked card with .open class to a new array called openCards
	openCards.push(this);

  	// WORKS / check if the new array contains two items 
  	// WORKS / if it does, call back a checker function and start moves counter
	if (openCards.length === 2) {
	console.log('two!');
	countMoves();
	checkMatch();
	}	
};  

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

// WORKS / check if two cards in new array are a match
function checkMatch () {
	if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
  	// WORKS / loop over cards in openCards array; add match class
		for (let card of openCards) { 
			card.classList.add('match');
	  	}
    	console.log('match!');
    	openCards.length = 0; // WORKS / empties array after matching
  	}
  	else {
  	// PARTIALLY WORKING / FLIPPING OVER TOO FAST / loop over cards; flip them back over if no match
    // try setTimeout here	
    	for (let card of openCards) { 
			card.classList.remove('open', 'show', 'no-match');
			card.classList.add('no-match');
			// setTimeout // https://www.w3schools.com/jsref/met_win_settimeout.asp
	  	}
    	openCards.length = 0;  // WORKS / empty array after matching
    	console.log('no match :( ');
  	}	
}	

// NOT WORKING / start game; added restart variable above
/*let restartGame = function () {
		//shuffle(cards); 
		//scorePanel
		moves = 0;
};*/

// NOT WORKING / add event listener to restart button; call startGame function
//restart.addEventListener('click', restartGame);

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
   /* for (card of cards) {
    	deck.appendChild(card);
    }
    return array;*/
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