const express = require("express");
const Watchlist = require("../models/Watchlist");

const router = express.Router();

router.post("/add", async (req, res) => {

    const item = new Watchlist(req.body);

    await item.save();

    res.json({
        message: "Added to Watchlist"
    });
});

router.get("/:userId", async (req, res) => {

    const data = await Watchlist.find({
        userId: req.params.userId
    });

    res.json(data);
});

router.delete("/remove/:id", async (req, res) => {

    await Watchlist.findByIdAndDelete(req.params.id);

    res.json({
        message: "Removed Successfully"
    });
});

module.exports = router;