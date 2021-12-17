const index = require('./index');

const app = index()

app.listen(3000, (req, res) => console.log('Servidor rodando'))