const mongoose = require ('mongoose')

const DB_USER = 'ApiNode'
const DB_PASSWORD = encodeURIComponent('taina')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bv9es.mongodb.net/ApiNode?retryWrites=true&w=majorityrs`)
    .then(() => {
        console.log('Conectado ao Mongodb')
    })
    .catch((err)=> console.log(err))