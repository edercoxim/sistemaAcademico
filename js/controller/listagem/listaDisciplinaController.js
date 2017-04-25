/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").controller("listaDisciplinaController", function ($scope, disciplinaAPIService, cursoAPIService, $location) {
    $scope.disciplinaPorPagina = [];
    $scope.listaDeTdCursos = [];
    //////////////////////////codigos para paginação///////////////////////////////
    $scope.pg =1;
    $scope.Proximo = function (pg) {
        $scope.pg = pg+1;
        disciplinaAPIService.listarDisciplinasPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.disciplinaPorPagina = dados.data;
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
        disciplinaAPIService.listarDisciplinasPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.disciplinaPorPagina = dados.data;
            }
        },function (err) {
            alert("Deu erro"+err);
        });
    };
    //////////////////////////////////////////////////////////
    var listarDisciplinas = function(){
        var sucesso = function(dados){
            $scope.disciplinaPorPagina = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        disciplinaAPIService.listarDisciplinas().then(sucesso,erro);
    };
    //////////////////////////////////////////////////////////
    var listarCursosSelect = function(){
        var sucesso = function(dados){
            $scope.listaDeTdCursos = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        cursoAPIService.listarCursosSelect().then(sucesso,erro);
    };
    //////////////////////////////////////////////////////////
    $scope.listarDisciplinaPorCurso = function(id){
        if(id!=null){
            var sucesso =function(dados){
                $scope.disciplinaPorPagina= dados.data;//
            };
            var erro = function(err){
                alert("Erro Por Curso"+err);
            };
            disciplinaAPIService.listarDisciplinaPorCurso(id).then(sucesso,erro);
        }else{
            listarDisciplinasPaginada();
        }
    };

    $scope.listarDisciplinaPorCurso(0);
    listarCursosSelect();
    listarDisciplinas();



});
