
module.exports =  function(app) {

	var Contato = app.models.contato;

	var controller = {};

	controller.listaContatos = function(req, res) {
		//var promisse = Contato.find().exec();
		Contato.find().populate('emergencia').exec()
		.then(
			function(contatos) {
				res.json(contatos);
			},
			function(error) {
				console.error(erro);
				res.status(500).json(erro);
			}
		);
	};

	controller.obtemContato = function(req, res) {
		var _id = req.params.id;
		Contato.findById(_id).exec()
		.then(
			function(contato) {
				if(!contato) throw new Error('Contato nao encontrado');
				res.json(contato);
			},
			function(erro) {
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	controller.removeContato = function(req, res) {
		var _id = req.params.id;
		Contato.remove({'_id': _id}).exec()
		.then(
			function() {
				res.status(204).end();
			},
			function(erro) {
				return console.error(erro);
			}
		);
	};

	controller.salvaContato = function(req, res) {
		var _id = req.body._id;

		//req.body.emergencia = req.body.emergencia || null;

		if(_id) {
			Contato.findByIdAndUpdate(_id, req.body).exec()
			.then(
				function(contato){
					res.json(contato);
				},	
				function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		} else {
			var _id = req.body._id;
			if(_id) {
				Contato.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(contato){
						res.json(contato);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
			} else {
				Contato.create(req.body)
				.then(
					function(contato){
						res.status(201).json(contato);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
			}
		}
	};		

	return controller;
};