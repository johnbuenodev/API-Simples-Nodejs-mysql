//começar
var mysql = require('mysql');

class ClienteDB{

  //função para conectar no BD
  static connect(){

    var connection = mysql.createConnection({
     host: 'localhost',
     use:'john',
     password:'johnbuenodev',
     database:'servicos'

    });
    connection.connect();
    return connection;

  }

  static getClientes(callback){
    
    let connection = ClienteDB.connect();

    let sql = "select * from clientes";
    let query = connection.query(sql,function(error, results, fields){

      if(error) throw error;

      callback(results);
    });

    console.log(query.sql);

    connection.end();

  }

  static getClientesByCidade(cidade, callback){
 
    let connection = ClienteDB.connect();

    let sql = "select id, nome, telefone, email, cidade from clientes where cidade = '"+ cidade +"'";
    let query = connection.query(sql, function(error, results, fields){
       if(error) throw error;

       callback(results)

    });
    
    console.log(query.sql);
    connection.end();

  }

  static getClientesById(id, callback){
   
    let connection = ClienteDB.connect();

    let sql = "select * from clientes where id=?";
    let query = connection.query(sql, id, function(){
    
      if(error) throw error;
      if(results.length == 0){
          console.log("Nenhum cliente encontrado");
          return
      }
      //pega resultado na posição 1 que é o 0 para retornar
      let cliente = results[0];
      callback(cliente);
    });
    console.log(query.sql);
    connection.end();

  }

  static save(cliente, callback){

   let connection = ClienteDB.connect();

   let sql = "insert into cliente set ?";
   let query = connection.query(sql, cliente, function(error, results, fields){
    
    if(error) throw error;
    cliente.id = results.insertId;
    callback(cliente);
   });

   console.log(query.sql);
   connection.end();

  }

  static updateCliente(cliente, callback){

    let connection = ClienteDB();
    let sql = "update cliente set ? where id= ? ";
 
    let id = cliente.id;

    let query = connection.query(sql,[cliente, id], function(error, results, fields){
      if (error) throw error;
      callback(cliente);
    });

    console.log(query.sql);
    connection.end();
  
 }

 static deleteById(id, callback){

    let connection = ClienteDB.connect();
    let sql = "delete from cliente where id= ?";

    let query = connection.query(sql, id, function(error, results, fields){

     if(error) throw error;
     callback(cliente);

    });

    console.log(query.sql);
    connection.end();
 }

};

module.exports = ClienteDB;