const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Netflix Clone API Running");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const watchlistRoutes = require("./routes/watchlistRoutes");
app.use("/api/watchlist", watchlistRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});