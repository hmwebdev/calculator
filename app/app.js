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

const operate = (num1, op, num2) => {
  let total;
  if (op === "+") {
    total = add(Number(num1), Number(num2));
  } else if (op === "-") {
    total = substract(Number(num1), Number(num2));
  } else if (op === "x") {
    total = multiply(Number(num1), Number(num2));
  } else if (op === "/") {
    total = divide(Number(num1), Number(num2));
  }
  return total;
};

const populateDisplay = (num) => {
  display.innerHTML += num;
};

const clear = () => {
  display.innerHTML = "";
};

const setFirstNum = () => {
  firstNum = display.innerHTML;
};

const setOperator = (op) => {
  setFirstNum();
  operator = op;
  clear();
};

const setSecondNum = () => {
  secondNum = display.innerHTML;
};

const equal = () => {
  setSecondNum();
  console.log([firstNum, secondNum, operator]);
  display.innerHTML = operate(firstNum, operator, secondNum);
};

// Watchers

clr.addEventListener("click", clear);
