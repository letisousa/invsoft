const express = require('express');
const app = express();
const session = require('express-session');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Cadastro = require("./models/Cadastro");
const Coronados = require("./models/Coronados");
const nodemailer = require("nodemailer");
const port = 3000;

const mailSender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'covlocation@gmail.com',
        pass: 'S1s2s3s4'
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

app.engine('handlebars', handlebars({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static("views"));
app.use(express.static("covlocation"));

//Rotas

app.get('/notificar', function(req, res){
    res.render('notificar');
});

app.post('/envia-aviso', function(req, res){
    const listaDeEmails = req.body.destinatarios.split(',');
    listaDeEmails.forEach(dest => {
        const mailBody = {
            from: 'covlocation@gmail.com',
            to: dest,
            subject: 'CovLocation: Estou com covid! #FiqueEmCasa',
            text: `Oi, sou eu, ${req.body.nome}, fui diagnosticado com covid e você teve contato comigo. Se cuide!`
        }

        mailSender.sendMail(mailBody, e => {
            if(e)
                console.log(e);
            else
                res.send('Seus amigos foram avisados!!')
        })
    })
});


//chama a pagina de cadastro
app.get('/cadastro', function(req, res){
    res.render('cadastro');
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
        // alert("Cadastrado com sucesso!");
        res.redirect('/login');
    }).catch(function(erro){
        res.send("Erro: Cadastro não efetuado! " + erro);
    })
});

app.get('/login', function(req, res){
    res.render('login');
});

//realiza login
app.post('/login', async(req, res) => {
    const email = req.body.login;
    const password = req.body.password;

    const user = await Cadastro.findOne({ where: { email: email } });

    if(!user){
        return res.send('Usuário não encontrado.');
    }

    if(req.body.password == user.senha && req.body.login == user.email){
        res.render('indexlogado')
    }else{
        res.send('Não foi possivel realizar login, email ou senha incorretos');
    }
    
});

//lista todos os cadastros
app.get('/mostracadastros', function(req, res){
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