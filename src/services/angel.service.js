
const SmartAPI = require("smartapi-javascript");
const config = require("../config/angel.config");

let smartApi;
let sessionData;

async function loginAngel() {
  smartApi = new SmartAPI({ api_key: config.apiKey });
  sessionData = await smartApi.generateSession(
    config.clientId,
    config.password,
    config.totp
  );
  return sessionData;
}

module.exports = { loginAngel };
