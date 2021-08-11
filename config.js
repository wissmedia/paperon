require("dotenv").config();

const config = {
  app: {
    host: process.env.APP_HOST || "localhost",
    port: parseInt(process.env.APP_PORT) || 2121,
  },
  db: {},
}

module.exports = config