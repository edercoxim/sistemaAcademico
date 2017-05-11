/**
 * Created by EDER on 03/05/2017.
 */

angular.module("TrabalhoCPW4").controller("listaMatriculaController", function ($scope, cursoAPIService, disciplinaAPIService, matriculaAPIService,  $location) {

    $scope.alunoPorPagina = [];
    $scope.alunoPorCurso = [];
    $scope.listaDeTdCursos=[];
    $scope.disciplinaPorIdCurso=[];
    $scope.disciplinaPorIDisciplina=[];
    $scope.alunoPorIdCurso=[];
    $scope.semestreTds=[];
    $scope.alunoPorIdSemestre=[];
    $scope.listaSelecionados=[];




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


    $scope.listarDisciplinaPorCurso = function(id){
        if(id!=null){
            var sucesso =function(dados){
                $scope.disciplinaPorIdCurso= dados.data;//
            };
            var erro = function(err){
                alert("Erro Por Curso"+err);
            };
            disciplinaAPIService.listarDisciplinaPorCurso(id).then(sucesso,erro);
        }else{
            $scope.disciplinaPorIdCurso=[];
        }
    };
        $scope.listarAlunosPorIdCurso = function(id){
                    if(id!=null){
                        var sucessoAluno =function(dados){
                            $scope.alunoPorIdCurso= dados.data;//
                        };
                        var sucessoSemestre =function(dados){
                            $scope.semestreTds= dados.data;//
                        };
                        var erro = function(err){
                            alert("Erro"+err);
            };
            matriculaAPIService.listarAlunosPorIdCurso(id).then(sucessoAluno,erro);
            matriculaAPIService.listarSemestreSelect().then(sucessoSemestre,erro);
        }else{
            $scope.alunoPorIdCurso = [];
        }
    };



    $scope.listarAlunosPorIdSemestre = function(idSem,idDisc){
        if(idSem!=null && idDisc!=null){
            var sucesso =function(dados){
                $scope.alunoPorIdSemestre= dados.data;//
            };
            var erro = function(err){
                alert("Erro"+err);
            };
            matriculaAPIService.listarAlunosPorIdSemestre(idSem,idDisc).then(sucesso,erro);
        }else{
            $scope.alunoPorIdSemestre = [];
        }
    };

    <!---->


    $scope.selected = [];

    $scope.checked = function (aluno) {
        return $scope.selected.indexOf(aluno) > -1;
    }

    $scope.clicked = function (aluno) {
        var idx = $scope.selected.indexOf(aluno);
        if(idx > -1){
            $scope.selected.splice(idx, 1);
        }else{
            $scope.selected.push(aluno);
        }
    }

    $scope.preMatricula = function(){
        $scope.listaSelecionados=[];
        for(var i=0;i<$scope.selected.length;i++){
            $scope.listaSelecionados.push($scope.selected[i]);
        }

    };

    $scope.Enviar = function(idDisc,idSemest){
        $scope.listaDeCadastro=[];
        for(var i=0;i<$scope.listaSelecionados.length;i++){
            var objeto = {};
            objeto.DisciplinaId=idDisc;
            objeto.AlunoId=$scope.listaSelecionados[i].id;
            objeto.SemestreId=idSemest;

            $scope.listaDeCadastro.push(objeto);
        }


        matriculaAPIService.Salvar($scope.listaDeCadastro).then(function(){
            alert("matricula efetuada com sucesso");
            $location.url("/listaMatricula");
        },function(err){
            alert("err");
        });
    }



<!---->
    listarCursosSelect();

});
