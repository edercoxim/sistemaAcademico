/**
 * Created by EDER on 18/04/2017.
 */
angular.module("TrabalhoCPW4").controller("listaAlunoController", function ($scope, alunoAPIService, cursoAPIService, $location) {

     $scope.alunoPorPagina = [];
    $scope.alunoPorCurso = [];
    //////////////////////////codigos para paginação///////////////////////////////
    $scope.pg =1;
    $scope.Proximo = function (pg) {
        $scope.pg = pg+1;
        alunoAPIService.listarAlunosPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.alunoPorPagina = dados.data;
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
        alunoAPIService.listarAlunosPaginada($scope.pg).then(function (dados) {
            if(!dados.data.length == 0){
                $scope.alunoPorPagina = dados.data;
            }
        },function (err) {
            alert("Deu erro"+err);
        });
    };
     ///////////////fim codigos paginaçao////////////////////////////////////////////

    var listarAlunosPaginada = function(){
        var sucesso = function(dados){
            $scope.alunoPorPagina = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        alunoAPIService.listarTodosAlunos().then(sucesso,erro);
    };
    //////////////////////////////////////////Listagem
    $scope.listarAlunosPorCurso = function(id){
        if(id){
            var sucesso =function(dados){
                $scope.alunoPorPagina= dados.data;//
                };
            var erro = function(err){
                alert("Erro"+err);
            };
            alunoAPIService.listarAlunosPorCurso(id).then(sucesso,erro);
        }else{
            listarAlunosPaginada();
        }
    };
    ///////////////////
    var listarCursosSelect = function(){

        var sucesso = function(dados){
            $scope.listaDeTdCursos = dados.data;
        };
        var erro = function(err){
            alert("Erro"+err);
        };
        cursoAPIService.listarCursosSelect().then(sucesso,erro);
    };

    $scope.listarAlunosPorCurso(0);
    listarCursosSelect();

});
