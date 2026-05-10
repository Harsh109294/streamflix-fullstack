async function getWatchlist() {

  const userId = localStorage.getItem("userId");

  const res = await fetch(
    `http://localhost:5000/api/watchlist/${userId}`
  );

  const data = await res.json();

  const div = document.getElementById("watchlist");

  div.innerHTML = "";

  data.forEach(movie => {

    div.innerHTML += `
      <div class="card">

        <img src="${movie.image}">
         <h3>${movie.title}</h3>

        <button onclick="removeMovie('${movie._id}')">
          Remove
        </button>

      </div>
    `;
  });
}

async function removeMovie(id){

  await fetch(`http://localhost:5000/api/watchlist/remove/${id}`,
  {
    method: "DELETE"
  });

  getWatchlist();
}

getWatchlist();