'use strict';

const express = require('express');


const app = express();

app.get('/',(request , response)=>{
return response.status(200).send({mensagem: 'API Rodando'})
});

app.listen(3000);
console.log("api rodando na porta 3000")