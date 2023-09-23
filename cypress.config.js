const { defineConfig } = require('cypress')
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
	viewportWidth: 1550,
	viewportHeight: 800,
	defaultCommandTimeout: 10000,
	watchForFileChanges: false,
	e2e: {
		baseUrl: "https://automationexercise.com/",
		"experimentalRunAllSpecs": true,
		setupNodeEvents(on, config) {
			on('task', { removeDirectory })
		},
	},
})