// import sequelize 
import { Sequelize } from "sequelize";

// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Mountain = db.define('mountains', {
  // Define attributes
  name: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.DECIMAL(9, 6)
  },
  longitude: {
    type: DataTypes.DECIMAL(9, 6)
  },
  altitude: {
    type: DataTypes.INTEGER
  },
  mountain_type_id: {
    type: DataTypes.INTEGER
  },
  country_id: {
    type: DataTypes.INTEGER
  },
  region_id: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamps: false // Disables createdAt and updatedAt
});
 
// Export model Mountain
export default Mountain;