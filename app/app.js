// Global Vars
let display = document.querySelector("#output");
let clr = document.querySelector("#button-C");
let firstNum, secondNum, operator;

// Functions

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const equal = () => {};

const operate = (num1, op, num2) => {
  let total;
  if (op === "+") {
    total = add(num1, num2);
  } else if (op === "-") {
    total = substract(num1, num2);
  } else if (op === "x") {
    total = multiply(num1, num2);
  } else if (op === "/") {
    total = divide(num1, num2);
  }
  return total;
};

const populateDisplay = (num) => {
  display.innerHTML += num;
};

const clear = () => {
  display.innerHTML = "";
};

const displayOperator = (op) => {
  if (op === "+") {
    display.innerHTML += "+";
  } else if (op === "-") {
    display.innerHTML += "-";
  } else if (op === "x") {
    display.innerHTML += "x";
  } else if (op === "/") {
    display.innerHTML += "/";
  }
  //display.innerHTML += op;
};

// Watchers

clr.addEventListener("click", clear);
