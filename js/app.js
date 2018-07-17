// Master (home)
// STATUS: Working on setTimeout for flip and shuffle function
// DONE: Cards flipping!
// DONE: Cards matching!
// DONE: Moves counter counting!
// DONE: Anchors started from card class!
// DONE: Lightning bolt restarted from card class!
// DONE: Unmatched cards turn purple, then return to original .card state!
// DONE: Comment in HTML moved to bottom of code; for some reason inline commenting didn't work
// DONE: Lighting bolts take match class!
// DEBUGGING: no game timer yet
// TO-DO: no restart button action yet
// TO-DO: not shuffling
// TO-DO: too many cards can flip at once
// TO-DO: clicking same card twice yields a match
// TO-DO: no modal yet
// TO-DO: no star rating yet
// TO-DO: no readme detailing dependencies yet

let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');
//let timer = 0; 
//let timerOff = true;
let timer = document.querySelector('.timer')
/*{ // NOT WORKING / NEW 7/17 / working on getting timer to count
    seconds: 0,
    minutes: 0,
    clearTime: -1
}*/ 
let second = 0, minute = 0; // from: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
//var interval; // from: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

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
	    for (let card of openCards) { 
	    card.classList.add('no-match');
		}	
    	setTimeout(resetCards, 1200);
		console.log('no match :( ');
  	}	
}	

function resetCards () {
	for (let card of openCards) { 
		card.classList.remove('open', 'show', 'no-match');
		card.classList.add('card');
		//openCards.length = 0; // doesn't work here - closes only one card
	}
	openCards.length = 0;  // WORKS / empty array after matching
}

//////////////

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

// WORKS BUT I DON'T LIKE IT
function startTimer () { // Help found here: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
 interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


//////////////

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
    cards[i].addEventListener('click', startTimer); // NOT WORKING / NEW 7/17 
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