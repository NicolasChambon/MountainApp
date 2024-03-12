import Mountain from "../models/Mountain.js";

import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Country = db.define(
  "countries",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Country;
