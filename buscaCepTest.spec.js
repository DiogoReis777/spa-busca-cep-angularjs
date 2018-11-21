/*
Não consegui executar os testes com sucesso devido o karma não reconhecer o módulo "buscaCep"
e o controller"BuscaCepController". Mudei a configuração de alguns arquivos porém não consegui encontrar 
a solução para este problema no karma.
*/
describe("Teste do Controlador (BuscaCepController)", function () {

    var buscaCepTest;
    var tituloTeste = "CONSULTAR ENDEREÇO POR CEP";
    var cepTeste = "05274070";
    var cepFormatado = "05274-070";

    var dadosCepTeste = {
        cep: '05274-070',
        logradouro: 'Rua dos Vitoriosos',
        complemento: '',
        bairro: 'Jardim Rosinha',
        cidade: 'São Paulo',
        estado: 'SP',
        ibge: '3550308',
        numero: '',
        gia: '1004',
    }

    beforeEach(angular.mock.module("buscaCep"));
    
    beforeEach(inject(function (_BuscaCepController_) {
        buscaCepTest = _BuscaCepController_;
    }));
    
    it('Testando se buscaCepController existe', function() {
        expect(buscaCepTest).toBeDefined();
    });

    it('Testando se o titulo da aplicação está correto', function () {

        expect(buscaCepTest.tituloTela).toEqual(tituloTeste);
    });

    it('Testando a funcao mascaraCep', function () {
        
        expect(buscaCepTest.mascaraCep(cepTeste)).toEqual(cepFormatado);
    });

    it('Testando a funcao limparCampos', function () {

        expect(buscaCepTest.limparCampos()).toEqual(dadosCepTeste='');
    });

    it('Testando a funcao pesquisaCep', function () {

        expect(buscaCepTest.pesquisaCep(cepTeste)).toEqual(dadosCepTeste);
    });   

});