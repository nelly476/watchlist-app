class Film {
  constructor(data) {
    Object.assign(this, data);
  }
  getFilmDescription() {
    const { Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot } = this;
    return `
        <div class="film-description-section">
  <img src=${Poster} alt="Film poster" class="film-poster" />
  <div class="film-info-section">

    <div class="film-title-section">

      <h3>${Title}</h3>
      <div class="rating-info">
        <i class="fa-sharp fa-solid fa-star"></i>
        <p>${imdbRating}</p>
      </div>

    </div>

    <div class="film-info">
      <p>${Runtime}</p>
      <p>${Genre}</p>
      <div class="watchlist-add-section">
      <div>
        <i class="fa-solid fa-circle-plus add-icon" data-id=${imdbID}></i>
      </div>
        <p>Watchlist</p>
      </div>
    </div>  
      <div class="plot-section">
      <p class="film-description">${Plot}</p>
  
  </div>
  </div>
  </div>`;
  }
  changeAddIcon() {
    const { Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot } = this;
    return `
        <div class="film-description-section">
  <img src=${Poster} alt="Film poster" class="film-poster" />
  <div class="film-info-section">

    <div class="film-title-section">

      <h3>${Title}</h3>
      <div class="rating-info">
        <i class="fa-sharp fa-solid fa-star"></i>
        <p>${imdbRating}</p>
      </div>

    </div>

    <div class="film-info">
      <p>${Runtime}</p>
      <p>${Genre}</p>
      <div class="watchlist-add-section">
      <div>
        <i class="fa-solid fa-circle-minus add-icon" data-id=${imdbID}></i>
      </div>
        <p>Watchlist</p>
      </div>
    </div>  
      <div class="plot-section">
      <p class="film-description">${Plot}</p>
  
  </div>
  </div>
  </div>`;
  }
}

export default Film;
