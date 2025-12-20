const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { withNativeWind } = require('nativewind/metro');

module.exports = withNativeWind(config, { input: './app/globals.css' });