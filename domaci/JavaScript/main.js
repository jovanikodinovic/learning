window.onload = () => {

  const body = document.getElementsByTagName("body")[0];

  body.style.backgroundColor = "Cornsilk";




  const button = document.getElementById("myBtn");

  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });


};


//Calculator

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


