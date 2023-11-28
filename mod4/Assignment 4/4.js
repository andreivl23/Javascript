'use strict';
const target = document.getElementById('results');


async function getShow(query) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const json = await response.json();
    return json;} catch (error) {console.log('Error: ', error);
  }
}


document.querySelector("#butt").addEventListener('click', async function(event) {
  event.preventDefault();
  let json
  const query = await document.querySelector('#query').value;
  console.log('Submiting query which is :', query);
  json = await getShow(query);
  getArticles(json);
});



function getArticles(json) {
  target.innerHTML = '';

  for (let show of json) {
    const article = document.createElement('article');
    const header = document.createElement('h2');
    const url = document.createElement('a');
    const img = document.createElement('img');
    const summary = document.createElement('div')
    header.textContent = `${show.show.name}`;
    url.href = `${show.show.url}`; url.textContent = show.show.url; url.target = '_blank';
    img.src = `${getImage(show)}`; img.alt = `${show.show.name}`;
    summary.innerHTML = show.show.summary;
    article.appendChild(header); article.appendChild(img); article.appendChild(url); article.appendChild(summary)

    target.appendChild(article);
  } }


function getImage(show) {
  const image = show.show.image?.medium;
  return image ? image : 'https://via.placeholder.com/210x295?text=Not%20Found';
}