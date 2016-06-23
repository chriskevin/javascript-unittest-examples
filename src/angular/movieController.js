(() => {
    'use strict';

    angular
        .module('ckUnitTest')
            .controller('movieController', MovieController);

    MovieController.$inject = ['movieService'];

    /**
     * [MovieController description]
     * @param {MovieService} movieService [description]
     */
    function MovieController(movieService) {
        const vm = this;

        // Public fields
        vm.movies = [];

        // Public methods
        vm.getMovies = () =>
            movieService
                .getMovies()
                    .then(movies => {
                        vm.movies = movies;
                    })
                    .catch(reason => {
                        vm.error = reason.message;
                    });

    }

})();
