const express = require("express");
const router = express.Router();
const {
    handleGetAllUsers, 
    handleCreateUser,
    handleGetById,
    handleUpdateById,  // ✅ Fixed typo
    handleDeleteById
} = require("../controller/user");

// Get all users
router.get("/", handleGetAllUsers);

// Create a new user
router.post("/", handleCreateUser);

// Get a single user by ID
router.get("/:id", handleGetById);

// Update user by ID
router.patch("/:id", handleUpdateById);  // ✅ Fixed typo

// Delete user by ID
router.delete("/:id", handleDeleteById);

module.exports = router;
