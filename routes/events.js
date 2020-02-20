const express = require("express");
const router = express.Router();
const getAccessTokenFromCode = require("../utils/google-access-token");
const getGoogleProfile = require("../utils/google-get-profile");

// Get User Profile
router.get("/", async (req, res) => {
  try {
    const code = req.headers["authorization"];
    console.log("code: ", code);
    // console.log("req.accessToken: ", req.accessToken);
    const accessToken = await getAccessTokenFromCode(code);
    // const profile = await getGoogleProfile(accessToken);
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ errorMessage: error });
    console.log(error);
  }
});

module.exports = router;
