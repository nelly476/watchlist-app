import Film from "./Film.js";

const content = document.getElementById("content");
let movieIds = JSON.parse(localStorage.getItem("allFilms"));
let descriptionHtml = "";

function render() {
  for (let id of movieIds) {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=f6f40030`)
      .then((res) => res.json())
      .then((info) => {
        let film = new Film(info);
        descriptionHtml += film.changeAddIcon();
        content.innerHTML = descriptionHtml;
      });
  }
}

if (movieIds.length === 0) {
  content.innerHTML = `
    <div class="explore-section" id="explore-section">

<p>Unable to find what you're looking for.</p>
<p>Please try another search</p>
</div>
    `;
} else {
  render();
}

// const addIcons = document.getElementsByClassName("add-icon");

// // delete a movie from localStorage
// for (let icon of addIcons) {
//   icon.addEventListener("click", (e) => {
//     let index = movieIds.indexOf(e.target.dataset.id);
//     movieIds.splice(index, 1);
//     console.log(movieIds);

//   });
// }
