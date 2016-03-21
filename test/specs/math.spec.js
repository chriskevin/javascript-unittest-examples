describe('math', () => {
    'use strict';

    describe('math.add', () => {

        it('should add the given values', () => {
            // Assemble
            let result;

            // Act
            result = add(9, 7);

            // Assert
            expect(result).toEqual(16);
        });

    });
});
