import {filterGenre} from './movie-genre.filter';

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
    const result = filterGenre(movies, 'Horror');

    // Assert
    expect(result.length).toEqual(2);
    expect(result[0].genre).toEqual('Horror');
    expect(result[1].genre).toEqual('Horror');
});

it('should register the filter to angular so that it can be retrieved', () => {
    let movieGenreFilter;

    // Use angular-mocks to instantiate the module programmatically.
    angular.mock.module('ckUnitTest');

    // Use angular mocks to get hold of core services and components registered to the module.
    // Although any services can be injected through the inject functions callback,
    // it is cleaner to request the $injector service and call it's get method.
    angular.mock.inject($injector => {
        // Get the instance of the filter.
        movieGenreFilter = $injector.get('movieGenreFilter');
    });
    expect(typeof movieGenreFilter === 'function').toEqual(true);
});
