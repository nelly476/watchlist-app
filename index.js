import Film from "./Film.js";

const content = document.getElementById("content");
let descriptionHtml = "";
let myFilms = [];
let filmsFromLocalStorage = JSON.parse(localStorage.getItem("allFilms"));

document.getElementById("search-btn").addEventListener("click", () => {
  const movieTitle = document.getElementById("search-bar-input").value;

  fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=f6f40030`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "False") {
        content.innerHTML = `
              <div class="explore-section" id="explore-section">

        <p>Unable to find what you're looking for.</p>
        <p>Please try another search</p>
      </div>
              `;
      } else {
        for (let film of data.Search) {
          fetch(`http://www.omdbapi.com/?i=${film.imdbID}&apikey=f6f40030`)
            .then((res) => res.json())
            .then((info) => {
              let film = new Film(info);
              descriptionHtml += film.getFilmDescription();

              content.innerHTML = descriptionHtml;
              let addIcons = document.getElementsByClassName("add-icon");
              for (let icon of addIcons) {
                icon.addEventListener("click", (e) => {
                  icon.classList.remove("fa-circle-plus");
                  icon.classList.add("fa-circle-minus");
                  myFilms.push(e.target.dataset.id);
                  localStorage.setItem("allFilms", JSON.stringify(myFilms));
                });
              }
            });
        }
      }
    });
});

export default filmsFromLocalStorage;
