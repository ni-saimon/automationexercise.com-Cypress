class Login{

    signupBtn = '.shop-menu > .nav > :nth-child(4) > a'
    newsignupBtn = '[data-qa="signup-button"]'
    signupnameInput = '[data-qa="signup-name"]'
    signupemailInput = '[data-qa="signup-email"]'
    userName = "test123436"
    userEmail = "test123436@email.com"

    constructor(){
        this.url = '/login'
    }

    visit(){
        cy.visit(this.url)
    }

    clickSignup(){
        cy.get(this.signupBtn).click()
    }

    inputSignupname(){
        cy.get(this.signupnameInput).type(this.userName)
    }

    inputSignupemail(){
        cy.get(this.signupemailInput).type(this.userEmail)
    }

    clickNewsignup(){
        cy.get(this.newsignupBtn).click()
    }
}

export default Login