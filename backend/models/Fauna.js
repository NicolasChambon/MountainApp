// import sequelize 
import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Fauna = db.define('faunas', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Fauna
export default Fauna;