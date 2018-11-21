(function () {
	
	angular.module("buscaCep").controller("BuscaCepController", BuscaCepController);



	function BuscaCepController($scope, $http) {
		$scope.TituloTela = "CONSULTAR ENDEREÇO POR CEP";

		$scope.pesquisaCep = function (numeroCep) {

			numeroCep = numeroCep.replace(/\D/g, '');

			if (numeroCep !== "") {

				var validaCep = /^[0-9]{8}$/;

				if (validaCep.test(numeroCep)) {

					$http.get("https://viacep.com.br/ws/" + numeroCep + "/json")
						.then(function (response) {
							console.log(response);

							if (response.data.erro === true) {
								alert("Cep inválido!");
							}


							$scope.dadosCep = {
								cep: response.data.cep,
								logradouro: response.data.logradouro,
								complemento: response.data.complemento,
								bairro: response.data.bairro,
								cidade: response.data.localidade,
								estado: response.data.uf,
								ibge: response.data.ibge,
								numero: response.data.unidade,
								gia: response.data.gia,
							}


						});
				}

			}

		};


		$scope.mascaraCep = function (valorCampo) {

			valorCampo = valorCampo.replace(/\D/g, '');
			valorCampo = valorCampo.replace(/(\d{5})(\d)/, "$1-$2");
			this.ngCep = valorCampo;
		}

		$scope.limparCampos = function () {

			this.dadosCep = '';
			$scope.ngCep = '';
		}



	}; 
})();