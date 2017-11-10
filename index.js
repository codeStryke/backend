const server = require("server");
const middleware = require("./middleware");
const { get, post, put, del } = require("server/router");
const { json } = require("server/reply");

const analyticScriptResponseJSON = require("./analyticScript");

const analyticScriptResponse = ctx => json(analyticScriptResponseJSON);

server({ port: 3001 }, middleware, [
  get("/api/analyticScript", analyticScriptResponse)
]);
