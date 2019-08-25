import AppComponent from './app.component';

/**
 * [MovieController description]
 * @param {MovieService} movieService [description]
 */
function controller(movieService) {
    const ctrl = this; // eslint-disable-line no-invalid-this

    // Public fields
    ctrl.movies = [];

    // Public methods
    ctrl.getMovies = () =>
        movieService.getMovies()
            .then((movies) => {
                ctrl.movies = movies;
            })
            .catch((reason) => {
                ctrl.error = reason.message;
            });

}
controller.$inject = ['movieService'];

AppComponent.component('movieList', {
    bindings: {},
    controller,
    template: `
        <ul>
            <li data-ng-repeat="movie in $ctrl.movies">{{movie.title}}</li>
        </ul>
    `,
});

export default controller;
