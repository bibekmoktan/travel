import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
); // Enable All CORS Requests

app.use(express.json({ limit: "20kb" }));

app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.use(express.static("public"));

app.use(cookieParser());

//routes 
console.log("Register route hit!");
import router from './routes/user.routes.js'
 
//routes declartion
app.use("/api/v1/users", router)

export { app }; // Export the app object
