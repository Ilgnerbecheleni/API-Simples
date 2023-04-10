'use strict'
const repository = require('../Repositories/userRepositorie')
const moment = require('moment');


exports.get = async (req, res, next) => {
  try {
    var data = await repository.getAll()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: 'falha ao processar requisicao' })
  }
}


exports.getByActivate = async(req, res, next) =>{
  try {
    var data = await repository.getByActive(req.params.active) ;
    res.status(200).send( data);
  } catch (error) {
    res.status(500).send({message:"falha ao processar requisicao"});
  }

}

exports.getByName = async(req, res, next) =>{

  try {
   var data = await repository.getByName(req.params.nome);
   res.status(200).send( data);
  } catch (error) {
   res.status(500).send({message:"falha ao processar requisicao"});
  }
 }

 exports.getByCracha = async(req, res, next) =>{

  try {
   var data = await repository.getByCracha(req.params.cracha);
   res.status(200).send( data);
  } catch (error) {
   res.status(500).send({message:"falha ao processar requisicao"});
  }
 }


exports.post = async (req, res, next) => {
  try {
    const data = req.body
    const response = await repository.create(data)
    res
      .status(201)
      .send({ message: 'Usuário cadastrado com sucesso', response: response })
  } catch (error) {
    res
      .status(400)
      .send({ message: 'Falha ao Cadastrar', message: error.message })
  }
}

exports.put = async (req, res, next) => {
  try {
    let id = req.body.id

    let data = req.body
    let hoje = moment().format('YYYY-MM-DD')
    console.log(hoje)
    data = { ...data, alterado: hoje }
    await repository.update(id, data)
    res.status(201).send({ message: 'Produto alterado com sucesso' })
  } catch (error) {
    res.status(400).send({ message: 'Falha ao alterar', erro: error })
  }
}



exports.delete =  async(req, res, next) => {

  try {
    await  repository.delete(req.body.id);
    res.status(201).send( {message:"Usuario removido com sucesso"});
  } catch (error) {
    res.status(400).send( {message:"Falha ao remover"});
  }

}