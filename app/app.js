// Global Vars
const display = document.querySelector("#output");
const clr = document.querySelector("#button-clear");
let firstNum, secondNum, operator, secondOperator;

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
  let total = num1 / num2;
  return Math.round(total * 10 ** 2) / 10 ** 2;
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
    if (total === undefined || total === Infinity) {
      return (display.innerHTML = "ERR");
    }
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
