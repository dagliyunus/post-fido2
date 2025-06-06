import mysql from "mysql2";
import config from "../config.json"; // Make sure this path is correct

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port: config.DB_PORT, // Optional but safe to add
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const promisePool = pool.promise();