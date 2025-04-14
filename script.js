const API_KEY = "6b4436474119a4111e2b476c7f9ba506";

// DRAMA
async function getDramaMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`
  );
  const data = await res.json();
  const movies = data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];
  const container = document.getElementById("drama-result");
  container.innerHTML = `
    <div class="text-center">
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" class="mx-auto mb-4 rounded-lg shadow-lg">
      <h3 class="text-xl font-bold">${movie.title}</h3>
      <p class="text-xl opacity-80 mt-2 max-w-xl mx-auto">${movie.overview}</p>
    </div>`;
}
getDramaMovies();

document.getElementById("btn-drama").addEventListener("click", () => {
  document.getElementById("drama-result").innerHTML = "";
  getDramaMovies();
});

// MYSTERY
async function getMysteryMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`
  );
  const data = await res.json();
  const movies = data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];
  const container = document.getElementById("mystery-result");
  container.innerHTML = `
    <div class="text-center">
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" class="mx-auto mb-4 rounded-lg shadow-lg">
      <h3 class="text-xl font-bold">${movie.title}</h3>
      <p class="text-xl opacity-80 mt-2 max-w-xl mx-auto">${movie.overview}</p>
    </div>`;
}
getMysteryMovies();

document.getElementById("btn-mystery").addEventListener("click", () => {
  document.getElementById("mystery-result").innerHTML = "";
  getMysteryMovies();
});

// HORROR
async function getHorrorMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
  );
  const data = await res.json();
  const movies = data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];
  const container = document.getElementById("horror-result");
  container.innerHTML = `
    <div class="text-center">
      <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" class="mx-auto mb-4 rounded-lg shadow-lg">
      <h3 class="text-xl font-bold">${movie.title}</h3>
      <p class="text-xl opacity-80 mt-2 max-w-xl mx-auto">${movie.overview}</p>
    </div>`;
}
getHorrorMovies();

document.getElementById("btn-horror").addEventListener("click", () => {
  document.getElementById("horror-result").innerHTML = "";
  getHorrorMovies();
});
