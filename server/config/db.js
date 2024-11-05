// config/db.js
const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/ToDoDB`, {

}).on('open', () => {
    console.log("MongoDB Connected");
}).on('error', (err) => {
    console.error("MongoDB Connection error:", err);
});

module.exports = connection;
