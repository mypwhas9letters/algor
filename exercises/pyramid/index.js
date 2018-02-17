// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let maxLength = Math.floor((n + n-1) /2)

let counter = 1
let poundCounter = 1
while(counter <= n){
  console.log(`${" ".repeat(maxLength)}${"#".repeat(poundCounter)}${" ".repeat(maxLength)}`)
  counter++
  poundCounter += 2
  maxLength--
}
}

module.exports = pyramid;
