
function concat(list) {
  let str = ""
  for (let i = 0; i < list.length;i++) {
    str += list[i];
  }
  return str;
}

const list = ["Johny","DeeDee","Joey","Marky"];
let str = concat(list);
document.querySelector("#target").innerHTML = str