const { defineConfig } = require('cypress')

console.log(defineConfig, 'defineConfig')
module.exports = defineConfig({
	viewportWidth: 1550,
	viewportHeight: 800,
	defaultCommandTimeout: 10000,
	watchForFileChanges: false,
	hideXHRInCommandLog: true,
	e2e: {
		setupNodeEvents(on, config) {

		},
	},
})