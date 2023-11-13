let number = +prompt('Number of rolls: ');
let sum = 0;

for (let i = 0; i < number;i++) {
  const randomInt = Math.floor(Math.random() * 6) + 1;
  sum += randomInt;
}

document.querySelector('#target').innerHTML = `${sum}`;

