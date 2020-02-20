const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const profileRoute = require("../routes/profile");
const eventsRoute = require("../routes/events");
// const { db } = require('../db');
const getAccessTokenFromCode = require("../utils/google-access-token");
const getGoogleProfile = require("../utils/google-get-profile");

//Require env variables
require("dotenv").config();
const server = express();

// let corsOptions = {
//   origin: [process.env.FRONTEND_URL, process.env.STAGING_FRONTEND_URL, process.env.PRODUCTION_FRONTEND_URL ],
//   allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
// };

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(
//   session({
//     name: 'sid',
//     saveUninitialized: false,
//     resave: false,
//     secret: process.env.SESSION_SECRET,
//     store: new MongoStore({ mongooseConnection: db })
//   })
// );

server.use("/api/profile", profileRoute);
server.use("/api/events", eventsRoute);

server.get("/", async (req, res) => {
  res.send({ api: "Ok", dbenv: process.env.DB_ENV });
});

module.exports = server;
