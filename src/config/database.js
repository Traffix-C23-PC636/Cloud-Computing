// config database
import { Sequelize } from "sequelize";

let connection;

async function connectToDatabase() {
  let dbConfig = JSON.parse(process.env["DB_CONFIG"]);

  dbConfig = {
    DB_NAME: dbConfig.DB_NAME,
    DB_USER: dbConfig.DB_USER,
    DB_PASS: dbConfig.DB_PASS,
    DB_HOST: dbConfig.DB_HOST
  };

  connection = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASS,
    {
      host: dbConfig.DB_HOST,
      dialect: "mysql",
    }
  );

  try {
    await connection.authenticate();
    console.log("Koneksi ke database berhasil terhubung");
  } catch (error) {
    console.error("Koneksi ke database gagal:", error.message);
    throw new Error(error.message);
  }
}

export { connection, connectToDatabase };
