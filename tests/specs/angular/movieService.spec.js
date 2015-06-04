// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('MovieService', function () {
    'use strict';

    // Define variables that should be accessible for all tests.
    var movieService,
        $httpBackend,
        mockActorService,
        movies = [
            {
                title: 'Dunwich Horror, The'
            },
            {
                title: 'Hills Have Eyes, The'
            }
        ];

    // Define a beforeEach that should be run before all tests.
    beforeEach(function () {
        // Create spies for all dependencies.
        mockActorService = jasmine.createSpyObj('actorService', ['getActorBiography']);

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Override factory provider for dependencies and return spyable mocks.
        module(function ($provide) {
            $provide.factory('actorService', function () {
                return mockActorService;
            });
        });

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');

            // Define default responses for each http call.
            $httpBackend
                .whenPOST('/getMovies')
                    .respond(movies);

            // Get the instance of the service.
            movieService = $injector.get('movieService');
        });
    });

    // Make sure that the http stream is closed after each test.
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    // Create a describe for every method or for e.g. init state and event handlers.
    // This gives you an encapsulated scope to define variables that should apply for each test
    // but only for each specific method.
    // Using this approach you can more easily refactor redundant arrangements and keep your test code clean.
    describe('MovieService.getMovies', function () {

        it('should call movieService.getMovies once', function () {
            // Arrange

            // Act
            movieService.getMovies();

            // Assert
            
        });

    });
 