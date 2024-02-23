// import sequelize
import { Sequelize } from "sequelize";
  
// create connection
const db = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST, // Host
        dialect: 'mysql',
    }
);

// export connection
export default db;