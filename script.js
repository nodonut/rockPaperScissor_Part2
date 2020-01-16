let userScore = 0;
let compScore = 0;
const user = document.querySelector('#user');
const comp = document.querySelector('#computer');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click', () => {
  game('rock');
});
paper.addEventListener('click', () => {
  game('paper');
});
scissor.addEventListener('click', () => {
  game('scissor');
});

function win() {
  userScore++;
}
function loss() {
  compScore++;
}

function game(playerChoice) {
  function computerPlay() {
    let x = Math.floor(Math.random() * Math.floor(3));
    if (x == 0) {
      return 'rock';
    } else if (x == 1) {
      return 'paper';
    } else {
      return 'scissor';
    }
  }

  const playerSelection = playerChoice;
  const computerSelection = computerPlay();

  function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection == 'rock' &&
        computerSelection.toLowerCase() == 'rock') ||
      (playerSelection == 'paper' &&
        computerSelection.toLowerCase() == 'paper') ||
      (playerSelection == 'scissor' &&
        computerSelection.toLowerCase() == 'scissor')
    ) {
      return 'TIE!';
    } else if (
      playerSelection == 'rock' &&
      computerSelection.toLowerCase() == 'paper'
    ) {
      loss();
      return 'Sorry you lose! Paper beats rock.';
    } else if (
      playerSelection == 'rock' &&
      computerSelection.toLowerCase() == 'scissor'
    ) {
      win();
      return 'You win! Rock beats scissor!';
    } else if (
      playerSelection == 'paper' &&
      computerSelection.toLowerCase() == 'rock'
    ) {
      win();
      return 'You win! Paper beats rock!';
    } else if (
      playerSelection == 'paper' &&
      computerSelection.toLowerCase() == 'scissor'
    ) {
      loss();
      return 'You lose! Scissor beats paper';
    } else if (
      playerSelection == 'scissor' &&
      computerSelection.toLowerCase() == 'rock'
    ) {
      loss();
      return 'You lose! Rock beats scissor';
    } else if (
      playerSelection == 'scissor' &&
      computerSelection.toLowerCase() == 'paper'
    ) {
      win();
      return 'You win! Scissor beats paper';
    }
  }

  console.log(playRound(playerSelection, computerSelection));
  user.textContent = userScore;
  comp.textContent = compScore;
}
