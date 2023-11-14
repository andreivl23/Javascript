
let list = [];
let vastaus = +prompt('Give number');
let notSame = true;

while (notSame) {
  list.push(vastaus);
  vastaus = +prompt('Give number');
  for (let i = 0; i < list.length; i++) {
    if (vastaus === list[i]) {notSame = false}
  }
}

list.sort((a,b) => a-b);
console.log(list);