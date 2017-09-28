/**
 * Execute and return interestIds given the passed ast
 *
 * @param {DslNode} ast - The root ast to execute
 * @param {DslNode.id[]} interestIds - List of interested ids
 * @returns {Object<DslNode.id, *>} - Result map of id -> value
 */
export const run = (ast, interestIds) => {
	console.debug('@todo: optimize and execute', { ast, interestIds });
	return {
		// @todo: fill this object with interestId -> value
	};
};
