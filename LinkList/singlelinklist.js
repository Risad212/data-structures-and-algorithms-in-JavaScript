
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SingleLinkList {
    constructor() {
      this.head = null
      this.tell = null
      this.length = 0
    }
    isEmpty() {
      return this.length === 0
    }
    push(value) {
      let newNode = new Node(value)
      if (this.isEmpty()) {
        this.head = newNode
        this.tell = newNode
      } else {
        this.tell.next = newNode
        this.tell = newNode
      }
      this.length++
    }
    pop() {
      if (!this.head) {
        return null
      }
      if (this.length === 1) {
        let removeNode = this.head;
        this.head = null
        this.tell = null
        this.length = 0
        return removeNode
      }
      let currentNode = this.head;
      let lastNode = this.tell
      let newLastNode
      while (currentNode) {
        if (currentNode.next === this.tell) {
          newLastNode = this.tell
          break
        }
        currentNode = currentNode.next
      }
      newLastNode.next = null
      this.tell = newLastNode
      this.length--;
      return lastNode
    }
    shift() {
      if (!this.head) {
        return null
      }
      if (this.length === 1) {
        let removeNode = this.head;
        this.head = null
        this.tell = null
        this.length = 0
        return removeNode
      }
      let currentNode = this.head;
      this.head = currentNode.next;
      this.length--;
      return currentNode
    }
    unshift(value) {
      let newNode = new Node(value)
      if (this.isEmpty()) {
        this.head = newNode
        this.tell = newNode
      } else {
        newNode.next = this.head;
        this.head = newNode
      }
      this.length ++;
    }
    showList(){
      const array = []
      let currentNode = this.head;
  
      while(currentNode){
         array.push(currentNode.value)
         currentNode = currentNode.next
      }
      return array;
    }
  }
  
  const list = new SingleLinkList()
  list.push(5)
  list.push(10)
  list.push(15)
  
  
  
  console.log(list.showList());






