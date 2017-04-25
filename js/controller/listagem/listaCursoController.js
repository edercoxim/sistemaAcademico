/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").controller("listaCursoController", function ($scope, cursoAPIService, $location) {
   // $scope.cursosPorPagina = {};

    $scope.cursosPorPagina = [];

    //////////////////////////codigos para paginação///////////////////////////////
    $scope.pg =1;
    $scope.Proximo = function (pg) {
        $scope.pg = pg+1;
        cursoAPIService.listarCursosPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.cursosPorPagina = dados.data;
            }else{
                $scope.pg--;
            }
        },function (err) {
            alert("Deu erro"+err);
        });
    };

    $scope.Anterior = function (pg) {
        $scope.pg = pg-1;
        if($scope.pg == 0){
            $scope.pg = 1;
        }
        cursoAPIService.listarCursosPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.cursosPorPagina = dados.data;
            }
        },function (err) {
            alert("Deu erro"+err);
        });
    };
    ///////////////////////////////////////////
    var listarCursos = function(){

        var sucesso = function(dados){
            $scope.cursosPorPagina = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };
        cursoAPIService.listarCursos().then(sucesso,erro);
    };

    listarCursos();

});