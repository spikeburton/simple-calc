const CALC = document.getElementById("container");
const DISPLAY = document.getElementById("display");

CALC.addEventListener("click", e => {
  if(e.target.className === "num") {
    window.alert("Number!");
  } else if(e.target.className === "op") {
    window.alert("Operator!");
  } else if(e.target.id === "equals") {
    window.alert("Equals!");
  } else if(e.target.id === "clear") {
    window.alert("Clear!");
  } else if(e.target.id === "dec") {
    window.alert("Decimal!");
  }
});