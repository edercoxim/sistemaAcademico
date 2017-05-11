/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").factory("disciplinaAPIService",
    function($http){
        var _salvarDisciplina = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/disciplina/",
                data:dados
            });
        };
    ////////////////////////////////////////////////////////////
        var _listarDisciplinasPaginada = function (pg) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+pg+"/10"
            });
        };
    ////////////////////////////////////////////////////////////
        var _listarDisciplinas = function () {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/disciplina/list/1/10"
            });
        };
    /////////////////////////////////////////////////////////////
        var _listarDisciplinaPorCurso = function(id){
            return $http({
                method:"GET",
                url:" http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id
            })
        };

        //var _listarAlunoPorIdDisciplina = function(id){
        //    return $http({
        //        method:"GET",
        //        url:" http://siscadcpwiv.herokuapp.com/aluno/"+id
        //    })
        //};
        return {
            salvarDisciplina:_salvarDisciplina,
            listarDisciplinasPaginada:_listarDisciplinasPaginada,
            listarDisciplinaPorCurso:_listarDisciplinaPorCurso,
            listarDisciplinas:_listarDisciplinas,
          //  listarAlunoPorIdDisciplina:_listarAlunoPorIdDisciplina
        }

    });
