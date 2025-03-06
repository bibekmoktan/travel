const express = require("express");
const { connectMongoDb } = require("./connection");
const userRouter = require("./Routes/user");
const tourRouter = require("./Routes/tour"); // Import tour routes

const app = express();
app.use(express.json());

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/travelDB");

// Use Routes
app.use("/users", userRouter);
app.use("/tours", tourRouter); // ✅ Add tour routes

// Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
