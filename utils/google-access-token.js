const axios = require("axios");
require("dotenv").config();

const getAccessTokenFromCode = async code => {
  try {
    const { data } = await axios({
      url: "https://oauth2.googleapis.com/token",
      method: "post",
      // headers: {
      //   "content-type": "application/x-www-form-urlencoded"
      // },
      data: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:3000/authenticate/google",
        grant_type: `authorization_code`,
        code: code
      }
    });
    console.log("token info: ", data); // { access_token, expires_in, token_type, refresh_token }
    console.log("data from token", data);
    return data.access_token;
  } catch (error) {
    console.log({ errorMessage: error });
  }
};

module.exports = getAccessTokenFromCode;
