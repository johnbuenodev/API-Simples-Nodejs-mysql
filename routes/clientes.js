//começar
let express = require('express');

const router = express.Router();
const ClientesDB = require('../models/ClientesDB');
  //router.get('/api',function(req,res){
  router.get('/',function(req,res){
    ClientesDB.getClientes(function(clientes){
    res.json(clientes);
    });
  });
  //notação para aceitar somente numeros nessa situação
  //'clientes/id/:id'
  //router.get('/api/clientes/:id(\\d+)',function(req,res){
  router.get('/:id(\\d+)',function(req,res){
      let id = req.params.id;
      ClientesDB.getClientesByCidade(id,function(clientes){
      res.json(clientes);
      });
   });
  //'clientes/cidade/:cidade'
  //router.get('/api/clientes/:cidade',function(req,res){
  router.get('/:cidade',function(req,res){
     let cidade = req.params.cidade;
     ClientesDB.getClientesByCidade(cidade,function(clientes){
     res.json(clientes);
     });
  });
  //router.post('/api/clientes',function(req,res){
  router.post('/',function(req,res){
     let cliente = req.body;
     ClientesDB.save(cliente,function(cliente){
       res.json(cliente);
       //res.json({msg:"Dados salvo com sucesso!"});
      });
  });
  //router.put('/api/clientes', function(req,res){
  router.put('/', function(req,res){
     let cliente = req.body;
     ClientesDB.save(cliente, function(cliente){
      res.json(cliente);
      //res.json({msg:"Dados atualizado com sucesso!"});
     });
  });
  //(\\+d) cria expressão regular que só aceita numero depois do / na busca
  //'/clientes/id/:id'
  //router.delete('/api/clientes/:id(\\+d)',function(req,res){
  router.delete('/:id(\\+d)',function(req,res){
    let id = req.params.id;
    ClientesDB.deleteById(id,function(affectedRows){
     res.json({msg:"Dados deletados com sucesso!"});
    });
  });
  
module.exports = router;