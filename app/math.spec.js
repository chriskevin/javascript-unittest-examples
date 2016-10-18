import test from 'tape';
import {add} from './math';

test('Adding two numbers should produce a sum', ({equal, end}) => {
    equal(add(9, 7), 16, 'The addition is not correct');
    end();
});
