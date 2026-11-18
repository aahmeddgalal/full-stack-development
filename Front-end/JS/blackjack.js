let firstCard = 4;
let secondCard = 9;

let sum = firstCard + secondCard;
let message = " "


if (sum < 21) {
  message = "Do you want to draw another card?"
} else if (sum === 21) {
  message = "Wohoo! You've got blackjack"
} else {
  message = "You're out of the game!"
}
