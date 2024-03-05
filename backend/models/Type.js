import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Type = db.define('types', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Type
export default Type;