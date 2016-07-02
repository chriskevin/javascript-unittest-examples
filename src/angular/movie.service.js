import AppComponent from './app.component';

AppComponent.factory('movieService', MovieService);

MovieService.$inject = ['$http', 'actorService'];

/**
 * [MovieService description]
 * @param {$http} $http        [description]
 * @param {ActorService} actorService [description]
 * @returns {Object} The service API.
 */
function MovieService($http, actorService) {

    const getMovies = () =>
        $http.post('/getMovies')
            .success(data => {
                console.log(data);
            })
            .error((data, status) => {
                console.log(data, status);
            });

    return {
        getMovies
    };
}

export default MovieService;
