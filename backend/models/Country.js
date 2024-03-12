import Mountain from "../models/Mountain.js";

import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Country = db.define(
  "countries",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// Country.hasMany(Mountain);

// Export model Country
export default Country;
