'use strict';
import fn from '../src/plumber';
import * as chai from 'chai';
const assert = chai.assert;

describe('Plumber', () => {

	// Example Test
	it('does something', () => {
		const actual = fn('a');
		const expected = 'a';
		assert.equals(actual, expected);
	});

});
