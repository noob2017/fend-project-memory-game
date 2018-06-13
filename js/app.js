//below included with Udacity starter code
/*
 * Create a list that holds all of your cards
 */
/*var cards = ("fa fa-diamond", 
	"fa fa-paper-plane-o", 
	"fa fa-anchor", 
	"fa fa-bolt", 
	"fa fa-cube", 
	"fa fa-anchor", 
	"fa fa-leaf", 
	"fa fa-bicycle", 
	"fa fa-diamond", 
	"fa fa-bomb", 
	"fa fa-leaf")*/

//********************************************

//below included with Udacity starter code

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//****************************************

//got below from Matt Crawford
/*let deck = document.querySelectorAll('.card');

deck.addEventListener('click', function(e) {
	let clickTarget = event.target;
	if (clickTarget.classList.contains('card')) {
		clickTarget.classList.toggle('open');
		clickTarget.classList.toggle('show');
	}
}); */


//***************************************

//got li.card suggestion from Ryan Waite
//got lastFlipped suggestion from Ryan Waite
let cards = document.querySelectorAll('li.card');
let lastFlipped = null;

cards.forEach(function(card){
   card.addEventListener('click', function(event){

      if(lastFlipped) {
         // now you have a reference to this card and lastFlipped
         // now you just have to compare them!
         openCards.push(card);
         card.classList.add('open', 'show');
      }
      else {
         lastFlipped = card;
      }
   });
});

//***************************************

//got below from Mike Wales
/*
let allCards = document.querySelectorAll('.card');
let openCards = [];

allCards.forEach(function(card) {
 	card.addEventListener('click', function(event) {

 		if (!card.classList.contains('open') && !card.classList.contains ('show') && !card.classList.contains ('match')) {
	 		openCards.push(card); 
	 		card.classList.add('open', 'show');

	 //to check for matching cards
	 	var firstCardType = openCards[0].dataset.card;

	//look into bug where more than 2 cards can be opened
	//to make cards turn over after a set time - if they don't match
	 	if (openCards.length == 2) {
	 		if (openCards[0].dataset.card == openCards[1].dataset.card) {
	 			openCards[0].classList.add('match');
	 			openCards[0].classList.add('open'); 
	 			openCards[0].classList.add('show');

	 			openCards[1].classList.add('match');
	 			openCards[1].classList.add('open'); 
	 			openCards[1].classList.add('show');
 			}
 				openCards = []; 

 			else {
 				//if no match, hide
	 			setTimeout(function(){
	 			openCards.forEach(function(card){
	 				card.classList.remove('open', 'show');
	 			});

	 			openCards = []; 
	 			}, 1000); 
 				}			 		
	 		}
 		}
 	});
});

/*