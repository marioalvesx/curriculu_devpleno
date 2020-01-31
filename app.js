const express = require ('express')
const port = process.env.port || 3000

const app = express();

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, error => {
    if(error){
        console.log('Servidor não está ativo, ocorreu um problema')
    }else{
        console.log('Servidor ativo na porta '+port)
    }
})