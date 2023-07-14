document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'q1',
      img: 'images3/question1.PNG'
    },
    {
      name: 'q2',
      img:'images3/question2.PNG'
    },
    {
      name: 'q3',
      img: 'images3/question3.PNG'
    },
    {
      name: 'q4',
      img: 'images3/question4.PNG'
    },
    {
      name: 'q5',
      img: 'images3/question5.PNG'
    },
    {
      name: 'q6',
      img: 'images3/question6.PNG'
    },
    {
      name: 'q7',
      img: 'images3/question7.PNG'
    },
    {
      name: 'q8',
      img: 'images3/question8.PNG'
    },
    {
      name: 'q9',
      img: 'images3/question9.PNG'
    },
    {
      name: 'q10',
      img: 'images3/question10.PNG'
    },
    {
      name: 'q1',
      img: 'images3/answer1.PNG'
    },
    {
      name: 'q2',
      img:'images3/answer2.PNG'
    },
    {
      name: 'q3',
      img: 'images3/answer3.PNG'
    },
    {
      name: 'q4',
      img: 'images3/answer4.PNG'
    },
    {
      name: 'q5',
      img: 'images3/answer5.PNG'
    },
    {
      name: 'q6',
      img: 'images3/answer6.PNG'
    },
    {
      name: 'q7',
      img: 'images3/answer7.PNG'
    },
    {
      name: 'q8',
      img: 'images3/answer8.PNG'
    },
    {
      name: 'q9',
      img: 'images3/answer9.PNG'
    },
    {
      name: 'q10',
      img: 'images3/answer10.PNG'
    },
    
  ];

  // there are ten cards but 20 in object as there are doubles
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
      card.setAttribute('src', 'images3/blank.png');
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
      cards[optionOneId].setAttribute('src', 'images3/blank.png');
      cards[optionTwoId].setAttribute('src', 'images3/blank.png');
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images3/white.png');
      cards[optionTwoId].setAttribute('src', 'images3/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      
    } else {
      cards[optionOneId].setAttribute('src', 'images3/blank.png');
      cards[optionTwoId].setAttribute('src', 'images3/blank.png');
      // alert('Sorry, try again')
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
  }
  
  createBoard();
})


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






