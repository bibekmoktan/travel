import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Corrected import name

const router = Router();
console.log("Register route hit!");
router.route("/register").post(registerUser) // Using the corrected function name

export default router;
