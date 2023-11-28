'use strict';
const searchQuery = document.querySelector('#query').value
async function getShow() {

  const query = searchQuery

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const json = await response.json();
    console.log(json); } catch (error) {console.log('Error: ', error)}

}

document.querySelector("#butt").addEventListener('click', function() {
  getShow();

})