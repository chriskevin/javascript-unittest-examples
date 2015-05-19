describe('math', function () {
    'use strict';

    describe('math.add', function () {

        it('should add the given values', function () {
            // Assemble
            var result;

            // Act
            result = add(9, 7);

            // Assert
            expect(result).toEqual(16);
        });

    });
});