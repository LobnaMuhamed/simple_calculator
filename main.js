var calculation = document.getElementById("calculationText");
var result = document.getElementById("resultText");

function insert(num) {
  calculation.textContent += num;
}

document.getElementById("equal").addEventListener("click", function () {
  var exp = calculation.textContent;
  result.textContent = eval(exp);
  calculation.textContent = result.textContent;
});

document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = 0;
});

document.getElementById("back").addEventListener("click", function () {
  exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length - 1);
});
