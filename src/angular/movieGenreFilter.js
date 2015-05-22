(function () {
    'use strict';

    // NOTE: A common mistake when registering a filter is to name it e.g. "movieGenreFilter".
    // This is wrong since the suffix "Filter" is expected when requesting the filter.
    // This would mean that you have to write "movieGenreFilterFiter" to access the filter.
    // Therefore only name it "movieGenre" when registering the filter with the .filter() method.
    angular
        .module('ckUnitTest')
            .filter('movieGenre', MovieGenreFilter);

    function MovieGenreFilter() {
        return function(movies, genre) {
            var matchingMovies = [];

            angular
                .forEach(movies, function (movie) {
                    if (movies.genre === genre) {
                        matchingMovies.push(movie);
                    }
                });

            return matchingMovies;
        };
    }

})();
