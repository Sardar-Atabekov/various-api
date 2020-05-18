var form = document.getElementById("gif-form");
form.addEventListener("submit", getEarthImg);

const KEY = "CPIc9Do2YomW993kwchShkij3VseyX6cJqEJzgNe";

function getEarthImg(e) {
  e.preventDefault();
  const latitude = document.querySelector(".latitude").value;
  const longitude = document.querySelector(".longitude").value;
  let result = document.getElementsByClassName("results")[0];

  fetch(
    `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2020-05-18&dim=0.10&api_key=${KEY}`
    // `https://api.nasa.gov/planetary/earth/assets?lat=${latitude}&lon=${longitude}&date="2000-12-12"&div=0.10&api_key=${KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data && data.url) {
        let img = document.createElement("img");
        img.src = data.url;
        result.appendChild(img);
      } else {
        alert("Изображения не найдена");
      }
    })
    .catch((err) => console.log("test", err));
}
