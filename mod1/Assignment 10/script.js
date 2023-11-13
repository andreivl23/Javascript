const dices = +prompt('How many dices?');
const sum = +prompt('What is the sum?');
let match = 0
let total = 0
let dice = 0

for (let i = 0; i <= 10000; i++) {
  total = 0
  for (let a = 1; a <= dices; a++) {
   dice = Math.floor(Math.random() * 6) + 1;
   total += dice;
  }
  if (total === sum) {
     match += 1;
  }
}

const probability = ( match / 100 );
percent = probability.toFixed(2)
document.querySelector("#target").innerHTML = `${percent}%`
