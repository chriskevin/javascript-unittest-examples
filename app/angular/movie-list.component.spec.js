import './movie-list.component';

// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('movieListComponent', () => {

    // Define variables that should be accessible for all tests.
    let movieListComponent;
    let mockMovieService;
    let $q;
    let $scope;

    // Define a beforeEach that should be run before all tests.
    beforeEach(() => {
        mockMovieService = jasmine.createSpyObj('MovieService', ['getMovies']);

        // Use angular-mocks to instantiate the module programmatically.
        angular.mock.module('ckUnitTest');

        angular.mock.module($provide => {
            $provide.factory('movieService', () => mockMovieService);
        });

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        angular.mock.inject($injector => {
            // Request the rootScope and create a child scope.
            $scope = ($injector.get('$rootScope')).$new();

            $q = $injector.get('$q');

            // Request the $componentController service used to instantiate the controller.
            const $componentController = $injector.get('$componentController');

            // Create an instance of the component controller to test.
            movieListComponent = $componentController('movieList',
                {$scope},
                {}
            );
        });
    });

    // Create a describe for every method or for e.g. init state and event handlers.
    // This gives you an encapsulated scope to define variables that should apply for each test
    // but only for each specific method.
    // Using this approach you can more easily refactor redundant arrangements and keep your test code clean.
    describe('#getMovies', () => {

        it('should call movieService.getMovies once', () => {
            // Arrange
            mockMovieService.getMovies.and.returnValue($q.reject());

            // Act
            movieListComponent.getMovies();

            // Assert
            expect(mockMovieService.getMovies).toHaveBeenCalled();
            expect(mockMovieService.getMovies.calls.count()).toEqual(1);
        });

        it('should set the fetched movies to the controller scope', done => {
            // Arrange
            const movies = [
                {
                    title: 'Dunwich Horror, The'
                },
                {
                    title: 'Hills Have Eyes, The'
                }
            ];
            mockMovieService.getMovies.and.returnValue($q.resolve(movies));

            // Act
            movieListComponent.getMovies();
            $scope.$apply();

            // Assert
            expect(movieListComponent.movies).toEqual(movies);
            done();
        });

        it('should set the controllers error property to the returned error message', done => {
            // Arrange
            const error = {
                message: 'No movies are currently available.'
            };
            mockMovieService.getMovies.and.returnValue($q.reject(error));

            // Act
            movieListComponent.getMovies();
            $scope.$apply();

            // Assert
            expect(movieListComponent.error).toEqual(error.message);
            done();
        });

    });

});
