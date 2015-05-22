(function () {
    'use strict';

    angular
        .module('ckUnitTest')
            .factory('movieService', MovieService);

    MovieService.$inject = ['$http', 'actorService'];

    function MovieService($http, actorService) {
        var service = {
            getMovies: getMovies
        };
        return service;


        function getMovies() {
            $http
                .post('/getMovies')
                    .success(function (data) {

                    })
                    .error(function (data, status) {

                    });
        }

    }

})();
