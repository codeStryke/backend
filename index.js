const server = require("server");
const middleware = require("./middleware");
const { get, post, put, del } = require("server/router");
const { json } = require("server/reply");

const analyticScriptResponseJSON = require("./analyticScript");
const LOGINJSON = require("./LOGIN");

const analyticScriptResponse = ctx => json(analyticScriptResponseJSON);
const LOGIN = ctx => json(LOGINJSON);

server({ port: 3001 }, middleware, [
  get("/api/analyticScript", analyticScriptResponse),
  get("/api/analyticScript/LOGIN", LOGIN)
]);
