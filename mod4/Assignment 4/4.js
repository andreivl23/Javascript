'use strict';
const target = document.getElementById('results')
async function getShow() {

  const searchQuery = document.querySelector('#query').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
    const json = await response.json();
    return json;} catch (error) {console.log('Error: ', error);
  }
}

async function getArticles() {
  target.innerHTML = '';
  const json = await getShow();
  for (let show of json) {
    const article = document.createElement('article');
    const header = document.createElement('h2');
    const url = document.createElement('a');
    const img = document.createElement('img');
    const summary = document.createElement('div')
    header.textContent = `${show.show.name}`;
    url.href = `${show.show.url}`; url.textContent = 'Link to show'; url.target = '_blank';
    img.src = `${getImage(show)}`; img.alt = `${show.show.name}`;
    summary.innerHTML = show.show.summary;
    article.appendChild(header); article.appendChild(img); article.appendChild(url); article.appendChild(summary)

    target.appendChild(article);
  }

}

function getImage(show) {
  const image = show.show.image?.medium;
  return image ? image : 'https://via.placeholder.com/210x295?text=Not%20Found';
}


document.querySelector("#butt").addEventListener('click', async function() {
  getShow();
  getArticles();
});

document.querySelector("#query").addEventListener('keydown', function(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.keyCode === 13) {
    // Prevent the default behavior of the Enter key (form submission)
    event.preventDefault();
    // Trigger the search function
    getArticles();
  }
});

