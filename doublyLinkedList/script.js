function newDoubleLList(){
  this.head = null
  this.tail = null

  let Node = function(element){
    this.element = element
    this.next = null
    this.prev = null
  }

  head = function(){
    return head
  }

newDoubleLList.prototype.add = function(value){
  let node = {
    value: value,
    next: null,
    prev: null
  }
    if(!this.head){
      this.head = node
      this.tail = node
    } else{
      node.prev = this.tail
      current = this.head
      previous = this.head
      while(current.next){
        previous = current
        current = current.next
      }
      current.next = node
      current.prev = current
    }

  }
}

let newDLList = new newDoubleLList()

newDLList.add('rick sanchez')
newDLList.add('morty smith')
console.log(newDLList)
