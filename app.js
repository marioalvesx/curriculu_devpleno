const express = require ('express')
const port = process.env.port || 3000

const CurriculoController = require('./controllers/curriculo-controller')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

// Redireciona para o arquivo do curriculo na pasta resume
app.get('/resume', (req, res) => {
    const curriculoData = CurriculoController.getData();
    res.render('resume/index.ejs', curriculoData)
})

app.listen(port, error => {
    if(error){
        console.log('Servidor não está ativo, ocorreu um problema')
    }else{
        console.log('Servidor ativo na porta '+port)
    }
})