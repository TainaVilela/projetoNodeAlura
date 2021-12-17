const mongoose = require('mongoose')
const Schema = mongoose.Schema

const createPerson = require('../controllers/personController')

const schema = new mongoose.Schema({

    nome: 'String',
    idade: 'Number',
    profissao: 'String',
    salario: 'Number',
    empregado: 'Boolean'

})

const Person = mongoose.model('Person', schema)

module.exports =
    Person