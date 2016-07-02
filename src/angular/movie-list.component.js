import AppComponent from './app.component';

MovieListCtrl.$inject = ['movieService'];

/**
 * [MovieController description]
 * @param {MovieService} movieService [description]
 */
function MovieListCtrl(movieService) {
    const ctrl = this;

    // Public fields
    ctrl.movies = [];

    // Public methods
    ctrl.getMovies = () =>
        movieService.getMovies()
            .then(movies => {
                ctrl.movies = movies;
            })
            .catch(reason => {
                ctrl.error = reason.message;
            });

}

AppComponent.component('movieList', {
    bindings: {},
    controller: MovieListCtrl,
    template: `
        <ul>
            <li data-ng-repeat="movie in $ctrl.movies">{{movie.title}}</li>
        </ul>
    `
});

export default MovieListCtrl;
