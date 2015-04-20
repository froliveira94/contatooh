//var model = require('../models/contato');

var contatos = [
	{_id:1, nome: 'Contato exemplo 1', email: 'contato1@empresa.com.br' },
	{_id:2, nome: 'Contato exemplo 2', email: 'contato2@empresa.com.br' },
	{_id:3, nome: 'Contato exemplo 3', email: 'contato3@empresa.com.br' }
];

module.exports =  function() {

	var controller = {};

	controller.listaContatos = function(req, res) {
		res.json(contatos);
	};

	controller.obtemContato = function(req, res) {
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ?
			res.json(contato) :
			res.status(404).send('Contato não encontrado');
	};

	return controller;
};