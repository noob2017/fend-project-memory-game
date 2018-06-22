//below provided in Udacity starter code
/*
 * Create a list that holds all of your cards
 */
const cards = ['fa-diamond',
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-anchor',
    'fa-bolt',
    'fa-bolt',
    'fa-cube',
    'fa-cube',
    'fa-bomb',
    'fa-bomb',
    'fa-bicycle',
    'fa-bicycle',
    'fa-leaf',
    'fa-leaf'
];

//********************************************

//below provided in Udacity starter code

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code.
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
 * DONE! set up the event listener for a card. If a card is clicked:
 * DONE! - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//****************************************

// Thanks to Ryan Waite for the li.card suggestion!
// Thanks to Ryan Waite for the lastFlipped suggestion! 
const allCards = document.querySelectorAll('li.card');
let lastFlipped = null;
let openCards = []; //Thanks to Mike Wales!
//let shuffled = shuffle(allCards);

//show cards when clicked
allCards.forEach(function(card) {
	card.addEventListener('click', function(event) {
   		card.classList.add('open', 'show');
      	if(lastFlipped) {
        	console.log('click!');
        	//TEST adding function to push card to open cards list here
        	function addFlippedCard(lastFlipped) {
				openCards.push(lastFlipped);
				console.log(addFlippedCard);
			}	
				addFlippedCard();
     	}
      	else {
        	lastFlipped = card;
      	}
   	});
	
	//TEST pushing card to open cards list/array
	//function addFlippedCard(lastFlipped) {
		//openCards.push(lastFlipped);
		//console.log(openCards);
	//}

});

//TEST alternate method of pushing card to open cards list
/*const deckOfCards = document.querySelector('.deck');

 	for (i = 0; i < shuffledArray.length; i++) {
    	deckOfCards.children[i].children[0].className = shuffledArray[i];
  	};
*/