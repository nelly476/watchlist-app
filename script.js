import Film from "./Film.js";

const content = document.getElementById("content");
let movieIds = JSON.parse(localStorage.getItem("allFilms"));
let descriptionHtml = "";
const addIcons = document.getElementsByClassName("add-icon");

function render() {
  for (let id of movieIds) {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=f6f40030`)
      .then((res) => res.json())
      .then((info) => {
        let film = new Film(info);
        descriptionHtml += film.changeAddIcon();
        content.innerHTML = descriptionHtml;

        // delete a movie from localStorage
        for (let icon of addIcons) {
          icon.addEventListener("click", (e) => {
            let index = movieIds.indexOf(e.target.dataset.id);
            movieIds.splice(index, 1);
            localStorage.setItem("allFilms", JSON.stringify(movieIds));
            descriptionHtml = "";
            check();
          });
        }
      });
  }
}

function check() {
  if (movieIds.length === 0) {
    content.innerHTML = `
          <div class="explore-section" id="explore-section">
      <p class="margin-bottom">Your watchlist is looking a little empty...</p>
      <a id="black" href="./index.html"><i class="fa-solid fa-circle-plus"></i> Let's add some movies!</a>
      </div>
          `;
  } else {
    render();
  }
}

check();
