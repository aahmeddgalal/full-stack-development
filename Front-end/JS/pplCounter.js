let count = 0

function increment () {
  count += 1
  document.getElementById("counter").textContent = count
}

function reset () {
  count = 0
  document.getElementById("counter").textContent = count
}

function save () {
  if (count != 0) {
    document.getElementById("entries").textContent += count + " - "
  }
}
// wtf is happening ya bro
// make it work first then make it perfect