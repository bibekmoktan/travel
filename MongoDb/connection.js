    const mongoose = require('mongoose');

async function connectMongoDb(url) {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

module.exports = {
    connectMongoDb
};
