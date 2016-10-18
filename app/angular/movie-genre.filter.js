import AppComponent from './app.component';

const filterGenre = (movies, genre) => movies.filter(movie => (movie.genre === genre));

// NOTE: A common mistake when registering a filter is to name it e.g. "movieGenreFilter".
// This is wrong since the suffix "Filter" is expected when requesting the filter.
// This would mean that you have to write "movieGenreFilterFilter" to access the filter.
// Therefore only name it "movieGenre" when registering the filter with the .filter() method.
AppComponent.filter('movieGenre', () => filterGenre);

export {filterGenre};
