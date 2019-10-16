module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
    extends: [
        '@nuxtjs',
        'plugin:vue/recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue'
    ],
	// required to lint *.vue files
	plugins: [
        'prettier',
        'vuetify'
	],
	// add your custom rules here
	rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vuetify/no-deprecated-classes': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vuetify/grid-unknown-attributes': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vuetify/no-legacy-grid': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        localStorage: true,
        fetch: true
    }
};
