
const items = ["First item","Second item","Third item"];

for (let item of items) {
  const list = document.createElement('li');
  list.textContent = item;
  if (item === "Second item") {list.className = 'my-item'}
  document.querySelector("#target").appendChild(list);
}

