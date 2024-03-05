import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Country = db.define('countries', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Country
export default Country;