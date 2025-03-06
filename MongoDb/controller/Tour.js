const Tour = require("../models/Tour"); // Correct model import

// ✅ Get all tours
async function handleGetAllTours(req, res) {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}
// ✅ Create a new tour
async function handleCreateTour(req, res) {
    try {
        const { tour_title, duration, difficulty, price, description, altitude, location, member_size, seasons, itinerary } = req.body;

        // ✅ Validate required fields
        if (!tour_title || !duration || !difficulty || !price || !description || !altitude || !location || !member_size || !seasons || ! itinerary) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // ✅ Trim and sanitize input
        const trimmedTitle = tour_title.trim();

        // ✅ Check if the tour already exists
        const existingTour = await Tour.findOne({ tour_title: trimmedTitle });
        if (existingTour) {
            return res.status(400).json({ msg: "Tour already exists" });
        }

        // ✅ Ensure seasons is an array
        if (!Array.isArray(seasons) || seasons.length === 0) {
            return res.status(400).json({ msg: "Seasons must be a non-empty array" });
        }

        // ✅ Create and save tour
        const tour = new Tour({ 
            tour_title: trimmedTitle, 
            duration, 
            difficulty, 
            price, 
            description, 
            altitude, 
            location, 
            member_size, 
            seasons,
            itinerary
        });
        await tour.save();

        return res.status(201).json({ msg: "Tour created successfully", tour });
    } catch (err) {
        console.error("Error creating tour:", err);
        return res.status(500).json({ error: err.message || "Internal Server Error" });
    }
}

module.exports = handleCreateTour;


// ✅ Get a single tour by ID
async function handleTourGetById(req, res) {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) return res.status(404).json({ msg: "Tour not found" });

        res.json(tour);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

// ✅ Update tour by ID
async function handleTourUpdateById(req, res) {  
    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedTour) return res.status(404).json({ msg: "Tour not found" });

        res.json({ msg: "Tour updated successfully", updatedTour });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

// ✅ Delete tour by ID
async function handleTourDeleteById(req, res) {
    try {
        const deletedTour = await Tour.findByIdAndDelete(req.params.id);

        if (!deletedTour) return res.status(404).json({ msg: "Tour not found" });

        res.json({ msg: "Tour deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}


module.exports = {
    handleGetAllTours,
    handleCreateTour,
    handleTourGetById,
    handleTourUpdateById,
    handleTourDeleteById
};
