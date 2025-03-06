const express = require("express");
const router = express.Router();
const {
    handleGetAllTours,
    handleCreateTour,
    handleTourGetById,
    handleTourUpdateById,
    handleTourDeleteById
} = require("../controller/Tour"); // Import tour controllers

// ✅ Get all tours
router.get("/", handleGetAllTours);

// ✅ Create a new tour
router.post("/", handleCreateTour);

// ✅ Get a single tour by ID
router.get("/:id", handleTourGetById);

// ✅ Update tour by ID
router.patch("/:id", handleTourUpdateById);

// ✅ Delete tour by ID
router.delete("/:id", handleTourDeleteById);

module.exports = router;
