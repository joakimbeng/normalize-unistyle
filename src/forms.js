const INPUT_FIELDS = [
	'button',
	'input',
	'optgroup',
	'select',
	'textarea'
];

const BUTTONS = [
	'button',
	'html input[type="button"]',
	'input[type="reset"]',
	'input[type="submit"]'
];

const DISABLEDS = [
	'button[disabled]',
	'html input[disabled]'
];

const CHECKABLES = [
	'input[type="checkbox"]',
	'input[type="radio"]'
];

export default {
	[INPUT_FIELDS]: {
		/* Correct color not being inherited. Known issue: affects color of disabled elements. */
		color: 'inherit',
		/* Correct font properties not being inherited. */
		font: 'inherit',
		/* Address margins set differently in Firefox 4+, Safari, and Chrome. */
		margin: 0
	},

	/**
	 * Address `overflow` set to `hidden` in IE 8/9/10/11.
	 */
	'button': {
		overflow: 'visible'
	},

	/**
	 * Address inconsistent `text-transform` inheritance for `button` and `select`.
	 * All other form control elements do not inherit `text-transform` values.
	 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
	 * Correct `select` style inheritance in Firefox.
	 */
	'button, select': {
		textTransform: 'none'
	},

	/* Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio` and `video` controls. */
	[BUTTONS]: {
		/* Correct inability to style clickable `input` types in iOS. */
		WebkitAppearance: 'button',
		/* Improve usability and consistency of cursor style between image-type `input` and others. */
		cursor: 'pointer'
	},

	/**
	 * Re-set default cursor for disabled elements.
	 */
	[DISABLEDS]: {
		cursor: 'default'
	},

	/**
	 * Remove inner padding and border in Firefox 4+.
	 */
	'button::-moz-focus-inner, input::-moz-focus-inner': {
		border: 0,
		padding: 0
	},

	/**
	 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
	 * the UA stylesheet.
	 */
	'input': {
		lineHeight: 'normal'
	},

	/**
	 * It's recommended that you don't attempt to style these elements.
	 * Firefox's implementation doesn't respect box-sizing, padding, or width.
	 */
	[CHECKABLES]: {
		/* Address box sizing set to `content-box` in IE 8/9/10. */
		boxSizing: 'border-box',
		/* Remove excess padding in IE 8/9/10. */
		padding: 0
	},

	/**
	 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
	 * `font-size` values of the `input`, it causes the cursor style of the
	 * decrement button to change from `default` to `text`.
	 */
	[['inner', 'outer'].map(type => `input[type="number"]::-webkit-${type}-spin-button`)]: {
		height: 'auto'
	},

	'input[type="search"]': {
		/* Address `appearance` set to `searchfield` in Safari and Chrome. */
		WebkitAppearance: 'textfield',
		/* Address `box-sizing` set to `border-box` in Safari and Chrome. */
		boxSizing: 'content-box'
	},

	/**
	 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
	 * Safari (but not Chrome) clips the cancel button when the search input has
	 * padding (and `textfield` appearance).
	 */
	[['cancel-button', 'decoration'].map(type => `input[type="search"]::-webkit-search-${type}`)]: {
		WebkitAppearance: 'none'
	},

	/**
	 * Define consistent border, margin, and padding.
	 */
	'fieldset': {
		border: '1px solid #c0c0c0',
		margin: '0 2px',
		padding: '0.35em 0.625em 0.75em'
	},

	'legend': {
		/* Correct `color` not being inherited in IE 8/9/10/11. */
		border: 0,
		/* Remove padding so people aren't caught out if they zero out fieldsets. */
		padding: 0
	},

	/**
	 * Remove default vertical scrollbar in IE 8/9/10/11.
	 */
	'textarea': {
		overflow: 'auto'
	},

	/**
	 * Don't inherit the `font-weight` (applied by a rule above).
	 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
	 */
	'optgroup': {
		fontWeight: 'bold'
	}
};
