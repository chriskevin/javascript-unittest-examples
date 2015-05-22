/* global describe: true */
describe('movieGenreFilter', function () {
    'use strict';

    // Define variables that should be accessible for all tests.
    var movieGenreFilter;

    // Define a beforeEach that should be run before all tests.
    beforeEach(function () {

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject(function ($injector) {
            movieGenreFilter = $injector.get('movieGenreFilter');
        });
    });


    it('should return an array only containing movies with matching the genre "Horror"', function () {
        // Assemble
        var result,
            movies = [
                { genre: 'Horror' },
                { genre: 'Drama' },
                { genre: 'Horror' }
            ];

        // Act
        result = movieGenreFilter(movies, 'Horror');

        // Assert
        expect(result.length).toEqual(2);
        expect(result[0].key).toEqual('Horror');
        expect(result[1].key).toEqual('Horror');
    });
});