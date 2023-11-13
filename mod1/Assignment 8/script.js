const startyear = +prompt('Give start year: ');
const endyear = +prompt('Give end year: ');

const number = endyear - startyear;

let yearList = '';

for (let i = 0; i <= number; i++) {
  const year = startyear + i;
  yearList += `<li>${year}</li>`;

  document.querySelector('#target').innerHTML = `<ul>${yearList}</ul>`;
}