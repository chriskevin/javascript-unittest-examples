(function () {
    'use strict';

    angular
        .module('ckUnitTest')
            .controller('movieController', MovieController);

    MovieController.$inject = ['movieService'];

    function MovieController(movieService) {
        var vm = this;

        // Public fields
        vm.movies = [];

        // Public methods
        vm.getMovies = getMovies;


        function getMovies() {
            return movieService
                    .getMovies()
                        .then(function (movies) {
                            vm.movies = movies;
                        })
                        .catch(handleError);
        }

        function handleError(reason) {
            vm.error = reason.message;
        }

    }

})();
