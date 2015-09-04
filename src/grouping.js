const MONOSPACED = [
	'code',
	'kbd',
	'pre',
	'samp'
];

export default {
	/**
	 * Address margin not present in IE 8/9 and Safari.
	 */
	figure: {
		margin: '1em 40px'
	},

	/**
	 * Address differences between Firefox and other browsers.
	 */
	hr: {
		boxSizing: 'content-box',
		height: 0
	},

	/**
	 * Contain overflow in all browsers.
	 */
	pre: {
		overflow: 'auto'
	},

	/**
	 * Address odd `em`-unit font size rendering in all browsers.
	 */
	[MONOSPACED]: {
		fontFamily: 'monospace, monospace',
		fontSize: '1em'
	}
};
