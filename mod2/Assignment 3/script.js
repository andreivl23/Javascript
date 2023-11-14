let number = 0;
let list = [];
let name = ""
for (let i = 1; i <= 6; i++) {
  name = prompt(`Give dog ${i}. name`)
  list.push(name)
}
list.sort()
list.reverse()

let str = ""
for (let i = 0; i < 6; i++) {
  str += `<li>${list[i]}</li>`
}
document.querySelector("#target").innerHTML = str