import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Region = db.define(
  "regions",
  {
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Region;
