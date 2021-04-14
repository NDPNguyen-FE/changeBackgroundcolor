//variable color
const colors = ["red", "green", "blue", "cyan"];

//query
const colorCode = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
