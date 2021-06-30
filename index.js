const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cadastro = require("./models/Cadastro");
//const controllers = require('./controller');
const port = 3000;

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.send('Hello World!'));
//app.use('/users', controllers.UsersController); // essa parte ta errada

//Rotas
//app.get('/cadastros', function(req, res){
//    res.render('cadastro');
//});

app.get('/cada-user', function(req, res){
    res.render('cada-user');
});

app.post('/add-cadastro', function(req, res){
    //res.send("Nome: " + req.body.nome + "<br>Email: " + req.body.email + "<br>Senha: " + req.body.senha + "<br>Endereco: " + req.body.endereco + "<br>Idade: " + req.body.idade + "<br>Telefone: " + req.body.telefone); 
    cadastro.create({
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
        res.send("Erro: Cadastro não efetuado!" + erro);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
