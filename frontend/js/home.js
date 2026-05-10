const token = localStorage.getItem("token");

if(!token){
  window.location.href = "login.html";
}
const movies = [
  {
    id: 1,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    id: 2,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg"
  },
  {
    id: 3,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  },
  {
    id: 4,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg"
  }
];
const moviesDiv = document.getElementById("movies");
const loader = document.getElementById("loader");

setTimeout(() => {
  loader.style.display = "none";
  displayMovies(movies);
}, 1000);

function displayMovies(movieArray){

  moviesDiv.innerHTML = "";

  movieArray.forEach(movie => {

    moviesDiv.innerHTML += `
      <div class="card">

        <img src="${movie.image}">

        <h3>${movie.title}</h3>
 <button onclick="addWatchlist('${movie.id}','${movie.title}','${movie.image}')">
          Add Watchlist
        </button>

      </div>
    `;
  });
}

function searchMovies(){

  const value = document.getElementById("search").value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filtered);
}

async function addWatchlist(movieId, title, image) {

  const userId = localStorage.getItem("userId");

  await fetch("https://streamflix-fullstack.onrender.com/api/watchlist/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId,
      movieId,
      title,
      image
    })
  });

  alert("Movie Added Successfully");
}

function logout() {

  localStorage.clear();

  window.location.href = "login.html";
}