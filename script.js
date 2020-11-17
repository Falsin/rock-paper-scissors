const buttons   = document.querySelectorAll('button');
const displays  = document.querySelectorAll('.display');
const values    = document.querySelectorAll('.value');
const lastDisplay = document.getElementById('end');

let score = {
  round: 0,
  computer: 0,
  you: 0,
  draw: 0
}

buttons.forEach(item => {
  item.addEventListener('mousedown', startGame)
})

function startGame(e) {
  const userSelect = e.target.id; 
  const computerSelect = computerPlay(); 
  playRound(userSelect, computerSelect, score);

  displays.forEach(item => {
    if (item.id == 'score') {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
  storeResults();

  if (score.round == 6) {
    finishGame();
  }
}

function playRound(userSelect, computerSelection, score) {
  let options = {
    'scissors': {
      'paper': 0,
      'scissors': 1,
      'rock': 2
    },
    'paper': {
      'rock': 0,
      'paper': 1,
      'scissors': 2
    },
    'rock': {
      'scissors': 0,
      'rock': 1,
      'paper': 2
    }
  }

  const result = options[userSelect][computerSelection];

  if (result == 1) {
    score.draw = ++score.draw;
  } else if (result == 2) {
    score.computer = ++score.computer;
  } else {
    score.you = ++score.you;
  }
  score.round = ++score.round;
}

function computerPlay() {
  let array = ['scissors', 'paper', 'rock'];
  let minItem = 0;
  let maxItem = 2;
  return array[Math.round((maxItem - minItem + 1)*Math.random() + minItem - 0.5)]
}

function storeResults() {
  values.forEach(item => {
    let array = item.textContent.split(": ");
    array[1] = score[item.id];
    item.textContent = array.join(': ');
  })
}

function finishGame() {
  displays.forEach(item => {
    if (item.id == 'end') {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  let p = lastDisplay.querySelector('p');

  if (score.computer > score.you) {
    p.textContent = 'You lose!';
  } else if (score.you > score.computer) {
    p.textContent = 'You win!';
  } else {
    p.textContent = 'Draw!'
  }

  for (const key in score) {
    score[key] = 0;
  }
}

/* function askUser() {
  let question = prompt('Select a Scissors, Paper or Rock').toLowerCase();
  if (question != 'scissors' && question != 'paper' && question != 'rock') {
    question = askUser();
  } else {
    return question;
  }
}

function computerPlay() {
  let array = ['scissors', 'paper', 'rock'];
  let minItem = 0;
  let maxItem = 2;
  return array[Math.round((maxItem - minItem + 1)*Math.random() + minItem - 0.5)]
}

function playRound(playerSelection, computerSelection) {
  let options = {
    'scissors': {
      'paper': 0,
      'scissors': 1,
      'rock': 2
    },
    'paper': {
      'rock': 0,
      'paper': 1,
      'scissors': 2
    },
    'rock': {
      'scissors': 0,
      'rock': 1,
      'paper': 2
    }
  }

  let result = options[playerSelection][computerSelection];

  if (result == 1) {
    console.log('Draw!');
  } else if (result == 2) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`);
  } else {
    console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`);
  }

  return result;
}

function game(item) {
  let userWin = 0;
  let userLose = 0;
  let draw = 0;

  for (let i = 0; i < item; i++) {
    let gameResult = playRound(askUser(), computerPlay());
    if (gameResult == 1) {
      ++draw;
    } else if (gameResult == 2) {
      ++userLose;
    } else {
      ++userWin;
    }
  }

  console.log(`score: User win ${userWin} times, Computer win ${userLose} times, Draw ${draw} times`)

  if (userWin > userLose) {
    return 'User win!';
  } else if (userWin < userLose) {
    return 'User lose!';
  } else {
    return 'Draw!';
  } 
} */

/* console.log(game(5)); */