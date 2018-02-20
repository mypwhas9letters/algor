// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size(){
    let counter = 0
    let node = this.head

    while (node) {
      counter++;
      node = node.next;
      }
    return counter
  }

  getFirst(){
    return this.head
  }

  getLast(){
    if(!this.head){
      return null;
    }
    let last = this.head
    while(last.next){
      last = last.next
    }
    return last
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next
  }

  removeLast(){
    if(!this.head){
      return
    }
    if(!this.head.next){
      this.head = null
    }
    let previousNode = null
    let currentNode = this.head
    while(currentNode){
      if(!currentNode.next){
        previousNode.next = null
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  insertLast(data){
    let insertNew = new Node(data)
    let last = this.getLast()
    if(last){
      last.next = insertNew
    }else{
      this.head = insertNew
    }
  }

  getAt(index){
    let counter = 0
    let node = this.head
    while(counter != index){
      if(!node){
        return null
      }
      node = node.next
      counter ++
    }
    return node
  }

  removeAt(index){
    let counter = 0
    let node = this.head
    let previousNode = null
    if(!this.head){
      return null
    }
    if(index === 0){
      return this.head = this.head.next
    }
    while(node){
      if(counter === index){
        return previousNode.next = node.next
      }
      previousNode = node
      node = node.next
      counter ++
    }
  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data)
      return
    }
    if(index === 0){
      this.head = new Node(data, this.head)
      return
    }
    let previousNode = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previousNode.next)
    previousNode.next = node
  }
}

module.exports = { Node, LinkedList };
