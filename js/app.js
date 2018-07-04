// WIP4 (home)
// STATUS: Cards flipping and matching! But not shuffling, and moves counter not counting

let cards = document.querySelectorAll('.card');
const openCards = [];

let displayCard = function () {
  this.classList.toggle('open');
  this.classList.toggle('show');

  // add the clicked card to a new array 
  // declare the new array variable outside of this function so it can be accessed by other functions like the checker function
    openCards.push(this); // ** (Lisa) pushes cards with .open class to new openCards array

  // check if the new array contains two items 
  // if it does, call back a checker function
  if (openCards.length === 2) {
    console.log('two!');
    checkMatch();
  }
};

// ** (Lisa) NEW STARTS HERE 7/4

// check if two cards in new array are a match
function checkMatch () {
  if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
  	//loop over cards in openCards array; add match class
		for (card of openCards) { 
			card.classList.add('match');
	  		}
    	console.log('match!');
  }
  else {
  	//insert additional loop here; loop example below
		//for (let i = 0; i < cars.length; i++) { 
    	//text += cars[i] + "<br>";
    	//empty openCards array; 
    console.log('no match :( ')
  }
}

// write a checker function here. This function will need an if else statement to check the array you just made. 
// As in: if the two cards match, toggle a 'match' class (which you have to make in css) else, toggle a 'wrong' class (you also have to make this). 
// At the end of the function (after the if/else), empty out the array


//
// ======================================== END OF FIRST SESSION =======================================

// loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

// Shuffle function from http://stackoverflow.com/a/2450976
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

const deck = document.querySelector('.deck');
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
