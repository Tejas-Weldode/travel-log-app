const express = require("express");
const TravelLog = require("../models/TravelLog");
const router = express.Router();

// Create a new travel log
router.post("/", async (req, res) => {
    try {
        const newLog = new TravelLog(req.body);
        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        res.status(400).json({ message: "Error creating log", error });
    }
});

// Get all travel logs
router.get("/", async (req, res) => {
    try {
        const logs = await TravelLog.find();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching logs", error });
    }
});

// Get a single travel log by ID
router.get("/:id", async (req, res) => {
    try {
        const log = await TravelLog.findById(req.params.id);
        if (!log) {
            return res.status(404).json({ message: "Log not found" });
        }
        res.json(log);
    } catch (error) {
        res.status(500).json({ message: "Error fetching log", error });
    }
});

// Update a travel log
router.put("/:id", async (req, res) => {
    try {
        const updatedLog = await TravelLog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedLog) {
            return res.status(404).json({ message: "Log not found" });
        }
        res.json(updatedLog);
    } catch (error) {
        res.status(400).json({ message: "Error updating log", error });
    }
});

// Delete a travel log
router.delete("/:id", async (req, res) => {
    try {
        const deletedLog = await TravelLog.findByIdAndDelete(req.params.id);
        if (!deletedLog) {
            return res.status(404).json({ message: "Log not found" });
        }
        res.json({ message: "Log deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting log", error });
    }
});

module.exports = router;
