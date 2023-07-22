function getComputerChoice(){
  let rand = Math.floor(Math.random() * 3)
  let choices = ["Rock", "Paper", "Scissors"]
  console.log(choices[rand])
  return choices[rand]
}

function roundCompare(userSelection, computerSelection ){
  let userSelectionSmall = userSelection.toLowerCase()
  let computerSelectionSmall = computerSelection.toLowerCase()
  if(userSelectionSmall === computerSelectionSmall) {
    return "It'a draw!"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "paper"){
    computerWins++
    return "You lose! Paper beats rock"
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "rock"){
    userWins++
    return "You win! Paper beats rock"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "scissors"){
    userWins++
    return "You win! Rock beat scissors"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "rock"){
    computerWins++
    return "You lose! Rock beat scissors"
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "scissors"){
    computerWins++
    return "You lose! Scissors beat paper"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "paper"){
    userWins++
    return "You win! Scissors beat paper"
  } 
}

let userWins = 0
let computerWins = 0

let game = () => {
  for(let i = 0; i < 5; i++){
    console.log(roundCompare(prompt("Rock, Paper, Scissors?"), getComputerChoice()))
  }
  if(userWins > computerWins){
    console.log(`You won ${userWins} to ${computerWins}`)
  } if(userWins < computerWins){
    console.log(`You lost ${userWins} to ${computerWins}`)
  }
}