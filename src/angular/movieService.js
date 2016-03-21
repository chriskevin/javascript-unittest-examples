(() => {
    'use strict';

    angular
        .module('ckUnitTest')
            .factory('movieService', MovieService);

    MovieService.$inject = ['$http', 'actorService'];

    function MovieService($http, actorService) {
        const service = {
            getMovies
        };
        return service;

        function getMovies() {
            $http.post('/getMovies')
                .success(data => {

                })
                .error((data, status) => {

                });
        }

    }

})();
