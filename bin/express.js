const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const variables = require("./configuration/variables");

//routers
const categoriaRouter = require("../routes/categoria-router");
const produtoRouter = require("../routes/produto-router");
//utilizando a api/server do express
const app = express();

//configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configurando as rotas
app.use("/api/categoria", categoriaRouter);
app.use("/api/produto", produtoRouter);

//configurando conexão com banco de dados
mongoose
  .connect(variables.Database.connection)
  .then(() => {
    console.info("banco de dados conectado");
  })
  .catch(erro => {
    console.log(
      "houve um problema ao se conectar ao banco de dados, erro: " + erro
    );
  });

module.exports = app;
