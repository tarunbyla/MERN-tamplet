import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;
const client = new Client({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
};
export { client };
export default connectDB;
