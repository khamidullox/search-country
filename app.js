let url = "https://restcountries.com/v3.1/name/";

let form = document.querySelector("form");
let input = document.querySelector("input");
let img = document.querySelector("img");
let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");
let div = document.querySelector(".card");

let arrUl = Array.from(ul.children);
img.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url + input.value)
    .then((data) => {
      return data.json();
    })
    .then((name) => {
      upstate(name);
    })
    .catch();
  if (input.value == "") {
    img.style.display = "none";
    div.style.height = "100px";
    console.log("sallm");
    arrUl.forEach((li) => {
      li.textContent = "";
    });
    h1.innerHTML = ``;
  }
});
function upstate(arr) {
  let serch = (a) => {
    let sity = a;

    img.style.display = "block";
    img.src = sity.flags.png;

    div.style.height = "700px";

    h1.innerHTML = `<b>Name:</b> ${sity.name.common}`;
    arrUl[0].innerHTML = `<b>TLD:</b> ${sity.tld.join(" ")}`;
    arrUl[1].innerHTML = `<b>Continents:</b> "${sity.continents.join('" "')}"`;
    arrUl[2].innerHTML = `<b>Borders:</b> "${sity.borders.join('" "')}"`;
    arrUl[3].innerHTML = `<b>Capital:</b> ${sity.capital[0]}`;
    arrUl[4].innerHTML = `<b>Area:</b> ${sity.area} km<sup>2</sup>`;
    arrUl[5].innerHTML = `<b>Population:</b> ${sity.population} `;
  };

  if (arr[1]) {
    serch(arr[1]);
  } else if (arr[0]) {
    serch(arr[0]);
  }
  input.value = "";
}
