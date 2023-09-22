import Login from "../PageObjects/pages/Authentication/Login.js"
import Signup from "../PageObjects/pages/Authentication/Signup.js"

describe('SignupTest', () => {

    const l = new Login()
    const s = new Signup()

    beforeEach("Visit signup/login page", () => {
        s.visit()
    })

    it('Signup', () => {
        l.clickSignup()
        l.inputSignupname()
        l.inputSignupemail()
        l.clickNewsignup()
        s.title()
        s.password()
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
    })
})