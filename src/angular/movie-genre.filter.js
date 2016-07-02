import AppComponent from './app.component';

// NOTE: A common mistake when registering a filter is to name it e.g. "movieGenreFilter".
// This is wrong since the suffix "Filter" is expected when requesting the filter.
// This would mean that you have to write "movieGenreFilterFiter" to access the filter.
// Therefore only name it "movieGenre" when registering the filter with the .filter() method.
AppComponent.filter('movieGenre', MovieGenreFilter);

/**
 * [MovieGenreFilter description]
 * @returns {Function} A filter function.
 */
function MovieGenreFilter() {
    return (movies, genre) =>
        movies.filter(movie =>
            (movie.genre === genre));
}

export default MovieGenreFilter;
