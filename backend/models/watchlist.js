const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
    userId: String,
    movieId: String,
    title: String,
    image: String
});

module.exports = mongoose.model("Watchlist", watchlistSchema);