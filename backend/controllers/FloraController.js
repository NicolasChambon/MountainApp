// Import Flora Model
import Flora from "../models/Flora.js";

// Get all Floras
export const getFloras = async (req, res) => {
    try {
        const flora = await Flora.findAll();
        res.send(flora);
    } catch (err) {
        console.log(err);
    }
}

// Get Flora by id
export const getFloraById = async (req, res) => {
    try {
        const flora = await Flora.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(flora[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new Flora
export const createFlora = async (req, res) => {
    try {
        await Flora.create(req.body);
        res.json({
            "message": "Flora Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update Flora by id
export const updateFlora = async (req, res) => {
    try {
        await Flora.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Flora Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete Flora by id
export const deleteFlora = async (req, res) => {
    try {
        await Flora.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Flora Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}