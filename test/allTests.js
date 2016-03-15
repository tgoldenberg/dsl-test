'use strict';

/* global require */
const testRequire = require.context('./', true, /\.spec\.js$/);

// Require everything
testRequire.keys().map(testRequire);
