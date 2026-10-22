let homeScore = 0
let guestScore = 0


function addH(inc) {
  homeScore += inc
  document.getElementById("countH").textContent = homeScore
}

function addG(inc) {
  guestScore += inc
  document.getElementById("countG").textContent = guestScore
}