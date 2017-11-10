// middleware.js
const server = require("server");
const { modern } = server.utils;
cors = require("cors");

module.exports = [modern(require("cors")())];
