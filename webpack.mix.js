let mix = require('laravel-mix')
let tailwind = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/**
 * Predefine paths.
 *
 * @type {string}
 */
const assetsPath = 'public/assets'
const cssPath = `${assetsPath}/css`
const jsPath = `${assetsPath}/js`

/**
 * Predefine paths.
 *
 * @type {string}
 */
const resourceBuildPath = 'resources/assets'
const sassBuildPath = `${resourceBuildPath}/sass`
const jsBuildPath = `${resourceBuildPath}/js`

// Setup chunk file for dynamic importing.
mix.webpackConfig({
	output: {
		publicPath: '/',
		chunkFilename: 'assets/js/chunks/[name].js?[chunkhash]'
	}
})

// Compile tailwindcss.
mix.sass(`${sassBuildPath}/plugins/tailwind.scss`, `${cssPath}/utils.css`)
	.options({
		processCssUrls: false,
		postCss: [tailwind('tailwind.js')]
	})

// Copy font awesome web fonts.
mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/assets/fonts/icons')

/**
 * Customer app bundling.
 */
mix.js(`${jsBuildPath}/app.js`, jsPath)
	.sass(`${sassBuildPath}/app.scss`, cssPath)

/**
 * Admin app bundling.
 */
// mix.js(`${jsBuildPath}/admin/app.js`, `${jsPath}/admin`)
// 	.sass(`${sassBuildPath}/admin/app.scss`, `${cssPath}/admin`)
