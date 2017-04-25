/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").controller("cadastroCursoController", function ($scope, cursoAPIService, $location) {

    $scope.salvarCurso = function(curso){

        cursoAPIService.salvarCurso(curso).then(function(dados){
            alert("Curso cadastrado com sucesso");
            $location.url("/listagemCurso");
        },function(err){
            alert("Deu tilt");
        });
    }

});