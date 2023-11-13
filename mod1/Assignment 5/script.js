let year = +prompt("Input year: ");
if ((year % 100) === 0 && (year % 400) === 0) {
  document.querySelector("#target").innerHTML = `Year ${year} is a leap year`;
} else if ((year % 4 === 0) && (year % 100 !== 0)) {
  document.querySelector("#target").innerHTML = `Year ${year} is a leap year`;
} else {
  document.querySelector("#target").innerHTML = `Year ${year} is not a leap year`;
}
