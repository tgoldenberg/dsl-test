const _ = require('lodash');
/**
 * Execute and return interestIds given the passed ast
 *
 * @param {DslNode} ast - The root ast to execute
 * @param {DslNode.id[]} interestIds - List of interested ids
 * @returns {Object<DslNode.id, *>} - Result map of id -> value
 */

function runFunction(operator, args, bindings) {
	let opFunction = bindings[operator];
	if (typeof opFunction === 'function') {
		try {
			let res = opFunction(args[0], args[1])
			return res;
		} catch (e) {
			return 0;
		}
	}
	return 0;
}
/* { id: 26, shape: 'Function', callee: { id: 23, shape: 'Identifier', name: '+' }, args: [
	{ id: 24, shape: 'Literal', value: 10 },
	{ id: 25, shape: 'Literal', value: 20 }
]}
*/
function getValue(node, bindings) {
	switch (node.shape) {
		case 'Identifier':
			return bindings[node.name];
			break;
		case 'Literal':
			return node.value;
			break;
		case 'Function':
			return runFunction(node.callee.name, node.args.map(n => getValue(n, bindings)), bindings);
			break;
		case 'Assignment':
			bindings[node.name] = getValue(node.value, bindings);
			return bindings[node.name];
			break;
		case 'Array':
			let arrResult = [];
			node.nodes.forEach(node => {
				arrResult.push(getValue(node, bindings));
			});
			return arrResult;
			break;
		case 'Block':
			let newBindings = Object.assign({}, bindings, node.bindings);
			let blockResult = null;
			node.nodes.forEach(node => {
				blockResult = getValue(node, newBindings);
			});
			return blockResult;
			break;
	}
}

export const run = (ast, interestIds) => {
	let result = {};
	let bindings = ast.bindings;
	for (let i = 0; i < ast.nodes.length; i++) {
		const node = ast.nodes[i];
		const { shape, id } = node;
		let value = getValue(node, bindings);
		if (_.includes(interestIds, id)) {
			// types: Assignment, Function, Literal, Block, Array, Identifier
			result[id] = value;
		}
	}
	return result;
};
