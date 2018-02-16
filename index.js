const server = require("server");
const middleware = require("./middleware");
const { get, post, put, del } = require("server/router");
const { json } = require("server/reply");
const got = require("got");

const analyticScriptResponseJSON = require("./analyticScript");
const LOGINJSON = require("./LOGIN");

const analyticScriptResponse = ctx => json(analyticScriptResponseJSON);
const LOGIN = ctx => json(LOGINJSON);

const getBootstrapContext = async ctx => {
  try {
    const response = await got(
      "https://marketplace.appdirect.com/api/session/v1/bootstrap-context"
    );
    return json(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
};

server({ port: 3001 }, middleware, [
  get("/api/analyticScript", analyticScriptResponse),
  get("/api/analyticScript/LOGIN", LOGIN),
  get("/api/session/v1/bootstrap-context", getBootstrapContext)
]);
