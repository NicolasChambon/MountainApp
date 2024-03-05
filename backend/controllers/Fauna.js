// Import Fauna Model
import Fauna from "../models/Fauna.js";

// Get all Faunas
export const getFaunas = async (req, res) => {
    try {
        const fauna = await Fauna.findAll();
        res.send(fauna);
    } catch (err) {
        console.log(err);
    }
}

// Get Fauna by id
export const getFaunaById = async (req, res) => {
    try {
        const fauna = await Fauna.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(fauna[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new Fauna
export const createFauna = async (req, res) => {
    try {
        await Fauna.create(req.body);
        res.json({
            "message": "Fauna Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update Fauna by id
export const updateFauna = async (req, res) => {
    try {
        await Fauna.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Fauna Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete Fauna by id
export const deleteFauna = async (req, res) => {
    try {
        await Fauna.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Fauna Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}