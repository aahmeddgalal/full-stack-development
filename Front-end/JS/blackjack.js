let firstCard = 4;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw another card?")
} else if (sum === 21) {
  console.log("Wohoo! You've got blackjack")
} else {
  console.log("You're out of the game!")
}

