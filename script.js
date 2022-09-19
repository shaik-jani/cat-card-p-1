fetch('https://api.thecatapi.com/v1/breeds')
  .then((data) => {
    return data.json();
  })
  .then((catData) => {
    let dataone = '';
    catData.map((cats) => {
      dataone += `<div class="card">
      <h1 class="id">${cats.id}</h1>
      <img src="${cats.image?.url}" alt="" />
      <p>${cats.name}</p>
      <p class="o">${cats.origin}</p>
      <p class="w">${cats.weight.metric}</p>
    </div>`;
    });
    document.getElementById('cards').innerHTML = dataone;
  })
  .catch((error) => {
    console.log(error);
  });
