"use strict";
const number = +prompt('Give number: ');

const list = [2,3,5,7];
let prime = true
let skip = false

for (let i = 0; i <=4; i++) {
  if (number === list[i]) { skip = true }
}

if (skip === false) {
  for (let i = 0; i <= 4; i++) {
    const dividor = list[i];
    if (number % dividor === 0) {
      prime = false
    }
  }
}
if (prime) {
  document.querySelector('#target').innerHTML = `${number} is prime`
} else {
  document.querySelector('#target').innerHTML = `${number} is not prime`
}

