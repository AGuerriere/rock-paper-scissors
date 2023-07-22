function getComputerChoice(){
  let rand = Math.floor(Math.random() * 3)
  let choices = ["Rock", "Paper", "Scissors"]
  return choices[rand]
}