const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
});

const Home = mongoose.model("home", homeSchema);
module.exports = Home;