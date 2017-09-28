'use strict';
module.exports = {
	extends: 'airbnb/base',
	root: true,
	rules: {
		indent: [2, 'tab'],
		// set max line length to a more reasonable number
		'max-len': [2, 120, {
			ignoreComments: true,
			ignoreUrls: true,
			tabWidth: 1,
		}],
	}
};
