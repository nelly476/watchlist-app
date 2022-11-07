const content = document.getElementById("content");
let descriptionHtml = "";

document.getElementById("search-btn").addEventListener("click", () => {
  const movieTitle = document.getElementById("search-bar-input").value;

  fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=f6f40030`)
    .then((res) => res.json())
    .then((data) => {
      for (let film of data.Search) {
        fetch(`http://www.omdbapi.com/?i=${film.imdbID}&apikey=f6f40030`)
          .then((res) => res.json())
          .then((info) => {
            console.log(info);
            descriptionHtml += `
                    <div class="film-description-section">
              <img src=${info.Poster} alt="Film poster" class="film-poster" />
              <div class="film-info-section">
  
                <div class="film-title-section">
  
                  <h3>${info.Title}</h3>
                  <div class="rating-info">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <p>${info.imdbRating}</p>
                  </div>
  
                </div>
  
                <div class="film-info">
                  <p>${info.Runtime}</p>
                  <p>${info.Genre}</p>
                  <div class="watchlist-add-section">
                  <div>
                    <i class="fa-solid fa-circle-plus" id="add-icon"></i>
                  </div>
                    <p>Watchlist</p>
                  </div>
                </div>  
                  <div class="plot-section">
                  <p class="film-description">${info.Plot}</p>
              
              </div>
              </div>
              </div>`;
            content.innerHTML = descriptionHtml;
            const addIcon = document.getElementById("add-icon");

            addIcon.addEventListener("click", () => {
              addIcon.classList.toggle("fa-circle-plus");
              addIcon.classList.toggle("fa-circle-minus");
            });
          });
      }
    });
});
