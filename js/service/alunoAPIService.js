/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").factory("alunoAPIService",
    function($http){

        var _listarAlunosPaginada = function (pg) {
            return $http({
                method: "GET",
                url: " http://siscadcpwiv.herokuapp.com/aluno/list/"+pg+"/10",
            });
        };

        var _listarTodosAlunos = function () {
            return $http({
                method: "GET",
                url: " http://siscadcpwiv.herokuapp.com/aluno/list/1/10",
            });
        };

        var _salvarAluno = function(dados){
            return $http({
                method:"POST",
               url: "http://siscadcpwiv.herokuapp.com/aluno/",
                data:dados
            });
        };

        var _listarAlunoPorCurso = function(id){
            return $http({
                method:"GET",
                url:" http://siscadcpwiv.herokuapp.com/aluno/curso/"+id,
                })
        };
        return {
            listarAlunosPaginada: _listarAlunosPaginada,
            salvarAluno: _salvarAluno,
            listarAlunosPorCurso:_listarAlunoPorCurso,
            listarTodosAlunos:_listarTodosAlunos
        }
    });