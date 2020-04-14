let express = require('express');

let app = express();

const ClientesDB = require('./ClientesDB');

let bodyparser = require('body-parser');
//configura para ler dados do post por form-urlencoded e application-json
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

//add rotas
//prefixo /api é adicionado aqui pode-se adicionar api/v1/ api/v2 dependendo da versão
//app.use('/api/', require('./routes/clientes'));
app.use('/api/v1/clientes', require('./routes/clientes'));


/*
app.get('/', function (req, res){
   res.send("BACKEND NODEJS BASIC");
});
app.get('/clientes', function(req,res){
  res.send("Lista todos os Clientes.");
});
app.get('/clientes/id/:id', function(req,res){
    //res.send("Lista Clientes por cidade.");
    let id = req.params.id;
    res.send("Cliente com id: " + id);
});
app.get('/clientes/nome/:nome', function(req,res){
    //res.send("Lista Clientes por cidade.");
    let nome = req.params.nome;
    res.send("Cliente com nome: " + nome);
});
app.get('/clientes/cidade/:cidade', function(req,res){
  //res.send("Lista Clientes por cidade.");
    let cidade = req.params.cidade;
    res.send("Lista de Clientes da cidade: " + cidade);
});

*/





let server = app.listen(3000 , function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log("Servidor iniciando em http://%s:%s", host, port);
});


