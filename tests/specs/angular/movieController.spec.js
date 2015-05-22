describe('MovieController', function () {
    'use strict';

    // Define variables that should be accessible for all tests.
    var movieController,
        mockMovieService,
        $scope,
        deferred;

    // Define a beforeEach that should be run before all tests.
    beforeEach(function () {
        mockMovieService = jasmine.createSpyObj('MovieService', ['getMovies']);
        deferred = $q.defer();

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject(function ($injector) {
            // Request the rootScope and create a child scope.
            $scope = ($injector.get('$rootScope')).$new();

            // Request the $controller service used to instantiate the controller.
            var $controller = $injector.get('$controller');

            // Create an instance of the controller to test and inject it with mocked dependencies.
            movieController = $controller('movieController', {
                $scope: $scope,
                movieService: mockMovieService
            });
        });
    });


    describe('MovieController.getMovies', function () {

        beforeEach(function () {
            mockMovieService.getMovies.and.returnValue(deferred.promise);
        });

        it('should call movieService.getMovies once', function () {
            // Assemble

            // Act
            movieController.getMovies();

            // Assert
            expect(mockMovieService.getMovies).toHaveBeenCalled();
            expect(mockMovieService.getMovies.calls.count()).toEqual(1);
        });

    });
});