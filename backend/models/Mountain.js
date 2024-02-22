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
  typeId: {
    type: DataTypes.INTEGER
  },
  countryId: {
    type: DataTypes.INTEGER
  },
  regionId: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Mountain
export default Mountain;