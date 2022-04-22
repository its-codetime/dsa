// FILO
// LIFO

class Stack {
  constructor(size = 3, initialStack = []) {
    this.size = size;
    if (initialStack === "undefined") {
      this.stackItems = [];
      this.count = 0;
      return;
    }
    this.stackItems = [...initialStack];
    this.count = initialStack.length;
  }

  push(element) {
    if (this.count === this.size) {
      console.log("stack full");
    }
    this.stackItems[this.count] = element;
    this.count++;
    console.log(`element ${element} is added`);
  }

  pop() {
    if (this.count === 0) {
      console.log("stack is empty");
      return;
    }
    const elemPopped = this.stackItems[this.count - 1];
    const newStack = [];
    console.log(this.count);
    for (let index in this.stackItems) {
      console.log(index);
      if (parseInt(index) !== this.count - 1) {
        console.log(`pop if ${this.stackItems[index]}`);
        newStack[index] = this.stackItems[index];
      }
    }
    this.stackItems = [...newStack];
    this.count--;
    console.log(`element ${elemPopped} is popped`);
  }

  peek() {
    console.log(`the top is ${this.stackItems[this.count - 1]}`);
  }

  printStack() {
    this.count === 0
      ? console.log("stack is empty")
      : console.log(this.stackItems);
  }
}

const stack1 = new Stack(5);
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.printStack();
stack1.pop();
stack1.peek();
stack1.printStack();
