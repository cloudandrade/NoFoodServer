"use strict";
const app = require("./bin/express");
const variables = require("./bin/configuration/variables");

app.use("/", (req, res) => {
  res.send("server working");
});

app.listen(
  variables.Api.port,
  console.info(`Api rodando na porta ${variables.Api.port}`)
);
