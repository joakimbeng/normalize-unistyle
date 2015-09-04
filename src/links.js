const NO_OUTLINE = {
	outline: 0
};

export default {
	/**
	 * Remove the gray background color from active links in IE 10.
	 */
	a: {
		'backgroundColor': 'transparent',
		/**
		 * Improve readability of focused elements when they are also in an
		 * active/hover state.
		 */
		':active': NO_OUTLINE,
		':hover': NO_OUTLINE
	}
};
