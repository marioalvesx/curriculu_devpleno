const express = require ('express')
const app = express();
const path = require('path');

const port = process.env.port || 3000
const CurriculoController = require('./controllers/curriculo-controller')
const createError = require('http-errors');

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

// Tratamento para Erro 404
app.use((req, res, next) => {
    next(createError(404));
});

// Handler de erro
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'?err:{};

    res.status(err.status || 500);
    res.render('error');
})