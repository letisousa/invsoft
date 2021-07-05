const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Cadastro = require("./models/Cadastro");
const Coronados = require("./models/Coronados");
const port = 3000;

app.engine('handlebars', handlebars({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Rotas

//chama a pagina de cadastro
app.get('/cada-user', function(req, res){
    res.render('cada-user');
});

//cadastra usuario (essa funcao é chamada na pagina de cadastro (cada-user))
app.post('/add-cadastro', function(req, res){
    Cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        idade: req.body.idade,
        telefone: req.body.telefone,
    }).then(function(){
        //res.redirect("\")//caminho da pagina 
        res.send("Cadastrado com sucesso!");
    }).catch(function(erro){
        res.send("Erro: Cadastro não efetuado! " + erro);
    })
});

//lista todos os cadastros
app.get('/cadastros', function(req, res){
    Cadastro.findAll({order: [['id', 'DESC']]}).then(function(cadastros){
        res.render('cadastros', {cadastros: cadastros});
    });
});

//funcao que deleta um cadastro
app.get("/del-cadastro/:id", function(req, res){
    Cadastro.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.send("Cadastro apagado com sucesso!");
    }).catch(function(erro){
        res.send("Não foi possível apagar cadastro!");
    })
})

//chama a pagina de adicionar endereco do coronado
app.get('/passaendereco', function(req, res){
    res.render('getlatlong');
});

//funcao para salvar latitude e longitude
app.post('/marcamapa', function(req,res){
    Coronados.create({
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    }).then(function(){
        res.send("Salvo com sucesso!");
    }).catch(function(erro){
        res.send("Erro: Não foi possível salvar! " + erro);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
