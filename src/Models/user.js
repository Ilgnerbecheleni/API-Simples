'use strict'
const mongoose = require('mongoose')
const moment = require('moment');
const Schema = mongoose.Schema

//composicao da tabela produto
const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  cracha: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  telefone: {
    type: String,
    required: true
  },
  criacao: {
    type: Date,
    default: () =>  moment().format('YYYY-MM-DD'),
    immutable: true
  },
  alterado: {
    type: Date,
    default: () =>  moment().format('YYYY-MM-DD'),
  },
  acativo: {
    type: Boolean,
    required: true,
    default: true
  }
})

module.exports = mongoose.model('User', schema)
