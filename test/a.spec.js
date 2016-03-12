'use strict';

const sum = require('../src/a');
const assert = require('chai').assert;

describe('ObjA', () => {

	it('should pass a test', () => {
		const t = sum(5, 6);
		assert.equal(t, 11);
	});

	it('should fail a test', () => {
		const t = sum(5, 6);
		assert.equal(t, 11);
	});

});
