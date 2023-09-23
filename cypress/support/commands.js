const path = require("path");
require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('logout', () => {
	cy.get('.nav > :nth-child(4) > a').click()
	cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
})

Cypress.on('window:console', (message) => {
    if (message.type === 'xhr') {
      return false;
    }
})

Cypress.Commands.add('compareTwoElements', (elem1, elem2) => {
    let elem1Text, elem2Text
    cy.get(elem1).invoke('text').then((text1) => {
        elem1Text = text1
    })
    cy.get(elem2).invoke('text').then((text2) => {
        elem2Text = text2
        expect(elem1Text).to.contain(elem2Text)
    })
})

Cypress.Commands.add('verifydownloadedfile', (filename) => {
	const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, filename)).should("exist");
})