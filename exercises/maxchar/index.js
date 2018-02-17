// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
let maxChar = ""
let max = 0
for(let x of str){
  obj[x] = obj[x] + 1 || 1
}
for(let i in obj){
  if(obj[i] > max){
    maxChar = i
    max = obj[i]
  }
}
return maxChar
}

module.exports = maxChar;
