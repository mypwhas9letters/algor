// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0]
  const arr = [root, "next"]
  while(arr.length > 1){
    const node = arr.shift()
    if(node === 'next'){
      counters.push(0)
      arr.push('next')
    } else {
      arr.push(...node.children)
      counters[counters.length - 1]++
    }
  }
  return counters
}

module.exports = levelWidth;
