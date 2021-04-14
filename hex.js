const colors = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
];

const colorCode = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber += colors[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexNumber;
  colorCode.textContent = hexNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
