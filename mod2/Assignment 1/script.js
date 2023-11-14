let array = []
let number
for (let i=1; i <= 5; i++) {
  number = +prompt(`Give ${i}. number`)
  array.push(number)
}
for (i = 5; i >= 0; i--) {console.log(array[i]) }
