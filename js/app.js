
// DEBUGGING: modal yes and no buttons don't take correct actions; modal content stays displayed after clicking either one
// DEBUGGING: after modal, timer doesn't restart; moves doesn't reset to 0
// DEBUGGING: starStatus rating not working yet
// DEBUGGING: reset button still restarts timer at 0:01; starts moves at 1, not 0


////////////// GLOBAL VARIABLES ///////////////////////

let cards = document.querySelectorAll('.card');
let openCards = [];
let restart = document.querySelector('.restart');
let moves = 0;
let deck = document.querySelector('.deck');
let timer = 0;
const seconds = timer % 60; // Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
const minutes = timer / 60; // Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
//const getStars = document.getElementsByClassName('fa fa-star');
//const allStars = [...getStars]; //creates array of stars for countdown / // Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010
let starCount = 3; 
let modal = document.getElementById('congrats'); // with help from: https://www.w3schools.com/howto/howto_css_modals.asp
let matchedCards = [];
let yesBtn = document.getElementById('yes-btn');
let noBtn = document.getElementById('no-btn');




////////////// SHOW CARDS WHEN CLICKED ///////////////////////

// shows card symbol if clicked; event listener below
let displayCard = function () {
	this.classList.toggle('open');
	this.classList.toggle('show');
	// add the clicked card with .open class to a new array called openCards
	openCards.push(this);

  	// check if the new array contains two items 
  	// if it does, call back a checker function and start moves counter
	if (openCards.length === 2) {
	console.log('two!');
	countMoves();
	checkMatch();
	}	
};  

////////////// COUNT MOVES ///////////////////////

function countMoves () {
	moves++; // increment moves
	let movesNumber = document.querySelector('.moves');
	movesNumber.innerHTML = moves;
	removeStar();
}

////////////// STAR RATINGS ///////////////////////

// Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010 
// NOT WORKING 
/*function removeStar() {
    for (star of allStars) {
        if (star.style.display !== 'none') {
            star.style.display = 'none';
            starCount--;
            break;
        }
    }
}*/

/*function starStatus() {
    if (moves === 6 || moves === 12 || moves === 20) {
        removeStar();
    }
}*/

function removeStar() {
	let star3 = document.getElementById('star3');
	let star2 = document.getElementById('star2');

	if (moves == 6) {
		//star3.style.display = 'none';
		star3.classList.add('stars-hide');
	}
	if (moves == 12) {
		//star2.style.display = 'none';
		star2.classList.add('stars-hide');
	}
}

////////////// CHECK FOR MATCH ///////////////////////

// check if two cards in new array are a match
function checkMatch () {
	if (openCards[0].innerHTML ===
     openCards[1].innerHTML) {
		for (let card of openCards) { // loop over cards in openCards array; add match class
			card.classList.add('match');
			matchedCards.push(card); // this works
			endGame();
	  	}
    	console.log('match!');
    	openCards = []; // empties array after matching
  	}
  	else {
        for (let card of openCards) {
        card.classList.add('no-match');
            setTimeout(function() {
                card.classList.remove('open','no-match','show');
        	}, 1200)
        }
        openCards = [];
    }
}	

////////////// RESET CARDS TO ORIGINAL POSITION ///////////////////////

function resetCards () {
	for (let card of openCards) { 
		card.classList.remove('open', 'show', 'no-match');
		//card.classList.add('card'); / not necessary anymore?
	}
	openCards = [];;  // empty array after matching
}

////////////// START TIMER ///////////////////////

// Inspiration from from Bre Bartman https://codepen.io/Brew42/pen/XBXVvY?editors=1010

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
    }, 1000);  
    deck.removeEventListener('click', arguments.callee); // stops timer from compounding with each click
}
// NOT WORKING
/*function stopTimer() {
	const timerHTML = document.querySelector('.timer');
	restart.addEventListener('click', this);
}*/ 
//use a moves counter which keeps track of the number of moves and then when it reaches 16 moves, 
//then it runs an end game function which stops the timer, activates the modal, puts the stars and time in the modal

////////////// ADD EVENT LISTENER TO CARDS & DISPLAY IF CLICKED ///////////////////////

// loop to add event listeners
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', displayCard);
}

////////////// ADD EVENT LISTENER TO DECK & START TIMER IF CLICKED ///////////////////////

deck.addEventListener('click', startTimer);

////////////// SHUFFLE ///////////////////////

// Shuffle function from http://stackoverflow.com/a/2450976, provided by Udacity in starter code
function shuffle(array) { 
    //var array = document.getElementsByClassName('card'); // to define array
    var nodeList = document.querySelectorAll('.card');
        var array = Array.from(nodeList);
    var currentIndex = array.length, temporaryValue, randomIndex; 
    resetCards();
	//stopTimer();
	//timer = 0;
	//countMoves();
	//moves = 0;
	console.log('cards shuffled');

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex]; 
        array[currentIndex] = array[randomIndex]; 
        array[randomIndex] = temporaryValue; 
    }
    for (let card of array) {
    	card.classList.remove('open','show', 'match');
        deck.append(card);
    }
}    

////////////// DISPLAY MODAL ///////////////////////

// Inspiration from: https://strugglebus.io/
/*function checkForWin() { // NOT WORKING
    const matchedCards = document.querySelectorAll('.match');
    const matchedArray = Array.from(matchedCards);
    if (matchedArray.length === 16) {
        clearInterval(timer);
        console.log(`You won in ${moves} moves and it took ${minutesDisplay.innerText} minutes and ${secondsDisplay.innerText} seconds! You earned ${starNumber} stars!`);
        popModal();
    }  
}*/ 

function endGame() {
	if (matchedCards.length === 16) { //breaks after 10, or 5 matches
		congrats.classList.add('modal', 'modal-content', 'show-modal');	
		console.log('display modal');
		document.querySelector('#endMoves').innerHTML = moves;
		document.querySelector('#endTime').innerHTML = timer;
		clearInterval(timerStart); // stops timer
	}
}

////////////// RESTART THE GAME ///////////////////////

//function restartButton () {

//}

// ACTIONS: 
// doesn't work after modal: on restart button click: clear timer, clear moves, shuffle cards, reset cards
// DONE: on win game: show modal
// on yes button click: clear modal, stop timer, clear timer, clear moves, shuffle cards, reset cards
// on no button click: clear modal, show cards in winning position, show stopped timer, show stopped moves


//restart.addEventListener('click', refresh); // restarts the game when the restart button is clicked
restart.addEventListener('click', shuffle);
restart.addEventListener('click', clearInterval);
//yesBtn.addEventListener('click', function() {
	//congrats.classList.remove('show-modal'); 
//});
//yesBtn.addEventListener('click', shuffle);
//yesBtn.addEventListener('click', clearInterval);
yesBtn.addEventListener('click', refresh);
noBtn.addEventListener('click', refresh);
//noBtn.addEventListener('click', function() {
	//congrats.classList.remove('modal', 'modal-content', 'show-modal'); 
//});	

function refresh () {
	shuffle();
	resetCards();
	//stopTimer();
	clearInterval(timerStart);
	timer = 0;
	moves = 0;
	congrats.classList.remove('modal', 'modal-content', 'show-modal');
	console.log('game restarted');
	document.querySelector('.modal').style.display ='block'; // suggested by Juan L (FEND) in Slack 7/28
}