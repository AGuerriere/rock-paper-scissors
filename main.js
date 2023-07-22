function getComputerChoice(){
  let rand = Math.floor(Math.random() * 3)
  let choices = ["Rock", "Paper", "Scissors"]
  return choices[rand]
}

function roundCompare(userSelection, computerSelection ){
  let userSelectionSmall = userSelection.toLowerCase()
  let computerSelectionSmall = computerSelection.toLowerCase()
  if(userSelectionSmall === computerSelectionSmall) {
    return "It'a draw!"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "paper"){
    return "You lose! Paper beats rock "
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "rock"){
    return "You win! Paper beats rock"
  } else if(userSelectionSmall==="rock" && computerSelectionSmall === "scissors"){
    return "You win! Rock beat scissors"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "rock"){
    return "You lose! Rock beat scissors"
  } else if(userSelectionSmall==="paper" && computerSelectionSmall === "scissors"){
    return "You lose! Scissors beat paper"
  } else if(userSelectionSmall==="scissors" && computerSelectionSmall === "paper"){
    return "You win! Scissors beat paper"
  } 
}