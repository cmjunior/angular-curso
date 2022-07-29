const express = require('express');
const Home = require('../models/home');
const mongoose = require('mongoose');

const homeRouter = express.Router();

homeRouter.get('/api/home', async (req, res) => {
    const home = await Home.findOne({id: mongoose.Types.ObjectId('62d5abc8d86a9adae412cfcd')});

    res.status(200).json({home});
});

module.exports = homeRouter;