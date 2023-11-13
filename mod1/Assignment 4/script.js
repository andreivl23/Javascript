function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

let name = prompt('Give name: ');
let number = getRandomInt(1,5);
if (number === 1) {
  document.querySelector('#target').innerHTML = `${name}, you are Gryffindor.`;
} else if (number === 2) {
  document.querySelector('#target').innerHTML = `${name}, you are Slytherin.`;
} else if (number === 3) {
  document.querySelector('#target').innerHTML = `${name}, you are Hufflepuff.`;
} else {
  document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw.`;
}


