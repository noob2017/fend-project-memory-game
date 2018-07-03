// WIP4
// STATUS: Cards flipping, but clicks not showing in console; symbols not showing; not shuffling, and moves counter not counting

let cards = document.querySelectorAll('.card');
const openCards = [];

let displayCard = function () {
  this.classList.toggle('open');
  this.classList.toggle('show');

  //write 1 line of code below this that adds the clicked card to a new array. Declare the new array variable outside of this function so it can be accessed by other functions like the checker function
    openCards.push('this'); // ** (Lisa) pushes cards with .open class to new openCards array; can't tell if this is doing anything yet

  // write an if statement to check if the new array has two items, if it does, call back a checker function (you will write this checker function after this)
  if (openCards.length === 2) {
  // checkMatch(); ** (Lisa) changed this part up a bit
  //   }
    console.log("two!");
  }
};

// ** (Lisa) NEW STARTS HERE 7/1
function checkMatch () {
  if (openCards[0].innerHTML ===
     openCards[1].innerHTML) { //not working
  this.classList.toggle('card match'); 
    console.log('match!');
  }
  else {
    console.log('no match :( ')
  }
}

// write a checker function here. This function will need an if else statement to check the array you just made. As in: if the two cards match, toggle a 'match' class (which you have to make in css) else, toggle a 'wrong' class (you also have to make this). At the end of the function (after the if/else), empty out the array

//if openCards.classList.contains('card match') { ** (Lisa) this looks super wrong-ola! 
  // this.classList.
//}

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
