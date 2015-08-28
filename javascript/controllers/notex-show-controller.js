/**
 * Created by castillosa on 28/08/15.
 */
angular.module('notas')
.controller('NotesShowController',function($http,$routeParams){
        var controller = this;

        $http({method: 'GET',url:'/notes/'+$routeParams.id})
            .success(function(data){
                controller.note = data;
            })

    });