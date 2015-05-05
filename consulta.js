
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente
var _idProcurado = new ObjectID('5547a9af8b2d9d7ad9f5082d');

MongoClient.connect('mongodb://127.0.0.1:27017/contathoo',
	function(erro, db) {
		if(erro) throw err;
			db.collection('contatos').findOne({_id : _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);
	}
);