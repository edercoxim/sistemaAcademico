/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").controller("cadastroDisciplinaController", function ($scope, cursoAPIService, disciplinaAPIService, $location) {

    $scope.listaDeTdCursos = [];

    $scope.salvarDisciplina = function(disciplina){

        disciplinaAPIService.salvarDisciplina(disciplina).then(function(dados){
            alert("Disciplina cadastrada com sucesso");
            $location.url("/listagemDisciplina");
        },function(err){
            alert("Deu tilt");
        });
    }
    ////////////////////////////////////////////
    var listarCursosSelect = function(){
        var sucesso = function(dados){
            $scope.listaDeTdCursos = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        cursoAPIService.listarCursosSelect().then(sucesso,erro);
    };

    listarCursosSelect();

});
