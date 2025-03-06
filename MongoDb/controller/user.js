const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

async function handleCreateUser(req, res) {
    try {
        const { fullName, email, phone, password } = req.body;

        if (!fullName || !email || !phone || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const user = new User({ fullName, email, phone, password });
        await user.save();

        return res.status(201).json({ msg: "User created successfully", user });
    } catch (err) {
        res.status(500).json({ error: "user is already exist" });
    }
}

async function handleGetById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ msg: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

async function handleUpdateById(req, res) {  
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) return res.status(404).json({ msg: "User not found" });

        res.json({ msg: "User updated successfully", updatedUser });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

async function handleDeleteById(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) return res.status(404).json({ msg: "User not found" });

        res.json({ msg: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = {
    handleGetAllUsers,
    handleCreateUser,
    handleGetById,
    handleUpdateById,
    handleDeleteById
};
