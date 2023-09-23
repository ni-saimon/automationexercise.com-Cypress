import Login from "../PageObjects/pages/Authentication/Login.js"
import Signup from "../PageObjects/pages/Authentication/Signup.js"

describe('SignupTest', () => {

    const l = new Login()
    const s = new Signup()

    beforeEach("Visit signup/login page", () => {
        s.visit()
    })

    it('Signup', () => {
        //const pass = Cypress.env('password')
        const pass = "12345678"
        const userName = "test1234123"
        const userEmail = "test1234123@email.com"
        l.clickSignup()
        l.inputSignupname(userName)
        l.inputSignupemail(userEmail)
        l.clickNewsignup()
        s.title()
        s.password(pass)
        s.day()
        s.month()
        s.year()
        s.receivenewsletter()
        s.specialofferoptin()
        s.firstname()
        s.lastname()
        s.company()
        s.address()
        s.address2()
        s.country()
        s.city()
        s.state()
        s.zipcode()
        s.mobile()
        s.createaccount()
        s.accountcreatedconfirmation()
        cy.wait(2000)
        cy.logout()
    })
})