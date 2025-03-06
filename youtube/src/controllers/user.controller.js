import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
    console.log("Request body:", req.body);
    res.status(200).json({
        message: "User registered successfully!",
    });
});
