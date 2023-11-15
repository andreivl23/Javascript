function diceroll(sides) {
  const roll = Math.floor(Math.random() * sides) + 1;
  return roll;
}

let result = 0;
let str = "";
let sides = +prompt("How many sides?")
do {
  result = diceroll(sides);
  str += `<li>${result}</li>`;
} while (result < sides);

document.querySelector("#target").innerHTML = str


