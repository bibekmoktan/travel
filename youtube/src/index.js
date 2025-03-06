import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import {app} from './app.js'

dotenv.config({ path: "./.env" }); // Ensure the correct .env path

const PORT = process.env.PORT || 3000; // Use correct port

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });

// Alternative Async/Await approach (if needed)
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
//     app.listen(PORT, () => {
//       console.log(`App is listening on port ${PORT}`);
//     });

//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();
