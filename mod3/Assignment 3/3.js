'use strict';
const names = ['John', 'Paul', 'Jones'];
let htmlContent = '';
for (const name of names) {
  htmlContent += `<li>${name}</li>`;
}
document.querySelector("#target").innerHTML = htmlContent;