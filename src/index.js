class SmartCalculator {
  constructor(initialValue) {
    this.stack = [];
    this.stack.push(initialValue);
  }

  add(number) {
    this.stack.push("+");
    this.stack.push(number);
    return this;
  }

  subtract(number) {
    this.stack.push("-");
    this.stack.push(number);
    return this;
  }

  multiply(number) {
    this.stack.push("*");
    this.stack.push(number);
    return this;
  }

  devide(number) {
    this.stack.push("/");
    this.stack.push(number);
    return this;
  }

  pow(number) {
    this.stack.push("^");
    this.stack.push(number);
    return this;
  }

  valueOf(stack) {
    for(var i = this.stack.length; i > 0; i--)
      if (this.stack[i] === "^") {
        this.stack.splice(i - 1, 3, Math.pow(this.stack[i - 1], this.stack[i + 1]));
        i++;
      }

    
    for(var i = 0; i < this.stack.length; i++)
      if (this.stack[i] === "/") {
        this.stack.splice(i - 1, 3, this.stack[i - 1] / this.stack[i + 1]);
        i--;
      }

    for(var i = 0; i < this.stack.length; i++)
      if (this.stack[i] === "*") {
        this.stack.splice(i - 1, 3, this.stack[i - 1] * this.stack[i + 1]);
        i--;
      }

    for(var i = 0; i < this.stack.length; i++)
      if (this.stack[i] === "-") {
        this.stack.splice(i - 1, 3, this.stack[i - 1] - this.stack[i + 1]);
        i--;
      }

    for(var i = 0; i < this.stack.length; i++)
      if (this.stack[i] === "+") {
        this.stack.splice(i - 1, 3, this.stack[i - 1] + this.stack[i + 1])
        i--;
      }

    return this.stack.join("");
  }
}

module.exports = SmartCalculator;