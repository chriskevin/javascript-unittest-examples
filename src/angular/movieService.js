(function () {
    'use strict';

    angular
        .module('ckUnitTest')
            .factory('movieService', MovieService);

    MovieService.$inject = ['$http'];

    function MovieService($http) {
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
