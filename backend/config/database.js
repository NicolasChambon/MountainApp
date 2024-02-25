// import sequelize
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


// loading of environment variables from .env file
dotenv.config();

// create connection
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});
 
// export connection
export default db;