angular.module('contatooh').controller('ContatosController', function($scope, Contato){

	$scope.contatos = [];
	$scope.filtro = '';
	$scope.mensagem = {texto: ''};

	function buscaContatos() {
		Contato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(erro) {
				console.log(erro);
				$scope.texto = {
					texto: 'Nâo foi possível obter a lista'
				};
			}
		);	 
	}

	$scope.remove = function(contato) {
		Contato.delete(
			{id: contato._id},
			buscaContatos,
			function(erro) {
				$scope.texto = {
					texto: 'Nâo foi possível remover o contato'
				};
				console.log(erro);
			}
	  	);
	};

	$scope.init = function(){
		buscaContatos();
	}

	$scope.init();

});