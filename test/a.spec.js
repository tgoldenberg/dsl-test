'use strict';

var sum  = require('../src/a');
var assert = require('chai').assert;

describe('ObjA', function() {

	it('should pass a test', function(){
		var t = sum(5, 6);
		assert.equal(t, 11);
	});

});
