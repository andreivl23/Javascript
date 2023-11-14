

function diceroll() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

let result = 0;
let str = "";

do {
  result = diceroll();
  str += `<li>${result}</li>`;
} while (result < 6);

document.querySelector("#target").innerHTML = str


