import HomePage from "../PageObjects/HomePage.js"

describe('automationexercise.com', () => {
    it.only('HomepageTest', () => {
        cy.visit('https://automationexercise.com/')

        const h = new HomePage();
        h.verifyHomepage()
    })
})