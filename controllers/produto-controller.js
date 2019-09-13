"use strict";

function produtoController() {}

produtoController.prototype.post = async (req, res) => {};

produtoController.prototype.put = async (req, res) => {};

produtoController.prototype.get = async (req, res) => {
  res.status(200).send("Produto Listando...");
};

produtoController.prototype.getById = async (req, res) => {};

produtoController.prototype.delete = async (req, res) => {};

module.exports = produtoController;
