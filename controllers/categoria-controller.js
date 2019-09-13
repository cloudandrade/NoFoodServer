"use strict";

function categoriaController() {}

categoriaController.prototype.post = async (req, res) => {};

categoriaController.prototype.put = async (req, res) => {};

categoriaController.prototype.get = async (req, res) => {
  res.status(200).send("Categoria Listando...");
};

categoriaController.prototype.getById = async (req, res) => {};

categoriaController.prototype.delete = async (req, res) => {};

module.exports = categoriaController;
