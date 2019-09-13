"use strict";
require("../models/Categoria-model");
const mongoose = require("mongoose");
const categoria = mongoose.model("Categoria");

function categoriaController() {}

categoriaController.prototype.post = async (req, res) => {
  let modelo = new categoria(req.body);

  let resultado = await modelo.save();
  return res.status(200).send(resultado);
};

categoriaController.prototype.put = async (req, res) => {
  await categoria.findByIdAndUpdate(req.params.id, { $set: req.body });
  let categoriaEncontrada = await categoria.findById(req.params.id);
  return res.status(202).send(categoriaEncontrada);
};

categoriaController.prototype.get = async (req, res) => {
  try {
    let ret = await categoria.find().then(lista => {
      return res.status(200).json(lista);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("houve um erro ao listar");
  }
};

categoriaController.prototype.getById = async (req, res) => {
  let categoriaEncontrada = await categoria.findById(req.params.id);
  return res.status(200).send(categoriaEncontrada);
};

categoriaController.prototype.delete = async (req, res) => {
  let deletado = await categoria.findByIdAndRemove(req.params.id);
  return res.status(204).send(deletado);
};

module.exports = categoriaController;
