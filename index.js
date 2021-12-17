
const express = require ('express')
const consign = require('consign')

const conexao = require('./infraestrutura/conexao')
const personRoute = require('./routes/personRoute.js')

module.exports = () => {

    const app = express()

    app.use(express.json())

    app.use('/person', personRoute)

    consign()
        .include('controllers')
        .into( app )

    return app
}