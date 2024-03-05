// Import Country Model
import Country from "../models/Country.js";

// Get all countries
export const getCountries = async (req, res) => {
    try {
        const country = await Country.findAll();
        res.send(country);
    } catch (err) {
        console.log(err);
    }
}

// Get country by id
export const getCountryById = async (req, res) => {
    try {
        const country = await Country.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(country[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create a new country
export const createCountry = async (req, res) => {
    try {
        await Country.create(req.body);
        res.json({
            "message": "Country Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update country by id
export const updateCountry = async (req, res) => {
    try {
        await Country.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Country Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete country by id
export const deleteCountry = async (req, res) => {
    try {
        await Country.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Country Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}