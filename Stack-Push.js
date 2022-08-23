class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }
 
 class Stack {
     constructor(value) {
         const newNode = new Node(value)
         this.top = newNode
         this.length = 1
     }
 
     push(value) {
         const newNode = new Node(value)
         if(this.length === 0) {
             this.top = newNode
         } else {
             newNode.next = this.top
             this.top = newNode
         }
         this.length++
         return this 
     }
 }
 
 let myStack = new Stack(7)
 myStack.push(23)
 myStack.push(3)
 myStack.push(11)