const express = require ('express')
const port = process.env.port || 3000

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

// Redireciona para o arquivo do curriculo na pasta resume
app.get('/resume', (req, res) => {
    res.render('resume/index')
})

app.listen(port, error => {
    if(error){
        console.log('Servidor não está ativo, ocorreu um problema')
    }else{
        console.log('Servidor ativo na porta '+port)
    }
})