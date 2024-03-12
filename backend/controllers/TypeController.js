// Import Type Model
import Type from "../models/Type.js";

// Get all types
export const getTypes = async (req, res) => {
    try {
        const type = await Type.findAll();
        res.send(type);
    } catch (err) {
        console.log(err);
    }
}

// Get type by id
export const getTypeById = async (req, res) => {
    try {
        const type = await Type.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(type[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new type
export const createType = async (req, res) => {
    try {
        await Type.create(req.body);
        res.json({
            "message": "Type Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update type by id
export const updateType = async (req, res) => {
    try {
        await Type.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Type Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete type by id
export const deleteType = async (req, res) => {
    try {
        await Type.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Type Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}