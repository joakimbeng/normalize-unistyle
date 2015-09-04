const BLOCK_ELEMENTS = [
	'article',
	'aside',
	'details',
	'figcaption',
	'figure',
	'footer',
	'header',
	'hgroup',
	'main',
	'menu',
	'nav',
	'section',
	'summary'
];

const INLINE_BLOCK_ELEMENTS = [
	'audio',
	'canvas',
	'progress',
	'video'
];

const HIDDEN = [
	'audio:not([controls])',
	'[hidden]',
	'template'
];

export default {
	/* Correct `block` display not defined for any HTML5 element. */
	[BLOCK_ELEMENTS]: {
		display: 'block'
	},
	/* Correct `inline-block` display not defined in IE 8/9. */
	[INLINE_BLOCK_ELEMENTS]: {
		display: 'inline-block'
	},
	/* Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera. */
	'progress': {
		verticalAlign: 'baseline'
	},
	/**
	 * Prevent modern browsers from displaying `audio` without controls.
	 * Address `[hidden]` styling not present in IE 8/9/10.
	 * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
	 */
	[HIDDEN]: {
		display: 'none'
	},
	/* Remove excess height in iOS 5 devices. */
	'audio:not([controls])': {
		height: 0
	}
};
