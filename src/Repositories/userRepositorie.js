'use strict'
const mongoose = require('mongoose')
const usuario = mongoose.model('User')

exports.getAll = async () => {
  const res = await usuario.find() // pega so os ativos e retorna o que pedi title price e slug
  return res
}

exports.getByActive = async active => {
  const res = await usuario.find({ active: active }) // pega so os ativos e retorna o que pedi title price e slug
  return res
}

exports.getByName = async nome => {
  const regex = new RegExp(nome, 'i')
  const res = await usuario.find({
    $or: [{ nome: regex }]
  }) // pega so os usuarios pelo que contem a palavra chave enviada em nome
  return res
}

exports.getByCracha = async cracha => {
  const res = usuario.find({ cracha: cracha }) // pega so os ativos e retorna o que pedi title price e slug
  return res
}

exports.create = async data => {
  var user = new usuario(data)

  await user.save()
  return user
}

exports.update = async (id, data) => {
  await usuario.findByIdAndUpdate(id, {
    $set: {
      nome: data.nome,
      cracha: data.cracha,
      telefone: data.telefone,
      alterado: data.alterado,
      ativo: data.ativo
    }
  })
}

exports.delete = async id => {
  await usuario.findByIdAndRemove(id)
}
