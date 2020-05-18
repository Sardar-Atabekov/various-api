var form = document.getElementById("gif-form");
form.addEventListener("submit", getGiphs);

function getGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;
  let result = document.getElementsByClassName("results")[0];
  fetch(
    `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=20&api_key=3mIxmBZUIIPyb8R69gtxaW8Hsh74dFKV`
  )
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      let dataArray = resp.data;
      dataArray.forEach((giphData) => {
        result.innerHTML += `
          <img src="${giphData.images.fixed_width.url}" />
        `;
      });
    })

    +-++
    .catch((err) => console.log(err));
}
