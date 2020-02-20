const axios = require("axios");

const getGoogleEvents = async access_token => {
  try {
    const { data } = await axios({
      url: "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    console.log("Events data: ", data); // { id, email, given_name, family_name }
    return data;
  } catch (error) {
    console.log({ errorMessage: error });
  }
};

module.exports = getGoogleEvents;