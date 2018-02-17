// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // let fibArray = [0,1]
  // while(fibArray.length <= n){
  // fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
  // }
  // return fibArray[n]
  // linear runtime. 

  if(n < 2){
    return n
  }
  return fib(n-1) + fib(n-2)
  //exponential runtime. with every increase the run time increases dramatically.
}

module.exports = fib;
