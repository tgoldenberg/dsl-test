'use strict';

/**
 * @typedef {Object} Node
 * @property {String} id
 * @property {String} type - one of 'Data', 'Filter' or 'Join'
 */

/**
 * @typedef {Object} Data
 * @extends Node
 */

/**
 * @typedef {Object} Filter
 * @extends Node
 * @property {String} parent - parent's id
 */

/**
 * @typedef {Object} Join
 * @extends Node
 * @property {String} left - left parent's id
 * @property {String} right - right parent's id
 */

/**
 * @typedef {Node[]} Graph - an array of `Node`s
 */


/**
 * Example module function
 * Returns the string you give
 * @param {String} a
 * @returns {String}
 */
export default function (a){
	return a;
}