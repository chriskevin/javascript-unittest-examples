describe('MovieService', function () {
    'use strict';

    // Define variables that should be accessible for all tests.
    var movieService,
        $httpBackend;

    // Define a beforeEach that should be run before all tests.
    beforeEach(function () {

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');

            // Get the instance of the service.
            movieService = $injector.get('movieService');
        });
    });

    // Make sure that the http stream is closed after each test.
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    describe('MovieService.getMovies', function () {

        it('should call movieService.getMovies once', function () {
            // Assemble

            // Act
            movieService.getMovies();

            // Assert
            
        });

    });
 