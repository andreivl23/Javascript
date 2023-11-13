let int1 = +prompt('Int 1:');
let int2 = +prompt('Int 2:');
let int3 = +prompt('Int 3:');
console.log(int1+int2+int3)
document.querySelector('#sum').innerHTML = int1+int2+int3
document.querySelector('#product').innerHTML = int1*int2*int3
document.querySelector('#average').innerHTML = (int1+int2+int3)/3
