const API_KEY = '1640c326bb2c72e892c8b4d17a483cc9';
const BASE_URL = 'https://api.themoviedb.org/3';

const searchInput = document.getElementById('search');
const moviesContainer = document.getElementById('movies');

searchInput.addEventListener('keyup', function(event) {
  const query = event.target.value;
  if (query) {
    searchMovies(query);
  } else {
    moviesContainer.innerHTML = ''; // Clear movies if search is empty
  }
});

async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  displayMovies(data.results);
}

function displayMovies(movies) {
  moviesContainer.innerHTML = '';
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-overview">${movie.overview}</p>
      </div>
    `;

    moviesContainer.appendChild(movieCard);
  });
}