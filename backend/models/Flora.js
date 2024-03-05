// import sequelize 
import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Flora = db.define('floras', {
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
 
// Export model Flora
export default Flora;