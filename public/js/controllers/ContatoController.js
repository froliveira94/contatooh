angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, $resource) {

	var Contato = $resource('/contatos/:id');

	if($routeParams.contatoId)
	{
		Contato.get(
			{id: $routeParams.contatoId},
			function(contato){
				$scope.contato = contato;
			},
			function(error) {
				$scope.mensagem = {
					texto: 'Não foi possível obter o contato'
				};
				console.log(erro);
			}
		);
	}
	else {
		$scope.contato = new Contato();
	}

	$scope.salva = function(){
		$scope.contato.$save()
			.then(function() {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				//Limpa formulário
				$scope.contato = new Contato();
			})
			.catch(function(error) {
				$scope.mensagem = {texto: 'Não foi possível salvar'};
			});
	};

	

});