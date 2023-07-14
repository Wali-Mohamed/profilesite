document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'lemonade',
      img: 'images1/drink.png'
    },
    {
      name: 'burgernchips',
      img: 'images1/eat.png'
    },
    {
      name: 'mopnbucket',
      img: 'images1/mop.png'
    },
    {
      name: 'skates',
      img: 'images1/skate.png'
    },
    {
      name: 'swing',
      img: 'images1/swing.png'
    },
    {
      name: 'pen',
      img: 'images1/write.png'
    },
    {
      name: 'lemonade',
      img: 'images1/drink.png'
    },
    {
      name: 'burgernchips',
      img: 'images1/eat.png'
    },
    {
      name: 'mopnbucket',
      img: 'images1/mop.png'
    },
    {
      name: 'skates',
      img: 'images1/skate.png'
    },
    {
      name: 'swing',
      img: 'images1/swing.png'
    },
    {
      name: 'pen',
      img: 'images1/write.png'
    }
  ];

  // there are six cards but 12 in object as there are doubles
  cardArray.sort(() => 0.5 - Math.random());
  

  const grid = document.querySelector('.grid');
  const next = document.querySelector('.next');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let lost=0;
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images1/blank.png');
      card.setAttribute('width', '195');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      card.addEventListener('click',start);
      grid.appendChild(card);
      //console.log(card)
    }
  }

 
  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images1/blank.png');
      cards[optionTwoId].setAttribute('src', 'images1/blank.png');
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images1/white.png');
      cards[optionTwoId].setAttribute('src', 'images1/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      
    } else {
      cards[optionOneId].setAttribute('src', 'images1/blank.png');
      cards[optionTwoId].setAttribute('src', 'images1/blank.png');
      // alert('Sorry, try again')
      lost++;
      console.log(lost);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = `Congratulations! You found them all!<br> Number of lost attempts: ${lost}`;
      next.style.display='block';
      pause();
          
      
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img); 
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500);
    }
  }
  
  createBoard();
})
const next = document.querySelector('.next');
next.onclick = () => {
  let grid = document.querySelector('.grid') ;
  next.style.display='none' ;
  reset();
  while (grid.firstChild){
    grid.removeChild(grid.lastChild);
  }
  
  
//card options
const cardArray = [
  {
    name: 'drinking',
    img: 'images2/drinking.png'
  },
  {
    name: 'eating',
    img: 'images2/eating.PNG'
  },
  {
    name: 'moppimg',
    img: 'images2/mopping.png'
  },
  {
    name: 'skating',
    img: 'images2/skating.png'
  },
  {
    name: 'swinging',
    img: 'images2/swinging.png'
  },
  {
    name: 'writing',
    img: 'images2/writing.JPG'
  },
  {
    name: 'drinking',
    img: 'images2/drinkingword.png'
  },
  {
    name: 'eating',
    img: 'images2/eatingword.png'
  },
  {
    name: 'moppimg',
    img: 'images2/moppingword.png'
  },
  {
    name: 'skating',
    img: 'images2/skatingword.png'
  },
  {
    name: 'swinging',
    img: 'images2/swingingword.png'
  },
  {
    name: 'writing',
    img: 'images2/writingword.png'
  },
];

// there are six cards but 12 in object as there are doubles
cardArray.sort(() => 0.5 - Math.random());


//const grid = document.querySelector('.grid')
//const next = document.querySelector('.next')
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let lost=0;
//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src','images2/blank.png');
    card.setAttribute('data-id', i);
    card.setAttribute('width', '195');
    card.setAttribute('alt', 'blank pic');
    card.addEventListener('click', flipCard);
    card.addEventListener('click', start);
    grid.appendChild(card);
    //console.log(card)
  }
}


//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images2/blank.png');
    cards[optionTwoId].setAttribute('src', 'images2/blank.png');
    alert('You have clicked the same image!');
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    //alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images2/white.png');
    cards[optionTwoId].setAttribute('src', 'images2/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
    
  } else {
    cards[optionOneId].setAttribute('src', 'images2/blank.png');
    cards[optionTwoId].setAttribute('src', 'images2/blank.png');
    //alert('Sorry, try again')
    lost++;
    console.log(lost);
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = `Congratulations! You found them all!<br> Number of lost attempts: ${lost}`;
    pause();

    
    
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img); 
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500);
  }
};

createBoard()
}


let [milliseconds,seconds,minutes] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
// Start button
function start(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}

//Pause button
function pause(){
    clearInterval(int);
 };
// reset button
function reset(){
     clearInterval(int);
     [milliseconds,seconds,minutes] = [0,0,0];
     timerRef.innerHTML = '00 : 00 : 000';
     };

// display timer
function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    
 
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}






