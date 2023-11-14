let vastaus;
let list = [];
while (vastaus !== 0) {
  vastaus = +prompt('Give number');
  list.push(vastaus)
}
list.sort((a,b) => a-b);
list.reverse();
console.log(list)