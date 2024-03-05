// Import Region Model
import Region from "../models/Region.js";

// Get all regions
export const getRegions = async (req, res) => {
    try {
        const region = await Region.findAll();
        res.send(region);
    } catch (err) {
        console.log(err);
    }
}

// Get region by id
export const getRegionById = async (req, res) => {
    try {
        const region = await Region.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(region[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new region
export const createRegion = async (req, res) => {
    try {
        await Region.create(req.body);
        res.json({
            "message": "Region Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update region by id
export const updateRegion = async (req, res) => {
    try {
        await Region.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Region Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete region by id
export const deleteRegion = async (req, res) => {
    try {
        await Region.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Region Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}