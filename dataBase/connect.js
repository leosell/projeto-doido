import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config({ path: "./dataBase/config.env" });

const connect = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
  },
);

export default connect;