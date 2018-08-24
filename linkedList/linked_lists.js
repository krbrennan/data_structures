function List(){
  this.length = 0
  this.head = null

  let Node = function(element){
    this.element = element
    this.next = null
  }

  head = function(){
    return head
  }

  size = function(){
    return length
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

const newList = new List()

newList.add('froggie')
newList.add('sweet dee')
newList.add('king of rats')
newList.add('fat mac')

console.log(newList.head)
console.log(newList.size)
