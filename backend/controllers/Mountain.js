// Import Mountain Model
import Mountain from "../models/Mountain.js";

// DRY principle: Don't Repeat Yourself
// Let's manage exception in a single place
// Helper function to send error responses
const sendErrorResponse = (res, error, statusCode = 500) => {
    console.error(error); // Keep the logging for server-side visibility
    res.status(statusCode).json({ message: error.message || "An unexpected error occurred" });
};

// Get all mountains
export const getMountains = async (req, res) => {
    try {
        const mountains = await Mountain.findAll();
        res.json(mountains);
    } catch (err) {
        sendErrorResponse(res, err);
    }
};

// Get mountain by id
export const getMountainById = async (req, res) => {
    try {
        // findByPk is more efficient than the findAll with filter
        const mountain = await Mountain.findByPk(req.params.id);
        if (!mountain) {
            return sendErrorResponse(res, { message: "Mountain not found" }, 404);
        }
        res.json(mountain);
    } catch (err) {
        sendErrorResponse(res, err);
    }
};

// Create a new mountain
export const createMountain = async (req, res) => {
    try {
        const mountain = await Mountain.create(req.body);
        res.status(201).json(mountain);
    } catch (err) {
        sendErrorResponse(res, err);
    }
};

// Update mountain by id
export const updateMountain = async (req, res) => {
    try {
        const [updated] = await Mountain.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return sendErrorResponse(res, { message: "Mountain not found" }, 404);
        }
        res.json({ message: "Mountain Updated" });
    } catch (err) {
        sendErrorResponse(res, err);
    }
};

// Delete mountain by id
export const deleteMountain = async (req, res) => {
    try {
        const deleted = await Mountain.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return sendErrorResponse(res, { message: "Mountain not found" }, 404);
        }
        res.json({ message: "Mountain Deleted" });
    } catch (err) {
        sendErrorResponse(res, err);
    }
};
