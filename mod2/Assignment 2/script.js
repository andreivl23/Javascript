const number = +prompt('Number of participants? ');
let list = [];
for (let i = 0; i < number; i++) {
  let name = prompt(`Give name of participant ${i+1}:`);
  list[i] = name;
}
let str = "";
list.sort();
for (let i = 0; i < number; i++) {
  str += `<li> ${list[i]} </li>`;
}
document.querySelector('#target').innerHTML = `${str}`;


