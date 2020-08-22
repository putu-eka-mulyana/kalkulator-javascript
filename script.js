const result = document.getElementById("result");
function dis(val) {
  document.getElementById("result").value += val;
}
const getOperator = document.getElementsByClassName("operator");
Array.from(getOperator).forEach((elm) => {
  elm.addEventListener("click", function (even) {
    result.innerHTML += even.target.value;
  });
});

document.getElementById("percent").addEventListener("click", function () {
  let resultPercent = eval(result.innerHTML) / 100;
  result.innerHTML = resultPercent;
});
document.getElementById("solve").addEventListener("click", function () {
  if (result.innerHTML === "") {
    alert("Please, enter the data first");
    return null;
  }
  result.innerHTML = eval(result.innerHTML);
});

document.getElementById("btn_ac").addEventListener("click", function () {
  result.innerHTML = "";
});
const getValue = document.getElementsByClassName("btn_number");
Array.from(getValue).forEach((elm) => {
  elm.addEventListener("click", function (even) {
    result.innerHTML += even.target.value;
  });
});
