// WIP3
// STATUS: Cards flipping, but clicks not showing in console; not shuffling, and moves counter not counting

// ** Array to hold cards **
// Thanks to https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript for help with setting up the loop
// Removed - Thanks to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax for an explanation of the spread syntax
// Removed - Thanks to Ryan Waite for the li.card suggestion
//Removed - let card = document.querySelectorAll('li.card'); Mentor suggested dropping the li on 6/27
let cards = document.querySelectorAll('.card');
//Removed - let card = document.getElementsByClassName("card"); Mentor suggested replacing let card with let cards on 6/27
//Removed - let cards = [...card]; Mentor suggested dropping this part as well, and replacing let card with let cards on 6/27

// ** Display cards toggle **
let displayCard = function () {
  this.classList.toggle('open');
  this.classList.toggle('show');
  //Temporarily removed - Thanks to https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript for the suggestion to disable the cards
  //Temporarily removed - this.classList.toggle('disabled');
};

// ** Loop to add event listeners **
for (let i = 0; i < cards.length; i++) { 
    cards[i].addEventListener('click', displayCard);
    console.log('click!');
}

//**********************************

// Udacity starter code: 
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
};

// End Udacity starter code

//***************************

/* Udacity starter code:
 * Create a list that holds all of your cards
 * End Udacity starter code
 */

 /* Udacity starter code:
 * DONE! - Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 * End Udacity starter code
 */

/* Udacity starter code:
 * DONE! - set up the event listener for a card. If a card is clicked:
 * DONE! - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 * End Udacity starter code
 */

//***************************

//save this for later (from the scotch.io link above - give credit if used!)
/*const deck = document.querySelector('.deck');
function startGame() {
  let shuffledCards = shuffle(cards);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function(item) {
      deck.appendChild(item);
    });
  }
}*/

//save this for later (from the scotch.io link above - give credit if used!)
/*function moveCounter() {
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
}*/