let firstCard = 4;
let secondCard = 9;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let messageEl = " "
let isAlive = true
let message = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.querySelector("#card")

function play() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " 
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
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

function newCard() {
  console.log("new card")
  let card = 6
  cards.push(card)
  sum += card
  play()
}