const CELLS = [
	'td',
	'th'
];

export default {
	/**
	 * Remove most spacing between table cells.
	 */
	table: {
		borderCollapse: 'collapse',
		borderSpacing: 0
	},

	[CELLS]: {
		padding: 0
	}
};
