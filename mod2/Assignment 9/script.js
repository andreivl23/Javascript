function even(list) {
  let evenlist = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {evenlist.push(list[i])}
  }
  return evenlist;
}

const list = [7, 2, 4];
let evenlist = even(list);
console.log(list);
console.log(evenlist);