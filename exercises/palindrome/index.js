// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return (str.split("").reverse().join("")) === str
  // let array = str.split("")
  // let count = array.length/2
  // for(let i = 0; i < count; i++){
  //    if(array[i] !== array[array.length - 1 - i]){
  //     return false
  //    }
  // }
  // return true
}

module.exports = palindrome;
