const { withInfoPlist } = require("@expo/config-plugins");

module.exports = function withGoogleInfoPlist(config) {
  return withInfoPlist(config, (config) => {
    config.modResults.GIDClientID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID; // 👈 your iOS client ID
    return config;
  });
};
