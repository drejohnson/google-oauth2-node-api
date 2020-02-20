const express = require("express");
const router = express.Router();
const getAccessTokenFromCode = require("../utils/google-access-token");
const getGoogleEvents = require('../utils/google-get-events')


// Get User Profile
router.get("/", async (req, res) => {
  try {
    const code = req.headers["authorization"];
    console.log("code: ", code);
    // console.log("req.accessToken: ", req.accessToken);
    const accessToken = await getAccessTokenFromCode(code);
    const events = await getGoogleEvents(accessToken);
    res.status(200).json({ accessToken , events });
  } catch (error) {
    res.status(500).json({ errorMessage: error });
    console.log(error);
  }
});

module.exports = router;

