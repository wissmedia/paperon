require("dotenv").config();

const config = {
  app: {
    host: process.env.APP_HOST || "localhost",
    port: parseInt(process.env.APP_PORT) || 2121,
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || 27017),
    user: process.env.DB_USERNAME || "admin",
    pass: process.env.DB_PASSWORD || "password",
    data: process.env.DB_DATABASE || "db_test",
    string: process.env.DB_STRING
  },
}

module.exports = config