/**
 * Created by castillosa on 28/08/15.
 */
angular.module('notas')
.controller('NotesIndexController',function(){
        var controller = this;

        $http({method: 'GET',url:'/notes'})
            .success(function(data){
                controller.notes = data;
            })

    });