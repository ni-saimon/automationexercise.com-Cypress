class Login{

    signupBtn = '.shop-menu > .nav > :nth-child(4) > a'
    signupnameInput = '[data-qa="signup-name"]'
    signupemailInput = '[data-qa="signup-email"]'
    newsignupBtn = '[data-qa="signup-button"]'
    loginemailInput = '[data-qa="login-email"]'
    loginpasswordInput = '[data-qa="login-password"]'
    loginBtn = '[data-qa="login-button"]'
    invalidloginMsg = '.login-form > form > p'

    constructor(){
        this.url = '/login'
    }

    visit(){
        cy.visit(this.url)
    }

    clickSignup(){
        cy.get(this.signupBtn).click()
    }

    inputSignupname(userName){
        cy.get(this.signupnameInput).type(userName)
    }

    inputSignupemail(userEmail){
        cy.get(this.signupemailInput).type(userEmail)
    }

    clickNewsignup(){
        cy.get(this.newsignupBtn).click()
    }

    inputLoginpemail(userEmail){
        cy.get(this.loginemailInput).type(userEmail)
    }

    inputLoginpassword(userpassword){
        cy.get(this.loginpasswordInput).type(userpassword)
    }

    clickLogin(){
        cy.get(this.loginBtn).click()
    }

    invalidLoginmessage(){
        cy.get(this.invalidloginMsg).should('contain', 'Your email or password is incorrect!')
    }
}

export default Login