// /models/Mountain.js

import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Mountain = db.define(
  "mountains",
  {
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
    },
    altitude: {
      type: DataTypes.INTEGER,
    },
    typeId: {
      type: DataTypes.INTEGER,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
    regionId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

import("./Country.js").then((module) => {
  const Country = module.default;
  Mountain.belongsTo(Country);
});

import("./Region.js").then((module) => {
  const Region = module.default;
  Mountain.belongsTo(Region);
});

export default Mountain;
