// Create a describe for the object with the methods and state that you want to test.
// This gives you some encapsulation from the Javascript global scope and is a good place
// to put "use strict" or variables that should be accessible for all tests.
describe('movieGenreFilter', () => {
    'use strict';

    // Define variables that should be accessible for all tests.
    let movieGenreFilter;

    // Define a beforeEach that should be run before all tests.
    beforeEach(() => {

        // Use angular-mocks to instantiate the module programmatically.
        module('ckUnitTest');

        // Use angular mocks to get hold of core services and components registered to the module.
        // Although any services can be injected through the inject functions callback,
        // it is cleaner to request the $injector service and call it's get method.
        inject($injector => {
            // Get the instance of the filter.
            movieGenreFilter = $injector.get('movieGenreFilter');
        });
    });

    // Objects and functions that are small and with less complexity, do not gain much by creating sub describes.
    // It is therefore better to put the tests directly in the main describe.
    it('should return an array only containing movies with matching the genre "Horror"', () => {
        // Arrange
        const movies = [
            {genre: 'Horror'},
            {genre: 'Drama'},
            {genre: 'Horror'}
        ];

        // Act
        const result = movieGenreFilter(movies, 'Horror');

        // Assert
        expect(result.length).toEqual(2);
        expect(result[0].genre).toEqual('Horror');
        expect(result[1].genre).toEqual('Horror');
    });

});
