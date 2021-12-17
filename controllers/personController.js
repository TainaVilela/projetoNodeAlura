const Person = require('../models/personModels')

     const createPerson = new Person({
         Person: 'nome'
     })
    createPerson.save(function (resolver, err){
        try{
            res.send(Person.createPerson(person))
        } catch (err) {
            res.status(400).res.json(err)
        }
    })

module.exports = {
    createPerson
}