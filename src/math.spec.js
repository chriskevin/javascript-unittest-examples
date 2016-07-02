import add from './math';

describe('math', () => {

    describe('math.add', () => {

        it('should add the given values', () => {
            // Act
            const result = add(9, 7);

            // Assert
            expect(result).toEqual(16);
        });

    });
});
