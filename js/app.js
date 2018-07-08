// WIP4 (home)
// STATUS: Cards flipping and matching! 
// not shuffling; stopped flipping after adding shuffle and moves counter
// moves counter not counting
// too many cards can flip at once; also counts closing clicks
// lightning bolts won't change color / match; fix this
// anchors remain open; need to close
// no modal yet
// no timer yet
// no star rating yet
// no readme detailing dependencies yet

let cards = document.querySelectorAll('.card');
const openCards = [];
let restart = document.querySelector('.restart');

let displayCard = function () {
  this.classList.toggle('open');
  this.classList.toggle('show');

// NEW STARTS HERE 7/7

// add event listener to restart button; call startGame function
restart.addEventListener('click', restartGame);

// start game; this isn't working yet; added restart variable above
let restartGame = function () {
		shuffle(cards); 
		//scorePanel
		moves = 0;
	}
}



  // add the clicked card with .open class to a new array called openCards
    openCards.push(this);

  // check if the new array contains two items 
  // if it does, call back a checker function
  if (openCards.length === 2) {
    console.log('two!');
    checkMatch();
  }
};

// ** (Lisa) NEW STARTS HERE 7/5

// check if two cards in new array are a match
function checkMatch () {
  if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
  	// loop over cards in openCards array; add match class
		for (card of openCards) { 
			card.classList.add('match');
	  		}
    	console.log('match!');
    	openCards.length = 0; // empty array after matching
  }
  else {
  	// loop over cards; flip them back over if no match
		// for (card of openCards) { 
			// card.classList.add('match');
	  		// }
    	openCards.length = 0; // empty array after matching
    console.log('no match :( ')
  }
}

// As in: if the two cards match, toggle a 'match' class (which you have to make in css) else, toggle a 'wrong' class (you also have to make this). 
// At the end of the function (after the if/else), empty out the array


//
// ======================================== END OF FIRST SESSION =======================================

// loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

// Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
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