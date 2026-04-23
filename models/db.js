require("dotenv").config({ path: "../.env"});
const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
    dialectModule: mysql2,
    logging: false,
    pool: {max: 5, min: 0, idle: 30000, acquire: 10000}
  }
);

(async () => {
    try{ 
        await sequelize.authenticate()
        console.log("db conectado com sucesso")
    } catch (erro) {
        console.log("erro ao conectar" + erro)
    }
})()


module.exports = { Sequelize, sequelize }

