import HomePage from "../PageObjects/pages/HomePage.js"

describe('HomepageTest', () => {

    const h = new HomePage();

    beforeEach("Visit homepage", () => {
        h.visit()
    })

    it('Verify Homepage', () => {
        h.verifyHomepage()
    })
})