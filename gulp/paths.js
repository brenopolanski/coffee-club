'use strict';

module.exports = {
	source: {
		bowerDir: './bower_components',
		files: {
			styl: './src/styl/style.styl',
			css: './public/css/style.css'
		}
	},

	build: {
		js: './public/js',
		css: './public/css',
		img: './public/img',
		fonts: './public/fonts'
	}
};