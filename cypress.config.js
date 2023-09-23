const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
	viewportWidth: 1550,
	viewportHeight: 800,
	defaultCommandTimeout: 10000,
	watchForFileChanges: false,
	e2e: {
		baseUrl: "https://automationexercise.com/",
		"experimentalRunAllSpecs": true,
		setupNodeEvents(on, config) {
			config.password = process.env.PASSWORD
			return config
		},
	},
})