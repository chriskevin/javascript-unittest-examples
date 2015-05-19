describe('filterNoDependencies', function () {
    'use strict';

    var filterNoDependencies;

    beforeEach(function () {
        module('ckUnitTest');
        inject(function ($injector) {
            filterNoDependencies = $injector.get('filterNoDependenciesFilter');
        });
    });


    it('should return an array only containing objects with key matching "FOO_KEY"', function () {
        // Assemble
        var result,
            items = [
                { key: 'FOO_KEY' },
                { key: 'BAR_KEY' },
                { key: 'FOO_KEY' }
            ];

        // Act
        result = filterNoDependencies(items);

        // Assert
        expect(result.length).toEqual(2);
        expect(result[0].key).toEqual('FOO_KEY');
        expect(result[1].key).toEqual('FOO_KEY');
    });
});