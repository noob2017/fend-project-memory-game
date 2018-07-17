// Master (home)
// STATUS: Working on setTimeout for flip and shuffle function
// DONE: Cards flipping!
// DONE: Cards matching!
// DONE: Moves counter counting!
// DONE: Anchors started from card class!
// DONE: Lightning bolt started from card class!
// DEBUGGING: Lighting bolts won't take match class
// DEBUGGING: unmatched cards flip, but don't return to original state; clicking again leaves purple background
// TO-DO: no player timer yet
// TO-DO: not shuffling
// TO-DO: too many cards can flip at once; also counts closing clicks
// TO-DO: clicking same card twice yields a match
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
	//NOT WORKING / start timer on first move / TO-DO: need to write this function
   /*if (moves === 1) {
        seconds = 0;
        minutes = 0;
        hour = 0;
        startTimer(); // TO-DO: need to write this function
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
  	// PARTIALLY WORKING / doesn't change back to grey / loop over cards; flip them back over if no match
    // setTimeout below not working
    	for (let card of openCards) { 
			card.classList.remove('open', 'show', 'no-match');
			setTimeout (card.classList.add('no-match'), 1000);
			card.classList.add('card');
			
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

*/ 