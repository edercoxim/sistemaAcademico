/**
 * Created by EDER on 18/04/2017.
 */
angular.module("TrabalhoCPW4").controller("cadastroAlunoController", function ($scope, cursoAPIService, alunoAPIService, $location) {

    $scope.listaDeTdCursos = [];

    $scope.salvarAluno = function(aluno){

        alunoAPIService.salvarAluno(aluno).then(function(dados){
            alert("Aluno cadastrado com sucesso");
            $location.url("/listagemAluno");
        },function(err){
            alert("err");
        });
    }
    ////////////////////////////////////////////////
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
