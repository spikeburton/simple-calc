const CALC = document.getElementById("container");
const DISPLAY = document.getElementById("display");
let num1, num2, op = null;

CALC.addEventListener("click", e => {
  if(e.target.className === "num") {
    if(!num1) {
      num1 = e.target.textContent;
      DISPLAY.textContent = num1;
    } else if(num1 && !op) {
      if(num1.length < 10) {
        num1 += e.target.textContent;
        DISPLAY.textContent = num1;
      } else {
        window.alert("Don't make a number too big now!")
      }
    } else if(num1 && op && !num2) {
      num2 = e.target.textContent;
      DISPLAY.textContent = num2;
    } else if(num1 && op && num2) {
      if(num2.length < 10) {
        num2 += e.target.textContent;
        DISPLAY.textContent = num2;
      } else {
        window.alert("Don't make a number too big now!")
      }
    }
  } else if(e.target.className === "op") {
    if(num1 && !op) {
      op = e.target.textContent;
      DISPLAY.textContent = e.target.textContent;
    }
  } else if(e.target.id === "clear") {
    num1 = num2 = op = null;
    DISPLAY.textContent = 0;
  } else if(e.target.id === "dec") {
    window.alert("Decimal!");
  }
});

function calculate() {
  if(!(num1 && num2 && op)) {
    window.alert("Invalid operation!");
    return null;
  }
  
  let result = "";
  
  switch(op) {
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    default:
      window.alert("OOPS! Something went wrong.");
      break;
  }
  
  DISPLAY.textContent = result;
  num1, num2, op = null;
}