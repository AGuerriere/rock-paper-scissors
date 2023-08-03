let userWins = 0
let computerWins = 0

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.getElementById('result')
const userIcon = document.getElementById('userIcon')
const computerIcon = document.getElementById('computerIcon')
const userScore = document.getElementById('userScore')
const computerScore = document.getElementById('computerScore')



function getComputerChoice(){
  let rand = Math.floor(Math.random() * 3)
  let choices = ["rock", "paper", "scissors"]
  let result = choices[rand]
  computerIcon.innerText = convertToIcon(result)
  return result
}

function roundCompare(userSelection, computerSelection ){
  let userSelectionSmall = userSelection.toLowerCase()
  let computerSelectionSmall = computerSelection.toLowerCase()
  if(userSelectionSmall === computerSelectionSmall) {
    return "It'a draw!"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "paper"){
    computerWins++
    computerScore.innerText = `Computer: ${computerWins}`
    return "You lose! Paper beats rock"
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "rock"){
    userWins++
    userScore.innerText = `Player: ${userWins}`
    return "You win! Paper beats rock"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "scissors"){
    userWins++
    userScore.innerText = `Player: ${userWins}`
    return "You win! Rock beat scissors"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "rock"){
    computerWins++
    computerScore.innerText = `Computer: ${computerWins}`
    return "You lose! Rock beat scissors"
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "scissors"){
    computerWins++
    computerScore.innerText = `Computer: ${computerWins}`
    return "You lose! Scissors beat paper"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "paper"){
    userWins++
    userScore.innerText = `Player: ${userWins}`
    return "You win! Scissors beat paper"
  } 
}



rockButton.addEventListener('click', () => {
  result.innerText = (roundCompare('rock', getComputerChoice()))
  userIcon.innerText = '🪨'
})

paperButton.addEventListener('click', () => {
  result.innerText = (roundCompare('paper', getComputerChoice()))
  userIcon.innerText = '📄'
})

scissorsButton.addEventListener('click', () => {
  result.innerText = (roundCompare('scissors', getComputerChoice()))
  userIcon.innerText = '✂️'
})


function convertToIcon(text){
  if(text === 'rock') {
    return "🪨"
  } else if(text === 'paper'){
    return "📄"
  } else if(text === 'scissors'){
    return "✂️"
  }
}