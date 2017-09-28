// Global ID counter for unique ids
let ctr = 0;

export const NodeShape = {
	Array: 'Array',
	Assignment: 'Assignment',
	Block: 'Block',
	Function: 'Function',
	Identifier: 'Identifier',
	Literal: 'Literal',
};

/**
 * The base shape of a node in the AST
 *
 * @typedef {Object} DslNode
 * @property {String} id
 * @property {NodeShape} shape
 */

/**
 * An array of DslNodes that can be executed.
 *
 * @typedef {DslNode} ArrayNode
 * @property {DslNode[]} nodes
 */
export const makeArray = (nodes = []) => ({ id: ctr++, shape: NodeShape.Array, nodes });

/**
 * An assignment of a node result into a name.
 *
 * @typedef {DslNode} AssignmentNode
 * @property {String} name
 * @property {DslNode} value
 */
export const makeAssignment = (name, value) => ({ id: ctr++, shape: NodeShape.Assignment, name, value });

/**
 * A block creates a scope and provides static bindings to the scope.
 *
 * Bindings can be referenced by identifiers, and shadowed by assignments.
 *
 * @typedef {DslNode} BlockNode
 * @property {Object<String, Function>} bindings
 * @property {DslNode[]} nodes
 */
export const makeBlock = (bindings = {}, nodes = []) => ({ id: ctr++, shape: NodeShape.Block, bindings, nodes });

/**
 * A executable function call node
 *
 * @typedef {DslNode} FunctionNode
 * @property {DslNode} callee - The node that should resolve to a function
 * @property {DslNode[]} args - The arguments to apply to the callee
 */
export const makeFunction = (callee, args = []) => ({ id: ctr++, shape: NodeShape.Function, callee, args });

/**
 * A literal value node
 *
 * @typedef {DslNode} LiteralNode
 * @property {*} value
 */
export const makeLiteral = (value) => ({ id: ctr++, shape: NodeShape.Literal, value });

/**
 * A reference to either an assignment or binding
 *
 * @typedef {DslNode} IdentifierNode
 * @property {String} name
 */
export const makeIdentifier = (name) => ({ id: ctr++, shape: NodeShape.Identifier, name });


/**
 * A shorthand api to generate dsl nodes
 */
export const dsl = {
	arr: makeArray,
	assign: makeAssignment,
	block: makeBlock,
	fn: makeFunction,
	id: makeIdentifier,
	lit: makeLiteral,
};
