function List(){
  this.head = null

  let Node = function(element){
    this.element = element
    this.next = null
  }

  head = function(){
    return head
  }

}

List.prototype.add = function(val) {
  let node = {
    value: val,
    next: null
  }

  if(!this.head){
    this.head = node
  } else {
    current = this.head
    while(current.next){
      current = current.next
    }
    current.next = node
  }
}

List.prototype.delete = function(nodeVal){
  let current = this.head

// if the head is the nodeVal to delete
  if(current.value === nodeVal){
    this.head = current.next
  } else {
    let previous = current

    while(current.next){
      if(current.value === nodeVal){
        previous.next = current.next
        break
      }
      previous = current
      current = current.next
    }
    // if(current.value === nodeVal){
    //   previous.next = null
    // }
  }
}

const newList = new List()

newList.add('froggie')
newList.add('sweet dee')
newList.add('king of rats')
newList.add('fat mac')
console.log(newList)
newList.delete('king of rats')
console.log(newList)
