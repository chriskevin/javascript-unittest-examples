import './movie-list.component';

// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('movieListComponent', function() {

    // Define variables that should be accessible for all tests.
    const testSuite = this;

    // Define a beforeEach that should be run before all tests.
    beforeEach(() => {
        testSuite.mockMovieService = jasmine.createSpyObj('MovieService', ['getMovies']);

        // Use angular-mocks to instantiate the module programmatically.
        angular.mock.module('ckUnitTest');

        angular.mock.module($provide => {
            $provide.factory('movieService', () => testSuite.mockMovieService);
        });

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        angular.mock.inject($injector => {
            // Request the rootScope and create a child scope.
            testSuite.$scope = ($injector.get('$rootScope')).$new();

            testSuite.$q = $injector.get('$q');

            // Request the $componentController service used to instantiate the controller.
            const $componentController = $injector.get('$componentController');

            // Create an instance of the component controller to test.
            testSuite.movieListComponent = $componentController('movieList',
                {$scope: testSuite.$scope},
                {}
            );
        });
    });

    // Create a describe for every method or for e.g. init state and event handlers.
    // This gives you an encapsulated scope to define variables that should apply for each test
    // but only for each specific method.
    // Using this approach you can more easily refactor redundant arrangements and keep your test code clean.
    describe('#getMovies', () => {

        // Do common arrangements before each of the method tests
        beforeEach(() => {
            testSuite.deferred = testSuite.$q.defer();
            testSuite.mockMovieService.getMovies.and.returnValue(testSuite.deferred.promise);
        });

        it('should call movieService.getMovies once', () => {
            // Arrange

            // Act
            testSuite.movieListComponent.getMovies();

            // Assert
            expect(testSuite.mockMovieService.getMovies).toHaveBeenCalled();
            expect(testSuite.mockMovieService.getMovies.calls.count()).toEqual(1);
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

            // Act
            testSuite.movieListComponent.getMovies();
            testSuite.deferred.resolve(movies);
            testSuite.$scope.$apply();

            // Assert
            expect(testSuite.movieListComponent.movies).toEqual(movies);
            done();
        });

        it('should set the controllers error property to the returned error message', done => {
            // Arrange
            const error = {
                message: 'No movies are currently available.'
            };

            // Act
            testSuite.movieListComponent.getMovies();
            testSuite.deferred.reject(error);
            testSuite.$scope.$apply();

            // Assert
            expect(testSuite.movieListComponent.error).toEqual(error.message);
            done();
        });

    });

});
