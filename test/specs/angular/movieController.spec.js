// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('MovieController', function() {
    'use strict';

    // Define variables that should be accessible for all tests.
    const testSuite = this;

    // Define a beforeEach that should be run before all tests.
    beforeEach(() => {
        testSuite.mockMovieService = jasmine.createSpyObj('MovieService', ['getMovies']);

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject($injector => {
            // Request the rootScope and create a child scope.
            testSuite.$scope = ($injector.get('$rootScope')).$new();

            testSuite.$q = $injector.get('$q');
            testSuite.deferred = testSuite.$q.defer();

            // Request the $controller service used to instantiate the controller.
            const $controller = $injector.get('$controller');

            // Create an instance of the controller to test and inject it with mocked dependencies.
            testSuite.movieController = $controller('movieController', {
                $scope: testSuite.$scope,
                movieService: testSuite.mockMovieService
            });
        });
    });

    // Create a describe for every method or for e.g. init state and event handlers.
    // This gives you an encapsulated scope to define variables that should apply for each test
    // but only for each specific method.
    // Using this approach you can more easily refactor redundant arrangements and keep your test code clean.
    describe('#getMovies', () => {

        // Do common arrangements before each of the method tests
        beforeEach(() => {
            testSuite.mockMovieService.getMovies.and.returnValue(testSuite.deferred.promise);
        });

        it('should call movieService.getMovies once', () => {
            // Arrange

            // Act
            testSuite.movieController.getMovies();

            // Assert
            expect(testSuite.mockMovieService.getMovies).toHaveBeenCalled();
            expect(testSuite.mockMovieService.getMovies.calls.count()).toEqual(1);
        });

    });

});
