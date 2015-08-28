/**
 * Created by castillosa on 28/08/15.
 */
angular.module("notas")
.config(function($routeProvider){
        $routeProvider
            .when('/notes',{
                templateUrl:"/templates/pages/notes/index.html",
                controller: 'NotesIndexController',
                controllerAs: 'indexController'
            })
            .when('/notes/:id',{
                templateUrl:"/templates/pages/notes/show.html",
                controller: 'NotesShowController',
                controllerAs: 'showController'
            })

            .when('/users',{
                templateUrl:"/templates/pages/users/index.html"
            })
            .otherwise({
                templateUrl:"/templates/pages/users/index.html"
            })
    });