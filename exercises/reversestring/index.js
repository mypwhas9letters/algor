// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split("").reverse().join("")


  // let reversed = ""
  // for(let x of str){
  //   reversed = x + reversed
  // }
  // return reversed

  return str.split("").reduce((a,b) => b+a)

}

module.exports = reverse;
