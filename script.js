const result = document.getElementById("result");
const getOperator = document.getElementsByClassName("operator");
Array.from(getOperator).forEach((elm) => {
  elm.addEventListener("click", (even) => {
    result.innerHTML += even.target.value;
  });
});

document.getElementById("percent").addEventListener("click", () => {
  let resultPercent = eval(result.innerHTML) / 100;
  result.innerHTML = resultPercent;
});
document.getElementById("solve").addEventListener("click", () => {
  if (result.innerHTML === "") {
    alert("Please, enter the data first");
    return null;
  }
  result.innerHTML = eval(result.innerHTML);
});

document.getElementById("btn_ac").addEventListener("click", () => {
  result.innerHTML = "";
});
const getValue = document.getElementsByClassName("btn_number");
Array.from(getValue).forEach((elm) => {
  elm.addEventListener("click", (even) => {
    result.innerHTML += even.target.value;
  });
});
