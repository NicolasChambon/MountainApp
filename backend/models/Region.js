import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Region = db.define('regions', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Region
export default Region;