// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('MovieController', function () {
    'use strict';

    // Define variables that should be accessible for all tests.
    var movieController,
        mockMovieService,
        $scope,
        $q,
        deferred;


    // Define a beforeEach that should be run before all tests.
    beforeEach(function () {
        mockMovieService = jasmine.createSpyObj('MovieService', ['getMovies']);

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject(function ($injector) {
            // Request the rootScope and create a child scope.
            $scope = ($injector.get('$rootScope')).$new();

            $q = $injector.get('$q');
            deferred = $q.defer();

            // Request the $controller service used to instantiate the controller.
            var $controller = $injector.get('$controller');

            // Create an instance of the controller to test and inject it with mocked dependencies.
            movieController = $controller('movieController', {
                $scope: $scope,
                movieService: mockMovieService
            });
        });
    });


    // Create a describe for every method or for e.g. init state and event handlers.
    // This gives you an encapsulated scope to define variables that should apply for each test
    // but only for each specific method.
    // Using this approach you can more easily refactor redundant arrangements and keep your test code clean.
    describe('#getMovies', function () {

        // Do common arrangements before each of the method tests
        beforeEach(function () {
            mockMovieService.getMovies.and.returnValue(deferred.promise);
        });

        it('should call movieService.getMovies once', function () {
            // Arrange

            // Act
            movieController.getMovies();

            // Assert
            expect(mockMovieService.getMovies).toHaveBeenCalled();
            expect(mockMovieService.getMovies.calls.count()).toEqual(1);
        });

    });


});
