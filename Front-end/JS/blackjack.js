let firstCard = 4;
let secondCard = 9;
let sum = firstCard + secondCard;
let messageEl = " "
let isAlive = true
let message = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cards = document.querySelector("#card")

function play() {
  sumEl.textContent = "Sum: " + sum
  cards.textContent = "Cards: " + firstCard + " | " + secondCard
  if (sum < 21) {
    messageEl = "Do you want to draw another card?"
  } else if (sum === 21) {
    messageEl = "Wohoo! You've got blackjack"
  } else {
    messageEl = "You're out of the game!"
  }

  message.textContent = messageEl
  document.getElementById("cards") += (" "+firstCard + " " + secondCard + " ")
  document.getElementById("sum") += (firstCard + secondCard)
}
