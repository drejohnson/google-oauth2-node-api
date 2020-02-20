const axios = require("axios");

const getGoogleProfile = async access_token => {
  try {
    const { data } = await axios({
      url: "https://www.googleapis.com/oauth2/v2/userinfo",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    console.log("profile data: ", data); // { id, email, given_name, family_name }
    return data;
  } catch (error) {
    console.log({ errorMessage: error });
  }
};

module.exports = getGoogleProfile;
