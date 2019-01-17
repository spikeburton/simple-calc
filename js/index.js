/**
 * @name Simple-Calc
 * @description A simple little calculator app
 * @author Spike Burton
 */

// Declare some global constants to easily access the container element and the readout display
const CALC = document.getElementById("container");
const DISPLAY = document.getElementById("display");

// Declare and initialize some global variables representing the two numbers
// to be operated upon as well as a string representing the operator itself: / * - +
let num1 = null, num2 = null, op = null;

// listen for which button is clicked in the interface
CALC.addEventListener("click", e => {
  // what to do if a numeric key is pressed?
  if(e.target.className === "num") {
    // if no numbers have yet been entered
    if(!num1) {
        num1 = e.target.textContent;
        DISPLAY.textContent = num1;  
    } else if(num1 && !op) {
    // append digits to the end of the first number, not exceeding 10 digits
      if(num1.length < 10) {
        /* eliminate the possibility of any leading 0's
         * note that this handles the case for when the input is 0
         * OR any other number
         */
        if(num1 === "0") {
          num1 = e.target.textContent;
        } else {
          num1 += e.target.textContent;
        }
        DISPLAY.textContent = num1;
      } else {
        window.alert("Don't make a number too big now!")
      }
    // After a first number and operator have been entered, check for the second number
    } else if(num1 && op && !num2) {
        num2 = e.target.textContent;
        DISPLAY.textContent = num2;
    } else if(num1 && op && num2) {
      if(num2.length < 10) {
        if(num2 === "0") {
          num2 = e.target.textContent;
        } else {
          num2 += e.target.textContent;
        }
        DISPLAY.textContent = num2;
      } else {
        window.alert("Don't make a number too big now!")
      }
    }
  // what to do if an operator key is pressed?
  } else if(e.target.className === "op") {
    if(num1 && !op) {
      op = e.target.textContent;
      DISPLAY.textContent = e.target.textContent;
    }
  // what to do if the AC button is pressed?
  } else if(e.target.id === "clear") {
    clear();
    DISPLAY.textContent = "~";
  // what to do if the decimal . is pressed?
  // make sure there can only be one decimal place in a number and other conditions met
  } else if(e.target.id === "dec") {
    if(!num1) {
      num1 = "0."
      DISPLAY.textContent = num1;
    } else if(num1 && !op) {
      if(!num1.includes(".")) {
        num1 += ".";
        DISPLAY.textContent = num1;
      }
    } else if(num1 && op && !num2) {
      num2 = "0.";
      DISPLAY.textContent = num2;
    } else if(num1 && op && num2) {
      if(!num2.includes(".")) {
        num2 += ".";
        DISPLAY.textContent = num2;
      }
    }
  }
});

function clear() {
  num1 = num2 = op = null;
}

// Definte here the function that is called when the "=" button is pressed
function calculate() {
  // if the requirements to calculate are not met - try again
  if(!(num1 && num2 && op)) {
    return null;
  }
  
  let result = "";
  
  // calculate the result based upon which operator is chosen
  switch(op) {
    case "/":
      // do not allow 'divide by 0' errors
      if(num2 === "0") {
        DISPLAY.textContent = "error: div by 0";
        clear();
        return null;
      }
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
      result = "error";
      break;
  }
  
  // finally, display the result in the readout and reset everything to initial state
  DISPLAY.textContent = result;
  num1 = "" + result; // convert back to a string
  num2 = op = null;
}