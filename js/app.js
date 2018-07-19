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
// DEBUGGING: timer seconds are compounded with each click so that clock runs too fast / maybe disabled class will work for this too?
// TO-DO: no restart button action yet
// TO-DO: not shuffling
// TO-DO: too many cards can flip at once / try adding a 'disabled' class to the deck and add css to disable clicking on the card. So IF the card is 'open', disabled clicking on the card
// or try only allowing cards to be added to flippedCards if the did not have class open.
// TO-DO: clicking same card twice yields a match / try adding the disabled class, as above
// TO-DO: no modal yet
// TO-DO: no star rating yet
// TO-DO: no readme detailing dependencies yet

////////////// GLOBAL VARIABLES ///////////////////////
let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');
//let timer = 0; 
//let timerOff = true;
//let timer = document.querySelector('.timer'); // how do I give this the properties below???
/*let timer = {
	seconds: 0,
	minutes: 0,
	restartTime: -1,
}*/

//let second = 0, minute = 0; // from: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
//var interval; // from: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
let timer = 0; // also from Bre Bartman
let timerAllow = true;
const seconds = timer % 60;
const minutes = timer / 60;




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

////////////// SHUFFLE ///////////////////////

// NOT SURE IF WORKING
// create function to shuffle cards and create a new deck
// Help from Bre Bartmann: https://codepen.io/Brew42/pen/XBXVvY
/* function shuffleDeck() {

    const shuffledDeck = shuffle(allCards);
    console.log(shuffledDeck);

    //remove classes from all cards
    for (var i = 0; i < allCards.length; i++) {
        deck.innerHTML = '';
        [].forEach.call(allCards, function(item) {
            deck.appendChild(item);
        });
        resetAllCards();
    }
}*/ 


////////////// TIMER ///////////////////////
// Help from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
// gives error NaN js 151
// works better 7/18 / but still counting each click and incrementing seconds by number of clicks
// another counter option: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
// another timer resource: https://codepen.io/chrisvneal/pen/OEMJyR

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
        //console.log(timer + ' ' + minutes + ' ' +
            //seconds);
    }, 1000);
    //document.getElementById("deck").removeEventListener("click", arguments.callee); / suggested by Illee / where to put it?	
}


////////////// START GAME ///////////////////////

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

deck.addEventListener('click', startTimer); // suggested by Illee 
//cards[i].addEventListener('click', startTimer); / old version removed 7/19

////////////// SHUFFLE ///////////////////////

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
        //remove classes from all cards
    for (var i = 0; i < allCards.length; i++) { // Illee suggested I move inside the function; not sure if this is right place?
        deck.innerHTML = '';
        [].forEach.call(allCards, function(item) {
            deck.appendChild(item);
        });
        resetAllCards();
    }
}

// TO-DO // document.getElementById('restart').addEventListener('click', restart); / turn this on once function created below

// TO-DO // function restart () {  / need to create this part

//}


////////////// TIMER ///////////////////////

// WORKS BUT I DON'T LIKE IT - format changes to only 1 digit after : and seconds are too fast / seconds are compounding based on # of clicks
/*function startTimer () { // Help found here: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
	setInterval(function(){
        timer.innerHTML = minute +':'+ second;
        second++;
        //second.padString(2);
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}*/ 

////////////// TIMER ///////////////////////

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


////////////// TIMER ///////////////////////
// NOT WORKING
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

////////////// TIMER ///////////////////////

// Help from Peter (@soli...) in Slack / pad is not defined :(
/*totalSeconds = 0;
function setTime(minutesLabel, secondsLabel) {
  totalSeconds++;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function startTimer() {
	minutesLabel = document.getElementById('minutes');
	secondsLabel = document.getElementById('seconds');
	interval = setInterval(function () { 
		setTime(minutesLabel, secondsLabel) }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}*/ 


////////////// TIMER ///////////////////////

/*let startTimer = function () {
        if (timer.seconds === 59) {
            timer.minutes++;
            timer.seconds = 0;
        } else {
            timer.seconds++;
    }*/

