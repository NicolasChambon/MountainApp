// /controllers/MountainController.js

import Mountain from "../models/Mountain.js";
import Country from "../models/Country.js";
import Region from "../models/Region.js";

// Get all mountains
export const getMountains = async (req, res) => {
  try {
    const mountain = await Mountain.findAll({
      include: [Country, Region],
    });
    res.send(mountain);
  } catch (err) {
    console.log(err);
  }
};

// Get mountain by id
export const getMountainById = async (req, res) => {
  try {
    const mountain = await Mountain.findByPk(req.params.id);
    res.send(mountain);
  } catch (err) {
    console.log(err);
  }
};

// Create a new mountain
export const createMountain = async (req, res) => {
  try {
    await Mountain.create(req.body);
    res.json({
      message: "Mountain Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update mountain by id
export const updateMountain = async (req, res) => {
  try {
    await Mountain.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Mountain Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete mountain by id
export const deleteMountain = async (req, res) => {
  try {
    await Mountain.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Mountain Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
