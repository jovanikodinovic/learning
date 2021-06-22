class Calculator {

  num_1;
  num_2;

  constructor(n1, n2) {

    this.num_1 = n1;
    this.num_2 = n2;
  }

  sum() {
    return this.num_1 + this.num_2;
  }

  sub() {
    return this.num_1 - this.num_2;
  }

  mul() {
    return this.num_1 * this.num_2;
  }

  div() {
    return this.num_1 / this.num_2;
  }

};

const calc1 = new Calculator(4, 3);
calc1.sum();
calc1.sub();
calc1.mul();
calc1.div();
