/**
 * Created by EDER on 04/05/2017.
 */

angular.module("TrabalhoCPW4").factory("matriculaAPIService",
    function($http){

        var _listarAlunosPorIdCurso = function(id){//na verdade tem que ser IdCurso
            return $http({
                method:"GET",
                url:" http://siscadcpwiv.herokuapp.com/aluno/curso/"+id
            })
        };

        var _listarSemestreSelect = function () {
            return $http({
                method: "GET",
                url: "http://siscadcpwiv.herokuapp.com/semestre/list/"
            });
        };

        var _listarAlunosPorIdSemestre = function(idSem,idDisc){
            return $http({
                method:"GET",
                url:"http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/"+idSem+"/"+idDisc

            });
        };

        var _Salvar = function(dados){
            return $http({
                method:"POST",
                url: "http://siscadcpwiv.herokuapp.com/matricula/",
                data:dados
            });
        };


        return {


            listarAlunosPorIdCurso:_listarAlunosPorIdCurso,
            listarSemestreSelect:_listarSemestreSelect,
            listarAlunosPorIdSemestre:_listarAlunosPorIdSemestre,
            Salvar:_Salvar
        }
});
