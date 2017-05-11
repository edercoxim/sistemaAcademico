/**
 * Created by EDER on 03/04/2017.
 */
angular.module("TrabalhoCPW4")
    .config(["$routeProvider",function($routeProvider){

        $routeProvider.when("/", {
            templateUrl: "view/home.html"

        });

        $routeProvider.when("/listagemCurso", {
            templateUrl: "view/listagem/listagemCurso.html",
            controller: "listaCursoController"

        });
        $routeProvider.when("/listagemDisciplina", {
            templateUrl: "view/listagem/listagemDisciplina.html",
            controller: "listaDisciplinaController"

        });
        $routeProvider.when("/listagemAluno", {
            templateUrl: "view/listagem/listagemAluno.html",
            controller: "listaAlunoController"

        });

        $routeProvider.when("/cadastroAluno", {
            templateUrl: "view/cadastro/cadastroAluno.html",
            controller: "cadastroAlunoController"

        });
        $routeProvider.when("/cadastroDisciplina", {
            templateUrl: "view/cadastro/cadastroDisciplina.html",
            controller: "cadastroDisciplinaController"

        });
        $routeProvider.when("/cadastroCurso", {
            templateUrl: "view/cadastro/cadastroCurso.html",
            controller: "cadastroCursoController"

        });
        $routeProvider.when("/matricula", {
            templateUrl: "view/listagem/listaMatricula.html",
            controller: "listaMatriculaController"

        });

    }]);