/**
 * Created by EDER on 17/04/2017.
 */
angular.module("TrabalhoCPW4").factory("cursoAPIService",
    function($http){
        var _listarCursos = function () {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/curso/list/1/10",
            });
        };
        var _listarCursosPaginada = function (pg) {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/curso/list/"+pg+"/10",
            });
        };
        var _listarCursosSelect = function () {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/curso/list/1/1000",
            });
        };

        var _salvarCurso = function(dados){
            return $http({
                method:"POST",
                url: " http://siscadcpwiv.herokuapp.com/curso/",
                data:dados
            });
        };

        return {
            listarCursosPaginada: _listarCursosPaginada,
            salvarCurso: _salvarCurso,
            listarCursosSelect:_listarCursosSelect,
            listarCursos:_listarCursos
        }
    });
